import { Formik } from 'formik';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { AddBoatSchema } from '../auth/Schema';
import ErrorMessage from '../components/ErrorMessage';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';
import { pipViewDate4 } from '../auth/Pip';

// MVP1 Ventures - Start
import { addBoatDetails, getBoatDataByRegNo, onInviteUser, sendOtpToGetBoatHubVessel, validateBoatHubOTP } from '../redux/actions/staffActions';
import { message as toast } from "antd";
// MVP1 Ventures - End


const CreateBoat = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading1, all_boats } = useSelector((state) => state?.staffReducer);
    const [isToggle, setIsToggle] = useState(false);
    const [avatar_url, setAvtarUrl] = useState();
    const [avatar_urlError, setAvtarUrlError] = useState();

    // MVP1 Ventures - Start
    const formikRef = useRef(null);

    const [isImageURL, setIsImageURL] = useState(false);
    const [boatData, setBoatData] = useState();
    const [isOtpGenerating, setIsOtpGenerating] = useState(false);
    const [isOtpVerifying, setIsOtpVerifying] = useState(false);

    const [regNoVal, setRegNoVal] = useState();

    const [isOtpVerified, setIsOtpVerified] = useState();
    const [isBoatHubRego, setIsBoatHubRego] = useState();

    const [userEnteredRego, setUserEnteredRego] = useState();
    const [prevSearchedRegNo, setPrevSearchedRegNo] = useState();

    const [modalState, setModalState] = useState('initial');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [otpError, setOtpError] = useState(false);

    const inputRefs = useRef([
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef()
    ]);
    // MVP1 Ventures - End

    const initialState = {
        vin: '',
        name: '',
        make: '',
        rego: '',
        model: '',
        email: '',
        length: '',
        book_to: '',
        app_date: new Date(),
        phone_no: '',
        engine_no: '',
        book_from: '',
        engine_make: '',
        owners_name: '',
        engine_model: '',
        docking_date: '',
        boat_type: ''
    };


    // MVP1 Ventures - Start

    // Custom onBlur handler
    const handleCustomBlur = (handleBlur, customMethod) => (e) => {
        handleBlur(e);

        if (e.target.value) {
            customMethod(e);
            setIsOtpVerified(false);
        }
    };

    // Your custom method
    const customMethod = (e) => {
        const regNoVal = e.target.value;
        setRegNoVal(regNoVal);  // Save searched regNo text

        // If last patched regNo is same then not search same patched data
        if (userEnteredRego === regNoVal) {
            return;
        }

        setModalState('initial');
        setOtp(['', '', '', '']);
        setUserEnteredRego(regNoVal);

        const callback = (response) => {
            if (response && (response?.status === 200)) {
                setIsBoatHubRego(true);
                document.getElementById("patchValuesBtn").click();
            } else {
                setIsBoatHubRego(false);
            }
        };

        dispatch(getBoatDataByRegNo({ regNo: regNoVal, callback }));
    };


    const onGenerateOTP = () => {
        const userData = localStorage.getItem('m_user_data');
        let userID = '';

        if (userData) {
            const userJSON = JSON.parse(userData);
            userID = userJSON?.id;
        }

        const callback = (response) => {
            setIsOtpGenerating(false);

            if (response && response?.status === 200) {
                setModalState('otp');

                // Reset OTP to empty array
                setOtp(['', '', '', '']);

                // Focus on first input when OTP modal opens
                setTimeout(() => {
                    inputRefs.current[0].current?.focus();
                }, 100);
            }
        }

        setIsOtpGenerating(true);
        dispatch(sendOtpToGetBoatHubVessel({ regNo: formikRef.current.values.rego?.trim(), userId: userID, callback }));
    };

    const handleOtpChange = (index, value) => {
        // Only allow numeric input
        if (/^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Auto focus to next input if value is entered
            if (value && index < 3) {
                inputRefs.current[index + 1].current?.focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace to move to previous input
        if (e.key === 'Backspace' && index > 0) {
            // If current input is empty, move to previous input
            if (otp[index] === '') {
                // Focus on previous input
                inputRefs.current[index - 1].current?.focus();

                // Clear the previous input
                const newOtp = [...otp];
                newOtp[index - 1] = '';
                setOtp(newOtp);
            }
        }
    };

    const handleVerifyOTP = () => {
        const enteredOTP = otp.join('');

        // Validation
        if (enteredOTP.length === 4) {
            console.log('OTP Verified:', enteredOTP);
            validateOTP(enteredOTP);
            setOtpError(false);
        } else {
            setOtpError(true);
            setTimeout(() => setOtpError(false), 500);
        }
    };

    const validateOTP = (otp) => {
        const userData = localStorage.getItem('m_user_data');
        let userID = '';

        if (userData) {
            const userJSON = JSON.parse(userData);
            userID = userJSON?.id;
        }

        const callback = (response) => {
            if (response && (response?.status === 200) && response?.id) {
                const data = response.acf;
                setBoatData(data);
                onPatchValues(data);
                setIsOtpVerified(true);

            } else {
                setIsOtpVerifying(false);

                if (response?.errorCode === 400) {
                    setOtpError(true);
                    setTimeout(() => setOtpError(false), 500);
                    toast.error(response?.message);
                }
            }
        };

        setIsOtpVerifying(true);
        dispatch(validateBoatHubOTP({
            regNo: formikRef.current.values.rego?.trim(),
            userId: userID,
            code: otp,
            callback
        }));
    }

    const onPatchValues = (boatData) => {
        const data = boatData;
        let boatType = '';
        setPrevSearchedRegNo(regNoVal);  // If values patch then only save searched regNo

        if (data.boatType === 'TrailerBoat') {
            boatType = 'Trailer Boat';
        } else if (data.boatType === 'Yacht') {
            boatType = 'Yacht';
        } else if (data.boatType === 'JetSki') {
            boatType = 'Jetski';
        } else {
            boatType = data.boatType;
        }

        if (formikRef.current) {
            formikRef.current.setValues({
                ...formikRef.current.values,
                boat_type: boatType,
                owners_name: data.boatOwnersName,
                name: data.boatName,
                make: data.make,
                model: data.model,
                noofEngines: data.noofEngines,
                engine_make: data.boatEngine,
                engine_model: data.engineModel,
                email: data.ownerEmail,
                phone_no: data.ownerPhone,
            });

            setTimeout(() => {
                formikRef.current.setTouched({
                    ...formikRef.current.touched,
                    owners_name: true,
                    email: true,
                    phone_no: true,
                    rego: true,
                    name: true,
                    vin: true,
                    make: true,
                    model: true,
                    engine_no: true,
                    engine_make: true,
                    engine_model: true,
                    length: true,
                    docking_date: true,
                    book_from: true,
                    book_to: true,
                });

                setIsOtpVerifying(false);
                document.getElementById("patchValuesBtn").click();
            }, 300);
        }
    }

    // MVP1 Ventures - End


    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    const createBoatData = async (values, { setSubmitting }) => {
        setSubmitting(false);
        // Moved commented callback inside if condition (To Invite User by Email after Create Boat)
        // const callback = (response) => {
        //     if (response.success) navigate(pageRoutes.all_boats);
        // };

        if (isBoatHubRego && !isOtpVerified) {
            document.getElementById("patchValuesBtn").click();
            return;
        }

        const callback = (response1) => {
            let isBoathubRego = false;
            // Rego registered on BoatHub
            // Don't Send Invite email to use BoatHub mobile app
            if (response1 && (response1?.status === 200)) {
                isBoathubRego = true;
            }

            // if (avatar_url) {
            const tinyParams = {
                email: values.email?.trim(),
                rego: values.rego?.trim(),
                owners_name: values.owners_name?.trim(),
                id: ''
            }
            const callback = (response) => {
                if (response.success) {
                    tinyParams.id = response?.data?.id;
                    onSaveBoatInviteUserCall(tinyParams, isBoathubRego); // isBoathubRego set from getBoatDataByRegNo API call
                }
            };
            const formData = new FormData();
            formData.append('vin', values.vin ? values.vin?.trim() : null);
            formData.append('name', values.name ? values.name?.trim() : null);
            formData.append('make', values.make ? values.make?.trim() : null);
            formData.append('boat_type', values.boat_type ? values.boat_type : null);
            formData.append('rego', values.rego ? values.rego?.trim() : null);
            formData.append('model', values.model ? values.model?.trim() : null);
            formData.append('email', values.email ? values.email?.trim() : null);
            formData.append('length', values.length ? values.length : null);
            formData.append('book_to', values.book_to ? values.book_to : '');
            formData.append('phone_no', values.phone_no ? values.phone_no : null);
            formData.append('engine_no', values.engine_no ? values.engine_no : null);
            formData.append('book_from', values.book_from ? values.book_from : '');
            formData.append('engine_make', values.engine_make ? values.engine_make.trim() : null);
            formData.append('owners_name', values.owners_name ? values.owners_name.trim() : null);
            formData.append('engine_model', values.engine_model ? values.engine_model.trim() : null);
            formData.append('docking_date', values.docking_date ? values.docking_date : '');
            formData.append('app_date', pipViewDate4(values.app_date));
            // formData.append('avatar_url', avatar_url ? avatar_url : '');
            formData.append('isBoathubRego', isBoathubRego);  // Set this check by getBoatDataByRegNo API call

            dispatch(addBoatDetails({ payload: formData, callback }));
        };

        dispatch(getBoatDataByRegNo({ regNo: regNoVal, callback }));
    };

    // MVP1 Ventures - Start
    const onSaveBoatInviteUserCall = (params, isBoathubRego) => {
        // // Skip invitation OTP if user entered BoatHub rego number
        // if (isBoathubRego) {
        //     navigate(pageRoutes.all_boats);
        //     return;
        // }

        // Check rego is registered on BoatHub while save boat?
        // const callback = (response) => {
        if (isBoathubRego) {
            navigate(pageRoutes.all_boats);

        } else {
            // Rego not registered on BoatHub
            // So Send Invite email to use BoatHub mobile app
            const userData = localStorage.getItem('m_user_data');
            let userID = '';
            let companyName = '';

            if (userData) {
                const userJSON = JSON.parse(userData);
                userID = userJSON?.id;
                companyName = userJSON?.company_name;
            }

            const callback = (response) => {
                navigate(pageRoutes.all_boats);
            };

            const data = {
                email: params?.email,
                registration: params?.rego,
                userId: userID,
                boatId: params?.id,
                companyName: companyName,
                boatOwner: params?.owners_name,
                status: "invited"
            }

            dispatch(onInviteUser({ payload: data, callback }));
        }
        // };

        // dispatch(getBoatDataByRegNo({ regNo: regNoVal, callback }));
    };
    // MVP1 Ventures - End


    const onHandleImageChange = (e) => {
        setIsImageURL(false);  // MVP1 Ventures
        setAvtarUrl(e.target.files[0]);
        setAvtarUrlError();
    };

    if (isLoading1) {
        return <Loader />
    }

    return (
        <div>
            <div className="ct_dashbaord_bg">
                <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                    <Sidebar path="create-boat" />
                    <div className="ct_content_right">
                        <Header onClick={onHandleClick} />
                        <div className="ct_dashbaord_middle">
                            <div className="ct_white_bg_1">
                                <h4 className="ct_fs_24 text-start ct_fw_700 mb-3">
                                    Boat Creation
                                </h4>

                                <Formik
                                    innerRef={formikRef}
                                    initialValues={initialState}
                                    validationSchema={AddBoatSchema}
                                    onSubmit={(values, actions) => {
                                        createBoatData(values, actions);
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit
                                    }) => (
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label for="" className="mb-1">
                                                            <strong>Owner&apos;s Name</strong>
                                                            <span className="ct_required_star">*</span>
                                                        </label>
                                                        <input
                                                            id="owners_name"
                                                            value={values.owners_name}
                                                            onBlur={handleBlur && handleChange}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="owners_name"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1">
                                                            <strong>Email</strong>
                                                            <span className="ct_required_star">*</span>
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            value={values.email}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="email"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1">
                                                            <strong>Phone No.</strong>
                                                            <span className="ct_required_star">*</span>
                                                        </label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="phone_no"
                                                            value={values.phone_no}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            onInput={(e) => { e.target.value = Math.abs(e.target.value) }}
                                                            onWheel={() => document.activeElement.blur()}
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="phone_no"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group mb-3" style={{ position: "relative" }}>
                                                        <label className="mb-1">
                                                            <strong>Rego</strong>
                                                            <span className="ct_required_star">*</span>
                                                        </label>
                                                        <input
                                                            id="rego"
                                                            value={values.rego}
                                                            onBlur={handleCustomBlur(handleBlur, customMethod)}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                        {/* If regNo found in BoatHub and already patched its value */}
                                                        {(
                                                            (values.rego === prevSearchedRegNo)
                                                                ? (
                                                                    <div className="ct_green_check input-icon" style={{ position: "absolute", right: 10, top: 36 }}>
                                                                        <i class="fa fa-check"></i>
                                                                    </div>
                                                                )
                                                                : ''
                                                        )}
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="rego"
                                                        />
                                                    </div>
                                                </div>

                                                <button
                                                    class="d-none hidden"
                                                    id="patchValuesBtn"
                                                    tabindex="-1"
                                                    type="button"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#ct_patchvalues_modal"
                                                >
                                                    Show Modal
                                                </button>

                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1">
                                                            <strong>Boat Name</strong>
                                                            <span className="ct_required_star">*</span>
                                                        </label>
                                                        <input
                                                            id="name"
                                                            value={values.name}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="name"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1">
                                                            <strong>Boat Type</strong>
                                                            <span className="ct_required_star">*</span>
                                                        </label>
                                                        <select
                                                            name="boat_type"
                                                            className="form-control"
                                                            value={values.boat_type}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="">Select Boat Type</option>
                                                            <option value="Trailer Boat">Trailer Boat</option>
                                                            <option value="Yacht">Yacht</option>
                                                            <option value="Jetski">Jetski </option>
                                                        </select>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="boat_type"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1">
                                                            <strong>HIN</strong>
                                                            {/* <span className="ct_required_star">*</span> */}
                                                        </label>
                                                        <input
                                                            id="vin"
                                                            value={values.vin}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                        {/* <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="vin"
                                                        /> */}
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1">
                                                            <strong>Make</strong>
                                                            <span className="ct_required_star">*</span>
                                                        </label>
                                                        <input
                                                            id="make"
                                                            value={values.make}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="make"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1">
                                                            <strong>Model</strong>
                                                            <span className="ct_required_star">*</span>
                                                        </label>
                                                        <input
                                                            id="model"
                                                            value={values.model}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="model"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1">
                                                            <strong>No. Of Engine</strong>
                                                            {/* <span className="ct_required_star">*</span> */}
                                                        </label>
                                                        <input
                                                            id="engine_no"
                                                            value={values.engine_no}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="number"
                                                            onInput={(e) => {
                                                                const value = e.target.value;
                                                                e.target.value = value.replace(/[^0-9]/g, '');
                                                            }}
                                                            onWheel={() => document.activeElement.blur()}
                                                            className="form-control"
                                                        />
                                                        {/* <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="engine_no"
                                                        /> */}
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1">
                                                            <strong>Engine Make</strong>
                                                            {/* <span className="ct_required_star">*</span> */}
                                                        </label>
                                                        <input
                                                            id="engine_make"
                                                            value={values.engine_make}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                        {/* <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="engine_make"
                                                        /> */}
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1">
                                                            <strong>Engine Model</strong>
                                                            {/* <span className="ct_required_star">*</span> */}
                                                        </label>
                                                        <input
                                                            id="engine_model"
                                                            value={values.engine_model}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                        {/* <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="engine_model"
                                                        /> */}
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1">
                                                            <strong>Hull Length (Feet)</strong>
                                                            {/* <span className="ct_required_star">*</span> */}
                                                        </label>
                                                        <input
                                                            id="length"
                                                            onWheel={() => document.activeElement.blur()}
                                                            value={values.length}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="number"
                                                            className="form-control"
                                                        />
                                                        {/* <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="length"
                                                        /> */}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1">
                                                            <strong>Docking Date</strong>
                                                            {/* <span className="ct_required_star">*</span> */}
                                                        </label>
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            onKeyDown={(e) => e.preventDefault()}
                                                            id="docking_date"
                                                            value={values.docking_date}
                                                            min={new Date()?.toISOString()?.split("T")[0]}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                        />
                                                        {/* <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="docking_date"
                                                        /> */}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1">
                                                            <strong>Book From</strong>
                                                            {/* <span className="ct_required_star">*</span> */}
                                                        </label>
                                                        <input
                                                            id="book_from"
                                                            value={values.book_from}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            onKeyDown={(e) => e.preventDefault()}
                                                            type="date"
                                                            min={new Date()?.toISOString()?.split("T")[0]}
                                                            className="form-control"
                                                        />
                                                        {/* <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="book_from"
                                                        /> */}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1">
                                                            <strong>Book To</strong>
                                                            {/* <span className="ct_required_star">*</span> */}
                                                        </label>
                                                        <input
                                                            id="book_to"
                                                            value={values.book_to}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            onKeyDown={(e) => e.preventDefault()}
                                                            type="date"
                                                            min={new Date()?.toISOString()?.split("T")[0]}
                                                            className="form-control"
                                                        />
                                                        {/* <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="book_to"
                                                        /> */}
                                                    </div>
                                                </div>

                                                {/* <div className="col-md-6 mt-4">
                                                    <div className="form-group mb-3">
                                                        <label className="ct_file_upload">
                                                            <input
                                                                type="file"
                                                                id="ct_file_upload1"
                                                                onChange={onHandleImageChange}
                                                                className="d-none"
                                                                accept="image/*"
                                                            />
                                                            <span className='ab_pointer'>
                                                                <i className="fa-solid fa-paperclip"></i> Picture Of Boat&nbsp;
                                                                <span className="ct_required_star">*</span>
                                                            </span>
                                                        </label>
                                                        <div className="ct_boat_dtl_img mt-2 text-center" data-bs-toggle="modal" data-bs-target="#ct_view_image">
                                                            {avatar_url && <img src={isImageURL ? avatar_url : URL.createObjectURL(avatar_url)} alt="" className="ct_uploaded_img" style={{ backgroundColor: "#f5f5f5", padding: "4px" }} />}
                                                        </div>
                                                        {avatar_urlError &&
                                                            <span style={{ color: "red" }}>
                                                                {avatar_urlError}
                                                            </span>
                                                        }
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div className="d-flex align-items-center gap-3 mt-4 ct_flex_wrap_575">
                                                <button type="button" className="ct_outline_btn ct_outline_orange w-100" onClick={() => navigate(pageRoutes.all_boats)}>Cancel</button>
                                                <button type="button" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit w-100" onClick={handleSubmit}>Save And Add Boat</button>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="modal fade Committed_Price" id="ct_view_image" tabindex="-1" aria-labelledby="ct_view_imageLabel" aria-hidden="true" data-bs-backdrop='static' data-bs-keyboard="false">
                    <div className="modal-dialog modal-md modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-2">
                                <div className="pt-4">
                                    <h4 className="mb-4 text-center"><strong>Image Preview </strong></h4>
                                    {avatar_url && <img src={isImageURL ? avatar_url : URL.createObjectURL(avatar_url)} alt="" style={{
                                        height: "356px",
                                        objectFit: "contain"
                                    }} />}
                                </div>
                                <div className="modal-footer justify-content-center border-0 ct_flex_wrap_575 gap-2">
                                    <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>



            {/* <Modal open={isModalOpen} title={null} footer={null} onOk={handleOk} onCancel={handleCancel}> */}

            <div
                className="modal fade ct_assets_modal"
                id="ct_patchvalues_modal"
                tabIndex={-1}
                aria-labelledby="ct_logout_modalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {
                            (modalState === 'initial') ?
                                <>

                                    <div className="modal-header border-0 pt-0">
                                        <button
                                            type="button"
                                            className="btn-close ct_cloose_btn"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <i className="fa-solid fa-xmark" />
                                        </button>
                                    </div>

                                    <div className="modal-body border-0 ">
                                        <h4 className="text-center mb-4 ct_fw_600">
                                            Registration found on Boat Hub
                                        </h4>
                                        <p className="text-center ct_grey_text">
                                            We found this boat in Boat Hub. <br /> Generate and send OTP to the boat owner's phone?
                                        </p>
                                        <div className="modal-footer border-0 justify-content-center">
                                            <button
                                                type="button"
                                                data-bs-dismiss="modal"
                                                className="ct_blue_btn py-2 me-2 h-auto"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => onGenerateOTP()}
                                                disabled={isOtpGenerating}
                                                className="ct_b_red_btn text-white justify-content-center ms-2 py-2 h-auto"
                                                style={{ background: "var(--orange)", borderColor: "var(--orange)" }}
                                            >
                                                Generate OTP
                                            </button>
                                        </div>
                                    </div>
                                </>
                                : <>
                                    <div className="modal-header border-0 pt-0">
                                        <button
                                            type="button"
                                            className="btn-close ct_cloose_btn"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <i className="fa-solid fa-xmark" />
                                        </button>
                                    </div>
                                    <div className="modal-body border-0">
                                        <h4 className="text-center mb-4 ct_fw_600">
                                            Enter OTP
                                        </h4>
                                        <p className="text-center ct_grey_text mb-4">
                                            Please enter the 4-digit OTP sent to the boat owner
                                        </p>
                                        <div className="otp-input-container" style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            marginBottom: '1rem'
                                        }}>
                                            {otp.map((digit, index) => (
                                                <input
                                                    key={index}
                                                    ref={inputRefs.current[index]}
                                                    id={`otp-input-${index}`}
                                                    type="text"
                                                    maxLength={1}
                                                    value={digit}
                                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        textAlign: 'center',
                                                        fontSize: '1.5rem',
                                                        border: otpError ? '2px solid red' : '2px solid #e0e0e0',
                                                        borderRadius: '8px',
                                                        outline: 'none',
                                                        fontWeight: '600',
                                                        transition: 'border-color 0.3s ease',
                                                        animation: otpError ? 'shake 0.5s linear' : 'none'
                                                    }}
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                />
                                            ))}
                                        </div>

                                        <div className="modal-footer border-0 justify-content-center">
                                            <button
                                                type="button"
                                                data-bs-dismiss="modal"
                                                className="ct_blue_btn py-2 me-2 h-auto"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleVerifyOTP}
                                                disabled={isOtpVerifying}
                                                className="ct_b_red_btn text-white justify-content-center ms-2 py-2 h-auto"
                                                style={{ background: "var(--orange)", borderColor: "var(--orange)" }}
                                            >
                                                Verify OTP
                                            </button>
                                        </div>
                                    </div>
                                </>
                        }

                        {/* Add a style tag for shake animation */}
                        <style>{`
                            @keyframes shake {
                            0%, 100% { transform: translateX(0); }
                            10%, 90% { transform: translateX(-2px); }
                            20%, 80% { transform: translateX(4px); }
                            30%, 50%, 70% { transform: translateX(-4px); }
                            40%, 60% { transform: translateX(4px); }
                            }
                            .ct_b_red_btn[disabled] {
                                opacity: .7
                            }
                        `}</style>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBoat;
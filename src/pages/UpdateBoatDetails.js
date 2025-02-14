import { Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { pipViewDate4 } from '../auth/Pip';
import { AddBoatSchema } from '../auth/Schema';
import ErrorMessage from '../components/ErrorMessage';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';
import { updateBoatDetails } from '../redux/actions/staffActions';
import { pageRoutes } from '../routes/PageRoutes';

const UpdateBoatDetails = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const dispatch = useDispatch();
    const { isLoading1 } = useSelector((state) => state?.staffReducer);
    const [isToggle, setIsToggle] = useState(false);
    const [avatar_url, setAvtarUrl] = useState();
    const initialState = {
        vin: state?.data?.vin ?? '',
        name: state?.data?.name ?? '',
        make: state?.data?.make ?? '',
        rego: state?.data?.rego ?? '',
        model: state?.data?.model ?? '',
        email: state?.data?.email ?? '',
        length: state?.data?.length ?? '',
        book_to: state?.data?.book_to ? pipViewDate4(state?.data?.book_to) : '',
        app_date: state?.data?.app_date ? pipViewDate4(state?.data?.app_date) : '',
        phone_no: state?.data?.phone_no ?? '',
        boat_type: state?.data?.boat_type ?? '',
        engine_no: state?.data?.engine_no ?? '',
        book_from: state?.data?.book_from ? pipViewDate4(state?.data?.book_from) : '',
        engine_make: state?.data?.engine_make ?? '',
        owners_name: state?.data?.owners_name ?? '',
        engine_model: state?.data?.engine_model ?? '',
        docking_date: state?.data?.docking_date ? pipViewDate4(state?.data?.docking_date) : '',
    };

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    const onHandleImageChange = (e) => {
        setAvtarUrl(e.target.files[0]);
    };

    const createBoatData = async (values, { setSubmitting }) => {
        setSubmitting(false);
        const callback = (response) => {
            if (response.success) navigate(pageRoutes.all_boats);
        };
        const formData = new FormData();
        formData.append('id', state?.data?.id);
        formData.append('vin', values.vin.trim());
        formData.append('name', values.name.trim());
        formData.append('make', values.make.trim());
        formData.append('rego', values.rego.trim());
        formData.append('model', values.model.trim());
        formData.append('email', values.email?.trim());
        formData.append('length', values.length);
        formData.append('boat_type', values.boat_type);
        formData.append('book_to', values.book_to);
        formData.append('app_date', values.app_date);
        formData.append('phone_no', values.phone_no);
        formData.append('engine_no', values.engine_no);
        formData.append('book_from', values.book_from);
        formData.append('engine_make', values.engine_make.trim());
        formData.append('owners_name', values.owners_name.trim());
        formData.append('engine_model', values.engine_model.trim());
        formData.append('docking_date', values.docking_date);
        if (avatar_url) {
            formData.append('avatar_url', avatar_url);
        }
        dispatch(updateBoatDetails({ payload: formData, callback }));
    };

    if (isLoading1) {
        return <Loader />
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="update-boat" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="ct_white_bg_1">
                            <h4 className="ct_fs_24 text-start ct_fw_700 mb-3">Boat Update</h4>
                            <Formik
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
                                    handleSubmit,
                                }) => (
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label for="" className="mb-1"><strong>Owner&apos;s Name</strong>
                                                        <span className="ct_required_star">*</span></label>
                                                    <input
                                                        id="owners_name"
                                                        value={values.owners_name}
                                                        onBlur={handleBlur}
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
                                                    <label className="mb-1"
                                                    ><strong>Email</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
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
                                                    <label className="mb-1"
                                                    ><strong>Phone No.</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="phone_no"
                                                        onWheel={() => document.activeElement.blur()}
                                                        value={values.phone_no}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="phone_no"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Rego</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input
                                                        id="rego"
                                                        value={values.rego}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="rego"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Boat Name</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
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
                                                    <label className="mb-1"
                                                    ><strong>Boat type</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <select
                                                        name="boat_type"
                                                        className="form-control"
                                                        value={values.boat_type}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="">Select Boat Type</option>
                                                        <option value="Trailer Boat">Trailer Boat</option>
                                                        <option value="Yacht ">Yacht</option>
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
                                                    <label className="mb-1"
                                                    ><strong>HIN</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input
                                                        id="vin"
                                                        value={values.vin}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="vin"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Make</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
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
                                                    <label className="mb-1"
                                                    ><strong>Model</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
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
                                                    <label className="mb-1"
                                                    ><strong>No. Of Engine</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
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
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="engine_no"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Engine Make</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input
                                                        id="engine_make"
                                                        value={values.engine_make}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="engine_make"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Engine Model</strong>
                                                        <span className="ct_required_star">*</span>
                                                    </label>
                                                    <input
                                                        id="engine_model"
                                                        value={values.engine_model}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="engine_model"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Boat Length (Meter)</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input
                                                        id="length"
                                                        onWheel={() => document.activeElement.blur()}
                                                        value={values.length}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type="number"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="length"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Boat Profile Created Date</strong>
                                                        <span className="ct_required_star">*</span>
                                                    </label>
                                                    <input
                                                        id="app_date"
                                                        value={values.app_date}
                                                        // onBlur={handleBlur}
                                                        // onChange={handleChange}
                                                        min={new Date()?.toISOString()?.split("T")[0]}
                                                        type="date"
                                                        onKeyDown={(e) => e.preventDefault()}
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="app_date"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Book From</strong>
                                                        <span className="ct_required_star">*</span>
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
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="book_from"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Book To</strong>
                                                        <span className="ct_required_star">*</span>
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
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="book_to"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Docking Dates</strong>
                                                        <span className="ct_required_star">*</span>
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
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="docking_date"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="ct_file_upload">
                                                        <input
                                                            type="file"
                                                            onChange={onHandleImageChange}
                                                            id="ct_file_upload1"
                                                            className="d-none"
                                                            accept="image/*"
                                                        />
                                                        <span>
                                                            <i className="fa-solid fa-paperclip"></i> Picture Of Boat
                                                        </span>
                                                    </label>
                                                    <div className="ct_boat_dtl_img mt-2 text-center" data-bs-toggle="modal" data-bs-target="#ct_view_image">
                                                        {!avatar_url && state?.data?.avatar_url && <img src={state?.data?.avatar_url} alt="" className="ct_uploaded_img" style={{ backgroundColor: "#f5f5f5", padding: "4px" }} />}
                                                        {avatar_url &&
                                                            <img src={URL.createObjectURL(avatar_url)} alt="" className="ct_uploaded_img" style={{ backgroundColor: "#f5f5f5", padding: "4px" }} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3 mt-4 ct_flex_wrap_575">
                                            <button type="button" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit w-100" onClick={() => navigate(-1)}>Back</button>
                                            <button type="button" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit w-100" onClick={handleSubmit}>Save And Update Boat</button>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade Committed_Price" id="ct_view_image" tabindex="-1" aria-labelledby="ct_view_imageLabel" aria-hidden="true" data-bs-backdrop='static' data-bs-keyboard="false">
                <div className="modal-dialog modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-2">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Image Preview </strong></h4>
                                {!avatar_url && state?.data?.avatar_url && <img src={state?.data?.avatar_url} style={{
                                    height: "356px",
                                    objectFit: "contain"
                                }} />}
                                {avatar_url &&
                                    <img src={URL.createObjectURL(avatar_url)} style={{
                                        height: "356px",
                                        objectFit: "contain"
                                    }} />
                                }
                            </div>
                            <div className="modal-footer justify-content-center border-0 ct_flex_wrap_575 gap-2">
                                <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default UpdateBoatDetails;
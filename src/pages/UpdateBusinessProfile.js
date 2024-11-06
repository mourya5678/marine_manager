import { message } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';
import { updateBussinessImage, updateBussinessProfile } from '../redux/actions/authActions';
import { pageRoutes } from '../routes/PageRoutes';

const UpdateBusinessProfile = () => {
    const navigate = useNavigate();
    const { isLoading } = useSelector((state) => state?.authReducer);
    const dispatch = useDispatch();
    const { state } = useLocation();
    const [isToggle, setIsToggle] = useState(false);
    const [profileData, setProfileData] = useState(state?.data ?? '');
    const [companyNameError, setCompanyNameError] = useState();
    const [phoneNoError, setPhoneNoError] = useState();
    const [changeLogoImage, setChangeLogoImage] = useState();
    const [changeTradeImage, setChangeTradeImage] = useState();
    const [changeInsuranceImage, setChangeInsuranceImage] = useState([]);

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    const onHandleChangeValue = (key, value) => {
        setProfileData({ ...profileData, [key]: value })
        if (key == "company_name") {
            if (value?.trim()) {
                setCompanyNameError('');
            } else {
                setCompanyNameError('Please enter company name');
            }
        } else if (key == "phone_no") {
            const data = /^[0-9]{10}$/
            if (data?.test(value)) {
                setPhoneNoError();
            } else {
                setPhoneNoError('Phone number must be 10 digits');
            }
        }
    };

    const onHandleLogoChange = (e) => {
        setChangeLogoImage(e.target.files[0]);
    };

    const onHandleTradeChange = (e) => {
        setChangeTradeImage(e.target.files[0]);
    };

    const onHandleInsuranceChange = (e) => {
        const filesArray = Array.from(e.target.files);
        setChangeInsuranceImage(prevImages => [...prevImages, ...filesArray]);
    };

    const onHandleSubmitUpdatedDetails = () => {
        console.log("Hello")
        const data = /^[0-9]{10}$/
        if (data.test(profileData.phone_no) && profileData?.company_name) {
            const callback = (response) => {
                if (response.success) {
                    navigate(pageRoutes.business_profile);
                }
            };
            const formData = new FormData();
            formData.append('company_name', profileData.company_name?.trim());
            formData.append('phone_no', profileData.phone_no);
            formData.append('accounting_software_used', profileData.accounting_software_used ? profileData.accounting_software_used?.trim() : '');
            formData.append('about_us', profileData?.about_us ? profileData?.about_us?.trim() : '');
            formData.append('services_offered', profileData?.services_offered ? profileData?.services_offered?.trim() : '');
            formData.append('service_region', profileData?.service_region ? profileData?.service_region?.trim() : '');
            changeLogoImage && formData.append('logo', changeLogoImage);
            changeTradeImage && formData.append('trade_license', changeTradeImage);
            if (changeInsuranceImage?.length != 0) {
                changeInsuranceImage?.map((item) => (
                    formData.append('insurance', item)
                ))
            }
            dispatch(updateBussinessProfile({ payload: formData, callback }));
        } else {
            if (!data.test(profileData.phone_no)) {
                setPhoneNoError('Phone number must be 10 digits');
            }
            if (!profileData?.company_name) {
                setCompanyNameError('Please enter company name');
            }
        }

    };

    const onHandleRemoveImageLogo = () => {
        setChangeLogoImage();
    };

    const onHandleRemoveImageTrade = () => {
        setChangeTradeImage();
    };

    const onHandleRemoveImageInsurance = (val, index) => {
        if (val == "local") {
            const updatedInsuranceFile = changeInsuranceImage.filter((item, i) => i != index);
            setChangeInsuranceImage(updatedInsuranceFile);
        } else if (val == "live") {
            const data = profileData?.InsuranceFile?.filter((item) => item?.id != index)
            const callback = (response) => {
                if (response.success) {
                    console.log(profileData)
                    setProfileData({ ...profileData, InsuranceFile: data })
                }
            };
            dispatch(updateBussinessImage({ payload: index, callback }))
        }
    };

    const onHandleOpenNewTab = (item) => {
        const fileURL = URL.createObjectURL(item);
        window.open(item?.filename ?? fileURL, '_blank')
    };

    if (isLoading) {
        return <Loader />
    };
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="business_profile" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">
                            <h4 className="ct_fs_24 text-start ct_fw_700 ">Update Business Profile</h4>
                            <button className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22 mx-0" onClick={() => navigate(-1)}>Cancel</button>
                        </div>
                        <div className="ct_white_bg_1">
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Company Name</strong>
                                            </label
                                            >
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={profileData?.company_name}
                                                onChange={(e) => onHandleChangeValue('company_name', e.target.value)}
                                            />
                                            {companyNameError &&
                                                <span style={{ color: "red" }}>
                                                    {companyNameError}
                                                </span>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className="mb-1"
                                            ><strong>Company Email</strong>
                                            </label
                                            >
                                            <input type="email" className="form-control" value={profileData?.email} readOnly />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className="mb-1"
                                            ><strong>Company Phone number</strong>
                                            </label
                                            >
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={profileData?.phone_no}
                                                onChange={(e) => onHandleChangeValue('phone_no', e.target.value)}
                                            />
                                            {phoneNoError &&
                                                <span style={{ color: "red" }}>
                                                    {phoneNoError}
                                                </span>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className="mb-1"
                                            ><strong>Accounting Software Used</strong>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={profileData?.accounting_software_used}
                                                onChange={(e) => onHandleChangeValue('accounting_software_used', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className="mb-1"
                                            ><strong>About Us</strong>
                                            </label
                                            >
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                value={profileData?.about_us}
                                                onChange={(e) => onHandleChangeValue('about_us', e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className="mb-1"
                                            ><strong>Service Region</strong>
                                            </label
                                            >
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                value={profileData?.service_region}
                                                onChange={(e) => onHandleChangeValue('service_region', e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label className="mb-1"
                                            ><strong>Services Offered</strong>
                                            </label
                                            >
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                value={profileData?.services_offered}
                                                onChange={(e) => onHandleChangeValue('services_offered', e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="mb-1">
                                                <strong>Company Logo</strong>
                                            </label>
                                            <label for="ct_file_upload1" className="ct_file_upload">
                                                <input
                                                    type="file"
                                                    id="ct_file_upload1"
                                                    className="d-none"
                                                    accept="image/*"
                                                    onChange={(e) => onHandleLogoChange(e)}
                                                />
                                                <span><i className="fa-solid fa-paperclip"></i> Add Attachment</span>
                                            </label>
                                        </div>
                                        {changeLogoImage &&
                                            <div className="my-4 d-flex align-items-center justify-content-between flex-wrap gap-2"
                                            >
                                                <div className="position-relative">
                                                    <img src={URL.createObjectURL(changeLogoImage)} alt="" className="ct_uploaded_img" data-bs-toggle="modal" data-bs-target="#ct_view_image" />
                                                    <i className="fa-solid fa-xmark ct_img_dlt_img" onClick={onHandleRemoveImageLogo}></i>
                                                </div>
                                            </div>
                                        }
                                        {!changeLogoImage && profileData?.company_logo &&
                                            <div className="my-4 d-flex align-items-center justify-content-between flex-wrap gap-2"
                                            >
                                                <div className="d-flex align-items-center gap-3 position-relative">
                                                    <img src={profileData?.company_logo} alt="" className="ct_uploaded_img" data-bs-toggle="modal" data-bs-target="#ct_view_image" />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label className="mb-1"
                                            ><strong>Trade Licenses if required</strong>
                                            </label>
                                            <label className="ct_file_upload">
                                                <input type="file" id="ct_file_upload1" accept="image/*" className="d-none" onChange={(e) => onHandleTradeChange(e)} />
                                                <span><i className="fa-solid fa-paperclip"></i> Add Attachment</span>
                                            </label>
                                        </div>
                                        {changeTradeImage &&
                                            <div className="my-4 d-flex align-items-center justify-content-between flex-wrap gap-2"
                                            >
                                                <div className="d-flex align-items-center gap-3 position-relative">
                                                    <img src={URL.createObjectURL(changeTradeImage)} alt="" className="ct_uploaded_img" data-bs-toggle="modal" data-bs-target="#ct_view_trade_image" />
                                                    <i className="fa-solid fa-xmark ct_img_dlt_img" onClick={onHandleRemoveImageTrade}></i>
                                                </div>
                                            </div>
                                        }
                                        {!changeTradeImage && profileData?.trade_license &&
                                            <div className="my-4 d-flex align-items-center justify-content-between flex-wrap gap-2"

                                            >
                                                <div className="d-flex align-items-center gap-3 position-relative">
                                                    <img src={profileData?.trade_license} alt="" className="ct_uploaded_img" data-bs-toggle="modal" data-bs-target="#ct_view_trade_image" />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <label className="mb-1"
                                            ><strong>Professional indemnity insurance (PDF format only)</strong>
                                            </label>
                                            <label className="ct_file_upload">
                                                <input
                                                    accept=".pdf"
                                                    type="file"
                                                    id="ct_file_upload1"
                                                    className="d-none"
                                                    multiple
                                                    onChange={(e) => onHandleInsuranceChange(e)}
                                                />
                                                <span><i className="fa-solid fa-paperclip"></i> Add Attachment</span>
                                            </label>
                                        </div>
                                        <div className="row">
                                            {changeInsuranceImage?.length != 0 &&
                                                changeInsuranceImage?.map((item, i) => (
                                                    <div className="col-lg-6 mb-2">
                                                        <div className="mt-4 d-flex align-items-center flex-wrap gap-3">
                                                            <div className="d-flex align-items-center gap-3 ">
                                                                <div className="position-relative">
                                                                    <iframe
                                                                        src={URL.createObjectURL(item)}
                                                                        title={`pdf-viewer-${i}`}
                                                                        width="200"
                                                                        height="200"
                                                                    />
                                                                    <i className="fa-solid fa-xmark ct_img_dlt_img" onClick={() => onHandleRemoveImageInsurance("local", i)}></i>
                                                                </div>
                                                                <button type="button" onClick={() => onHandleOpenNewTab(item)} className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22 mx-0">View Pdf</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            {profileData?.InsuranceFile?.length != 0 &&
                                                profileData?.InsuranceFile?.map((item, i) => (
                                                    <div className="col-lg-6">
                                                        <div className="mt-4 d-flex align-items-center flex-wrap gap-3">
                                                            <div className="d-flex align-items-center gap-3 ">
                                                                <div className="position-relative">
                                                                    <iframe
                                                                        src={item?.filename}
                                                                        title={`pdf-viewer-${i}`}
                                                                        width="200"
                                                                        height="200"
                                                                    />
                                                                    <i className="fa-solid fa-xmark ct_img_dlt_img" onClick={() => onHandleRemoveImageInsurance("live", item?.id)}></i>
                                                                </div>
                                                                <button type="button" onClick={() => onHandleOpenNewTab(item)} className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22 mx-0">View Pdf</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 mt-4 ct_flex_wrap_575">
                                    <button type="button" className="ct_outline_btn ct_outline_orange w-100" onClick={() => navigate(-1)}>Cancel</button>
                                    <button type="button" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit w-100" onClick={onHandleSubmitUpdatedDetails}>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade Committed_Price" id="ct_view_image" tabindex="-1" aria-labelledby="ct_view_imageLabel" aria-hidden="true">
                <div className="modal-dialog modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-2">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Image Preview </strong></h4>
                                {changeLogoImage && <img src={URL.createObjectURL(changeLogoImage)} style={{
                                    height: "356px",
                                    objectFit: "contain"
                                }} />}
                                {!changeLogoImage && profileData?.company_logo && <img src={profileData?.company_logo} style={{
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
            </div>

            <div className="modal fade Committed_Price" id="ct_view_trade_image" tabindex="-1" aria-labelledby="ct_view_trade_imageLabel" aria-hidden="true">
                <div className="modal-dialog modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-2">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Image Preview </strong></h4>
                                {changeTradeImage && <img src={URL.createObjectURL(changeTradeImage)} style={{
                                    height: "356px",
                                    objectFit: "contain"
                                }} />}
                                {!changeTradeImage && profileData?.trade_license &&
                                    <img src={profileData?.trade_license} style={{
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

export default UpdateBusinessProfile;
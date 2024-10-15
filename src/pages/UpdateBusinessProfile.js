import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const UpdateBusinessProfile = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [isToggle, setIsToggle] = useState(false);
    const [profileData, setProfileData] = useState(state?.data);
    
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    const onHandleChangeValue = () => {

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
                                            <input type="text" className="form-control" value={profileData?.company_name} />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Company Email</strong>
                                            </label
                                            >
                                            <input type="email" className="form-control" value={profileData?.email} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Company Phone number</strong>
                                            </label
                                            >
                                            <input type="number" className="form-control" value={profileData?.phone_no} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Accounting Software Used</strong>
                                            </label
                                            >
                                            <input type="text" className="form-control" value={profileData?.accounting_software_used} />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>About Us</strong>
                                            </label
                                            >
                                            <textarea className="form-control" rows="3" value={profileData?.about_us}></textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Service Region</strong>
                                            </label
                                            >
                                            <textarea className="form-control" rows="3" value={profileData?.service_region}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Services Offered</strong>
                                            </label
                                            >
                                            <textarea className="form-control" rows="3" value={profileData?.services_offered}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="" className="mb-1"
                                            ><strong>Company Logo</strong>
                                            </label>
                                            <label for="ct_file_upload1" className="ct_file_upload">
                                                <input type="file" id="ct_file_upload1" className="d-none" />
                                                <span><i className="fa-solid fa-paperclip"></i> Add Attachment</span>
                                            </label>
                                        </div>
                                        <div className="my-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div className="d-flex align-items-center gap-3">
                                                <img src="img/file_doc.svg" alt="" className="ct_uploaded_img" />
                                                <div className="ct_file_name">
                                                    <h6>Logo file.png</h6>
                                                    <small>658 KB</small>
                                                </div>
                                            </div>
                                            <div className="ct_green_check">
                                                <i className="fa-solid fa-check"  ></i>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label for="" className="mb-1"
                                            ><strong>Trade Licenses if required</strong>
                                            </label>
                                            <label for="ct_file_upload1" className="ct_file_upload">
                                                <input type="file" id="ct_file_upload1" className="d-none" />
                                                <span><i className="fa-solid fa-paperclip"></i> Add Attachment</span>
                                            </label>
                                        </div>
                                        <div className="my-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div className="d-flex align-items-center gap-3">
                                                <img src="img/file_doc.svg" alt="" className="ct_uploaded_img" />
                                                <div className="ct_file_name">
                                                    <h6>Other file.png</h6>
                                                    <small>658 KB</small>
                                                </div>
                                            </div>
                                            <div className="ct_green_check">
                                                <i className="fa-solid fa-check"  ></i>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <label for="" className="mb-1"
                                            ><strong>Professional indemnity insurance</strong>
                                            </label>
                                            <label for="ct_file_upload1" className="ct_file_upload">
                                                <input type="file" id="ct_file_upload1" className="d-none" />
                                                <span><i className="fa-solid fa-paperclip"></i> Add Attachment</span>
                                            </label>
                                        </div>
                                        <div className="mt-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div className="d-flex align-items-center gap-3">
                                                <img src="img/file_doc.svg" alt="" className="ct_uploaded_img" />
                                                <div className="ct_file_name">
                                                    <h6>Other file.png</h6>
                                                    <small>658 KB</small>
                                                </div>
                                            </div>
                                            <div className="ct_green_check">
                                                <i className="fa-solid fa-check"  ></i>
                                            </div>
                                        </div>
                                        <div className="mt-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div className="d-flex align-items-center gap-3">
                                                <img src="img/file_doc.svg" alt="" className="ct_uploaded_img" />
                                                <div className="ct_file_name">
                                                    <h6>Other file.png</h6>
                                                    <small>658 KB</small>
                                                </div>
                                            </div>
                                            <div className="ct_green_check">
                                                <i className="fa-solid fa-check"  ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 mt-4 ct_flex_wrap_575">
                                    <button type="button" className="ct_outline_btn ct_outline_orange w-100" onClick={() => navigate(-1)}>Cancel</button>
                                    <button type="button" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit w-100" onClick={() => navigate(-1)} >Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateBusinessProfile;
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';

const BusinessProfile = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    }

    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="business_profile" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">
                            <h4 className="ct_fs_24 text-start ct_fw_700 ">Business Profile</h4>
                            <button onClick={() => navigate(pageRoutes.update_business_profile)} className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22 mx-0">Update Profile</button>
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
                                            <input type="text" value="Marine" className="form-control" readOnly />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Company Email</strong>
                                            </label
                                            >
                                            <input type="email" className="form-control" value="marine@gmail.com" readOnly />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Company Phone number</strong>
                                            </label
                                            >
                                            <input type="number" className="form-control" value="1234567890" readOnly />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Accounting Software Used</strong>
                                            </label
                                            >
                                            <input type="text" className="form-control" value="Software" readOnly />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>About Us</strong>
                                            </label
                                            >

                                            <textarea className="form-control" rows="3" readOnly></textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Service Region</strong>
                                            </label
                                            >
                                            <textarea className="form-control" rows="3" readOnly></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Services Offered</strong>
                                            </label
                                            >
                                            <textarea className="form-control" rows="3" readOnly></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="" className="mb-1"
                                            ><strong>Company Logo</strong>
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessProfile;
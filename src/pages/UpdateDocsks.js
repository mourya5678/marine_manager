import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const UpdateDocsks = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    }

    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="update" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="ct_white_bg_1 pb-5">
                            <h4 className="ct_fs_24 text-start ct_fw_700 mb-3">Update Dock</h4>
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Dock Name</strong>
                                                <span className="ct_required_star">*</span></label
                                            >
                                            <input type="text" className="form-control" value="Dock 2" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Choose Boat For This Dock</strong>
                                                <span className="ct_required_star">*</span></label
                                            >
                                            <select className="form-control">
                                                <option value="">Breeze</option>
                                                <option value="">Breeze</option>
                                                <option value="">Breeze</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Enter Storage Address</strong>
                                                <span className="ct_required_star">*</span></label
                                            >
                                            <input type="text" className="form-control" value="221 B Perl Harbor" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Email</strong>
                                                <span className="ct_required_star">*</span></label
                                            >
                                            <input type="email" className="form-control" value="dockonw@domain.com" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Contact No.</strong>
                                                <span className="ct_required_star">*</span></label
                                            >
                                            <input type="text" className="form-control" value="(555) 569 2145" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Enter Booking Cost/day</strong>
                                                <span className="ct_required_star">*</span></label
                                            >
                                            <div className="position-relative">
                                                <input type="number" className="form-control ct_text_indent_15" value="123" />
                                                <span className="ct_dollar_sign">$</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Enter Booking Cost</strong>
                                                <span className="ct_required_star">*</span></label
                                            >
                                            <div className="position-relative">
                                                <input type="number" className="form-control ct_text_indent_15" value="13" />
                                                <span className="ct_dollar_sign">$</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Book From</strong>
                                                <span className="ct_required_star">*</span></label
                                            >
                                            <input type="date" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Book To</strong>
                                                <span className="ct_required_star">*</span></label
                                            >
                                            <input type="date" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 mt-4 ct_flex_wrap_575">
                                    <button type="button" className="ct_outline_btn ct_outline_orange w-100" onClick={() => navigate(-1)}>Cancel</button>
                                    <button type="button" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit w-100" onClick={() => navigate(-1)}>Update Docks</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateDocsks;
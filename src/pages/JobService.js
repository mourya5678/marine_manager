import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const JobService = () => {
    const [isToggle, setIsToggle] = useState(false);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };
    
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="cds_job" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <a href="javascript:void(0)" className="ct_fs_18 ct_fw_700 text-dark ct_ff_roboto"><i className="fa-solid fa-arrow-left-long"></i> Back</a>
                        </div>
                        <div className="ct_white_bg_1">
                            <h4 className="ct_fs_24 text-center ct_fw_700 mb-3">CDS - Job / Services sheet</h4>
                            <form>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Date</strong>
                                            </label
                                            >
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Job No. </strong>
                                            </label
                                            >
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Person Attending</strong>
                                                <span className="ct_required_star">*</span></label
                                            >
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Customer Name</strong>
                                                <span className="ct_required_star">*</span></label
                                            >
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Mobile</strong>
                                            </label
                                            >
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Work to be carried out</strong>
                                            </label
                                            >
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Work carried out including materials</strong>
                                            </label
                                            >
                                            <textarea className="form-control" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Further action required</strong>
                                            </label
                                            >
                                            <textarea className="form-control" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Status</strong>
                                            </label
                                            >
                                            <select className="form-control">
                                                <option value="">
                                                    Completed
                                                </option>
                                                <option value="">Open</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>CDS Signature</strong>
                                            </label
                                            >
                                            <textarea className="form-control" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 mt-4 ct_flex_wrap_575">
                                    <button type="button" className="ct_outline_btn ct_outline_orange w-100">Cancel</button>
                                    <button type="button" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit w-100">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobService;
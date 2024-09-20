import React from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const GenerateInvoice = () => {
    const navigate = useNavigate();

    return (
        <div className="ct_dashbaord_bg">
            <div className="ct_dashbaord_main ct_active">
                <Sidebar path="generate_invoice" />
                <div className="ct_content_right">
                    <Header />
                    <div className="ct_dashbaord_middle">
                        <div className="ct_white_bg_1">
                            <h4 className="ct_fs_24 text-start ct_fw_700 mb-3">Maintenance Task</h4>
                            <form>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center gap-2">
                                            <p><span className="ct_text_op_5">Date :</span><span className="ct_fw_700">03-12-2024</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center gap-2">
                                            <p><span className="ct_text_op_5">Registration :</span><span className="ct_fw_700">JPB39Q</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="ct_light_orange_bg mb-3">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p> <span className="ct_orange_text ct_fw_700 ct_text_decoration_none me-1">1.</span><span className="ct_text_op_5">Task Description :</span><span className="ct_fw_700">Full Antifoul of hull</span></p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p><span className="ct_text_op_5">Technician name or company :</span><span className="ct_fw_700">Andew Canady</span></p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p><span className="ct_text_op_5">Name :</span><span className="ct_fw_700">Gertrude Ferry</span></p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p><span className="ct_text_op_5">Service Agents Details :</span><span className="ct_fw_700">Lorem ipsum gulpez indusm</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-1 ct_text_op_5">Task Info </p>
                                                <p className="ct_fs_16 mb-0 ct_fw_700">Any Further notes from supplier on future works recommendations or atch list. This note should be taken from the specific task checklist</p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-1 ct_text_op_5">Notes from Supplier</p>
                                                <p className="ct_fs_16 mb-0 ct_fw_700">Any Further notes from supplier on future works recommendations or atch list. This note should be taken from the specific task checklist</p>
                                            </div>
                                            <div>
                                                <p className="mb-1 ct_text_op_5">Future Watch List.</p>
                                                <p className="ct_fs_16 mb-0 ct_fw_700">Any Further notes from supplier on future works recommendations or atch list. This note should be taken from the specific task checklist</p>
                                            </div>
                                        </div>
                                        <div className="ct_light_orange_bg mb-3">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p> <span className="ct_orange_text ct_fw_700 ct_text_decoration_none me-1">2.</span><span className="ct_text_op_5">Task Description :</span><span className="ct_fw_700">Full Antifoul of hull</span></p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p><span className="ct_text_op_5">Technician name or company :</span><span className="ct_fw_700">Andew Canady</span></p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p><span className="ct_text_op_5">Name :</span><span className="ct_fw_700">Gertrude Ferry</span></p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <p><span className="ct_text_op_5">Service Agents Details :</span><span className="ct_fw_700">Lorem ipsum gulpez indusm</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-1 ct_text_op_5">Task Info </p>
                                                <p className="ct_fs_16 mb-0 ct_fw_700">Any Further notes from supplier on future works recommendations or atch list. This note should be taken from the specific task checklist</p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-1 ct_text_op_5">Notes from Supplier</p>
                                                <p className="ct_fs_16 mb-0 ct_fw_700">Any Further notes from supplier on future works recommendations or atch list. This note should be taken from the specific task checklist</p>
                                            </div>
                                            <div>
                                                <p className="mb-1 ct_text_op_5">Future Watch List.</p>
                                                <p className="ct_fs_16 mb-0 ct_fw_700">Any Further notes from supplier on future works recommendations or atch list. This note should be taken from the specific task checklist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 mt-4 ct_flex_wrap_575">
                                    <p className="mb-0 ct_fs_18 w-100 text-center"><span className="ct_text_op_5">Total invoice amount :</span> <span className="ct_fw_700">$5,266</span></p>
                                    <button type="button" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit w-100" onClick={() => navigate(-1)}>Save Completed Task</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenerateInvoice;
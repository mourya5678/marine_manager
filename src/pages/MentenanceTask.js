import React from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';

const MentenanceTask = () => {
    const navigate = useNavigate();

    return (
        <div className="ct_dashbaord_bg">
            <div className="ct_dashbaord_main ct_active">
                <Sidebar path="" />
                <div className="ct_content_right">
                    <Header />
                    <div className="ct_dashbaord_middle">
                        <div className="ct_white_bg_1">
                            <h4 className="ct_fs_24 text-start ct_fw_700 mb-3">Maintenance Task</h4>
                            <form action="">
                                <h4 className="ct_fs_16 text-start">03-12-2024</h4>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center gap-2">
                                            <p><span className="ct_text_op_5">Name :</span><span className="ct_fw_700"> Gertrude Ferry</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center gap-2">
                                            <p><span className="ct_text_op_5">Description :</span><span className="ct_fw_700">Lorem ipsum gulpez indusm</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Task Info </strong>
                                                <span className="ct_required_star">*</span></label
                                            >
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Notes from Supplier</strong>
                                                <span className="ct_required_star">*</span></label
                                            >
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Future Watch List.</strong>
                                                <span className="ct_required_star">*</span></label
                                            >
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Recommended Due date</strong>
                                                <span className="ct_required_star">*</span></label
                                            >
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label for="ct_file_upload2" className="ct_file_upload_big">
                                                <input
                                                    type="file"
                                                    id="ct_file_upload2"
                                                    className="d-none"
                                                />
                                                <span
                                                >
                                                    <h5 className="ct_fs_14 ct_fw_700">Drag photos here</h5>
                                                    <p className="ct_fs_14 mb-0">Max upload file 10 MB</p>
                                                </span
                                                >
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 mt-4 ct_flex_wrap_575">
                                    <button type="button" className="ct_outline_btn ct_outline_orange w-100" onClick={() => navigate(-1)}>Cancel</button>
                                    <button type="button" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit w-100" onClick={() => navigate(pageRoutes.generate_invoice)}>Next</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentenanceTask;
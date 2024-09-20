import React from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const LeadReceived = () => {
    const navigate = useNavigate();

    return (
        <div className="ct_dashbaord_bg">
            <div className="ct_dashbaord_main ct_active">
                <Sidebar path="quick-leads" />
                <div className="ct_content_right">
                    <Header />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                            <h4 className="mb-0 ct_fs_24 ct_fw_600">Quick Leads </h4>
                            <button className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22 mx-0" data-bs-toggle="modal" data-bs-target="#ct_new_lead">+ Add New Lead</button>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table ct_project_table ct_custom_table_main">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="ct_ff_roboto">Client Name</th>
                                        <th className="ct_ff_roboto">Contact details</th>
                                        <th className="ct_ff_roboto">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Dixie Thiel</td>
                                        <td className="ct_fw_600">899-450-7002</td>
                                        <td className="text-end ct_fw_600">Contact</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Dixie Thiel</td>
                                        <td className="ct_fw_600">899-450-7002</td>
                                        <td className="text-end ct_fw_600 ct_green_text">Actioned</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Dixie Thiel</td>
                                        <td className="ct_fw_600">899-450-7002</td>
                                        <td className="text-end ct_fw_600">Contact</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Dixie Thiel</td>
                                        <td className="ct_fw_600">899-450-7002</td>
                                        <td className="text-end ct_fw_600">Contact</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4">
                            <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                <h4 className="mb-0 ct_fs_24 ct_fw_600">Recouring Business Reminder </h4>
                            </div>
                            <div className="table-responsive mt-3">
                                <table className="table ct_project_table ct_custom_table_main">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th className="ct_ff_roboto">Client Name</th>
                                            <th className="ct_ff_roboto">Contact details</th>
                                            <th>Task Completed</th>
                                            <th className="ct_ff_roboto">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Dixie Thiel</td>
                                            <td>379-615-0268</td>
                                            <td className="ct_fw_600">Full antifoul of hull</td>
                                            <td className="text-end ct_fw_600">12/9/24</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Dixie Thiel</td>
                                            <td>379-615-0268</td>
                                            <td className="ct_fw_600">Engine Service</td>
                                            <td className="text-end ct_fw_600">12/9/24</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Dixie Thiel</td>
                                            <td>379-615-0268</td>
                                            <td className="ct_fw_600">Painting top deck</td>
                                            <td className="text-end ct_fw_600">12/9/24</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Dixie Thiel</td>
                                            <td>379-615-0268</td>
                                            <td className="ct_fw_600">Hull Clean</td>
                                            <td className="text-end ct_fw_600">12/9/24</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade Committed_Price" id="ct_new_lead" tabindex="-1" aria-labelledby="ct_new_leadLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Add New Lead</strong></h4>
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label for="" className="mb-1"><strong>Client Name</strong> <span className="ct_required_star">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label for="" className="mb-1"><strong>Client Contact no. </strong> <span className="ct_required_star">*</span></label>
                                                <input type="number" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center border-0">
                            <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal">Cancel</button>
                            <button type="button ct_" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit" data-bs-dismiss="modal">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeadReceived;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { getBoatData } from '../redux/actions/staffActions';
import { pageRoutes } from '../routes/PageRoutes';

const ScheduledMaintenance = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="maintenance" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="ct_grid_2_1 justify-content-between">
                            <h4 className="mb-0 ct_fs_24 ct_fw_600">All Maintenance </h4>
                            <div className="ct_grid_3_1">
                                <div className="ct_dark_grey_bg">
                                    <div className="ct_btn_group">
                                        <select className="form-control ct_input_h_44">
                                            <option value="">Boat1</option>
                                            <option value="">Boat1</option>
                                            <option value="">Boat1</option>
                                        </select>
                                        <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.task_review)} className=" w-100 ct_white_space_nowrap ct_input_h_44 ct_custom_btm ct_line_height_22 " style={{ paddingBlock: "12px" }}>Generate Invoice</a>
                                    </div>
                                </div>
                                <div>
                                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.maintained_boats)} className="ct_outline_btn ct_outline_orange w-100 ct_white_space_nowrap text-center d-block d-lg-flex "><span className="ct_orange_text ct_text_decoration_none">Maintained Boats</span></a>
                                </div>
                                <button className="ct_custom_btm ct_input_h_44 py-0" data-bs-toggle="modal" data-bs-target="#ct_generate_invoice">+ Create Task</button>
                            </div>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table ct_project_table ct_custom_table_main">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="ct_ff_roboto">Maintenance Item Description</th>
                                        <th className="ct_ff_roboto">Boat registration</th>
                                        <th className="ct_ff_roboto">Supplier</th>
                                        <th className="ct_ff_roboto">Date Scheduled</th>
                                        <th className="ct_ff_roboto">Staff Allocated</th>
                                        <th className="ct_ff_roboto">Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Full antifoul of hull</td>
                                        <td>JPB39Q</td>
                                        <td>Volvo</td>
                                        <td>06-08-2024 - 28-09-2024</td>
                                        <td>Morris Hyatt</td>
                                        <td className="ct_fw_600">Completed</td>
                                        <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_edit_task12"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Hull Clean</td>
                                        <td>JPB39Q</td>
                                        <td>Volvo</td>
                                        <td>06-08-2024 - 28-09-2024</td>
                                        <td>Alexis Turner</td>
                                        <td className="ct_green_text ct_fw_700">Invoiced</td>
                                        <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_edit_task12"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Engine Service</td>
                                        <td>JPB39Q</td>
                                        <td>Volvo</td>
                                        <td>06-08-2024 - 28-09-2024</td>
                                        <td>Iris Franecki</td>
                                        <td className="ct_fw_600 ">Completed</td>
                                        <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_edit_task12"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Prop speed</td>
                                        <td>JPB39Q</td>
                                        <td>Volvo</td>
                                        <td>06-08-2024 - 28-09-2024</td>
                                        <td>Jared Feeney</td>
                                        <td className="ct_fw_600 ct_red_text">Open</td>
                                        <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_edit_task12"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Full antifoul of hull</td>
                                        <td>JPB39Q</td>
                                        <td>Volvo</td>
                                        <td>06-08-2024 - 28-09-2024</td>
                                        <td>Morris Hyatt</td>
                                        <td className="ct_fw_600">Completed</td>
                                        <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_edit_task12"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Hull Clean</td>
                                        <td>JPB39Q</td>
                                        <td>Volvo</td>
                                        <td>06-08-2024 - 28-09-2024</td>
                                        <td>Alexis Turner</td>
                                        <td className="ct_green_text ct_fw_700">Invoiced</td>
                                        <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_edit_task12"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Engine Service</td>
                                        <td>JPB39Q</td>
                                        <td>Volvo</td>
                                        <td>06-08-2024 - 28-09-2024</td>
                                        <td>Iris Franecki</td>
                                        <td className="ct_fw_600">Completed</td>
                                        <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_edit_task12"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Prop speed</td>
                                        <td>JPB39Q</td>
                                        <td>Volvo</td>
                                        <td>06-08-2024 - 28-09-2024</td>
                                        <td>Jared Feeney</td>
                                        <td className="ct_fw_600 ct_red_text">Open</td>
                                        <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_edit_task12"></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade Committed_Price" id="ct_edit_task12" tabindex="-1" aria-labelledby="ct_edit_task12Label" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Update A Maintenance Task  </strong></h4>
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label for="" className="mb-1"><strong>Assign To </strong><span className="ct_required_star">*</span></label>
                                                <select className="form-control">
                                                    <option value="">Johan Doe - Technician</option>
                                                    <option value="">Johan Doe - Technician</option>
                                                    <option value="">Johan Doe - Technician</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Maintenance Item Description</strong> <span className="ct_required_star">*</span></label>
                                                <input type="text" className="form-control" value="Plumbing and bilg system" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Time Allocated(Hours)</strong> <span className="ct_required_star">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Quoted Value </strong> <span className="ct_required_star">*</span></label>
                                                <input type="number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Boat Registration </strong><span className="ct_required_star">*</span></label>
                                                <select className="form-control">
                                                    <option value="">JPB39Q - Breeze</option>
                                                    <option value="">JPB39Q - Breeze</option>
                                                    <option value="">JPB39Q - Breeze</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Supplier</strong><span className="ct_required_star">*</span></label>
                                                <select className="form-control">
                                                    <option value="">Marine HQ</option>
                                                    <option value="">Marine HQ</option>
                                                    <option value="">Marine HQ</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Date Scheduled From </strong> <span className="ct_required_star">*</span></label>
                                                <input type="date" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Date Scheduled To </strong> <span className="ct_required_star">*</span></label>
                                                <input type="date" className="form-control" />
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

            <div className="modal fade Committed_Price" id="ct_generate_invoice" tabindex="-1" aria-labelledby="ct_generate_invoiceLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Create A Maintenance Task </strong></h4>
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Assign To </strong><span className="ct_required_star">*</span></label>
                                                <select className="form-control">
                                                    <option value="">Johan Doe - Technician</option>
                                                    <option value="">Johan Doe - Technician</option>
                                                    <option value="">Johan Doe - Technician</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Maintenance Item Description</strong> <span className="ct_required_star">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Time Allocated(Hours)</strong> <span className="ct_required_star">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Quoted Value </strong> <span className="ct_required_star">*</span></label>
                                                <input type="number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Boat Registration </strong><span className="ct_required_star">*</span></label>
                                                <select className="form-control">
                                                    <option value="">JPB39Q - Breeze</option>
                                                    <option value="">JPB39Q - Breeze</option>
                                                    <option value="">JPB39Q - Breeze</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Supplier</strong><span className="ct_required_star">*</span></label>
                                                <select className="form-control">
                                                    <option value="">Marine HQ</option>
                                                    <option value="">Marine HQ</option>
                                                    <option value="">Marine HQ</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Date Scheduled From </strong> <span className="ct_required_star">*</span></label>
                                                <input type="date" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Date Scheduled To </strong> <span className="ct_required_star">*</span></label>
                                                <input type="date" className="form-control" />
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

export default ScheduledMaintenance;
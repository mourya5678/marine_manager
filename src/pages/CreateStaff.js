import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const CreateStaff = () => {
    const [isToggle, setIsToggle] = useState(false);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="create-staff" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="ct_white_bg_1 py-5">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <h4 className="ct_fs_24 text-start ct_fw_700 mb-3">Staff Members</h4>
                                <button className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22 mx-0" data-bs-toggle="modal" data-bs-target="#ct_add_member">Add Members</button>
                            </div>
                            <div className="table-responsive mt-3">
                                <table className="table ct_project_table ct_custom_table_main">
                                    <thead>
                                        <tr>
                                            <th className="border-0"></th>
                                            <th className="ct_ff_roboto border-0">Name</th>
                                            <th className="ct_ff_roboto border-0">Job Role</th>
                                            <th className="ct_ff_roboto border-0">E-mail Address</th>
                                            <th className="ct_ff_roboto border-0">Contact no.</th>
                                            <th className="ct_ff_roboto border-0">Status</th>
                                            <th className="ct_ff_roboto border-0">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Noel Skiles</td>
                                            <td>Electrical Work</td>
                                            <td>Walker_Towne@yahoo.com</td>
                                            <td className="ct_fw_600">(555) 789-0123</td>
                                            <td className=" ct_fw_600 ct_green_text">Active</td>
                                            <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_update_member"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Noel Skiles</td>
                                            <td>Electrical Work</td>
                                            <td>Walker_Towne@yahoo.com</td>
                                            <td className="ct_fw_600">(555) 789-0123</td>
                                            <td className=" ct_fw_600 ct_green_text">Active</td>
                                            <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_update_member"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Noel Skiles</td>
                                            <td>Electrical Work</td>
                                            <td>Walker_Towne@yahoo.com</td>
                                            <td className="ct_fw_600">(555) 789-0123</td>
                                            <td className=" ct_fw_600 ct_green_text">Active</td>
                                            <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_update_member"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Noel Skiles</td>
                                            <td>Electrical Work</td>
                                            <td>Walker_Towne@yahoo.com</td>
                                            <td className="ct_fw_600">(555) 789-0123</td>
                                            <td className="ct_fw_600 ct_red_text">Disabled</td>
                                            <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_update_member"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Noel Skiles</td>
                                            <td>Electrical Work</td>
                                            <td>Walker_Towne@yahoo.com</td>
                                            <td className="ct_fw_600">(555) 789-0123</td>
                                            <td className=" ct_fw_600 ct_green_text">Active</td>
                                            <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_update_member"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Noel Skiles</td>
                                            <td>Electrical Work</td>
                                            <td>Walker_Towne@yahoo.com</td>
                                            <td className="ct_fw_600">(555) 789-0123</td>
                                            <td className="ct_fw_600 ct_green_text">Active</td>
                                            <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_update_member"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Noel Skiles</td>
                                            <td>Electrical Work</td>
                                            <td>Walker_Towne@yahoo.com</td>
                                            <td className="ct_fw_600">(555) 789-0123</td>
                                            <td className="ct_fw_600 ct_red_text">Disabled</td>
                                            <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_update_member"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Noel Skiles</td>
                                            <td>Electrical Work</td>
                                            <td>Walker_Towne@yahoo.com</td>
                                            <td className="ct_fw_600">(555) 789-0123</td>
                                            <td className="ct_fw_600 ct_red_text">Disabled</td>
                                            <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_update_member"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Noel Skiles</td>
                                            <td>Electrical Work</td>
                                            <td>Walker_Towne@yahoo.com</td>
                                            <td className="ct_fw_600">(555) 789-0123</td>
                                            <td className=" ct_fw_600 ct_red_text">Disabled</td>
                                            <td className="text-end ct_action_btns"><i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_update_member"></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade Committed_Price" id="ct_add_member" tabindex="-1" aria-labelledby="ct_add_memberLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Add Staff Member </strong></h4>
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Name</strong> <span className="ct_required_star">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Job Role</strong> <span className="ct_required_star">*</span></label>
                                                <select className="form-control">
                                                    <option value="">Electrical Work</option>
                                                    <option value="">Electrical Work</option>
                                                    <option value="">Electrical Work</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Email </strong> <span className="ct_required_star">*</span></label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Password </strong> <span className="ct_required_star">*</span></label>
                                                <input type="password" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Contact no. </strong> <span className="ct_required_star">*</span></label>
                                                <input type="number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Home Address </strong> <span className="ct_required_star">*</span></label>
                                                <textarea className="form-control" rows="4"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center border-0 ct_flex_wrap_575 gap-2">
                            <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal">Cancel</button>
                            <button type="button ct_" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit ct_white_space_nowrap" data-bs-dismiss="modal">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade Committed_Price" id="ct_update_member" tabindex="-1" aria-labelledby="ct_update_memberLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Update Staff Details </strong></h4>
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Name</strong> <span className="ct_required_star">*</span></label>
                                                <input type="text" className="form-control" value="Kadin Calzoni" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Job Role</strong> <span className="ct_required_star">*</span></label>
                                                <select className="form-control">
                                                    <option value="">Electrical Work</option>
                                                    <option value="">Electrical Work</option>
                                                    <option value="">Electrical Work</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Email </strong> <span className="ct_required_star">*</span></label>
                                                <input type="email" className="form-control" value="staffmember1@domain.com" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Password </strong> <span className="ct_required_star">*</span></label>
                                                <input type="password" className="form-control" value="12345678" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Contact no. </strong> <span className="ct_required_star">*</span></label>
                                                <input type="text" className="form-control" value="(555) 456-7890" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Home Address </strong> <span className="ct_required_star">*</span></label>
                                                <textarea className="form-control" rows="4">223 C Brigade Road </textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <div className="d-flex align-items-center justify-content-between gap-2">
                                                    <label className="mb-0"><strong>Status </strong> <span className="ct_required_star">*</span></label>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center border-0 ct_flex_wrap_575 gap-2">
                            <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal">Cancel</button>
                            <button
                                type="button "
                                data-bs-dismiss="modal"
                                className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit ct_white_space_nowrap"
                            >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateStaff;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { getBoatData, getStaffData, getSupplierData } from '../redux/actions/staffActions';
import { pageRoutes } from '../routes/PageRoutes';
import { Formik } from 'formik';
import { CreateTaskSchema } from '../auth/Schema';
import Loader from '../components/Loader';

const ScheduledMaintenance = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isToggle, setIsToggle] = useState(false);
    const { isLoading, staff_data, all_boats, supplier_data } = useSelector((state) => state?.staffReducer);
    const { isLoading1, boatTaskData } = useSelector((state) => state?.maintainedReducer);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    useEffect(() => {
        dispatch(getStaffData());
        dispatch(getBoatData());
        dispatch(getSupplierData());
    }, []);

    const initialState = {
        description: "",
        time_alloted: "",
        quoted_value: "",
        boatId: '',
        assignStaffId: '',
        supplierId: '',
        date_scheduled_from: "",
        date_scheduled_to: "",
        isRecurring: ''
    };

    const onHandleCreateTask = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        resetForm();
    };

    console.log({ supplier_data })
    // if (isLoading || isLoading1) {
    //     return <Loader />
    // }
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
                                        <th>S.No.</th>
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
                                <Formik
                                    initialValues={initialState}
                                    validationSchema={CreateTaskSchema}
                                    onSubmit={(values, actions) => {
                                        onHandleCreateTask(values, actions);
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        resetForm
                                    }) => (
                                        <form>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Assign To </strong><span className="ct_required_star">*</span></label>
                                                        <select
                                                            id="assignStaffId"
                                                            className="form-control"
                                                            value={values.assignStaffId}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">----Select Staff Member----</option>
                                                            {staff_data && staff_data?.map((item) => (
                                                                <option value={item?.id}>{item?.full_name ?? ''} - {item?.role ?? ''}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Maintenance Item Description</strong> <span className="ct_required_star">*</span></label>
                                                        <input
                                                            id="description"
                                                            value={values.description}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Time Allocated(Hours)</strong> <span className="ct_required_star">*</span></label>
                                                        <input
                                                            id="time_alloted"
                                                            value={values.time_alloted}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Quoted Value </strong> <span className="ct_required_star">*</span></label>
                                                        <input
                                                            id="quoted_value"
                                                            value={values.quoted_value}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="number"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Boat Registration </strong><span className="ct_required_star">*</span></label>
                                                        <select
                                                            id="boatId"
                                                            className="form-control"
                                                            value={values.boatId}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">----Select Boat----</option>
                                                            {all_boats && all_boats?.map((item) => (
                                                                <option value={item?.id}>{item?.rego ?? ''} - {item?.name ?? ''}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1">
                                                            <strong>Supplier</strong><span className="ct_required_star">*</span></label>
                                                        <select
                                                            id="supplierId"
                                                            className="form-control"
                                                            value={values.supplierId}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">----Select Supplier----</option>
                                                            {supplier_data && supplier_data?.map((item) => (
                                                                <option value={item?.id}>{item?.company_name ?? ''}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Date Scheduled From </strong> <span className="ct_required_star">*</span></label>
                                                        <input
                                                            id="date_scheduled_from"
                                                            type="date"
                                                            className="form-control"
                                                            value={values.date_scheduled_from}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Date Scheduled To </strong> <span className="ct_required_star">*</span></label>
                                                        <input
                                                            id="date_scheduled_to"
                                                            type="date"
                                                            className="form-control"
                                                            value={values.date_scheduled_to}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="modal-footer justify-content-center border-0">
                                                    <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal"
                                                        onClick={() => resetForm({ values: initialState })}>Cancel</button>
                                                    <button type="button ct_" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                                                        onClick={handleSubmit}
                                                        data-bs-dismiss={values?.assignStaffId != '' && Object?.keys(errors)?.length == 0 && "modal"}
                                                    >Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduledMaintenance;
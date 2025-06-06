import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Formik } from 'formik';
import { AddLeadSchema } from '../auth/Schema';
import ErrorMessage from '../components/ErrorMessage';
import { AddLeads, getAllLeadsData, recouringReminder, UpdateLeads, UpdateRecouring } from '../redux/actions/maintainedBoatsActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { pipViewDate, pipViewDate4 } from '../auth/Pip';
import ReactPagination from '../layout/ReactPagination';
import PaginationDropdown from '../layout/PaginationDropdown';
import { pageRoutes } from '../routes/PageRoutes';

const LeadReceived = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isToggle, setIsToggle] = useState(false);
    const [cdsData, setCdsData] = useState();
    const { isLoading2, allLeads, recouringData } = useSelector((state) => state?.maintainedReducer);
    const [leadDetails, setLeadDetails] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const [taskDetails, setTaskDetails] = useState();
    const [usersPerPage, setUserPerPages] = useState(5);
    const [currentPage2, setCurrentPage2] = useState(0);
    const [usersPerPage2, setUserPerPages2] = useState(5);

    const displayUsers = allLeads?.slice(
        currentPage * usersPerPage,
        (currentPage + 1) * usersPerPage
    );

    const displayUsers2 = recouringData?.slice(
        currentPage2 * usersPerPage2,
        (currentPage2 + 1) * usersPerPage2
    );

    const initialState = {
        client_name: '',
        client_contact_number: '',
        notes: ''
    };

    useEffect(() => {
        dispatch(getAllLeadsData());
        dispatch(recouringReminder());
    }, []);

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    const onHandleAddLead = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        resetForm();
        const callback = (response) => {
            if (response.success) {
                dispatch(getAllLeadsData());
            }
        };
        const data = {
            client_name: values.client_name.trim(),
            client_contact_number: `${values.client_contact_number}`,
            notes: values.notes ?? ''
        }
        dispatch(AddLeads({ payload: data, callback }));
    };

    const onHandleUpdateLead = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        resetForm();
        setLeadDetails();
        const callback = (response) => {
            if (response.success) {
                dispatch(getAllLeadsData());
            }
        };
        const data = {
            id: values?.id,
            client_name: values.client_name.trim(),
            client_contact_number: `${values.client_contact_number}`,
            notes: values.notes ?? '',
            status: values.status
        }
        dispatch(UpdateLeads({ payload: data, callback }));
    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const handlePageClick2 = (data) => {
        setCurrentPage2(data.selected);
    };

    const handleChangeStatus = (val, item) => {
        console.log({ val, item }, "val, item")
        const callback = (response) => {
            if (response.success) {
                dispatch(recouringReminder());
            }
        };
        const data = {
            id: item?.id,
            status: val
        }
        dispatch(UpdateRecouring({ payload: data, callback }));
    };

    if (isLoading2) {
        return <Loader />
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="quick-leads" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                            <h4 className="mb-0 ct_fs_24 ct_fw_600">Quick Leads </h4>
                            <button className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22 mx-0" data-bs-toggle="modal" data-bs-target="#ct_new_lead">Add Lead</button>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table ct_project_table ct_custom_table_main">
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th className="ct_ff_roboto">Client Name</th>
                                        <th className="ct_ff_roboto">Contact Number</th>
                                        <th className="ct_ff_roboto">Notes</th>
                                        <th className="ct_ff_roboto">Status</th>
                                        <th className="ct_ff_roboto">Action</th>
                                    </tr>
                                </thead>
                                {displayUsers?.length != 0 ?
                                    <tbody>
                                        {displayUsers?.length != 0 && displayUsers?.map((item, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{item?.client_name ?? 'NA'}</td>
                                                <td>{item?.client_contact_number ?? ''}</td>
                                                <td>{item?.notes != '' ? `${item?.notes?.slice(0, 28)}${item?.notes?.length >= 28 ? " ..." : ""}` : 'NA'}</td>
                                                <td>{item?.status == 0 ? "Open" : item?.status == 1 ? "Actioned" : item?.status == 2 && "Contacted"}</td>
                                                <td className="text-end ct_fw_600">
                                                    <div className='d-flex align-items-center gap-3 justify-content-end'>
                                                        <i className="fa-solid fa-eye ct_pointer_curser"
                                                            onClick={() => setLeadDetails({
                                                                id: item?.id,
                                                                client_name: item?.client_name,
                                                                client_contact_number: item?.client_contact_number,
                                                                notes: item?.notes,
                                                                status: item?.status
                                                            })}
                                                            data-bs-toggle="modal" data-bs-target="#ct_view_leades">
                                                        </i>
                                                        <i className="fa-solid fa-pen ct_pointer_curser"
                                                            onClick={() => setLeadDetails({
                                                                id: item?.id,
                                                                client_name: item?.client_name,
                                                                client_contact_number: item?.client_contact_number,
                                                                notes: item?.notes,
                                                                status: item?.status
                                                            })}
                                                            data-bs-toggle="modal" data-bs-target="#ct_update_lead">
                                                        </i>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    :
                                    <tfoot>
                                        <tr>
                                            <td className="text-center bg-transparent border-0" colSpan="7">
                                                <div className="text-center">
                                                    <p className="mb-0 mt-3 text-center">No leads found</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                }
                            </table>
                        </div>
                        <div className="mt-3">
                            {allLeads?.length >= 5 &&
                                allLeads?.length > 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                    <PaginationDropdown
                                        onChange={(val) => {
                                            setUserPerPages(val);
                                            setCurrentPage(0);
                                        }}
                                    />
                                    <ReactPagination
                                        pageCount={Math.ceil(
                                            allLeads.length / usersPerPage
                                        )}
                                        onPageChange={handlePageClick}
                                        currentPage={currentPage}
                                    />
                                </div>
                            }
                        </div>
                        <div className="mt-4">
                            <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                <h4 className="mb-0 ct_fs_24 ct_fw_600">Recurring Business Reminder </h4>
                            </div>
                            <div className="table-responsive mt-3">
                                <table className="table ct_project_table ct_custom_table_main">
                                    <thead>
                                        <tr>
                                            <th>S.No.</th>
                                            <th className="ct_ff_roboto">Client Name</th>
                                            <th className="ct_ff_roboto">Contact Number</th>
                                            <th>Task Completed</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {displayUsers2?.length != 0 ?
                                        <tbody>
                                            {displayUsers2?.length != 0 &&
                                                displayUsers2?.map((item, i) => (
                                                    <tr
                                                        onClick={() => setTaskDetails({
                                                            id: item?.id,
                                                            boatId: item?.boat?.rego,
                                                            description: item?.description,
                                                            time_alloted: item?.time_alloted,
                                                            quoted_value: item?.quoted_value,
                                                            assignStaffId: item?.assign_to,
                                                            supplierId: item?.assign_to == "OUTSOURCED" ? item?.supplier?.company_name : item?.assign_to == "STAFF" && item?.staff?.full_name,
                                                            date_scheduled_from: pipViewDate4(item?.date_scheduled_from),
                                                            date_scheduled_to: pipViewDate4(item?.date_scheduled_to),
                                                            completed_at: item?.completed_at ? pipViewDate4(item?.completed_at) : '',
                                                            status: item?.status,
                                                            ct_checkbox_cbx: item?.isRecurring == 0 ? false : true
                                                        })}>
                                                        <td>{i + 1}</td>
                                                        <td>{item?.boat?.owners_name ?? ''}</td>
                                                        <td>{item?.boat?.phone_no ?? ''}</td>
                                                        <td>{item?.description ?? ''}</td>
                                                        <td>{pipViewDate(item?.completed_at)}</td>
                                                        <td>
                                                            <div className='d-flex align-items-center gap-3'>
                                                                <select
                                                                    className="form-control"
                                                                    id="status"
                                                                    value={item?.contacted_status}
                                                                    onChange={(e) => handleChangeStatus(e.target.value, item)}
                                                                >
                                                                    <option value="0">Open</option>
                                                                    <option value="1">Actioned</option>
                                                                    <option value="2">Contacted</option>
                                                                </select>
                                                                {/* </td>
                                                        <td className="text-end"> */}
                                                                <i className="fa-solid fa-eye" style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#ct_view_task12" onClick={() => setCdsData(item)}></i>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                        :
                                        <tfoot>
                                            <tr>
                                                <td className="text-center bg-transparent border-0" colSpan="7">
                                                    <div className="text-center">
                                                        <p className="mb-0 mt-3 text-center">No upcoming business reminder</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    }
                                </table>
                            </div>
                            <div className="mt-3">
                                {recouringData?.length >= 5 &&
                                    recouringData?.length > 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                        <PaginationDropdown
                                            onChange={(val) => {
                                                setUserPerPages2(val);
                                                setCurrentPage2(0);
                                            }}
                                        />
                                        <ReactPagination
                                            pageCount={Math.ceil(
                                                recouringData.length / usersPerPage
                                            )}
                                            onPageChange={handlePageClick2}
                                            currentPage={currentPage2}
                                        />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade Committed_Price" id="ct_new_lead" tabindex="-1" aria-labelledby="ct_new_leadLabel" aria-hidden="true" data-bs-backdrop='static' data-bs-keyboard="false">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Add Lead</strong></h4>
                                <Formik
                                    initialValues={initialState}
                                    validationSchema={AddLeadSchema}
                                    onSubmit={(values, actions) => {
                                        onHandleAddLead(values, actions);
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
                                                        <label className="mb-1"><strong>Client Name</strong> <span className="ct_required_star">*</span></label>
                                                        <input
                                                            id="client_name"
                                                            type="text"
                                                            className="form-control"
                                                            value={values.client_name}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="client_name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Contact Number </strong> <span className="ct_required_star">*</span></label>
                                                        <input
                                                            id="client_contact_number"
                                                            type="text"
                                                            className="form-control"
                                                            value={values.client_contact_number}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            onWheel={() => document.activeElement.blur()}
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="client_contact_number"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Notes </strong></label>
                                                        <input
                                                            id="notes"
                                                            type="text"
                                                            className="form-control"
                                                            value={values.notes}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            onWheel={() => document.activeElement.blur()}
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="notes"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="modal-footer justify-content-center border-0">
                                                    <button type="button" onClick={() => resetForm({ values: initialState })} className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal">Cancel</button>
                                                    <button type="button ct_" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                                                        data-bs-dismiss={values?.client_name != '' && Object?.keys(errors)?.length == 0 && "modal"}
                                                        onClick={handleSubmit}>Submit</button>
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

            <div className="modal fade Committed_Price" id="ct_update_lead" tabindex="-1" aria-labelledby="ct_update_leadLabel" aria-hidden="true" data-bs-backdrop='static' data-bs-keyboard="false">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Update Lead</strong></h4>
                                {leadDetails &&
                                    <Formik
                                        initialValues={leadDetails}
                                        validationSchema={AddLeadSchema}
                                        onSubmit={(values, actions) => {
                                            onHandleUpdateLead(values, actions);
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
                                                            <label className="mb-1"><strong>Client Name</strong> <span className="ct_required_star">*</span></label>
                                                            <input
                                                                id="client_name"
                                                                type="text"
                                                                className="form-control"
                                                                value={values.client_name}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="client_name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1"><strong>Contact Number </strong> <span className="ct_required_star">*</span></label>
                                                            <input
                                                                id="client_contact_number"
                                                                type="text"
                                                                className="form-control"
                                                                value={values.client_contact_number}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                onWheel={() => document.activeElement.blur()}
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="client_contact_number"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1"><strong>Notes</strong></label>
                                                            <input
                                                                id="notes"
                                                                type="text"
                                                                className="form-control"
                                                                value={values.notes}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                onWheel={() => document.activeElement.blur()}
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="notes"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1"><strong>Status</strong> <span className="ct_required_star">*</span></label>
                                                            <select
                                                                className="form-control"
                                                                id="status"
                                                                value={values?.status}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                            >
                                                                <option value="0">Open</option>
                                                                <option value="1">Actioned</option>
                                                                <option value="2">Contacted</option>
                                                            </select>
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="status"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer justify-content-center border-0">
                                                        <button type="button" onClick={() => setLeadDetails()} className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal">Cancel</button>
                                                        <button type="button ct_" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                                                            data-bs-dismiss={values?.client_name != '' && Object?.keys(errors)?.length == 0 && "modal"}
                                                            onClick={handleSubmit}>Update</button>
                                                    </div>
                                                </div>
                                            </form>
                                        )}
                                    </Formik>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade Committed_Price" id="ct_view_leades" tabindex="-1" aria-labelledby="ct_view_leadesLabel" aria-hidden="true" data-bs-backdrop='static' data-bs-keyboard="false">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Leads Detail</strong></h4>
                                {leadDetails &&
                                    <Formik
                                        initialValues={leadDetails}
                                        validationSchema={AddLeadSchema}
                                        onSubmit={(values, actions) => {
                                            onHandleUpdateLead(values, actions);
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
                                                            <label className="mb-1"><strong>Client Name</strong></label>
                                                            <input
                                                                id="client_name"
                                                                type="text"
                                                                className="form-control"
                                                                value={values.client_name}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1"><strong>Contact Number </strong></label>
                                                            <input
                                                                id="client_contact_number"
                                                                type="text"
                                                                className="form-control"
                                                                value={values.client_contact_number}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1"><strong>Notes</strong></label>
                                                            <textarea
                                                                id="notes"
                                                                type="text"
                                                                className="form-control"
                                                                value={values.notes}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1"><strong>Status</strong></label>
                                                            <input
                                                                id="notes"
                                                                type="text"
                                                                className="form-control"
                                                                value={values.status == 0 ? "Open" : values.status == 1 ? "Actioned" : "Contacted"}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer justify-content-center border-0">
                                                        <button type="button" onClick={() => setLeadDetails()} className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </form>
                                        )}
                                    </Formik>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade Committed_Price" id="ct_view_task12" tabindex="-1" aria-labelledby="ct_view_task12Label" aria-hidden="true" data-bs-backdrop='static' data-bs-keyboard="false">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Maintenance Task Details</strong></h4>
                                {taskDetails &&
                                    <form>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Assign To </strong></label>
                                                    <input
                                                        type="text"
                                                        id="assignStaffId"
                                                        className="form-control"
                                                        value={taskDetails.assignStaffId == "STAFF" ? "Internal Staff" : taskDetails.assignStaffId == "OUTSOURCED" ? "Out Source" : ''}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Maintenance Item Description</strong> </label>
                                                    <textarea
                                                        value={taskDetails.description}
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Time Allocated(Hours)</strong> </label>
                                                    <input
                                                        type="number"
                                                        id="time_alloted"
                                                        className="form-control"
                                                        onWheel={() => document.activeElement.blur()}
                                                        value={taskDetails.time_alloted}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Quoted Value </strong> </label>
                                                    <input
                                                        id="quoted_value"
                                                        value={taskDetails.quoted_value}
                                                        type="number"
                                                        className="form-control"
                                                        onWheel={() => document.activeElement.blur()}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Boat Registration </strong></label>
                                                    <textarea
                                                        type="text"
                                                        id="boatId"
                                                        className="form-control"
                                                        value={taskDetails.boatId ?? ''}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            {
                                                taskDetails.assignStaffId == "STAFF" ?
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1">
                                                                <strong>Staff</strong></label>
                                                            <input
                                                                type="text"
                                                                id="supplierId"
                                                                className="form-control"
                                                                value={taskDetails?.supplierId ?? ''}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    :
                                                    taskDetails.assignStaffId == "OUTSOURCED" &&
                                                    < div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1">
                                                                <strong>Supplier</strong></label>
                                                            <input
                                                                type="text"
                                                                id="supplierId"
                                                                className="form-control"
                                                                value={taskDetails?.supplierId ?? ''}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                            }
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Date Scheduled From </strong> </label>
                                                    <input
                                                        id="date_scheduled_from"
                                                        type="date"
                                                        className="form-control"
                                                        value={taskDetails.date_scheduled_from}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Date Scheduled To </strong> </label>
                                                    <input
                                                        id="date_scheduled_to"
                                                        type="date"
                                                        className="form-control"
                                                        value={taskDetails.date_scheduled_to}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Completed At </strong> </label>
                                                    <input
                                                        id="completed_at"
                                                        type="date"
                                                        className="form-control"
                                                        value={taskDetails.completed_at}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                {/* <div className="form-group mb-3">

                                                    </div> */}
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group mb-3'>
                                                    <label>&nbsp;</label>
                                                    <div className="ct_checkbox_main"><div>
                                                        <input
                                                            type="checkbox"
                                                            id="ct_checkbox_cbx"
                                                            className="ct_hidden-xs-up"
                                                            value={taskDetails.ct_checkbox_cbx}
                                                            checked={taskDetails.ct_checkbox_cbx}
                                                            readOnly
                                                        /><label for="ct_checkbox_cbx" className="ct_checkbox_cbx"></label></div><p className="mb-0">Is Recurring</p></div>
                                                </div>
                                            </div>
                                            <div className="modal-footer justify-content-center border-0">
                                                <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal"
                                                    onClick={() => setTaskDetails()}>Close</button>
                                                <button
                                                    type="button ct_"
                                                    className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                                                    onClick={() => navigate(pageRoutes?.cds_job_service, { state: { data: cdsData, isShow: false } })}
                                                    data-bs-dismiss="modal"
                                                >
                                                    View CDS Jobsheet
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default LeadReceived;
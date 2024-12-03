import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Formik } from 'formik';
import { AddLeadSchema } from '../auth/Schema';
import ErrorMessage from '../components/ErrorMessage';
import { AddLeads, getAllLeadsData, recouringReminder, UpdateLeads } from '../redux/actions/maintainedBoatsActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { pipViewDate } from '../auth/Pip';
import ReactPagination from '../layout/ReactPagination';
import PaginationDropdown from '../layout/PaginationDropdown';

const LeadReceived = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isToggle, setIsToggle] = useState(false);
    const { isLoading1, allLeads, recouringData } = useSelector((state) => state?.maintainedReducer);
    const [leadDetails, setLeadDetails] = useState();
    const [currentPage, setCurrentPage] = useState(0);
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

    if (isLoading1) {
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
                                        <th className="ct_ff_roboto">Status</th>
                                        <th className="ct_ff_roboto">Action</th>
                                    </tr>
                                </thead>
                                {displayUsers?.length != 0 ?
                                    <tbody>
                                        {displayUsers?.length != 0 && displayUsers?.map((item, i) => (
                                            <tr>
                                                <td className="ct_fw_600">{i + 1}</td>
                                                <td className="ct_fw_600">{item?.client_name ?? ''}</td>
                                                <td className="ct_fw_600">{item?.client_contact_number ?? ''}</td>
                                                <td className="ct_fw_600">{item?.status == 0 ? "Open" : item?.status == 1 ? "Actioned" : item?.status == 2 && "Contacted"}</td>
                                                <td className="text-end ct_fw_600">
                                                    <a href="javascript:void(0)"><i className="fa-solid fa-pen"
                                                        onClick={() => setLeadDetails({
                                                            id: item?.id,
                                                            client_name: item?.client_name,
                                                            client_contact_number: item?.client_contact_number,
                                                            status: item?.status
                                                        })}
                                                        data-bs-toggle="modal" data-bs-target="#ct_update_lead"
                                                    ></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    :
                                    <tfoot>
                                        <tr>
                                            <td className="text-center bg-transparent border-0" colSpan="7">
                                                <div className="text-center">
                                                    <p className="mb-0 mt-3 ct_fs_24 ct_fw_400 ct_ff_poppin ct_clr_8C98A9 text-center">Leads not found</p>
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

                                        </tr>
                                    </thead>
                                    {displayUsers2?.length != 0 ?
                                        <tbody>
                                            {displayUsers2?.length != 0 &&
                                                displayUsers2?.map((item, i) => (
                                                    <tr>
                                                        <td className="ct_fw_600">{i + 1}</td>
                                                        <td className="ct_fw_600">{item?.boat?.owners_name ?? ''}</td>
                                                        <td className="ct_fw_600">{item?.boat?.phone_no ?? ''}</td>
                                                        <td className="ct_fw_600">{item?.description ?? ''}</td>
                                                        <td className="text-end ct_fw_600">{pipViewDate(item?.completed_at)}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                        :
                                        <tfoot>
                                            <tr>
                                                <td className="text-center bg-transparent border-0" colSpan="7">
                                                    <div className="text-center">
                                                        <p className="mb-0 mt-3 ct_fs_24 ct_fw_400 ct_ff_poppin ct_clr_8C98A9 text-center">No upcoming business reminder</p>
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

            <div className="modal fade Committed_Price" id="ct_new_lead" tabindex="-1" aria-labelledby="ct_new_leadLabel" aria-hidden="true">
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

            <div className="modal fade Committed_Price" id="ct_update_lead" tabindex="-1" aria-labelledby="ct_update_leadLabel" aria-hidden="true">
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

        </div >
    )
}

export default LeadReceived;
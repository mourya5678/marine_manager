import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import {
  getActiveStaffData,
  getBoatData,
  getStaffData,
  getSupplierData,
} from "../redux/actions/staffActions";
import { pageRoutes } from "../routes/PageRoutes";
import { Formik } from "formik";
import { CreateTaskSchema } from "../auth/Schema";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import {
  CreateTask,
  getAllBoatTask,
  getAllTask,
  UpdateTask,
} from "../redux/actions/maintainedBoatsActions";
import { pipViewDate, pipViewDate4 } from "../auth/Pip";
import ReactPagination from "../layout/ReactPagination";
import PaginationDropdown from "../layout/PaginationDropdown";

const ScheduledMaintenance = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isToggle, setIsToggle] = useState(false);
  const { isLoading1, staff_active_data, all_boats, supplier_data } =
    useSelector((state) => state?.staffReducer);
  const { isLoading2, boatTaskData, allTasks } = useSelector(
    (state) => state?.maintainedReducer
  );
  const [taskDetails, setTaskDetails] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [usersPerPage, setUserPerPages] = useState(5);

  const displayUsers = allTasks?.slice(
    currentPage * usersPerPage,
    (currentPage + 1) * usersPerPage
  );

  const onHandleClick = () => {
    setIsToggle(!isToggle);
  };

  useEffect(() => {
    dispatch(getActiveStaffData());
    dispatch(getBoatData());
    dispatch(getSupplierData());
    dispatch(getAllTask());
    dispatch(getAllBoatTask());
  }, []);

  const initialState = {
    description: "",
    time_alloted: "",
    quoted_value: "",
    boatId: "",
    assignStaffId: "",
    supplierId: "",
    date_scheduled_from: "",
    date_scheduled_to: "",
    ct_checkbox_cbx: false,
    status: false,
    completed_at: "",
  };

  const onHandleCreateTask = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    resetForm();
    const callback = (response) => {
      if (response.success) dispatch(getAllTask());
    };
    let data;
    if (values?.assignStaffId == "STAFF") {
      data = {
        assigned_to: values?.assignStaffId,
        description: values?.description?.trim(),
        time_alloted: `${values?.time_alloted}`,
        quoted_value: `${values?.quoted_value}`,
        boatId: values?.boatId,
        assignStaffId: values?.supplierId,
        date_scheduled_from: values?.date_scheduled_from,
        date_scheduled_to: values?.date_scheduled_to,
        isRecurring: values?.ct_checkbox_cbx == true ? 1 : 0,
        status: values?.completed_at ? 1 : 0,
        completed_at: values?.completed_at,
      };
    } else if (values?.assignStaffId == "OUTSOURCED") {
      data = {
        assigned_to: values?.assignStaffId,
        description: values?.description?.trim(),
        time_alloted: `${values?.time_alloted}`,
        quoted_value: `${values?.quoted_value}`,
        boatId: values?.boatId,
        supplierId: values?.supplierId,
        date_scheduled_from: values?.date_scheduled_from,
        date_scheduled_to: values?.date_scheduled_to,
        isRecurring: values?.ct_checkbox_cbx == true ? 1 : 0,
        status: values?.completed_at ? 1 : 0,
        completed_at: values?.completed_at,
      };
    }
    dispatch(CreateTask({ payload: data, callback }));
  };

  const onHandleUpdateTask = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    const callback = (response) => {
      if (response.success) dispatch(getAllTask());
      setTaskDetails();
      resetForm();
    };
    let data;
    if (values?.assignStaffId == "STAFF") {
      data = {
        id: values.id,
        // assigned_to: values?.assignStaffId,
        description: values?.description?.trim(),
        time_alloted: `${values?.time_alloted}`,
        quoted_value: `${values?.quoted_value}`,
        boatId: values?.boatId,
        assignStaffId: values?.supplierId,
        date_scheduled_from: values?.date_scheduled_from,
        date_scheduled_to: values?.date_scheduled_to,
        isRecurring: values?.ct_checkbox_cbx == true ? 1 : 0,
        status: values?.completed_at ? 1 : 0,
        completed_at: values?.completed_at,
      };
    } else if (values?.assignStaffId == "OUTSOURCED") {
      data = {
        id: values.id,
        // assigned_to: values?.assignStaffId,
        description: values?.description?.trim(),
        time_alloted: `${values?.time_alloted}`,
        quoted_value: `${values?.quoted_value}`,
        boatId: values?.boatId,
        supplierId: values?.supplierId,
        date_scheduled_from: values?.date_scheduled_from,
        date_scheduled_to: values?.date_scheduled_to,
        isRecurring: values?.ct_checkbox_cbx == true ? 1 : 0,
        status: values?.completed_at ? 1 : 0,
        completed_at: values?.completed_at,
      };
    }
    // const data = {
    // };
    dispatch(UpdateTask({ payload: data, callback }));
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  if (isLoading1 || isLoading2) {
    return <Loader />;
  }

  return (
    <div className="ct_dashbaord_bg">
      <div className={`ct_dashbaord_main ${isToggle == false && "ct_active"}`}>
        <Sidebar path="maintenance" />
        <div className="ct_content_right">
          <Header onClick={onHandleClick} />
          <div className="ct_dashbaord_middle">
            <div className="ct_grid_2_1 justify-content-between">
              <h4 className="mb-0 ct_fs_24 ct_fw_600">All Maintenance </h4>
              <div className="ct_grid_3_1">
                <div className="ct_dark_grey_bg">
                  <div className="ct_btn_group">
                    {boatTaskData?.length != 0 && (
                      <select className="form-control ct_input_h_44 ab_pointer">
                        {boatTaskData?.length != 0 &&
                          boatTaskData?.map((item, i) => (
                            <option value={item?.id}>{item?.rego}</option>
                          ))}
                      </select>
                    )}
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes.task_review)}
                      className=" w-100 ct_white_space_nowrap ct_input_h_44 ct_custom_btm ct_line_height_22 "
                      style={{ paddingBlock: "12px" }}
                    >
                      Generate Invoice
                    </a>
                  </div>
                </div>
                <div>
                  <a
                    href="javascript:void(0)"
                    onClick={() => navigate(pageRoutes.maintained_boats)}
                    className="ct_outline_btn ct_outline_orange w-100 ct_white_space_nowrap text-center d-block d-lg-flex "
                  >
                    <span className="ct_orange_text ct_text_decoration_none">
                      Maintained Boats
                    </span>
                  </a>
                </div>
                <button
                  className="ct_custom_btm ct_input_h_44 py-0"
                  data-bs-toggle="modal"
                  data-bs-target="#ct_generate_invoice"
                >
                  + Create Task
                </button>
              </div>
            </div>
            <div className="table-responsive mt-3">
              <table className="table ct_project_table ct_custom_table_main">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th className="ct_ff_roboto">
                      Maintenance Item Description
                    </th>
                    <th className="ct_ff_roboto">Boat Registration</th>
                    <th className="ct_ff_roboto">Supplier</th>
                    <th className="ct_ff_roboto">Staff Allocated</th>
                    <th className="ct_ff_roboto">Date Scheduled</th>
                    <th className="ct_ff_roboto">Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {displayUsers?.length != 0 ? (
                  <tbody>
                    {displayUsers?.length != 0 &&
                      displayUsers?.map((item, i) => (
                        <tr>
                          <td>{i + 1}</td>
                          <td>
                            {item?.description
                              ? `${item?.description?.slice(0, 28)}${
                                  item?.description?.length >= 28 ? "..." : ""
                                }`
                              : ""}
                          </td>
                          <td>
                            {`${item?.boat?.rego ?? ""} - ${
                              item?.boat?.name ?? ""
                            }` ?? ""}
                          </td>
                          <td
                            className={
                              item?.supplier?.company_name ? "" : "ct_fw_600"
                            }
                          >
                            {item?.supplier?.company_name ?? "STAFF"}
                          </td>
                          <td
                            className={
                              item?.staff?.full_name ? "" : "ct_fw_600"
                            }
                          >
                            {item?.staff?.full_name ?? "OUTSOURCED"}
                          </td>
                          <td>{`${pipViewDate(
                            item?.date_scheduled_from
                          )} - ${pipViewDate(item?.date_scheduled_to)}`}</td>
                          <td className="ct_fw_600">
                            {item?.status == 1 ? "Completed" : "Active"}
                          </td>
                          <td className="text-end ct_action_btns">
                            {item?.status != 1 && (
                              <i
                                className="fa-solid fa-pen ab_pointer"
                                data-bs-toggle="modal"
                                data-bs-target="#ct_edit_task12"
                                onClick={() =>
                                  setTaskDetails({
                                    id: item?.id,
                                    boatId: item?.boatId,
                                    description: item?.description,
                                    time_alloted: item?.time_alloted,
                                    quoted_value: item?.quoted_value,
                                    assignStaffId: item?.assign_to,
                                    supplierId:
                                      item?.assign_to == "OUTSOURCED"
                                        ? item?.supplierId
                                        : item?.assign_to == "STAFF" &&
                                          item?.assignStaffId,
                                    date_scheduled_from: pipViewDate4(
                                      item?.date_scheduled_from
                                    ),
                                    date_scheduled_to: pipViewDate4(
                                      item?.date_scheduled_to
                                    ),
                                    completed_at: item?.completed_at
                                      ? pipViewDate4(item?.completed_at)
                                      : "",
                                    status: item?.status,
                                    ct_checkbox_cbx:
                                      item?.isRecurring == 0 ? false : true,
                                  })
                                }
                              ></i>
                            )}
                            <i
                              className="fa-solid fa-eye ms-2 ab_pointer"
                              data-bs-toggle="modal"
                              data-bs-target="#ct_view_task12"
                              onClick={() =>
                                setTaskDetails({
                                  id: item?.id,
                                  boatId: item?.boat?.rego,
                                  description: item?.description,
                                  time_alloted: item?.time_alloted,
                                  quoted_value: item?.quoted_value,
                                  assignStaffId: item?.assign_to,
                                  supplierId:
                                    item?.assign_to == "OUTSOURCED"
                                      ? item?.supplier?.company_name
                                      : item?.assign_to == "STAFF" &&
                                        item?.staff?.full_name,
                                  date_scheduled_from: pipViewDate4(
                                    item?.date_scheduled_from
                                  ),
                                  date_scheduled_to: pipViewDate4(
                                    item?.date_scheduled_to
                                  ),
                                  completed_at: item?.completed_at
                                    ? pipViewDate4(item?.completed_at)
                                    : "",
                                  status: item?.status,
                                  ct_checkbox_cbx:
                                    item?.isRecurring == 0 ? false : true,
                                })
                              }
                            ></i>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                ) : (
                  <tfoot>
                    <tr>
                      <td
                        className="text-center bg-transparent border-0"
                        colSpan="7"
                      >
                        <div className="text-center">
                          <p className="mb-0 mt-3 ct_fs_16 ct_fw_600 ct_ff_poppin ct_clr_8C98A9 text-center">
                            No maintenance found
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                )}
              </table>
            </div>
            <div className="mt-3">
              {allTasks?.length >= 5 && allTasks?.length > 0 && (
                <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                  <PaginationDropdown
                    onChange={(val) => {
                      setUserPerPages(val);
                      setCurrentPage(0);
                    }}
                  />
                  <ReactPagination
                    pageCount={Math.ceil(allTasks.length / usersPerPage)}
                    onPageChange={handlePageClick}
                    currentPage={currentPage}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade Committed_Price"
        id="ct_edit_task12"
        tabindex="-1"
        aria-labelledby="ct_edit_task12Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="pt-4">
                <h4 className="mb-4 text-center">
                  <strong>Update A Maintenance Task </strong>
                </h4>
                {taskDetails && (
                  <Formik
                    initialValues={taskDetails}
                    validationSchema={CreateTaskSchema}
                    onSubmit={(values, actions) => {
                      onHandleUpdateTask(values, actions);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      resetForm,
                    }) => (
                      <form>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group mb-3">
                              <label className="mb-1">
                                <strong>Assign To </strong>
                                <span className="ct_required_star">*</span>
                              </label>
                              <input
                                type="text"
                                id="assignStaffId"
                                className="form-control"
                                value={
                                  taskDetails.assignStaffId == "STAFF"
                                    ? "Internal Staff"
                                    : taskDetails.assignStaffId == "OUTSOURCED"
                                    ? "Out Source"
                                    : ""
                                }
                                readOnly
                              />
                              <ErrorMessage
                                errors={errors}
                                touched={touched}
                                fieldName="assignStaffId"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb-3">
                              <label className="mb-1">
                                <strong>Maintenance Item Description</strong>{" "}
                                <span className="ct_required_star">*</span>
                              </label>
                              <textarea
                                id="description"
                                value={values.description}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                              />
                              <ErrorMessage
                                errors={errors}
                                touched={touched}
                                fieldName="description"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group mb-3">
                              <label className="mb-1">
                                <strong>Time Allocated(Hours)</strong>{" "}
                                <span className="ct_required_star">*</span>
                              </label>
                              <input
                                type="number"
                                id="time_alloted"
                                className="form-control"
                                value={values.time_alloted}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                onWheel={() => document.activeElement.blur()}
                              />
                              <ErrorMessage
                                errors={errors}
                                touched={touched}
                                fieldName="time_alloted"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group mb-3">
                              <label className="mb-1">
                                <strong>Quoted Value </strong>{" "}
                                <span className="ct_required_star">*</span>
                              </label>
                              <input
                                id="quoted_value"
                                value={values.quoted_value}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="number"
                                className="form-control"
                                onWheel={() => document.activeElement.blur()}
                              />
                              <ErrorMessage
                                errors={errors}
                                touched={touched}
                                fieldName="quoted_value"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb-3">
                              <label className="mb-1">
                                <strong>Boat Registration </strong>
                                <span className="ct_required_star">*</span>
                              </label>
                              <select
                                id="boatId"
                                className="form-control"
                                value={values.boatId}
                                onBlur={handleBlur}
                                onChange={handleChange}
                              >
                                <option value="">----Select Boat----</option>
                                {all_boats &&
                                  all_boats?.map((item) => (
                                    <option value={item?.id}>
                                      {item?.rego ?? ""} - {item?.name ?? ""}
                                    </option>
                                  ))}
                              </select>
                              <ErrorMessage
                                errors={errors}
                                touched={touched}
                                fieldName="boatId"
                              />
                            </div>
                          </div>
                          {values.assignStaffId == "STAFF" ? (
                            <div className="col-md-12">
                              <div className="form-group mb-3">
                                <label className="mb-1">
                                  <strong>Staff</strong>
                                  <span className="ct_required_star">*</span>
                                </label>
                                <input
                                  type="text"
                                  id="supplierId"
                                  className="form-control"
                                  value={
                                    staff_active_data &&
                                    staff_active_data?.map(
                                      (item) =>
                                        item?.id == values?.supplierId &&
                                        `${item?.full_name ?? ""} - ${
                                          item?.role ?? ""
                                        }`
                                    )
                                  }
                                  readOnly
                                />
                              </div>
                            </div>
                          ) : (
                            values.assignStaffId == "OUTSOURCED" && (
                              <div className="col-md-12">
                                <div className="form-group mb-3">
                                  <label className="mb-1">
                                    <strong>Supplier</strong>
                                    <span className="ct_required_star">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    id="supplierId"
                                    className="form-control"
                                    value={
                                      supplier_data &&
                                      supplier_data?.map(
                                        (item) =>
                                          item?.id == values?.supplierId &&
                                          item?.company_name
                                      )
                                    }
                                    readOnly
                                  />
                                </div>
                              </div>
                            )
                          )}
                          <div className="col-md-6">
                            <div className="form-group mb-3">
                              <label className="mb-1">
                                <strong>Date Scheduled From </strong>{" "}
                                <span className="ct_required_star">*</span>
                              </label>
                              <input
                                id="date_scheduled_from"
                                type="date"
                                className="form-control"
                                value={values.date_scheduled_from}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                onKeyDown={(e) => e.preventDefault()}
                              />
                              <ErrorMessage
                                errors={errors}
                                touched={touched}
                                fieldName="date_scheduled_from"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group mb-3">
                              <label className="mb-1">
                                <strong>Date Scheduled To </strong>{" "}
                                <span className="ct_required_star">*</span>
                              </label>
                              <input
                                id="date_scheduled_to"
                                type="date"
                                className="form-control"
                                value={values.date_scheduled_to}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                onKeyDown={(e) => e.preventDefault()}
                              />
                              <ErrorMessage
                                errors={errors}
                                touched={touched}
                                fieldName="date_scheduled_to"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group mb-3">
                              <label className="mb-1">
                                <strong>Completed At </strong>{" "}
                                <span className="ct_required_star">*</span>
                              </label>
                              <input
                                id="completed_at"
                                type="date"
                                className="form-control"
                                value={values.completed_at}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                onKeyDown={(e) => e.preventDefault()}
                              />
                              <ErrorMessage
                                errors={errors}
                                touched={touched}
                                fieldName="completed_at"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            {/* <div className="form-group mb-3">

                                                    </div> */}
                          </div>
                          <div className="col-md-6">
                            <div className="form-group mb-3">
                              <label>&nbsp;</label>
                              <div className="ct_checkbox_main">
                                <div>
                                  <input
                                    type="checkbox"
                                    id="ct_checkbox_cbx"
                                    className="ct_hidden-xs-up"
                                    value={values.ct_checkbox_cbx}
                                    checked={values.ct_checkbox_cbx}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                  />
                                  <label
                                    for="ct_checkbox_cbx"
                                    className="ct_checkbox_cbx"
                                  ></label>
                                </div>
                                <p className="mb-0">Is Recurring</p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer justify-content-center border-0">
                            <button
                              type="button"
                              className="ct_outline_btn ct_outline_orange"
                              data-bs-dismiss="modal"
                              onClick={() => setTaskDetails()}
                            >
                              Cancel
                            </button>
                            <button
                              type="button ct_"
                              className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                              onClick={handleSubmit}
                              data-bs-dismiss={
                                values?.assignStaffId != "" &&
                                Object?.keys(errors)?.length == 0 &&
                                "modal"
                              }
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade Committed_Price"
        id="ct_generate_invoice"
        tabindex="-1"
        aria-labelledby="ct_generate_invoiceLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="pt-4">
                <h4 className="mb-4 text-center">
                  <strong>Create A Maintenance Task </strong>
                </h4>
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
                    resetForm,
                  }) => (
                    <form>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group mb-3">
                            <label className="mb-1">
                              <strong>Assign To </strong>
                              <span className="ct_required_star">*</span>
                            </label>
                            <select
                              id="assignStaffId"
                              className="form-control"
                              value={values.assignStaffId}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            >
                              <option value="">----Assign To----</option>
                              <option value="STAFF">Internal Staff</option>
                              <option value="OUTSOURCED">Out Source</option>
                            </select>
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="assignStaffId"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mb-3">
                            <label className="mb-1">
                              <strong>Maintenance Item Description</strong>{" "}
                              <span className="ct_required_star">*</span>
                            </label>
                            <textarea
                              id="description"
                              value={values.description}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="text"
                              className="form-control"
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="description"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label className="mb-1">
                              <strong>Time Allocated(Hours)</strong>{" "}
                              <span className="ct_required_star">*</span>
                            </label>
                            <input
                              type="number"
                              id="time_alloted"
                              className="form-control"
                              value={values.time_alloted}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              onWheel={() => document.activeElement.blur()}
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="time_alloted"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label className="mb-1">
                              <strong>Quoted Value </strong>{" "}
                              <span className="ct_required_star">*</span>
                            </label>
                            <input
                              id="quoted_value"
                              value={values.quoted_value}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="number"
                              className="form-control"
                              onWheel={() => document.activeElement.blur()}
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="quoted_value"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mb-3">
                            <label className="mb-1">
                              <strong>Boat Registration </strong>
                              <span className="ct_required_star">*</span>
                            </label>
                            <select
                              id="boatId"
                              className="form-control"
                              value={values.boatId}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            >
                              <option value="">----Select Boat----</option>
                              {all_boats &&
                                all_boats?.map((item) => (
                                  <option value={item?.id}>
                                    {item?.rego ?? ""} - {item?.name ?? ""}
                                  </option>
                                ))}
                            </select>
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="boatId"
                            />
                          </div>
                        </div>
                        {values.assignStaffId != "" &&
                        values.assignStaffId == "STAFF" ? (
                          <div className="col-md-12">
                            <div className="form-group mb-3">
                              <label className="mb-1">
                                <strong>Staff</strong>
                                <span className="ct_required_star">*</span>
                              </label>
                              <select
                                id="supplierId"
                                className="form-control"
                                value={values.supplierId}
                                onBlur={handleBlur}
                                onChange={handleChange}
                              >
                                <option value="">----Select Staff----</option>
                                {staff_active_data &&
                                  staff_active_data?.map((item) => (
                                    <option value={item?.id}>
                                      {item?.full_name ?? ""} -{" "}
                                      {item?.role ?? ""}
                                    </option>
                                  ))}
                              </select>
                              <ErrorMessage
                                errors={errors}
                                touched={touched}
                                fieldName="supplierId"
                              />
                            </div>
                          </div>
                        ) : (
                          values.assignStaffId == "OUTSOURCED" && (
                            <div className="col-md-12">
                              <div className="form-group mb-3">
                                <label className="mb-1">
                                  <strong>Supplier</strong>
                                  <span className="ct_required_star">*</span>
                                </label>
                                <select
                                  id="supplierId"
                                  className="form-control"
                                  value={values.supplierId}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                >
                                  <option value="">
                                    ----Select Supplier----
                                  </option>
                                  {supplier_data &&
                                    supplier_data?.map((item) => (
                                      <option value={item?.id}>
                                        {item?.company_name ?? ""}
                                      </option>
                                    ))}
                                </select>
                                <ErrorMessage
                                  errors={errors}
                                  touched={touched}
                                  fieldName="supplierId"
                                />
                              </div>
                            </div>
                          )
                        )}
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label className="mb-1">
                              <strong>Date Scheduled From </strong>{" "}
                              <span className="ct_required_star">*</span>
                            </label>
                            <input
                              id="date_scheduled_from"
                              type="date"
                              className="form-control"
                              value={values.date_scheduled_from}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              onKeyDown={(e) => e.preventDefault()}
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="date_scheduled_from"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label className="mb-1">
                              <strong>Date Scheduled To </strong>{" "}
                              <span className="ct_required_star">*</span>
                            </label>
                            <input
                              id="date_scheduled_to"
                              type="date"
                              className="form-control"
                              value={values.date_scheduled_to}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              onKeyDown={(e) => e.preventDefault()}
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="date_scheduled_to"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label className="mb-1">
                              <strong>Completed At </strong>{" "}
                              <span className="ct_required_star">*</span>
                            </label>
                            <input
                              id="completed_at"
                              type="date"
                              className="form-control"
                              value={values.completed_at}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              onKeyDown={(e) => e.preventDefault()}
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="completed_at"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          {/* <div className="form-group mb-3">

                                                    </div> */}
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label>&nbsp;</label>
                            <div className="ct_checkbox_main">
                              <div>
                                <input
                                  type="checkbox"
                                  id="ct_checkbox_cbx"
                                  className="ct_hidden-xs-up"
                                  value={values.ct_checkbox_cbx}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                />
                                <label
                                  for="ct_checkbox_cbx"
                                  className="ct_checkbox_cbx"
                                ></label>
                              </div>
                              <p className="mb-0">Is Recurring</p>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer justify-content-center border-0">
                          <button
                            type="button"
                            className="ct_outline_btn ct_outline_orange"
                            data-bs-dismiss="modal"
                            onClick={() => resetForm({ values: initialState })}
                          >
                            Cancel
                          </button>
                          <button
                            type="button ct_"
                            className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                            onClick={handleSubmit}
                            data-bs-dismiss={
                              values?.assignStaffId != "" &&
                              Object?.keys(errors)?.length == 0 &&
                              "modal"
                            }
                          >
                            Submit
                          </button>
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

      <div
        className="modal fade Committed_Price"
        id="ct_view_task12"
        tabindex="-1"
        aria-labelledby="ct_view_task12Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="pt-4">
                <h4 className="mb-4 text-center">
                  <strong>Maintenance Task Details</strong>
                </h4>
                {taskDetails && (
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group mb-3">
                          <label className="mb-1">
                            <strong>Assign To </strong>
                          </label>
                          <input
                            type="text"
                            id="assignStaffId"
                            className="form-control"
                            value={
                              taskDetails.assignStaffId == "STAFF"
                                ? "Internal Staff"
                                : taskDetails.assignStaffId == "OUTSOURCED"
                                ? "Out Source"
                                : ""
                            }
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-3">
                          <label className="mb-1">
                            <strong>Maintenance Item Description</strong>{" "}
                          </label>
                          <textarea
                            value={taskDetails.description}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label className="mb-1">
                            <strong>Time Allocated(Hours)</strong>{" "}
                          </label>
                          <input
                            type="number"
                            id="time_alloted"
                            className="form-control"
                            value={taskDetails.time_alloted}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label className="mb-1">
                            <strong>Quoted Value </strong>{" "}
                          </label>
                          <input
                            id="quoted_value"
                            value={taskDetails.quoted_value}
                            type="number"
                            className="form-control"
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-3">
                          <label className="mb-1">
                            <strong>Boat Registration </strong>
                          </label>
                          <textarea
                            type="text"
                            id="boatId"
                            className="form-control"
                            value={taskDetails.boatId ?? ""}
                            readOnly
                          />
                        </div>
                      </div>
                      {taskDetails.assignStaffId == "STAFF" ? (
                        <div className="col-md-12">
                          <div className="form-group mb-3">
                            <label className="mb-1">
                              <strong>Staff</strong>
                            </label>
                            <input
                              type="text"
                              id="supplierId"
                              className="form-control"
                              value={taskDetails?.supplierId ?? ""}
                              readOnly
                            />
                          </div>
                        </div>
                      ) : (
                        taskDetails.assignStaffId == "OUTSOURCED" && (
                          <div className="col-md-12">
                            <div className="form-group mb-3">
                              <label className="mb-1">
                                <strong>Supplier</strong>
                              </label>
                              <input
                                type="text"
                                id="supplierId"
                                className="form-control"
                                value={taskDetails?.supplierId ?? ""}
                                readOnly
                              />
                            </div>
                          </div>
                        )
                      )}
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label className="mb-1">
                            <strong>Date Scheduled From </strong>{" "}
                          </label>
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
                          <label className="mb-1">
                            <strong>Date Scheduled To </strong>{" "}
                          </label>
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
                          <label className="mb-1">
                            <strong>Completed At </strong>{" "}
                          </label>
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
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <label>&nbsp;</label>
                          <div className="ct_checkbox_main">
                            <div>
                              <input
                                type="checkbox"
                                id="ct_checkbox_cbx"
                                className="ct_hidden-xs-up"
                                value={taskDetails.ct_checkbox_cbx}
                                checked={taskDetails.ct_checkbox_cbx}
                                readOnly
                              />
                              <label
                                for="ct_checkbox_cbx"
                                className="ct_checkbox_cbx"
                              ></label>
                            </div>
                            <p className="mb-0">Is Recurring</p>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer justify-content-center border-0">
                        <button
                          type="button"
                          className="ct_outline_btn ct_outline_orange"
                          data-bs-dismiss="modal"
                          onClick={() => setTaskDetails()}
                        >
                          Close
                        </button>
                        <button
                          type="button ct_"
                          className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                          data-bs-dismiss="modal"
                        >
                          View CDS Jobsheet
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduledMaintenance;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { pipViewDate, pipViewDate4, pipViewDate5 } from "../auth/Pip";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import { assignBoatToDock, getAvailableBoats, getDockData } from "../redux/actions/staffActions";
import { pageRoutes } from "../routes/PageRoutes";
import { Formik } from "formik";
import { AssignBoatSchema } from "../auth/Schema";
import DatePicker from "react-multi-date-picker";
import ErrorMessage from "../components/ErrorMessage";
import TomorrowScheduledTask from "./TomorrowScheduledTask";

const BoatDocks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading1, all_docks, available_boats } = useSelector((state) => state?.staffReducer);
  const [isToggle, setIsToggle] = useState(false);
  const [dateValue, setDateValue] = useState();
  const [filterData, setFilterData] = useState();
  const [filterByDate, setFilterByDate] = useState();
  const [setDateError, setDataError] = useState();
  const [dockId, setDockId] = useState();
  const [disabledRanges, setDisableRages] = useState([]);
  const onHandleClick = () => {
    setIsToggle(!isToggle);
  };

  const initialState = {
    boatId: '',
  }

  const displayBoatData = all_docks?.filter((item) => {
    const filterDatass = filterData
      ? item?.name?.toLowerCase()?.includes(filterData?.toLowerCase())
      : true;
    const dateMatch = filterByDate
      ? pipViewDate4(item?.book_to) == filterByDate
      : true;
    return filterDatass && dateMatch;
  });

  const disableDates = (val) => {
    if (val?.length != 0) {
      let data = [];
      val?.map((item) => (
        data.push({
          start: new Date(new Date(item?.from).setHours(0, 0, 0, 0)),
          end: new Date(new Date(item?.to).setHours(23, 59, 59, 999))
        })
      ))
      setDisableRages(data);
    }
    else {
      setDisableRages([]);
    }
  };

  const disableMultiRanges = (currentDate) => {
    const jsDate = currentDate.toDate();
    return disabledRanges.some(
      (range) => {
        return jsDate >= range.start && jsDate <= range.end;
      }
    );
  };

  useEffect(() => {
    dispatch(getDockData());
    dispatch(getAvailableBoats());
  }, []);

  const handleBoatAssign = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    resetForm();
    const callback = (response) => {
      if (response.success) {
        dispatch(getDockData());
        dispatch(getAvailableBoats());
      }
    };
    if (dateValue) {

      const data = {
        boatId: values?.boatId,
        book_from: dateValue[0],
        book_to: dateValue[dateValue?.length - 1],
        dockId: dockId
      }
      dispatch(assignBoatToDock({ payload: data, callback }));
    } else {

    }
  };

  // const handleDateChange = (dates) => {
  //   const updatedDates = dates?.map((date) => new Date(date));
  //   setDateValue(updatedDates);
  // };

  const handleSelection = (selectedDates) => {
    if (!selectedDates.length) {
      setDateValue([]);
      return;
    };
    const sortedDates = selectedDates.sort((a, b) => a - b);
    const firstDate = sortedDates[0];
    const lastDate = sortedDates[sortedDates.length - 1];
    const newSelection = [];
    let isBlocked = false;
    for (
      let current = new Date(firstDate);
      current <= lastDate && !isBlocked;
      current.setDate(current.getDate() + 1)
    ) {
      const dateObject = new Date(current);
      if (disableMultiRanges({ toDate: () => dateObject })) {
        isBlocked = true;
        break;
      }
      newSelection.push(new Date(dateObject));
    }
    if (newSelection?.length > 1) {
      const date_selected = [newSelection[0], newSelection[newSelection?.length - 1]]
      setDateValue(date_selected);
    }
    else {
      setDateValue(newSelection);
    }
  };

  if (isLoading1) {
    return <Loader />;
  }
  return (
    <div className="ct_dashbaord_bg">
      <div className={`ct_dashbaord_main ${isToggle == false && "ct_active"}`}>
        <Sidebar path="docks" />
        <div className="ct_content_right">
          <Header onClick={onHandleClick} />
          <div className="ct_dashbaord_middle">
            <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap ct_flex_wrap_767">
              <ul className="d-flex align-items-center gap-3  ">
                <li className="ct_fs_24 ct_fw_700 ct_list_style_none">
                  All Docks
                </li>
                <li className=" ct_fw_700 ct_fs_24 ct_list_style_none ms-2"></li>
                <li className="ct_text_op_5 ct_fs_24 ct_fw_600">
                  {all_docks?.length ?? 0}{" "}
                  {`${all_docks?.length <= 1 ? "Dock" : "Docks"}`}{" "}
                </li>
              </ul>
              <div className="d-flex align-items-center gap-4 ct_flex_wrap_767 ct_wrap_100_1_main">
                <div className="position-relative ct_search_input ct_wrap_100_1">
                  <input
                    value={filterData}
                    onChange={(e) => setFilterData(e.target.value)}
                    type="text"
                    className="form-control ct_flex_1 pe-5 py-2"
                    placeholder="Search by dock name"
                  />
                  <i className="fa-solid fa-magnifying-glass "></i>
                </div>
                <a
                  href="javascript:void(0)"
                  onClick={() => navigate(pageRoutes.add_new_docks)}
                  className="ct_custom_btm ct_wrap_100_1 ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22"
                >
                  Add Dock
                </a>
              </div>
            </div>
            <div className="row mt-5">
              {
                displayBoatData?.length != 0 ? (
                  displayBoatData?.map((item, i) => (
                    <div className="col-xl-6 mb-4">
                      <div className="ct_boat_white_bg">
                        <a className="text-dark">
                          <div className="d-flex gap-2 flex-wrap align-items-start justify-content-between">
                            <div className="ct_boat_info_title">
                              <div className="ct_boat_info_icon_1">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M1.17571 5.24913C1.98734 4.28419 3.37885 3.8125 5.41663 3.8125H14.5833C16.6211 3.8125 18.0126 4.28419 18.8242 5.24913C19.628 6.20469 19.7044 7.46006 19.5756 8.63061L18.8878 15.9674C18.7868 16.9098 18.5502 17.943 17.7088 18.7117C16.8736 19.4748 15.5796 19.8542 13.6666 19.8542H6.3333C4.42035 19.8542 3.12637 19.4748 2.29116 18.7117C1.44972 17.943 1.21319 16.9098 1.11221 15.9674L1.11124 15.9583L0.42433 8.63063C0.295512 7.46008 0.37196 6.2047 1.17571 5.24913ZM2.22797 6.13421C1.79556 6.6483 1.67384 7.42076 1.79163 8.48522L1.7929 8.49665L2.47987 15.8254C2.57158 16.6773 2.76143 17.279 3.21857 17.6966C3.68273 18.1206 4.56125 18.4792 6.3333 18.4792H13.6666C15.4387 18.4792 16.3172 18.1206 16.7814 17.6966C17.2385 17.279 17.4284 16.6773 17.5201 15.8254L18.2082 8.48521C18.326 7.42075 18.2044 6.6483 17.772 6.13421C17.3461 5.62789 16.4597 5.1875 14.5833 5.1875H5.41663C3.54025 5.1875 2.65385 5.62789 2.22797 6.13421Z"
                                    fill="#E65F2B"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7.0608 2.71276C7.02186 3.01104 7.02075 3.35 7.02075 3.76658V4.49992C7.02075 4.87961 6.71295 5.18742 6.33325 5.18742C5.95356 5.18742 5.64575 4.87961 5.64575 4.49992L5.64575 3.74276C5.64573 3.35453 5.64571 2.93048 5.69737 2.53476C5.75091 2.12473 5.86562 1.68942 6.13436 1.30059C6.69969 0.482619 7.7353 0.145752 9.26659 0.145752H10.7333C12.2645 0.145752 13.3001 0.482619 13.8655 1.30059C14.1342 1.68942 14.2489 2.12473 14.3025 2.53476C14.3541 2.93048 14.3541 3.35453 14.3541 3.74277L14.3541 4.49992C14.3541 4.87961 14.0463 5.18742 13.6666 5.18742C13.2869 5.18742 12.9791 4.87961 12.9791 4.49992V3.76658C12.9791 3.35 12.978 3.01104 12.939 2.71276C12.9009 2.42068 12.8323 2.22406 12.7344 2.08237C12.5664 1.8393 12.1353 1.52075 10.7333 1.52075H9.26659C7.86454 1.52075 7.43348 1.8393 7.26549 2.08237C7.16756 2.22406 7.09894 2.42068 7.0608 2.71276Z"
                                    fill="#E65F2B"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.85486 10.6882C8.85415 10.7537 8.85414 10.8283 8.85414 10.9167V11.8608C8.85414 12.1189 8.85639 12.3087 8.8788 12.4698C8.90035 12.6246 8.93457 12.7 8.96358 12.7409C8.99593 12.7865 9.15715 12.9792 9.99997 12.9792C10.8466 12.9792 11.0059 12.7847 11.0376 12.7395C11.0667 12.6978 11.1009 12.6213 11.1221 12.4646C11.1441 12.3017 11.1458 12.111 11.1458 11.8517V10.9167C11.1458 10.8283 11.1458 10.7537 11.1451 10.6882C11.0796 10.6875 11.005 10.6875 10.9166 10.6875H9.0833C8.99489 10.6875 8.9203 10.6875 8.85486 10.6882ZM9.05319 9.3125C9.06324 9.31251 9.07327 9.31251 9.0833 9.31251H10.9166C10.9267 9.31251 10.9367 9.31251 10.9467 9.3125C11.1495 9.31246 11.3549 9.31241 11.5225 9.33104C11.6934 9.35002 11.9772 9.40078 12.2049 9.62846C12.4325 9.85613 12.4833 10.1399 12.5023 10.3108C12.5209 10.4784 12.5209 10.6839 12.5208 10.8866C12.5208 10.8966 12.5208 10.9066 12.5208 10.9167V11.862C12.5208 12.1 12.5208 12.3817 12.4847 12.649C12.4471 12.9263 12.365 13.241 12.1638 13.5283C11.7349 14.1407 10.9775 14.3542 9.99997 14.3542C9.02778 14.3542 8.27234 14.1435 7.84178 13.536C7.63933 13.2504 7.55553 12.9367 7.51692 12.6593C7.47918 12.3881 7.47914 12.1024 7.47914 11.8608V10.9167C7.47914 10.9066 7.47913 10.8966 7.47913 10.8866C7.47908 10.6839 7.47904 10.4784 7.49766 10.3108C7.51665 10.1399 7.56741 9.85613 7.79508 9.62846C8.02275 9.40078 8.30657 9.35002 8.47743 9.33104C8.64506 9.31241 8.85048 9.31246 9.05319 9.3125Z"
                                    fill="#E65F2B"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M19.4018 8.67893C19.6252 8.98601 19.5573 9.41598 19.2502 9.63931C17.0354 11.2501 14.505 12.2081 11.9192 12.5337C11.5425 12.5812 11.1987 12.3143 11.1512 11.9375C11.1038 11.5608 11.3707 11.217 11.7474 11.1695C14.1117 10.8718 16.4213 9.99653 18.4415 8.52729C18.7485 8.30397 19.1785 8.37186 19.4018 8.67893Z"
                                    fill="#E65F2B"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.83434 8.94232C1.0488 8.62899 1.47666 8.54884 1.78999 8.76329C3.75981 10.1115 5.98111 10.9241 8.24318 11.1774C8.62052 11.2197 8.89216 11.5598 8.84991 11.9371C8.80766 12.3145 8.46751 12.5861 8.09018 12.5439C5.60391 12.2655 3.16855 11.3731 1.01337 9.89797C0.700035 9.68351 0.619882 9.25565 0.83434 8.94232Z"
                                    fill="#E65F2B"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h4 className="ct_fs_20 ct_fw_600 mb-1">
                                  {item?.name ?? 'NA'}
                                </h4>
                              </div>
                            </div>
                            <button
                              className="ct_custom_btm w-auto px-4 py-2 ct_fw_500"
                              onClick={() => {
                                disableDates(item?.bookedDates)
                                setDockId(item?.id)
                              }}
                              data-bs-toggle="modal"
                              data-bs-target="#ct_assign_boat"
                            >
                              Assign Boat
                            </button>
                          </div>
                          {item?.DockBooking?.length != 0 ?
                            <div className="ab_pointer ct_boat_detail_12" onClick={() => navigate(pageRoutes.dock_details, { state: { data: item } })}>
                              <span className="ct_text_op_5">Boat No. {i + 1}</span>
                              <h4 className="ct_fs_20 ct_fw_600 mb-1 ct_fw_500">
                                {item?.DockBooking[0]?.boat?.name}
                              </h4>
                              <ul>
                                <li className="ct_textclr_7E7E7E">
                                  <span className={`me-2 ${new Date(item?.DockBooking[0]?.book_to).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0) ? "ct_green_status" :
                                    new Date(item?.DockBooking[0]?.book_to).setHours(0, 0, 0, 0) === new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0) ?
                                      "ct_bringle_status"
                                      :
                                      new Date(item?.DockBooking[0]?.book_to).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0) ?
                                        `ct_bringle_status` : item?.DockBooking[0]?.book_to ? `ct_bringle_status` : `ct_bringle_status`
                                    }`}></span>
                                  Scheduled for {new Date(item?.DockBooking[0]?.book_to).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0) ? "Scheduled for today" :
                                    new Date(item?.DockBooking[0]?.book_to).setHours(0, 0, 0, 0) === new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0) ?
                                      "Scheduled for tomorrow"
                                      :
                                      new Date(item?.DockBooking[0]?.book_to).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0) ?
                                        `Scheduled at ${pipViewDate(item?.DockBooking[0]?.book_to)}` : item?.DockBooking[0]?.book_to ? `Scheduled on ${pipViewDate(item?.DockBooking[0]?.book_to)}` : `Not scheduled yet`
                                  }
                                </li>
                              </ul>
                            </div>
                            :
                            <div className="ct_boat_detail_12">
                              Boat not assigned yet!
                            </div>
                          }
                        </a>
                        {item?.DockBooking?.length > 1 ?
                          <div className="mt-2">
                            <a href="javascript:void(0)" className="ct_orange_link" onClick={() => navigate(pageRoutes.dock_details, { state: { data: item } })}>
                              Upcoming {item?.DockBooking?.length - 1} boats
                            </a>
                          </div>
                          : ""}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-xl-12 col-lg-12 text-center">
                    <p className="mt-5 ct_fs_18 ct_fw_700">Dock not found</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade Committed_Price"
        id="ct_assign_boat"
        tabindex="-1"
        aria-labelledby="ct_assign_boatLabel" data-bs-backdrop='static' data-bs-keyboard="false"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="py-4">
                <h4 className="mb-4 text-center">
                  <strong>Assign Boat </strong>
                </h4>
                <Formik
                  initialValues={initialState}
                  validationSchema={AssignBoatSchema}
                  onSubmit={(values, action) => {
                    handleBoatAssign(values, action)
                  }}
                >{({
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
                          <label className="mb-1">
                            <strong>Select Boat</strong>{" "}
                            <span className="ct_required_star">*</span>
                          </label>
                          <select
                            className="form-control"
                            id="boatId"
                            value={values?.boatId}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          >
                            <option value="">----Select Boat----</option>
                            {available_boats && available_boats?.map((item) => (
                              <option value={item.id}>{item.name}</option>
                            ))}
                          </select>
                          <ErrorMessage className="d-block"
                            errors={errors}
                            touched={touched}
                            fieldName="boatId"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-3">
                          <label className="mb-1">
                            <strong>Select Date Range </strong>{" "}
                            <span className="ct_required_star">*</span>
                          </label>
                          <div className="d-flex gap-2 ct_flex_wrap_575">
                            <DatePicker className="form-control"
                              mapDays={({ date, disabled }) => {
                                const isDisabled = disableMultiRanges(date);
                                return {
                                  disabled: isDisabled || disabled,
                                  style: isDisabled
                                    ? { backgroundColor: "#ccc", color: "#fff" }
                                    : undefined,
                                };
                              }}
                              value={dateValue ?? ''}
                              range={true}
                              minDate={new Date()?.toISOString()?.split("T")[0]}
                              rangeHover={false}
                              numberOfMonths={2}
                              onChange={handleSelection}

                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer justify-content-center border-0 pb-0 px-0">
                      <button
                        type="button"
                        className="ct_outline_btn ct_outline_orange"
                        data-bs-dismiss="modal"
                        onClick={() => resetForm()}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                        onClick={handleSubmit}
                        data-bs-dismiss={values?.boatId != '' && Object?.keys(errors)?.length == 0 && "modal"}
                      >
                        Assign Boat
                      </button>
                    </div>
                  </form>
                )}
                </Formik>
                {/* <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label className="mb-1">
                          <strong>Select Boat</strong>{" "}
                          <span className="ct_required_star">*</span>
                        </label>
                        <select className="form-control">
                          <option value="">----Select Boat----</option>
                          {available_boats && available_boats?.map((item) => (
                            <option value={item.id}>{item.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label className="mb-1">
                          <strong>Select Date Range </strong>{" "}
                          <span className="ct_required_star">*</span>
                        </label>
                        <div className="d-flex align-items-center gap-2 ct_flex_wrap_575">
                          <input type="date" className="form-control" />
                          <p className="mb-0">To</p>
                          <input type="date" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer justify-content-center border-0 pb-0 px-0">
                    <button
                      type="button"
                      className="ct_outline_btn ct_outline_orange"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                      data-bs-dismiss="modal"
                    >
                      Assign Boat
                    </button>
                  </div>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoatDocks;

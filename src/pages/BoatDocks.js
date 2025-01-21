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
  const [setDateError, setDataError] = useState('');
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
    const callback = (response) => {
      if (response.success) {
        dispatch(getDockData());
        dispatch(getAvailableBoats());
      }
    };
    if (dateValue) {
      resetForm();
      setDataError('');
      const data = {
        boatId: values?.boatId,
        book_from: dateValue[0],
        book_to: dateValue[dateValue?.length - 1],
        dockId: dockId
      }
      dispatch(assignBoatToDock({ payload: data, callback }));
    } else {
      setDataError("Please select the date");
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
    setDataError('');
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
                                <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.36598 2.39041C2.40106 3.31134 0.786204 4.07723 0.776297 4.09274C0.756483 4.12374 1.06691 4.64157 1.18249 4.7749L1.24523 4.84623L4.59384 3.27723C6.43657 2.41211 7.96556 1.70514 7.99199 1.70514C8.01839 1.70514 9.54741 2.41211 11.3901 3.27723L14.7387 4.84623L14.8015 4.7749C14.927 4.62918 15.2308 4.12685 15.211 4.09583C15.1812 4.05243 8.05143 0.712891 7.98867 0.712891C7.96227 0.712891 6.33089 1.46638 4.36598 2.39041Z" fill="black" />
                                  <path d="M7.26829 3.34864C6.40308 3.41685 5.49162 3.6215 4.95993 3.86957L4.71887 3.9812L4.62641 4.27578C4.491 4.69748 4.31267 5.24631 4.14755 5.75173C4.06829 5.9905 3.96922 6.30369 3.92959 6.44322C3.88667 6.58585 3.83713 6.70678 3.81732 6.71299C3.47057 6.79359 2.44353 7.15638 2.28171 7.25252C2.24208 7.27731 2.24869 7.34555 2.32464 7.71143C2.37418 7.94708 2.43362 8.21996 2.45344 8.32229C2.47325 8.4215 2.50958 8.50834 2.52939 8.51764C2.54921 8.52383 2.69781 8.47422 2.85962 8.4091C3.29554 8.22927 4.41175 7.92848 5.10195 7.80136C5.4619 7.73624 6.4196 7.63701 7.08996 7.59359C7.98492 7.53778 9.53043 7.60601 10.5839 7.75173C11.2939 7.85096 12.5686 8.18276 13.1696 8.42771C13.3348 8.49592 13.4537 8.52694 13.4735 8.50834C13.49 8.49283 13.5329 8.32538 13.5692 8.13934C13.6056 7.9502 13.6617 7.68352 13.6914 7.54399C13.7244 7.40445 13.741 7.28043 13.7311 7.27113C13.6683 7.2091 12.5983 6.81841 12.3077 6.74708L12.136 6.70678L12.0435 6.3998C11.994 6.23236 11.8322 5.72383 11.6836 5.27113C11.5383 4.81841 11.3831 4.34399 11.3434 4.21685L11.2675 3.98741L11.0264 3.87266C10.5971 3.67113 9.85737 3.47887 9.16716 3.39515C8.68171 3.33624 7.72734 3.31143 7.26829 3.34864ZM7.68771 5.06027C7.6943 5.76415 7.68771 6.17034 7.66458 6.18276C7.64808 6.19206 7.32444 6.21685 6.94467 6.23236C6.17192 6.26957 5.62371 6.32538 5.01937 6.43701C4.53724 6.52382 4.52402 6.52383 4.52402 6.46801C4.52402 6.44322 4.61318 6.16724 4.71887 5.85406C4.94344 5.2029 5.01608 4.98585 5.12176 4.62306C5.21093 4.31917 5.1845 4.33778 5.77893 4.19206C6.38988 4.0401 7.08667 3.9409 7.47966 3.94708L7.6778 3.95329L7.68771 5.06027ZM9.41484 4.0308C9.81442 4.09283 10.4914 4.24787 10.6763 4.31917C10.782 4.36259 10.7886 4.3781 10.9174 4.8091C10.9934 5.05406 11.1321 5.47887 11.2278 5.75173C11.4359 6.34708 11.4722 6.47731 11.4491 6.49903C11.4392 6.50834 11.2708 6.48662 11.0726 6.45252C10.3032 6.30987 10.1381 6.29438 8.62888 6.21376L8.32176 6.19515V5.06336V3.92848L8.67842 3.9502C8.87324 3.96259 9.2035 3.9998 9.41484 4.0308Z" fill="black" />
                                  <path d="M6.52158 8.23613C5.71579 8.29815 4.81756 8.45008 4.02828 8.66094C3.87306 8.70436 3.70796 8.74466 3.66172 8.75706C3.52631 8.78497 2.88567 9.02373 2.82291 9.06715C2.76678 9.10436 2.80309 9.18187 3.25553 10.0439L3.74759 10.9772L4.08443 11.1012C4.26935 11.1695 4.43448 11.2253 4.45429 11.2253C4.4741 11.2253 4.7515 11.3152 5.07514 11.4299C5.39876 11.5416 5.81818 11.6811 6.00971 11.74C6.20124 11.802 6.44562 11.8826 6.5546 11.923C6.88815 12.0439 7.47267 12.2392 7.57174 12.2609L7.6609 12.2795V10.233V8.18652L7.35708 8.18962C7.18865 8.19273 6.81218 8.21443 6.52158 8.23613Z" fill="black" />
                                  <path d="M8.32227 10.233V12.2795L8.41472 12.2609C8.46426 12.2485 8.75818 12.1524 9.0653 12.047C9.37571 11.9385 9.78191 11.802 9.97346 11.7431C10.165 11.6842 10.5844 11.5416 10.9047 11.4299C11.2283 11.3183 11.5057 11.2253 11.5256 11.2253C11.5454 11.2253 11.7138 11.1695 11.8987 11.1012L12.2356 10.9772L12.7276 10.0439C13.2989 8.96483 13.2956 9.09506 12.7673 8.9028C12.1827 8.69194 10.9708 8.40669 10.2542 8.31055C9.8942 8.26404 8.85396 8.18652 8.56333 8.18652H8.32227V10.233Z" fill="black" />
                                  <path d="M0.759766 13.2374V13.7025L0.941395 13.7211C1.13293 13.7459 1.44006 13.87 1.80992 14.0777C2.3416 14.3723 2.7379 14.3692 3.29928 14.0653C3.95977 13.7087 4.21735 13.6343 4.5641 13.7025C4.78206 13.7459 4.96368 13.8204 5.41282 14.0591C5.73975 14.2359 5.93128 14.2948 6.17567 14.2948C6.43325 14.2948 6.60167 14.2359 7.09042 13.9847C7.88628 13.5754 8.09765 13.5754 8.89351 13.9847C9.38226 14.2359 9.55068 14.2948 9.80826 14.2948C10.0658 14.2948 10.2244 14.239 10.7494 13.9754C11.5585 13.5661 11.7666 13.5754 12.6714 14.056C13.2493 14.3661 13.6456 14.3723 14.1674 14.0808C14.5373 13.8731 14.851 13.7428 15.0359 13.7211C15.1317 13.7087 15.2175 13.6808 15.2308 13.6622C15.2638 13.6188 15.2638 13.3242 15.2374 13.0142C15.2143 12.7816 15.211 12.7754 15.1284 12.7754C14.9765 12.7754 14.7255 12.8653 14.2202 13.0979C13.5598 13.3986 13.5333 13.4049 13.3649 13.3832C13.289 13.3707 13.0182 13.2653 12.7639 13.1444C12.1893 12.8684 11.9053 12.7754 11.651 12.7754C11.3505 12.7754 11.1887 12.825 10.6174 13.0855C9.98991 13.3707 9.87761 13.4079 9.7158 13.38C9.64975 13.3707 9.37567 13.256 9.11147 13.132C8.51704 12.8498 8.27927 12.7754 7.99196 12.7754C7.70795 12.7754 7.44707 12.856 6.98473 13.0824C6.78659 13.1816 6.52571 13.2963 6.41012 13.3335C6.14263 13.4266 6.08318 13.4142 5.37319 13.0886C4.79526 12.825 4.63345 12.7754 4.33294 12.7754C4.08195 12.7754 3.80455 12.8684 3.22003 13.1444C2.96905 13.2653 2.69495 13.3707 2.61569 13.3832C2.45058 13.4049 2.29207 13.3521 1.66131 13.0514C1.26503 12.8622 1.01075 12.7754 0.852231 12.7754H0.759766V13.2374Z" fill="black" />
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
                                  {new Date(item?.DockBooking[0]?.book_to).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0) ? "Scheduled for today" :
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
                            <div className="ct_boat_detail_12" onClick={() => navigate(pageRoutes.dock_details, { state: { data: item } })}>
                              No boat assigned yet!
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
                    <p className="mt-5 ct_fs_18 ct_fw_700">No dock found</p>
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
                          <div className="d-flex gap-2 ct_flex_wrap_575 position-relative">
                            <DatePicker className="form-control" style={{ cursor: "pointer" }}
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
                            <i class="fa-regular fa-calendar ct_date_icon_top_123"></i>
                          </div>
                          <span style={{ color: "red" }}>
                            {setDateError}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer justify-content-center border-0 pb-0 px-0">
                      <button
                        type="button"
                        className="ct_outline_btn ct_outline_orange"
                        data-bs-dismiss="modal"
                        onClick={() => {
                          setDateValue()
                          resetForm()
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                        onClick={handleSubmit}
                        data-bs-dismiss={values?.boatId != '' && dateValue && "modal"}
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

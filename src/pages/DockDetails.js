import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { pipViewDate } from "../auth/Pip";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { pageRoutes } from "../routes/PageRoutes";

const DockDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isToggle, setIsToggle] = useState(false);

  const onHandleClick = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="ct_dashbaord_bg">
      <div className={`ct_dashbaord_main ${isToggle == false && "ct_active"}`}>
        <Sidebar path="update" />
        <div className="ct_content_right">
          <Header onClick={onHandleClick} />
          <div className="ct_dashbaord_middle">
            <div className="d-flex align-item-center gap-3">
              <a
                href="javascript:void(0)"
                className="ct_fs_18 ct_fw_700 text-dark ct_ff_roboto"
                onClick={() => navigate(-1)}
              >
                <i className="fa-solid fa-arrow-left-long"></i> Back
              </a>
            </div>
            <div className="ct_boat_white_bg mt-4">
              <div className="d-flex gap-2 flex-wrap align-items-start justify-content-between ct_border_1_btm_grey ">
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
                    <h4 className="ct_fs_20 ct_fw_600 mb-1">{state?.data?.name ?? 'NA'}</h4>
                  </div>
                </div>
                <button className="ct_custom_btm w-auto px-4 py-2 ct_fw_500" onClick={() => navigate(pageRoutes.update_docks, { state: { data: state?.data } })}>
                  Edit Dock
                </button>
              </div>
              <div className="ct_boat_detail_12 ct_mt_20 ct_border_grey_12">
                <div className="row mb-3">
                  <div className="col-md-4 mb-2 mb-md-0">
                    <p className="mb-0" style={{ color: "#6D6D6D" }}>
                      Email Address
                    </p>
                  </div>
                  <div className="col-md-4 mb-2 mb-md-0">
                    <p className="mb-0" style={{ color: "#6D6D6D" }}>
                      {state?.data?.email ?? ''}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4 mb-2 mb-md-0">
                    <p className="mb-0" style={{ color: "#6D6D6D" }}>
                      Contact Number
                    </p>
                  </div>
                  <div className="col-md-4 mb-2 mb-md-0">
                    <p className="mb-0" style={{ color: "#6D6D6D" }}>
                      {state?.data?.phone_no ?? ''}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4 mb-2 mb-md-0">
                    <p className="mb-0" style={{ color: "#6D6D6D" }}>
                      Booking Cost per Day
                    </p>
                  </div>
                  <div className="col-md-4 mb-2 mb-md-0">
                    <p className="mb-0" style={{ color: "#6D6D6D" }}>
                      ${state?.data?.booking_cost_per_day ?? 0}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-2 mb-md-0">
                    <p className="mb-0" style={{ color: "#6D6D6D" }}>
                      Booking Cost
                    </p>
                  </div>
                  <div className="col-md-4 mb-2 mb-md-0">
                    <p className="mb-0" style={{ color: "#6D6D6D" }}>
                      ${state?.data?.booking_cost ?? 0}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {state?.data?.DockBooking != 0 &&
              <div className="mt-4">
                <h4 className="ct_fs_24 ct_fw_600 mb-3">Scheduled Boat</h4>
                <div className="row mt-3">
                  {state?.data?.DockBooking != 0 ?
                    state?.data?.DockBooking?.slice(0, 1)?.map((item, i) => (
                      <div className="col-md-6 mb-4 mb-md-0" onClick={() => navigate(pageRoutes.boat_detail, { state: { data: item?.boat } })}>
                        <div className="ct_boat_detail_12 ct_boat_white_bg">
                          <span className="ct_text_op_5">Boat No. {i + 1}</span>
                          <h4 className="ct_fs_20 ct_fw_600 mb-1 ct_fw_500">
                            {item?.boat?.name ?? ''}
                          </h4>
                          <ul>
                            <li className="ct_textclr_7E7E7E">
                              <span className={`me-2 ${new Date(item?.book_to).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0) ? "ct_green_status" :
                                new Date(item?.book_to).setHours(0, 0, 0, 0) === new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0) ?
                                  "ct_bringle_status"
                                  :
                                  new Date(item?.book_to).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0) ?
                                    `ct_bringle_status` : item?.book_to ? `ct_bringle_status` : `ct_bringle_status`
                                }`}></span>
                              {new Date(item?.book_to).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0) ? "Scheduled for today" :
                                new Date(item?.book_to).setHours(0, 0, 0, 0) === new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0) ?
                                  "Scheduled for tomorrow"
                                  :
                                  new Date(item?.book_to).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0) ?
                                    `Scheduled at ${pipViewDate(item?.book_to)}` : item?.book_to ? `Scheduled on ${pipViewDate(item?.book_to)}` : `Not scheduled yet`
                              }
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))
                    :
                    <div className="col-md-6 mb-4 mb-md-0 me-2 ct_fw_600">
                      No boats scheduled yet
                    </div>
                  }
                </div>
              </div>
            }
            {state?.data?.DockBooking?.length != 0 &&
              <div className="mt-4">
                <h4 className="ct_fs_24 ct_fw_600 mb-3">Upcoming Scheduled {state?.data?.DockBooking?.slice(1, state?.data?.DockBooking?.length).length <= 1 ? 'Boat' : 'Boats'}</h4>
                <div className="row mt-3">
                  {state?.data?.DockBooking?.length > 1 ?
                    state?.data?.DockBooking?.slice(1, state?.data?.DockBooking?.length)?.map((item, i) => (
                      <div className="col-md-6 mb-4" onClick={() => navigate(pageRoutes.boat_detail, { state: { data: item?.boat } })}>
                        <div className="ct_boat_detail_12 ct_boat_white_bg">
                          <span className="ct_text_op_5">Boat No. {i + 2}</span>
                          <h4 className="ct_fs_20 ct_fw_600 mb-1 ct_fw_500">
                            {item?.boat?.name ?? ''}
                          </h4>
                          <ul>
                            <li className="ct_textclr_7E7E7E">
                              <span className={`me-2 ${new Date(item?.book_to).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0) ? "ct_green_status" :
                                new Date(item?.book_to).setHours(0, 0, 0, 0) === new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0) ?
                                  "ct_bringle_status"
                                  :
                                  new Date(item?.book_to).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0) ?
                                    `ct_bringle_status` : item?.book_to ? `ct_bringle_status` : `ct_bringle_status`
                                }`}></span>
                              {new Date(item?.book_to).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0) ? "Scheduled for today" :
                                new Date(item?.book_to).setHours(0, 0, 0, 0) === new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0) ?
                                  "Scheduled for tomorrow"
                                  :
                                  new Date(item?.book_to).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0) ?
                                    `Scheduled at ${pipViewDate(item?.book_to)}` : item?.book_to ? `Scheduled on ${pipViewDate(item?.book_to)}` : `Not scheduled yet`
                              }
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))
                    :
                    <div className="col-md-6 mb-4 mb-md-0 me-2 ct_fw_600">
                      No upcoming boats scheduled yet
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DockDetails;

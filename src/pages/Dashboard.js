import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';

const Dashboard = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    }

    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="home" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center justify-content-between ">
                            <h4 className="mb-0 ct_fs_22">Overview</h4>
                        </div>
                        <div className="ct_grid_3_card ct_mt_20">
                            <div>
                                <div className="ct_dash_card">
                                    <div className="ct_small_icon" style={{ backgroundColor: "#AE19DE" }}>
                                        <i className="bi bi-bar-chart"></i>
                                    </div>
                                    <div className="ct_dash_card_info" onClick={() => navigate(pageRoutes.today_service)}>
                                        <span className="ct_fs_14">Currently in service</span>
                                        <h4>6</h4>
                                        <small className="d-flex align-items-center"><svg width="16" height="16" className="me-1" viewBox="0 0 14 14"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M5.06012 3.49414C5.06012 3.25252 5.256 3.05664 5.49762 3.05664L10.5051 3.05664C10.6212 3.05664 10.7324 3.10273 10.8145 3.18478C10.8965 3.26683 10.9426 3.37811 10.9426 3.49414L10.9426 8.50164C10.9426 8.74326 10.7467 8.93913 10.5051 8.93914C10.2635 8.93914 10.0676 8.74326 10.0676 8.50164L10.0676 3.93164L5.49762 3.93164C5.256 3.93164 5.06012 3.73577 5.06012 3.49414Z"
                                                fill="#1A932E" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M3.18387 10.8157C3.01302 10.6449 3.01302 10.3678 3.18387 10.197L10.1259 3.25497C10.2967 3.08411 10.5738 3.08411 10.7446 3.25497C10.9155 3.42582 10.9155 3.70283 10.7446 3.87369L3.80259 10.8157C3.63173 10.9866 3.35473 10.9866 3.18387 10.8157Z"
                                                fill="#1A932E" />
                                        </svg>12% increase from yesterday</small>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => navigate(pageRoutes.scheduled_boat)}>
                                <div className="ct_dash_card">
                                    <div className="ct_small_icon" style={{ backgroundColor: "#EB5419" }}>
                                        <i className="bi bi-briefcase"></i>
                                    </div>
                                    <div className="ct_dash_card_info">
                                        <span>Boats in queue</span>
                                        <h4>95 /<span>100</span> </h4>
                                        <small className="d-flex align-items-center"><svg width="16" height="16" viewBox="0 0 15 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M10.7061 5.0611C10.9477 5.0611 11.1436 5.25698 11.1436 5.4986L11.1436 10.5061C11.1436 10.6221 11.0975 10.7334 11.0154 10.8155C10.9334 10.8975 10.8221 10.9436 10.7061 10.9436L5.69856 10.9436C5.45694 10.9436 5.26106 10.7477 5.26106 10.5061C5.26106 10.2645 5.45694 10.0686 5.69856 10.0686L10.2686 10.0686L10.2686 5.4986C10.2686 5.25698 10.4644 5.0611 10.7061 5.0611Z"
                                                fill="#EE201C" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M3.38449 3.18485C3.55534 3.01399 3.83235 3.01399 4.00321 3.18485L10.9452 10.1269C11.1161 10.2977 11.1161 10.5747 10.9452 10.7456C10.7744 10.9164 10.4974 10.9164 10.3265 10.7456L3.38449 3.80357C3.21363 3.63271 3.21363 3.3557 3.38449 3.18485Z"
                                                fill="#EE201C" />
                                        </svg>10% decrease from last month</small>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => navigate(pageRoutes.today_invoice)}>
                                <div className="ct_dash_card">
                                    <div className="ct_small_icon" style={{ backgroundColor: "#1A6FE7" }}>
                                        <i className="bi bi-clock"></i>
                                    </div>
                                    <div className="ct_dash_card_info">
                                        <span>Total invoice generated today</span>
                                        <h4>$135000</h4>
                                        <small className="d-flex align-items-center"><svg width="16" height="16" className="me-1" viewBox="0 0 14 14"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M5.06012 3.49414C5.06012 3.25252 5.256 3.05664 5.49762 3.05664L10.5051 3.05664C10.6212 3.05664 10.7324 3.10273 10.8145 3.18478C10.8965 3.26683 10.9426 3.37811 10.9426 3.49414L10.9426 8.50164C10.9426 8.74326 10.7467 8.93913 10.5051 8.93914C10.2635 8.93914 10.0676 8.74326 10.0676 8.50164L10.0676 3.93164L5.49762 3.93164C5.256 3.93164 5.06012 3.73577 5.06012 3.49414Z"
                                                fill="#1A932E" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M3.18387 10.8157C3.01302 10.6449 3.01302 10.3678 3.18387 10.197L10.1259 3.25497C10.2967 3.08411 10.5738 3.08411 10.7446 3.25497C10.9155 3.42582 10.9155 3.70283 10.7446 3.87369L3.80259 10.8157C3.63173 10.9866 3.35473 10.9866 3.18387 10.8157Z"
                                                fill="#1A932E" />
                                        </svg>8% increase from last month</small>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => navigate(pageRoutes.staff_productivity)}>
                                <div className="ct_dash_card">
                                    <div className="ct_small_icon" style={{ backgroundColor: "#ED9C11" }}>
                                        <i className="bi bi-person"></i>
                                    </div>
                                    <div className="ct_dash_card_info">
                                        <span>Staff Standby</span>
                                        <h4>17 /<span> 120</span></h4>
                                        <small className="d-flex align-items-center"><svg width="16" height="16" className="me-1" viewBox="0 0 14 14"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M5.06012 3.49414C5.06012 3.25252 5.256 3.05664 5.49762 3.05664L10.5051 3.05664C10.6212 3.05664 10.7324 3.10273 10.8145 3.18478C10.8965 3.26683 10.9426 3.37811 10.9426 3.49414L10.9426 8.50164C10.9426 8.74326 10.7467 8.93913 10.5051 8.93914C10.2635 8.93914 10.0676 8.74326 10.0676 8.50164L10.0676 3.93164L5.49762 3.93164C5.256 3.93164 5.06012 3.73577 5.06012 3.49414Z"
                                                fill="#1A932E" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M3.18387 10.8157C3.01302 10.6449 3.01302 10.3678 3.18387 10.197L10.1259 3.25497C10.2967 3.08411 10.5738 3.08411 10.7446 3.25497C10.9155 3.42582 10.9155 3.70283 10.7446 3.87369L3.80259 10.8157C3.63173 10.9866 3.35473 10.9866 3.18387 10.8157Z"
                                                fill="#1A932E" />
                                        </svg>2% increase from last month</small>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => navigate(pageRoutes.quick_lead)}>
                                <div className="ct_dash_card">
                                    <div className="ct_small_icon" style={{ backgroundColor: "#8611ED" }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14.5799 1.10409C14.4948 1.15551 14.2851 1.41261 14.1083 1.69029C13.8462 2.09137 13.7807 2.25592 13.7414 2.68785C13.7152 2.97581 13.7021 3.84997 13.7218 4.64185L13.7545 6.08163C14.1738 7.39801 14.2982 7.82995 14.2982 7.88137C14.2982 7.93279 14.1148 8.10762 13.8855 8.26188C13.6628 8.41614 13.178 8.78638 12.8046 9.08462C12.143 9.61939 12.1299 9.62968 11.5469 9.62968C11.2193 9.62968 10.8983 9.57826 10.8263 9.52684C10.7477 9.46513 10.6953 9.32115 10.6953 9.16689C10.6953 9.02291 10.8328 8.38529 10.9966 7.74767L11.2979 6.59584C11.2259 3.80883 11.18 2.90382 11.1538 2.79069C11.1276 2.67757 10.9507 2.42046 10.7542 2.22506C10.407 1.86512 10.4005 1.86512 9.64058 1.86512C8.93964 1.86512 8.86758 1.88569 8.6252 2.13251C8.48763 2.27649 8.31075 2.57473 8.24525 2.80098C8.13388 3.15064 8.11423 3.42831 8.11423 4.89895L8.10768 6.59584C8.54003 8.18989 8.65795 8.66296 8.64485 8.67325C8.64087 8.6795 8.47223 8.8112 8.2199 9.00825C8.0572 9.13531 7.8597 9.28955 7.64912 9.45485C7.1054 9.8765 6.43721 10.4318 6.15552 10.6889C5.73627 11.09 5.63145 11.1517 5.55284 11.0489C5.49389 10.9769 5.44803 10.7609 5.45458 10.5861C5.45458 10.401 5.53974 9.89707 5.65111 9.47542C5.84108 8.73495 5.84763 8.6424 5.86073 6.87352C5.88039 5.23833 5.86729 5.01208 5.75592 4.74469C5.69041 4.56986 5.5725 4.35389 5.49389 4.25105C5.42183 4.14821 5.2384 3.97338 5.09428 3.87053C4.90431 3.71627 4.68813 3.66485 4.27543 3.66485C3.81032 3.66485 3.65965 3.70599 3.37141 3.92196C3.10282 4.12764 3.00456 4.27162 2.89975 4.62128C2.83424 4.85782 2.72943 5.33089 2.67047 5.67027C2.61806 6.00964 2.57221 6.65755 2.57221 7.11005C2.57221 7.57284 2.61806 8.17961 2.67702 8.49842C2.73598 8.80694 2.8932 9.41371 3.03732 9.83536L3.28625 10.6067C2.25776 11.2649 1.98918 11.5117 1.76645 11.8408C1.59613 12.0979 1.3865 12.5504 1.29479 12.8486C1.20963 13.1366 1.10481 13.7331 1.07206 14.1547C1.03275 14.5764 1 15.5637 1 16.3453C1 17.1166 1.0131 17.7542 1.03275 17.7542C1.05241 17.7542 1.24893 17.6205 1.47166 17.4662C1.70094 17.3017 2.46084 16.6743 3.16178 16.0573C3.86272 15.4505 4.67503 14.7615 4.96327 14.5455C5.37597 14.2267 5.53974 14.1547 5.74937 14.1856C5.89349 14.2061 6.60098 14.6278 7.32158 15.1009C8.04217 15.5842 8.78897 16.0573 8.97239 16.1499L9.31959 16.3144C10.2564 15.5842 10.7935 15.1214 11.1211 14.8232C11.4421 14.525 12.916 13.2086 14.3965 11.8922C15.8704 10.5758 17.2068 9.36229 17.3575 9.20803C17.5147 9.04348 17.6392 8.82751 17.6392 8.73495C17.6392 8.61154 17.471 8.41272 17.1348 8.13847C16.8596 7.91222 16.6172 7.65511 16.6041 7.57284C16.5845 7.49057 16.6369 7.12034 16.7221 6.75011C16.8596 6.15362 16.8858 5.86567 16.9055 4.17906L16.9382 2.27649C16.591 1.64915 16.3421 1.36119 16.1652 1.2275C15.9032 1.04238 15.7329 0.990962 15.2809 1.00125C14.973 1.00125 14.6585 1.04238 14.5734 1.10409H14.5799Z"
                                                stroke="white" />
                                            <path
                                                d="M18.6021 6.43181C18.5759 6.49351 18.7332 7.07971 18.9493 7.72761C19.1655 8.37552 19.3424 8.99257 19.3424 9.09541C19.3424 9.18797 19.2769 9.34223 19.1983 9.42451C19.1131 9.50678 18.91 9.69189 18.7463 9.83587C18.6943 9.88155 18.6206 9.94689 18.5343 10.0234C18.3487 10.1879 18.1049 10.4041 17.8947 10.5866C17.5933 10.8643 17.0954 11.3168 16.7876 11.5842C16.7228 11.6426 16.6386 11.7187 16.5403 11.8077C16.1713 12.1415 15.6033 12.6553 15.1171 13.0857C14.5079 13.6307 13.7742 14.2889 13.4925 14.5563C13.2173 14.8134 12.7522 15.2145 12.4705 15.4408C12.1823 15.667 11.8941 15.9344 11.8286 16.027C11.7631 16.1298 11.6844 16.2121 11.6451 16.2121C11.6124 16.2121 11.4748 16.3252 11.3503 16.4589C11.2259 16.5926 10.8983 16.8908 10.6298 17.1171C10.5009 17.2256 10.3358 17.3626 10.1707 17.4996C9.99172 17.6481 9.81276 17.7966 9.67988 17.909C9.23442 18.2895 9.21477 18.2895 8.99204 18.1352C8.86758 18.0529 8.23214 17.6107 7.58361 17.1582C7.42447 17.0472 7.26218 16.9343 7.10486 16.8248C6.62105 16.4883 6.1843 16.1845 6.03106 16.0681L5.65111 15.8007C4.96327 16.3458 4.15096 17.0451 3.39106 17.7033C2.63771 18.3717 1.85161 19.0505 1.65509 19.215C1.45856 19.3796 1.22928 19.6161 1.14412 19.7395C1.00655 19.9555 1 20.0481 1 21.2513C1 21.9609 1.0131 22.6397 1.03275 22.7734C1.05241 22.8968 1.10481 22.9996 1.15067 22.9996C1.18997 22.9996 1.3603 22.8865 1.52407 22.7425C1.68784 22.5985 1.86471 22.434 1.91712 22.3826C1.96953 22.3312 2.48704 21.8581 3.06352 21.3439C3.63999 20.8194 4.30163 20.2332 4.53746 20.0275C4.77329 19.8218 5.08118 19.5236 5.2253 19.3796C5.46768 19.1225 5.50699 19.1122 5.71661 19.2356C5.84108 19.3076 6.19483 19.5339 6.50272 19.7395C6.81061 19.9452 7.4919 20.3874 8.02907 20.7268C8.55969 21.0765 9.08375 21.3542 9.18857 21.3542C9.29993 21.3542 9.70609 21.0971 10.1253 20.7577C10.5249 20.4286 11.1538 19.8938 11.5141 19.5647C11.8744 19.2356 12.3919 18.7934 12.6605 18.5774C12.9291 18.3615 13.5252 17.8473 13.9838 17.4359C14.2946 17.1501 14.8099 16.6943 15.3076 16.2542C15.5443 16.0448 15.777 15.839 15.9818 15.6567C16.6238 15.1014 17.5016 14.3301 17.934 13.9495C18.3663 13.569 19.0869 12.9417 19.5389 12.5612C20.325 11.903 20.3643 11.8824 20.4626 12.0675C20.5215 12.1704 20.7377 12.7463 20.9408 13.3633C21.1439 13.9701 21.3076 14.5357 21.3076 14.618C21.3076 14.7003 21.3338 14.7723 21.3732 14.7723C21.4125 14.7723 21.5107 14.5255 21.5959 14.2375C21.681 13.9393 21.9758 12.6743 22.2575 11.4299C22.2808 11.3245 22.3043 11.2185 22.3277 11.1126C22.581 9.9675 22.8335 8.82577 22.8995 8.46808C22.9978 8.01557 23.024 7.74818 22.9781 7.68648C22.9388 7.64534 22.2182 7.4088 21.3732 7.17227C20.5281 6.93573 19.6306 6.67863 19.3751 6.59635C19.1197 6.51408 18.8576 6.42152 18.779 6.38039C18.707 6.34953 18.6218 6.3701 18.6021 6.43181Z"
                                                stroke="white" />
                                        </svg>
                                    </div>
                                    <div className="ct_dash_card_info">
                                        <span>Quick Leads</span>
                                        <h4>265</h4>
                                        <small className="d-flex align-items-center"><svg width="16" height="16" className="me-1" viewBox="0 0 14 14"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M5.06012 3.49414C5.06012 3.25252 5.256 3.05664 5.49762 3.05664L10.5051 3.05664C10.6212 3.05664 10.7324 3.10273 10.8145 3.18478C10.8965 3.26683 10.9426 3.37811 10.9426 3.49414L10.9426 8.50164C10.9426 8.74326 10.7467 8.93913 10.5051 8.93914C10.2635 8.93914 10.0676 8.74326 10.0676 8.50164L10.0676 3.93164L5.49762 3.93164C5.256 3.93164 5.06012 3.73577 5.06012 3.49414Z"
                                                fill="#1A932E" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M3.18387 10.8157C3.01302 10.6449 3.01302 10.3678 3.18387 10.197L10.1259 3.25497C10.2967 3.08411 10.5738 3.08411 10.7446 3.25497C10.9155 3.42582 10.9155 3.70283 10.7446 3.87369L3.80259 10.8157C3.63173 10.9866 3.35473 10.9866 3.18387 10.8157Z"
                                                fill="#1A932E" />
                                        </svg>8% increase from last month</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ct_mt_20">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h4 className="mb-0 ct_fs_22">Boats under maintenance</h4>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <a href="javascript:void(0)" className="text-dark" onClick={() => navigate(pageRoutes.boat_tracer)}>
                                        <div className="ct_light_shadow_card">
                                            <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                            <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt=""
                                                style={{ width: "12px" }} />Boat Name</p>
                                            <h4 className="mb-0 ct_fs_28 ct_fw_700">Blue Moon</h4>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <a href="javascript:void(0)" className="text-dark" onClick={() => navigate(pageRoutes.boat_tracer)}>
                                        <div className="ct_light_shadow_card">
                                            <p className="mb-2 ct_fs_18 ct_fw_700">No. 363</p>
                                            <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt=""
                                                style={{ width: "12px" }} />Boat Name</p>
                                            <h4 className="mb-0 ct_fs_28 ct_fw_700">Breeze</h4>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <a href="javascript:void(0)" className="text-dark" onClick={() => navigate(pageRoutes.boat_tracer)}>
                                        <div className="ct_light_shadow_card">
                                            <p className="mb-2 ct_fs_18 ct_fw_700">No. 364</p>
                                            <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt=""
                                                style={{ width: "12px" }} />Boat Name</p>
                                            <h4 className="mb-0 ct_fs_28 ct_fw_700">Sunshine</h4>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <a href="javascript:void(0)" className="text-dark" onClick={() => navigate(pageRoutes.boat_tracer)}>
                                        <div className="ct_light_shadow_card">
                                            <p className="mb-2 ct_fs_18 ct_fw_700">No. 365 </p>
                                            <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt=""
                                                style={{ width: "12px" }} />Boat Name</p>
                                            <h4 className="mb-0 ct_fs_28 ct_fw_700">Tornado</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="ct_mt_20">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h4 className="mb-0 ct_fs_22">Maintenance task scheduled tomorrow </h4>
                            </div>

                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="ct_light_shadow_card">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 366</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt=""
                                            style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Wave Dancer</h4>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="ct_light_shadow_card">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 367</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt=""
                                            style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Beowulf</h4>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="ct_light_shadow_card">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 368</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt=""
                                            style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Shelly</h4>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="ct_light_shadow_card">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 369 </p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt=""
                                            style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Shark Bait</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard;
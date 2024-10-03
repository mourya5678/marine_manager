import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';

const AllBoats = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    }

    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="all_boats" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center justify-content-between gap-2 ct_flex_wrap_767">
                            <ul className="d-flex align-items-center gap-3 ">
                                <li className="ct_fs_24 ct_fw_700 ct_list_style_none">All Boats</li>
                                <li className=" ct_fw_700 ct_fs_24 ct_list_style_none ms-2"></li>
                                <li className="ct_text_op_5 ct_fs_24 ct_fw_600">55 Boats</li>
                            </ul>
                            <div className="d-flex align-items-center gap-4">
                                <div className="position-relative ct_search_input">
                                    <input type="text" className="form-control ct_flex_1" placeholder="Search" />
                                    <i className="fa-solid fa-magnifying-glass "></i>
                                </div>
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.crate_boat)} className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22">Add Boat</a>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Blue Moon</h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for tomorrow  </p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Breeze</h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for 02-06-2024</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Sunshine </h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for 05-06-2024</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Tornado </h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for 06-06-2024</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Wave Dancer</h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for 08-06-2024</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Beowulf</h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for 08-06-2024</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Shelly </h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for 08-06-2024</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Shark Bait</h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for 08-06-2024</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Tornado </h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for 08-06-2024</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Sunshine </h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for 08-06-2024</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Breeze</h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for 08-06-2024</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Blue Moon</h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for 08-06-2024</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Breeze</h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for 08-06-2024</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Sunshine </h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for 19-06-2024</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3">
                                            <img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Tornado </h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for 19-06-2024</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                        <p className="d-flex align-items-center gap-1 mb-3">
                                            <img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                        <h4 className="mb-0 ct_fs_28 ct_fw_700">Wave Dancer</h4>
                                        <p className="mb-0 mt-3 ct_green_text">Scheduled for 19-06-2024</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllBoats;
import React from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const BoatDocks = () => {
    const navigate = useNavigate();

    return (
        <div class="ct_dashbaord_bg">
            <div class="ct_dashbaord_main ct_active">
                <Sidebar path="docks" />
                <div class="ct_content_right">
                    <Header />
                    <div class="ct_dashbaord_middle">
                        <div class="d-flex align-items-center justify-content-between gap-2 ct_flex_wrap_767">
                            <ul class="d-flex align-items-center gap-3 ">
                                <li class="ct_fs_24 ct_fw_700 ct_list_style_none">All Docks</li>
                                <li class=" ct_fw_700 ct_fs_24 ct_list_style_none ms-2"></li>
                                <li class="ct_text_op_5 ct_fs_24 ct_fw_600">55 Docks</li>
                            </ul>
                            <div class="d-flex align-items-center gap-4">
                                <div class="position-relative ct_search_input">
                                    <input type="text" class="form-control ct_flex_1" placeholder="Search" />
                                    <i class="fa-solid fa-magnifying-glass "></i>
                                </div>
                                <a href="add-new-doc.html" class="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22">Add New Dock</a>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-xl-3 col-lg-6 mb-4">
                                <a href="update_doc.html" class="text-dark">
                                    <div class="ct_boat_card">
                                        <ul class="ct_list_style_none">
                                            <li>
                                                <p class="mb-0 ct_fs_14">Dock Name</p>
                                                <p class="mb-0 ct_fs_18 ct_fw_700 ct_orange_text ct_text_decoration_none">Dock 1</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Size</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">30 x 40 m</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Release Date</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">29-08-2024</p>
                                            </li>
                                        </ul>
                                        <div class="ct_boat_inner_bg ct_mt_20">
                                            <p class="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                            <p class="d-flex align-items-center gap-1 mb-3">
                                                <img src="img/boat_icon.svg.png" alt="" style="width: 12px;" />Boat Name</p>
                                            <h4 class="mb-0 ct_fs_28 ct_fw_700">Blue Moon</h4>
                                            <p class="mb-0 mt-3 pb-3">Schedules for today</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-lg-6 mb-4">
                                <a href="update_doc.html" class="text-dark">
                                    <div class="ct_boat_card">
                                        <ul class="ct_list_style_none">
                                            <li>
                                                <p class="mb-0 ct_fs_14">Dock Name</p>
                                                <p class="mb-0 ct_fs_18 ct_fw_700 ct_orange_text ct_text_decoration_none">Dock 2</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Size</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">30 x 40 m</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Release Date</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">29-08-2024</p>
                                            </li>
                                        </ul>
                                        <div class="ct_boat_inner_bg ct_mt_20">
                                            <p class="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                            <p class="d-flex align-items-center gap-1 mb-3">
                                                <img src="img/boat_icon.svg.png" alt="" style="width: 12px;" />Boat Name</p>
                                            <h4 class="mb-0 ct_fs_28 ct_fw_700">Breeze</h4>
                                            <p class="mb-0 mt-3 pb-3">Schedules for today</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-lg-6 mb-4">
                                <a href="update_doc.html" class="text-dark">
                                    <div class="ct_boat_card">
                                        <ul class="ct_list_style_none">
                                            <li>
                                                <p class="mb-0 ct_fs_14">Dock Name</p>
                                                <p class="mb-0 ct_fs_18 ct_fw_700 ct_orange_text ct_text_decoration_none">Dock 3</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Size</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">30 x 40 m</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Release Date</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">29-08-2024</p>
                                            </li>
                                        </ul>
                                        <div class="ct_boat_inner_bg ct_mt_20">
                                            <p class="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                            <p class="d-flex align-items-center gap-1 mb-3">
                                                <img src="img/boat_icon.svg.png" alt="" style="width: 12px;" />Boat Name</p>
                                            <h4 class="mb-0 ct_fs_28 ct_fw_700">Sunshine </h4>
                                            <p class="mb-0 mt-3 pb-3">Scheduled for 12-06-2024</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-lg-6 mb-4">
                                <a href="update_doc.html" class="text-dark">
                                    <div class="ct_boat_card">
                                        <ul class="ct_list_style_none">
                                            <li>
                                                <p class="mb-0 ct_fs_14">Dock Name</p>
                                                <p class="mb-0 ct_fs_18 ct_fw_700 ct_orange_text ct_text_decoration_none">Dock 4</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Size</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">30 x 40 m</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Release Date</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">29-08-2024</p>
                                            </li>
                                        </ul>
                                        <div class="ct_boat_inner_bg ct_mt_20">
                                            <p class="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                            <p class="d-flex align-items-center gap-1 mb-3">
                                                <img src="img/boat_icon.svg.png" alt="" style="width: 12px;" />Boat Name</p>
                                            <h4 class="mb-0 ct_fs_28 ct_fw_700">Tornado </h4>
                                            <p class="mb-0 mt-3 pb-3">Scheduled for 12-06-2024</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-lg-6 mb-4">
                                <a href="update_doc.html" class="text-dark">
                                    <div class="ct_boat_card">
                                        <ul class="ct_list_style_none">
                                            <li>
                                                <p class="mb-0 ct_fs_14">Dock Name</p>
                                                <p class="mb-0 ct_fs_18 ct_fw_700 ct_orange_text ct_text_decoration_none">Dock 5</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Size</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">30 x 40 m</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Release Date</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">29-08-2024</p>
                                            </li>
                                        </ul>
                                        <div class="ct_boat_inner_bg ct_mt_20">
                                            <p class="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                            <p class="d-flex align-items-center gap-1 mb-3">
                                                <img src="img/boat_icon.svg.png" alt="" style="width: 12px;" />Boat Name</p>
                                            <h4 class="mb-0 ct_fs_28 ct_fw_700">Wave Dancer</h4>
                                            <p class="mb-0 mt-3 pb-3">Scheduled for 15-06-2024</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-lg-6 mb-4">
                                <a href="update_doc.html" class="text-dark">
                                    <div class="ct_boat_card">
                                        <ul class="ct_list_style_none">
                                            <li>
                                                <p class="mb-0 ct_fs_14">Dock Name</p>
                                                <p class="mb-0 ct_fs_18 ct_fw_700 ct_orange_text ct_text_decoration_none">Dock 6</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Size</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">30 x 40 m</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Release Date</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">29-08-2024</p>
                                            </li>
                                        </ul>
                                        <div class="ct_boat_inner_bg ct_mt_20">
                                            <p class="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                            <p class="d-flex align-items-center gap-1 mb-3">
                                                <img src="img/boat_icon.svg.png" alt="" style="width: 12px;" />Boat Name</p>
                                            <h4 class="mb-0 ct_fs_28 ct_fw_700">Beowulf</h4>
                                            <p class="mb-0 mt-3 pb-3">Scheduled for 15-06-2024</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-lg-6 mb-4">
                                <a href="update_doc.html" class="text-dark">
                                    <div class="ct_boat_card">
                                        <ul class="ct_list_style_none">
                                            <li>
                                                <p class="mb-0 ct_fs_14">Dock Name</p>
                                                <p class="mb-0 ct_fs_18 ct_fw_700 ct_orange_text ct_text_decoration_none">Dock 7</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Size</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">30 x 40 m</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Release Date</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">29-08-2024</p>
                                            </li>
                                        </ul>
                                        <div class="ct_boat_inner_bg ct_mt_20">
                                            <p class="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                            <p class="d-flex align-items-center gap-1 mb-3">
                                                <img src="img/boat_icon.svg.png" alt="" style="width: 12px;" />Boat Name</p>
                                            <h4 class="mb-0 ct_fs_28 ct_fw_700">Shelly </h4>
                                            <p class="mb-0 mt-3 pb-3">Scheduled for 15-06-2024</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-lg-6 mb-4">
                                <a href="update_doc.html" class="text-dark">
                                    <div class="ct_boat_card">
                                        <ul class="ct_list_style_none">
                                            <li>
                                                <p class="mb-0 ct_fs_14">Dock Name</p>
                                                <p class="mb-0 ct_fs_18 ct_fw_700 ct_orange_text ct_text_decoration_none">Dock 8</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Size</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">30 x 40 m</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Release Date</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">29-08-2024</p>
                                            </li>
                                        </ul>
                                        <div class="ct_boat_inner_bg ct_mt_20">
                                            <p class="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                            <p class="d-flex align-items-center gap-1 mb-3">
                                                <img src="img/boat_icon.svg.png" alt="" style="width: 12px;" />Boat Name</p>
                                            <h4 class="mb-0 ct_fs_28 ct_fw_700">Shark Bait</h4>
                                            <p class="mb-0 mt-3 pb-3">Scheduled for 17-06-2024</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-lg-6 mb-4">
                                <a href="update_doc.html" class="text-dark">
                                    <div class="ct_boat_card">
                                        <ul class="ct_list_style_none">
                                            <li>
                                                <p class="mb-0 ct_fs_14">Dock Name</p>
                                                <p class="mb-0 ct_fs_18 ct_fw_700 ct_orange_text ct_text_decoration_none">Dock 9</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Size</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">30 x 40 m</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Release Date</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">29-08-2024</p>
                                            </li>
                                        </ul>
                                        <div class="ct_boat_inner_bg ct_mt_20">
                                            <p class="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                            <p class="d-flex align-items-center gap-1 mb-3">
                                                <img src="img/boat_icon.svg.png" alt="" style="width: 12px;" />Boat Name</p>
                                            <h4 class="mb-0 ct_fs_28 ct_fw_700">Tornado </h4>
                                            <p class="mb-0 mt-3 pb-3">Scheduled for 19-06-2024</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-lg-6 mb-4">
                                <a href="update_doc.html" class="text-dark">
                                    <div class="ct_boat_card">
                                        <ul class="ct_list_style_none">
                                            <li>
                                                <p class="mb-0 ct_fs_14">Dock Name</p>
                                                <p class="mb-0 ct_fs_18 ct_fw_700 ct_orange_text ct_text_decoration_none">Dock 10</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Size</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">30 x 40 m</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Release Date</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">29-08-2024</p>
                                            </li>
                                        </ul>
                                        <div class="ct_boat_inner_bg ct_mt_20">
                                            <p class="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                            <p class="d-flex align-items-center gap-1 mb-3">
                                                <img src="img/boat_icon.svg.png" alt="" style="width: 12px;" />Boat Name</p>
                                            <h4 class="mb-0 ct_fs_28 ct_fw_700">Sunshine </h4>
                                            <p class="mb-0 mt-3 pb-3">Scheduled for 19-06-2024</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-lg-6 mb-4">
                                <a href="update_doc.html" class="text-dark">
                                    <div class="ct_boat_card ">
                                        <ul class="ct_list_style_none">
                                            <li>
                                                <p class="mb-0 ct_fs_14">Dock Name</p>
                                                <p class="mb-0 ct_fs_18 ct_fw_700">Dock 12</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Size</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">30 x 40 m</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Release Date</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">29-08-2024</p>
                                            </li>
                                        </ul>
                                        <div class="ct_boat_inner_bg ct_mt_20 ct_empty_box_padd_66">
                                            <p class="mb-2 ct_fs_18 ct_fw_500 ct_text_op_5">Click here to</p>
                                            <h4 class="mb-0 ct_fs_28 ct_fw_700 ct_text_op_5">Allot a boat</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-xl-3 col-lg-6 mb-4">
                                <a href="update_doc.html" class="text-dark">
                                    <div class="ct_boat_card ">
                                        <ul class="ct_list_style_none">
                                            <li>
                                                <p class="mb-0 ct_fs_14">Dock Name</p>
                                                <p class="mb-0 ct_fs_18 ct_fw_700">Dock 13</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Size</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">30 x 40 m</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14">Release Date</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">29-08-2024</p>
                                            </li>
                                        </ul>
                                        <div class="ct_boat_inner_bg ct_mt_20 ct_empty_box_padd_66">
                                            <p class="mb-2 ct_fs_18 ct_fw_500 ct_text_op_5">Click here to</p>
                                            <h4 class="mb-0 ct_fs_28 ct_fw_700 ct_text_op_5">Allot a boat</h4>
                                        </div>
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

export default BoatDocks;
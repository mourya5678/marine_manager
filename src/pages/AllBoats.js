import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { getBoatData } from '../redux/actions/staffActions';
import { pageRoutes } from '../routes/PageRoutes';
import { pipViewDate } from '../auth/Pip';
import moment from 'moment-timezone';

const AllBoats = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, all_boats } = useSelector((state) => state?.staffReducer);
    const [isToggle, setIsToggle] = useState(false);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    }

    useEffect(() => {
        dispatch(getBoatData());
    }, []);

    console.log({ all_boats }, "all_boats")

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
                                <li className="ct_text_op_5 ct_fs_24 ct_fw_600">{all_boats?.length ?? 0} Boats</li>
                            </ul>
                            <div className="d-flex align-items-center gap-4 ct_flex_wrap_767 ct_wrap_100_1_main">
                                <div className="position-relative ct_search_input ct_wrap_100_1">
                                    <input type="date" className="form-control ct_flex_1" />
                                </div>
                                <div className="position-relative ct_search_input ct_wrap_100_1">
                                    <input type="text" className="form-control ct_flex_1" placeholder="Search" />
                                    <i className="fa-solid fa-magnifying-glass "></i>
                                </div>
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.crate_boat)} className="ct_custom_btm ct_wrap_100_1 ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22">Add Boat</a>
                            </div>
                        </div>
                        <div className="row mt-5">
                            {all_boats?.length != 0 &&
                                all_boats?.map((item) => (
                                    <div className="col-xl-3 col-lg-6 mb-4">
                                        <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail)} className="text-dark">
                                            <div className="ct_boat_card ct_px_18">
                                                <p className="mb-2 ct_fs_18 ct_fw_700">No. {item?.id ?? 0}</p>
                                                <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                                <h4 className="mb-0 ct_fs_28 ct_fw_700">{item?.name ?? 'NA'}</h4>
                                                <p className="mb-0 mt-3 ct_green_text">Scheduled for {new Date(item?.book_from).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0) ? "today" :
                                                    new Date(item?.book_from).setDate(new Date().getDate()
                                                        + 1) == new Date().setHours(0, 0, 0, 0) ?
                                                        "tommorow"
                                                        :
                                                        pipViewDate(item?.book_from)
                                                }
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllBoats;
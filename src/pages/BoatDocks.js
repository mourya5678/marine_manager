import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { pipViewDate, pipViewDate4 } from '../auth/Pip';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { getDockData } from '../redux/actions/staffActions';
import { pageRoutes } from '../routes/PageRoutes';

const BoatDocks = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, all_docks } = useSelector((state) => state?.staffReducer);
    const [isToggle, setIsToggle] = useState(false);
    const [filterData, setFilterData] = useState();
    const [filterByDate, setFilterByDate] = useState();
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    }

    const displayBoatData = all_docks?.filter((item) => {
        const filterDatass = filterData ? item?.boat?.name?.toLowerCase()?.includes(filterData?.toLowerCase()) : true;
        const dateMatch = filterByDate ? pipViewDate4(item?.book_to) == filterByDate : true;
        return filterDatass && dateMatch;
    })

    useEffect(() => {
        dispatch(getDockData());
    }, []);

    if (isLoading) {
        return "Loading..."
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="docks" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center justify-content-between gap-2 ct_flex_wrap_767">
                            <ul className="d-flex align-items-center gap-3 ">
                                <li className="ct_fs_24 ct_fw_700 ct_list_style_none">All Docks</li>
                                <li className=" ct_fw_700 ct_fs_24 ct_list_style_none ms-2"></li>
                                <li className="ct_text_op_5 ct_fs_24 ct_fw_600">{all_docks?.length ?? 0} Docks</li>
                            </ul>
                            <div className="d-flex align-items-center gap-4 ct_flex_wrap_767 ct_wrap_100_1_main">
                                <div className="position-relative ct_search_input ct_wrap_100_1">
                                    <input
                                        value={filterByDate}
                                        onChange={(e) => setFilterByDate(e.target.value)}
                                        type="date"
                                        className="form-control ct_flex_1"
                                    />
                                </div>
                                <div className="position-relative ct_search_input ct_wrap_100_1">
                                    <input
                                        value={filterData}
                                        onChange={(e) => setFilterData(e.target.value)}
                                        type="text"
                                        className="form-control ct_flex_1"
                                        placeholder="Search by dock name" />
                                    <i className="fa-solid fa-magnifying-glass "></i>
                                </div>
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.add_new_docks)} className="ct_custom_btm ct_wrap_100_1 ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22">Add New Dock</a>
                            </div>
                        </div>
                        <div className="row mt-5">
                            {displayBoatData?.length != 0 ?
                                displayBoatData?.map((item) => (
                                    < div className="col-xl-3 col-lg-6 mb-4">
                                        <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.dock_details, { state: { data: item } })} className="text-dark">
                                            <div className="ct_boat_card">
                                                <ul className="ct_list_style_none">
                                                    <li>
                                                        <p className="mb-0 ct_fs_14">Dock Name</p>
                                                        <p className="mb-0 ct_fs_18 ct_fw_700 ct_orange_text ct_text_decoration_none">{item?.name ?? 'NA'}</p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 ct_fs_14">Size</p>
                                                        <p className="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">30 x 40 m</p>
                                                    </li>
                                                    <li>
                                                        <p className="mb-0 ct_fs_14">Release Date</p>
                                                        <p className="mb-0 ct_fs_14 ct_fw_700 ct_text_op_5">{item?.book_to ? pipViewDate(item?.book_to) : 'NA'}</p>
                                                    </li>
                                                </ul>
                                                <div className="ct_boat_inner_bg ct_mt_20">
                                                    <p className="mb-2 ct_fs_18 ct_fw_700">No. 362</p>
                                                    <p className="d-flex align-items-center gap-1 mb-3">
                                                        <img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />Boat Name</p>
                                                    <h4 className="mb-0 ct_fs_28 ct_fw_700">{item?.boat?.name ?? 'NA'}</h4>
                                                    <p className="mb-0 mt-3 pb-3">Schedules for {new Date(item?.boat?.book_from).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0) ? "today" :
                                                        new Date(item?.boat?.book_from).setHours(0, 0, 0, 0) === new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0) ?
                                                            "tomorrow"
                                                            :
                                                            pipViewDate(item?.boat?.book_from)
                                                    }</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))
                                :
                                <div className="col-xl-12 col-lg-12 text-center">
                                    <p className="mt-5">Dock not found</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BoatDocks;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { getBoatData } from '../redux/actions/staffActions';
import { pageRoutes } from '../routes/PageRoutes';
import { pipViewDate, pipViewDate4 } from '../auth/Pip';
import Loader from '../components/Loader';

const AllBoats = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading1, all_boats } = useSelector((state) => state?.staffReducer);
    const [isToggle, setIsToggle] = useState(false);
    const [filterData, setFilterData] = useState();
    const [filterByDate, setFilterByDate] = useState();

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    const displayBoatData = all_boats?.filter((item) => {
        const filterDatass = filterData ? item?.name?.toLowerCase()?.includes(filterData?.toLowerCase()) : true;
        const dateMatch = filterByDate ? pipViewDate4(item?.book_to) == filterByDate : true;
        return filterDatass && dateMatch;
    })

    useEffect(() => {
        dispatch(getBoatData());
    }, []);

    if (isLoading1) {
        return <Loader />
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="all_boats" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 ct_flex_wrap_767">
                            <ul className="d-flex align-items-center gap-3 ">
                                <li className="ct_fs_24 ct_fw_700 ct_list_style_none">All Boats</li>
                                <li className=" ct_fw_700 ct_fs_24 ct_list_style_none ms-2"></li>
                                <li className="ct_text_op_5 ct_fs_24 ct_fw_600">{displayBoatData?.length ?? 0} {`${displayBoatData?.length <= 1 ? 'Boat' : 'Boats'}`}</li>
                            </ul>
                            <div className="d-flex align-items-center gap-4 ct_flex_wrap_767 ct_wrap_100_1_main">
                                <div className="position-relative ct_search_input ct_wrap_100_1">
                                    <input
                                        type="date"
                                        className="form-control ct_flex_1"
                                        value={filterByDate}
                                        onChange={(e) => setFilterByDate(e.target.value)}
                                    />
                                </div>
                                <div className="position-relative ct_search_input ct_wrap_100_1">
                                    <input
                                        type="text"
                                        className="form-control ct_flex_1 pe-5"
                                        value={filterData}
                                        onChange={(e) => setFilterData(e.target.value)}
                                        placeholder="Search by boat name"
                                    />
                                    <i className="fa-solid fa-magnifying-glass "></i>
                                </div>
                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.crate_boat)} className="ct_custom_btm ct_wrap_100_1 ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22">Add Boat</a>
                            </div>
                        </div>
                        <div className="row mt-5">
                            {displayBoatData?.length != 0 ?
                                displayBoatData?.map((item, i) => (
                                    <div className="col-xl-3 col-lg-6 mb-4">
                                        <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail, { state: { data: item } })} className="text-dark">
                                            <div className="ct_boat_card ct_px_18">
                                                <p className="mb-2 ct_fs_18 ct_fw_700">No. {i + 1}</p>
                                                <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />{item?.owners_name ?? 'NA'}</p>
                                                <h4 className="mb-0 ct_fs_28 ct_fw_700">{item?.name ?? 'NA'}</h4>
                                                <p className="mb-0 mt-3 ct_green_text">{new Date(item?.book_to).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0) ? "Scheduled for today" :
                                                    new Date(item?.book_to).setHours(0, 0, 0, 0) === new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0) ?
                                                        "Scheduled for tomorrow"
                                                        :
                                                        new Date(item?.book_to).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0) ?
                                                            `Scheduled at ${pipViewDate(item?.book_to)}` : item?.book_to ? `Scheduled on ${pipViewDate(item?.book_to)}` : `Not scheduled yet`
                                                }
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                ))
                                :
                                <div className="col-xl-12 col-lg-12 text-center">
                                    <p className="mt-5 ct_fs_18 ct_fw_700">Boat not found</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllBoats;
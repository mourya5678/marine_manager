import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { pipViewDate, pipViewDate4 } from '../auth/Pip';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';
import { getBoatData } from '../redux/actions/staffActions';
import { pageRoutes } from '../routes/PageRoutes';

const BoatInQue = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { isLoading1, all_boats } = useSelector((state) => state?.staffReducer);
    const [isToggle, setIsToggle] = useState(false);
    const [filterData, setFilterData] = useState();
    const [filterByDate, setFilterByDate] = useState();

    const displayBoatData = all_boats?.filter((item) => {
        const filterDatass = filterData ? item?.name?.toLowerCase()?.includes(filterData?.toLowerCase()) : true;
        const dateMatch = filterByDate ? pipViewDate4(item?.book_to) == filterByDate : true;
        return filterDatass && dateMatch;
    })

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    }

    useEffect(() => {
        dispatch(getBoatData({ filter: "later" }));
    }, []);

    if (isLoading1) {
        return <Loader />
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="schedule_boat" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center justify-content-between gap-2 ct_flex_wrap_767">
                            <ul className="d-flex align-items-center gap-3 ">
                                <li className="ct_fs_24 ct_fw_700 ct_list_style_none">Scheduled Boats</li>
                                <li className=" ct_fw_700 ct_fs_24 ct_list_style_none ms-2"></li>
                                <li className="ct_text_op_5 ct_fs_24 ct_fw_600">{displayBoatData?.length ?? 0}{" "}{`${displayBoatData?.length <= 1 ? 'Boat' : 'Boats'}`}
                                </li>
                            </ul>
                            <div className="d-flex align-items-center gap-4">
                                <div className="position-relative ct_search_input">
                                    <input
                                        value={filterByDate}
                                        onChange={(e) => setFilterByDate(e.target.value)}
                                        type="date"
                                        onKeyDown={(e) => e.preventDefault()}
                                        className="form-control ct_flex_1"
                                    />
                                </div>
                                <div className="position-relative ct_search_input">
                                    <input
                                        value={filterData}
                                        onChange={(e) => setFilterData(e.target.value)}
                                        type="text"
                                        className="form-control ct_flex_1"
                                        placeholder="Search by boat name"
                                    />
                                    <i className="fa-solid fa-magnifying-glass "></i>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            {displayBoatData?.length != 0 ? displayBoatData?.map((item, i) => (
                                <div className="col-xl-3 col-lg-6 mb-4">
                                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_detail, { state: { data: item } })} className="text-dark">
                                        <div className="ct_boat_card ct_px_18">
                                            <p className="mb-2 ct_fs_18 ct_fw_700">No. {i + 1}</p>
                                            <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />{item?.owners_name ?? 'NA'}</p>
                                            <h4 className="mb-0 ct_fs_28 ct_fw_700">{item?.name ?? 'NA'}</h4>
                                            <p className="mb-0 mt-3 ct_green_text">Scheduled for {new Date(item?.book_to).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0) ? "today" :
                                                new Date(item?.book_to).setHours(0, 0, 0, 0) === new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0) ?
                                                    "tomorrow"
                                                    :
                                                    new Date(item?.book_to).setHours(0, 0, 0, 0) === new Date(new Date().setDate(new Date().getDate() - 1)).setHours(0, 0, 0, 0) ?
                                                        "yesterday" :
                                                        pipViewDate(item?.book_to)
                                            }  </p>
                                        </div>
                                    </a>
                                </div>
                            ))
                                :
                                <div className="col-xl-12 col-lg-12 text-center">
                                    <p className="mt-5 ct_fs_18 ct_fw_700">No boat found</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default BoatInQue;
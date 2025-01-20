import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from 'react-redux';
import { getAllBoatTask } from '../redux/actions/maintainedBoatsActions';
import Loader from '../components/Loader';

const ReviewSchedule = () => {
    const localizer = momentLocalizer(moment);
    const dispatch = useDispatch();
    const { isLoading2, boatTaskData } = useSelector((state) => state?.maintainedReducer);
    const [isToggle, setIsToggle] = useState(false);
    const [calendarData, setCalendarData] = useState([]);

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    useEffect(() => {
        dispatch(getAllBoatTask())
    }, []);

    useEffect(() => {
        if (boatTaskData?.length != calendarData?.length) {
            const data12 = [];
            boatTaskData?.length != 0 && boatTaskData?.slice(0, 1)?.map((item) => (
                item?.Task?.map((items) => (
                    data12?.push(
                        {
                            title: `${items?.description}`,
                            start: new Date(new Date(items?.date_scheduled_from).getFullYear(), new Date(items?.date_scheduled_from).getMonth(), new Date(items?.date_scheduled_from).getDate()),
                            end: new Date(new Date(items?.date_scheduled_to).getFullYear(), new Date(items?.date_scheduled_to).getMonth(), new Date(items?.date_scheduled_to).getDate(), 23, 59),
                        }
                    )
                ))
            ))
            setCalendarData(data12)
        }
    }, [boatTaskData]);

    const handleViewBoatTask = (val) => {
        const data13 = [];
        val?.Task?.map((items) => (
            data13?.push(
                {
                    title: `${items?.description}`,
                    start: new Date(new Date(items?.date_scheduled_from).getFullYear(), new Date(items?.date_scheduled_from).getMonth(), new Date(items?.date_scheduled_from).getDate()),
                    end: new Date(new Date(items?.date_scheduled_to).getFullYear(), new Date(items?.date_scheduled_to).getMonth(), new Date(items?.date_scheduled_to).getDate()),
                }
            )
        ))
        setCalendarData(data13)
    };

    if (isLoading2) {
        return <Loader />
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="review" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div class="ct_dashbaord_middle">
                        <h4 class="ct_fs_24 ct_fw_700 mb-4 pb-1">Maintained Boats</h4>
                        <div class="ct_white_bg_1 pb-5">
                            <h4 class="ct_fs_24 text-start ct_fw_700 mb-1 ">Calendar</h4>
                            <div class="row">
                                <div class="col-xl-3 mb-4">
                                    <div class="ct_event_detail_list mt-5">
                                        <div class="d-flex align-items-center gap-3">
                                            {/* <img src="img/calendar_img_12.png" alt="" class="ct_img_18" /> */}
                                            <h4 class="ct_ff_roboto ct_fw_600 ct_fs_16 mb-0">All Boats</h4>
                                        </div>
                                        <ul class="mt-4">
                                            {boatTaskData?.length != 0 ?
                                                boatTaskData?.map((item) => (
                                                    <li>
                                                        <p class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_orange_text ct_text_decoration_none ct_fw_600"><span class="ct_event_dot ct_dot_clr"></span>{item?.rego}</p>
                                                        <a href="javascript:void(0)"><p class="mb-0 ct_fs_14 ct_fw_600" onClick={() => handleViewBoatTask(item)}>View</p></a>
                                                    </li>
                                                ))
                                                : "No boat found"
                                            }
                                        </ul>
                                    </div>
                                </div>
                                {calendarData &&
                                    <div class="col-xl-9 mb-4">
                                        <Calendar
                                            localizer={localizer}
                                            events={calendarData}
                                            startAccessor="start"
                                            endAccessor="end"
                                            style={{ height: 500 }}
                                        />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewSchedule;
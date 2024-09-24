import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const ReviewSchedule = () => {
    const localizer = momentLocalizer(moment);
    return (
        <div className="ct_dashbaord_bg">
            <div className="ct_dashbaord_main ct_active">
                <Sidebar path="review" />
                <div className="ct_content_right">
                    <Header />
                    <div class="ct_dashbaord_middle">
                        <h4 class="ct_fs_24 ct_fw_700 mb-4 pb-1">Maintained Boats</h4>
                        <div class="ct_white_bg_1 pb-5">
                            <h4 class="ct_fs_24 text-start ct_fw_700 mb-1 ">Calendar</h4>
                            <div class="row">
                                <div class="col-xl-3 mb-4">
                                    <div class="ct_current_calendar-container">
                                        <div class="ct_current_calendar-month-arrow-container">
                                            <div class="ct_currentcalendar-month-year-container">
                                                <select class="ct_current_calendar-years"></select>
                                                <select class="ct_current_calendar-months">
                                                </select>
                                            </div>
                                            <div class="calendar-month-year">
                                            </div>
                                            <div class="calendar-arrow-container">
                                                <button class="calendar-today-button"></button>
                                            </div>
                                        </div>
                                        {/* <ul class="calendar-week ">
                                        </ul>
                                        <ul class="calendar-days">
                                        </ul> */}
                                    </div>
                                    <div class="ct_event_detail_list mt-4">
                                        <div class="d-flex align-items-center gap-3">
                                            <img src="img/calendar_img_12.png" alt="" class="ct_img_18" />
                                            <h4 class="ct_ff_roboto ct_fw_600 ct_fs_16 mb-0">02-01-2024</h4>
                                        </div>
                                        <ul class="mt-4">
                                            <li>
                                                <p class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_orange_text ct_text_decoration_none ct_fw_600"><span class="ct_event_dot ct_dot_clr"></span>JPB39Q</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_600">08:00</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_orange_text ct_fw_600 ct_text_decoration_none"><span class="ct_event_dot ct_dot_clr"></span>JPB39Q</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_600">08:00</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_orange_text ct_fw_600 ct_text_decoration_none"><span class="ct_event_dot ct_dot_clr"></span>JPB39Q</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_600">08:00</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_orange_text ct_fw_600 ct_text_decoration_none"><span class="ct_event_dot ct_dot_clr"></span>JPB39Q</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_600">08:00</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="ct_event_detail_list mt-5">
                                        <div class="d-flex align-items-center gap-3">
                                            <img src="img/calendar_img_12.png" alt="" class="ct_img_18" />
                                            <h4 class="ct_ff_roboto ct_fw_600 ct_fs_16 mb-0">03-01-2024</h4>
                                        </div>
                                        <ul class="mt-4">
                                            <li>
                                                <p class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_orange_text ct_text_decoration_none ct_fw_600"><span class="ct_event_dot ct_dot_clr"></span>JPB39Q</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_600">08:00</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_orange_text ct_fw_600 ct_text_decoration_none"><span class="ct_event_dot ct_dot_clr"></span>JPB39Q</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_600">08:00</p>
                                            </li>
                                            <li>
                                                <p class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_orange_text ct_fw_600 ct_text_decoration_none"><span class="ct_event_dot ct_dot_clr"></span>JPB39Q</p>
                                                <p class="mb-0 ct_fs_14 ct_fw_600">08:00</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xl-9 mb-4">
                                    {/* <div id="ec"></div> */}
                                    <Calendar
                                        localizer={localizer}
                                        // events={myEventsList}
                                        startAccessor="start"
                                        endAccessor="end"
                                        style={{ height: 500 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewSchedule;
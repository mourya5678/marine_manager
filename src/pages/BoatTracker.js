import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const BoatTracker = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    }

    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="tracker" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <a href="javascript:void(0)" onClick={() => navigate(-1)} className="ct_fs_18 ct_fw_700 text-dark ct_ff_roboto"><i className="fa-solid fa-arrow-left-long"></i> Back</a>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table ct_project_table ct_custom_table_main">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="ct_ff_roboto">Maintenance Item Description</th>
                                        <th className="ct_ff_roboto">Boat registration</th>
                                        <th className="ct_ff_roboto">Supplier</th>
                                        <th className="ct_ff_roboto">Date Scheduled</th>
                                        <th className="ct_ff_roboto">User Allocated</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Full antifoul of hull</td>
                                        <td>JPB39Q</td>
                                        <td>Volvo</td>
                                        <td className="ct_fw_600">06-08-2024 - 28-09-2024</td>
                                        <td className="text-end ct_fw_600">Morris Hyatt</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="ct_white_bg_1">
                            <div className="ct_tracker_main">
                                <div className="ct_date_task_list">
                                    <ul>
                                        <li>Date/Task</li>
                                        <li>Hull Clean</li>
                                        <li>Antifoul</li>
                                        <li>Engine Service</li>
                                        <li>Prop speed</li>
                                        <li>Plumbing and bilg system</li>
                                        <li>Deck maintenance</li>
                                        <li>Painting top deck</li>
                                        <li>Return to water Crane drop</li>
                                        <li>Booked in care</li>
                                    </ul>
                                </div>
                                <div className="table-responsive">
                                    <table className="table ct_tracker_table">
                                        <thead>
                                            <tr>
                                                <th>01-08-2024</th>
                                                <th>02-08-2024</th>
                                                <th>03-08-2024</th>
                                                <th>04-08-2024</th>
                                                <th>05-08-2024</th>
                                                <th>06-08-2024</th>
                                                <th>07-08-2024</th>
                                                <th>08-08-2024</th>
                                                <th>09-08-2024</th>
                                                <th>10-08-2024</th>
                                                <th>11-08-2024</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span style={{ background: "#B5E6A2" }}></span></td>
                                                <td><span style={{ background: "#B5E6A2" }}></span></td>
                                                <td><span style={{ background: "#B5E6A2" }}></span></td>
                                                <td><span style={{ background: "#B5E6A2" }}></span></td>
                                                <td><span style={{ background: "#B5E6A2" }}></span></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td><span style={{ background: "#61CBF3" }}></span></td>
                                                <td><span style={{ background: "#61CBF3" }}></span></td>
                                                <td><span style={{ background: "#61CBF3" }}></span></td>
                                                <td><span style={{ background: "#61CBF3" }}></span></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td><span style={{ background: "#3C7D22" }}></span></td>
                                                <td><span style={{ background: "#3C7D22" }}></span></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td><span style={{ background: "#6F9A9D" }}></span></td>
                                                <td><span style={{ background: "#6F9A9D" }}></span></td>
                                                <td><span style={{ background: "#6F9A9D" }}></span></td>
                                                <td><span style={{ background: "#6F9A9D" }}></span></td>
                                                <td><span style={{ background: "#6F9A9D" }}></span></td>
                                                <td><span style={{ background: "#6F9A9D" }}></span></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td><span style={{ background: "#8F7B5C" }}></span></td>
                                                <td><span style={{ background: "#8F7B5C" }}></span></td>
                                                <td><span style={{ background: "#8F7B5C" }}></span></td>
                                                <td><span style={{ background: "#8F7B5C" }}></span></td>
                                                <td><span style={{ background: "#8F7B5C" }}></span></td>
                                                <td><span style={{ background: "#8F7B5C" }}></span></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td><span style={{ background: "#B4AD6F" }}></span></td>
                                                <td><span style={{ background: "#B4AD6F" }}></span></td>
                                                <td><span style={{ background: "#B4AD6F" }}></span></td>
                                                <td><span style={{ background: "#B4AD6F" }}></span></td>
                                                <td><span style={{ background: "#B4AD6F" }}></span></td>
                                                <td><span style={{ background: "#B4AD6F" }}></span></td>
                                                <td><span style={{ background: "#B4AD6F" }}></span></td>
                                                <td><span style={{ background: "#B4AD6F" }}></span></td>
                                                <td><span style={{ background: "#B4AD6F" }}></span></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td><span style={{ background: "#C762D8" }}></span></td>
                                                <td><span style={{ background: "#C762D8" }}></span></td>
                                                <td><span style={{ background: "#C762D8" }}></span></td>
                                                <td><span style={{ background: "#C762D8" }}></span></td>
                                                <td><span style={{ background: "#C762D8" }}></span></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td><span style={{ background: "#7D1A1A" }}></span></td>
                                                <td><span style={{ background: "#7D1A1A" }}></span></td>
                                                <td><span style={{ background: "#7D1A1A" }}></span></td>
                                                <td><span style={{ background: "#7D1A1A" }}></span></td>
                                                <td><span style={{ background: "#7D1A1A" }}></span></td>
                                                <td><span style={{ background: "#7D1A1A" }}></span></td>
                                                <td><span style={{ background: "#7D1A1A" }}></span></td>
                                                <td><span style={{ background: "#7D1A1A" }}></span></td>
                                                <td><span style={{ background: "#7D1A1A" }}></span></td>
                                                <td><span style={{ background: "#7D1A1A" }}></span></td>
                                                <td><span style={{ background: "#7D1A1A" }}></span></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td><span style={{ background: "#3F7578" }}></span></td>
                                                <td><span style={{ background: "#3F7578" }}></span></td>
                                                <td><span style={{ background: "#3F7578" }}></span></td>
                                                <td><span style={{ background: "#3F7578" }}></span></td>
                                                <td><span style={{ background: "#3F7578" }}></span></td>
                                                <td><span style={{ background: "#3F7578" }}></span></td>
                                                <td><span style={{ background: "#3F7578" }}></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BoatTracker;
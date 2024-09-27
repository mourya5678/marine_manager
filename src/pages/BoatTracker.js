import React from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const BoatTracker = () => {
    const navigate = useNavigate();

    return (
        <div className="ct_dashbaord_bg">
            <div className="ct_dashbaord_main ct_active">
                <Sidebar path="tracker" />
                <div className="ct_content_right">
                    <Header />
                    <div class="ct_dashbaord_middle">
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <a href="javascript:void(0)" onClick={() => navigate(-1)} class="ct_fs_18 ct_fw_700 text-dark ct_ff_roboto"><i class="fa-solid fa-arrow-left-long"></i> Back</a>
                        </div>
                        <div class="table-responsive mt-3">
                            <table class="table ct_project_table ct_custom_table_main">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th class="ct_ff_roboto">Maintenance Item Description</th>
                                        <th class="ct_ff_roboto">Boat registration</th>
                                        <th class="ct_ff_roboto">Supplier</th>
                                        <th class="ct_ff_roboto">Date Scheduled</th>
                                        <th class="ct_ff_roboto">User Allocated</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Full antifoul of hull</td>
                                        <td>JPB39Q</td>
                                        <td>Volvo</td>
                                        <td class="ct_fw_600">06-08-2024 - 28-09-2024</td>
                                        <td class="text-end ct_fw_600">Morris Hyatt</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="ct_white_bg_1">
                            <div class="ct_tracker_main">
                                <div class="ct_date_task_list">
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
                                <div class="table-responsive">
                                    <table class="table ct_tracker_table">
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
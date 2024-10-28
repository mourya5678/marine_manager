import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';

const StaffProductivity = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="staff-maintenance" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="ct_grid_2_1 justify-content-between">
                            <h4 className="mb-0 ct_fs_24 ct_fw_600">Staff Productivity </h4>
                            <div className="ct_grid_3_1">
                                <div className="position-relative ct_search_input">
                                    <input type="date" className="form-control ct_flex_1" />
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table ct_project_table ct_custom_table_main">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="ct_ff_roboto">Staff Allocated</th>
                                        <th className="ct_ff_roboto">Task Name</th>
                                        <th className="ct_ff_roboto">Consumed Hours</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Morris Hyatt</td>
                                        <td>Full antifoul of hull</td>
                                        <td className="text-end">4 Hours</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Morris Hyatt</td>
                                        <td>Hull Clean</td>
                                        <td className="text-end">4 Hours</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Morris Hyatt</td>
                                        <td>Engine Service</td>
                                        <td className="text-end">4 Hours</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Morris Hyatt</td>
                                        <td>Prop speed</td>
                                        <td className="text-end">4 Hours</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Morris Hyatt</td>
                                        <td>Full antifoul of hull</td>
                                        <td className="text-end">4 Hours</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Morris Hyatt</td>
                                        <td>Hull Clean</td>
                                        <td className="text-end">4 Hours</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Morris Hyatt</td>
                                        <td>Engine Service</td>
                                        <td className="text-end">4 Hours</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Morris Hyatt</td>
                                        <td>Prop speed</td>
                                        <td className="text-end">4 Hours</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffProductivity;
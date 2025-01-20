import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';

const TaskReview = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="task-review" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 ct_fs_24 ct_fw_600">Task Review</h4>
                            <div className="">
                                <a href="javascript:void(0)" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22" onClick={() => navigate(pageRoutes.invoice)}>
                                    Next
                                </a>
                            </div>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table ct_project_table ct_custom_table_main">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="ct_ff_roboto">Maintenance Item Description</th>
                                        <th className="ct_ff_roboto">Status</th>
                                        <th className="ct_ff_roboto">Quoted Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Full antifoul of hull</td>
                                        <td>Completed</td>
                                        <td className="text-end">$ 300</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Full antifoul of hull</td>
                                        <td>Completed</td>
                                        <td className="text-end">$ 300</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Full antifoul of hull</td>
                                        <td>Completed</td>
                                        <td className="text-end">$ 300</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Full antifoul of hull</td>
                                        <td>Completed</td>
                                        <td className="text-end">$ 300</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TaskReview;
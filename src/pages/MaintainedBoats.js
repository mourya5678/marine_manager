import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';

const MaintainedBoats = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    }

    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="maintenance-boat" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="">
                            <h4 className="mb-0 ct_fs_24 ct_fw_600">Maintained Boats </h4>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table ct_project_table ct_custom_table_main">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="ct_ff_roboto">Boat Registration No.</th>
                                        <th className="ct_ff_roboto">Last Serviced</th>
                                        <th className="ct_ff_roboto">Owners Name</th>
                                        <th className="ct_ff_roboto">Email</th>
                                        <th className="ct_ff_roboto">Contact No.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr onClick={() => navigate(pageRoutes.boat_tracer)}>
                                        <td>1</td>
                                        <td>JPB39Q</td>
                                        <td>06-08-2024</td>
                                        <td>Dean Rippin</td>
                                        <td className="ct_fw_600">geovanny@hotmail.com</td>
                                        <td className="text-end ct_fw_600">923-416-9914</td>
                                    </tr>
                                    <tr onClick={() => navigate(pageRoutes.boat_tracer)}>
                                        <td>2</td>
                                        <td>JPB39Q</td>
                                        <td>06-08-2024</td>
                                        <td>Dean Rippin</td>
                                        <td className="ct_fw_600">geovanny@hotmail.com</td>
                                        <td className="text-end ct_fw_600">923-416-9914</td>
                                    </tr>
                                    <tr onClick={() => navigate(pageRoutes.boat_tracer)}>
                                        <td>3</td>
                                        <td>JPB39Q</td>
                                        <td>06-08-2024</td>
                                        <td>Dean Rippin</td>
                                        <td className="ct_fw_600">geovanny@hotmail.com</td>
                                        <td className="text-end ct_fw_600">923-416-9914</td>
                                    </tr>
                                    <tr onClick={() => navigate(pageRoutes.boat_tracer)}>
                                        <td>4</td>
                                        <td>JPB39Q</td>
                                        <td>06-08-2024</td>
                                        <td>Dean Rippin</td>
                                        <td className="ct_fw_600">geovanny@hotmail.com</td>
                                        <td className="text-end ct_fw_600">923-416-9914</td>
                                    </tr>
                                    <tr onClick={() => navigate(pageRoutes.boat_tracer)}>
                                        <td>5</td>
                                        <td>JPB39Q</td>
                                        <td>06-08-2024</td>
                                        <td>Dean Rippin</td>
                                        <td className="ct_fw_600">geovanny@hotmail.com</td>
                                        <td className="text-end ct_fw_600">923-416-9914</td>
                                    </tr>
                                    <tr onClick={() => navigate(pageRoutes.boat_tracer)}>
                                        <td>6</td>
                                        <td>JPB39Q</td>
                                        <td>06-08-2024</td>
                                        <td>Dean Rippin</td>
                                        <td className="ct_fw_600">geovanny@hotmail.com</td>
                                        <td className="text-end ct_fw_600">923-416-9914</td>
                                    </tr>
                                    <tr onClick={() => navigate(pageRoutes.boat_tracer)}>
                                        <td>7</td>
                                        <td>JPB39Q</td>
                                        <td>06-08-2024</td>
                                        <td>Dean Rippin</td>
                                        <td className="ct_fw_600">geovanny@hotmail.com</td>
                                        <td className="text-end ct_fw_600">923-416-9914</td>
                                    </tr>
                                    <tr onClick={() => navigate(pageRoutes.boat_tracer)}>
                                        <td>8</td>
                                        <td>JPB39Q</td>
                                        <td>06-08-2024</td>
                                        <td>Dean Rippin</td>
                                        <td className="ct_fw_600">geovanny@hotmail.com</td>
                                        <td className="text-end ct_fw_600">923-416-9914</td>
                                    </tr>
                                    <tr onClick={() => navigate(pageRoutes.boat_tracer)}>
                                        <td>9</td>
                                        <td>JPB39Q</td>
                                        <td>06-08-2024</td>
                                        <td>Dean Rippin</td>
                                        <td className="ct_fw_600">geovanny@hotmail.com</td>
                                        <td className="text-end ct_fw_600">923-416-9914</td>
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

export default MaintainedBoats;
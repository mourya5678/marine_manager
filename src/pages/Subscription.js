import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { pageRoutes } from '../routes/PageRoutes';
import { useNavigate } from 'react-router-dom';

const Subscription = () => {
    const [isToggle, setIsToggle] = useState(false);
    const navigate = useNavigate();

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="subscription" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 ct_flex_wrap_767">
                            <ul className="d-flex align-items-center gap-3 ">
                                <li className="ct_fs_24 ct_fw_700 ct_list_style_none">Subscription</li>
                            </ul>
                        </div>
                        <div className="row mt-5">
                            <div className="col-xl-3 col-lg-6 mb-4">
                                <a href="javascript:void(0)" className="text-dark">
                                    <div className="ct_boat_card ct_px_18">
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />{"item?.owners_name " ?? 'NA'}</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />{"item?.owners_name " ?? 'NA'}</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />{"item?.owners_name " ?? 'NA'}</p>
                                        <p className="d-flex align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />{"item?.owners_name " ?? 'NA'}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription;
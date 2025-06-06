import React from 'react';
import { useNavigate } from 'react-router-dom';
import { pageRoutes } from '../routes/PageRoutes';

const FailedToConnectXero = () => {
    const navigate = useNavigate();

    return (
        <div class="ct_dashbaord_bg" style={{ backgroundColor: "hsl(348.88deg 85.77% 53.14% / 7%)" }}>
            <div class="container">
                <div class="row">
                    <div class="col-md-7 mx-auto">
                        <div class="ct_white_bg_1 ct_sucessful_msg_body">
                            <img src="img/False_Icon.png" alt="" />
                            <h3 class="ct_fs_24 text-center ct_fw_700 mb-0" style={{ marginTop: "30PX" }}>
                                Failed to Connect to Xero
                            </h3>
                            <div className='mt-4 text-center'>
                                <button className='ct_orange_btn mx-auto ct_custom_btm text-white mx-0 ct_wrap_100_1 ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22'
                                    onClick={() => navigate(pageRoutes.dashboard)}
                                >Return to The Servicehub</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FailedToConnectXero;
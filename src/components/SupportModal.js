import React from "react";

const SupportModal = ({ onClick }) => {

    return (
        <div className="modal fade ct_fade_modal_new ct_center_modal show" id="ct_logout_modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body border-0 ">
                        <div class="d-flex justify-content-between align-items-center">
                            <h4 className="ct_fs_24 text-center m-0"></h4>
                            <i class="fa fa-close" onClick={onClick}></i>
                        </div>
                        <div className="ct_support_icon">
                            <i class="fa-solid fa-headset"></i>
                        </div>
                        <p className="text-center" style={{ fontSize: '16px' }}>Please contact support  at  <br />ahoy@firstmate.com.au</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportModal;

import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { pageRoutes } from '../routes/PageRoutes';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    }

    return (
        <section className="ct_login_main_div">
            <div className="container-fluid px-0">
                <div className="ct_login_left_bg">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-md-0">
                        </div>
                        <div className="col-lg-4 offset-0 offset-lg-1  mb-4 mb-lg-0">
                            <div className="ct_login_right_form w-60 mx-auto mx-lg-0">
                                <div className="ct_login_logo mx-auto d-block text-center mb-4">
                                    <img src="img/Logo_blue.png" alt="" />
                                </div>
                                <div className="mb-5 text-center">
                                    <h4 className="ct_fs_28 mb-2">Forgot Password</h4>
                                    <p className="mb-0">Where Your Marine Needs Meet Expertise</p>
                                </div>
                                <form>
                                    <div className="ct_input-group mb-4">
                                        <label className="mb-2 ct_fw_700">Email <span className="ct_required_star">*</span></label>
                                        <input required type="email" name="text" autocomplete="off" className="ct_input" />
                                    </div>
                                    <div className="mt-4">
                                        <button className="ct_custom_btm">
                                            <span className="circle1"></span>
                                            <span className="circle2"></span>
                                            <span className="circle3"></span>
                                            <span className="circle4"></span>
                                            <span className="circle5"></span>
                                            <span className="text">Get reset link</span>
                                        </button>
                                    </div>
                                    <p className="mb-0 mt-3 ct_login_btm">Already know your password? <a onClick={() => navigate(pageRoutes.login)}
                                        href="javascript:void(0)">Login</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Eye from '../components/Eye'
import { pageRoutes } from '../routes/PageRoutes';

const Login = () => {
    const navigate = useNavigate();
    const [isEye, setIsEye] = useState(false);

    return (
        <section className="ct_login_main_div">
            <div className="container-fluid px-0">
                <div className="ct_login_left_bg my-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6 ">
                        </div>
                        <div className="col-lg-4 offset-0 offset-lg-1">
                            <div className="ct_login_right_form w-60 mx-auto mx-lg-0">
                                <div className="ct_login_logo mx-auto d-block text-center mb-4">
                                    <img src="img/Logo_blue.png" alt="" />
                                </div>
                                <div className="mb-5 text-center">
                                    <h4 className="ct_fs_28 mb-2">Login to your Account</h4>
                                    <p className="mb-0">Where Your Marine Needs Meet Expertise</p>
                                </div>
                                <form>
                                    <div className="ct_input-group mb-3">
                                        <label className="mb-2 ct_fw_700">Email <span className="ct_required_star">*</span></label>
                                        <input required type="email" name="text" autocomplete="off" className="ct_input" />
                                    </div>
                                    <div className="ct_input-group mb-3">
                                        <label className="mb-2 ct_fw_700">Password <span className="ct_required_star">*</span></label>
                                        <div className=" position-relative">
                                            <input
                                                type={isEye ? "text" : "password"}
                                                name="text"
                                                autocomplete="off"
                                                className="ct_input"
                                            />
                                            <Eye isEye={isEye} onClick={() => setIsEye(!isEye)} />
                                        </div>
                                    </div>
                                    <div className="ct_remember_text">
                                        <div className="ct_checkbox_main">
                                            <div>
                                                <input type="checkbox" id="ct_checkbox_cbx" className="ct_hidden-xs-up" />
                                                <label for="ct_checkbox_cbx" className="ct_checkbox_cbx"></label>
                                            </div>
                                            <p className="mb-0">Remember me</p>
                                        </div>
                                        <div className="ct_forgot_link">
                                            <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.forgot_password)}>Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="mt-4 d-block">
                                        <a href="javascript:void(0)"> <button type="button" className="ct_custom_btm">
                                            <span className="circle1"></span>
                                            <span className="circle2"></span>
                                            <span className="circle3"></span>
                                            <span className="circle4"></span>
                                            <span className="circle5"></span>
                                            <span className="text">Login</span>
                                        </button></a>
                                    </div>
                                    <p className="mb-0 mt-3 ct_login_btm">Not Registered Yet? <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.signup)}>Create an account</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
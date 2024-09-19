import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Eye from '../components/Eye';
import { pageRoutes } from '../routes/PageRoutes';

const SignUp = () => {
    const navigate = useNavigate();
    const [isEye, setIsEye] = useState(false);
    const [isEye1, setIsEye1] = useState(false);

    return (
        <section className="ct_login_main_div my-4">
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
                                    <h4 className="ct_fs_28 mb-2">Create an account for business</h4>
                                    <p className="mb-0">Where Your Marine Needs Meet Expertise</p>
                                </div>
                                <form className="ct_signup_form_scroll">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="ct_input-group mb-3">
                                                <label className="mb-2 ct_fw_700">First Name <span className="ct_required_star">*</span></label>
                                                <input required type="text" name="text" autocomplete="off" className="ct_input" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="ct_input-group mb-3">
                                                <label className="mb-2 ct_fw_700">Last Name <span className="ct_required_star">*</span></label>
                                                <input required type="text" name="text" autocomplete="off" className="ct_input" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ct_input-group mb-3">
                                        <label className="mb-2 ct_fw_700">Company Name <span className="ct_required_star">*</span></label>
                                        <input required type="text" name="text" autocomplete="off" className="ct_input" />
                                    </div>

                                    <div className="ct_input-group mb-3">
                                        <label className="mb-2 ct_fw_700"> Email <span className="ct_required_star">*</span></label>
                                        <input required type="email" name="text" autocomplete="off" className="ct_input" />
                                    </div>
                                    <div className="ct_input-group mb-3">
                                        <label className="mb-2 ct_fw_700">Phone <span className="ct_required_star">*</span></label>
                                        <input required type="number" name="text" autocomplete="off" className="ct_input" />
                                    </div>
                                    <div className="ct_input-group mb-3">
                                        <label className="mb-2 ct_fw_700">Password <span className="ct_required_star">*</span></label>
                                        <div className=" position-relative">
                                            <input
                                                type={isEye ? "text" : "password"}
                                                name="text"
                                                autocomplete="off"
                                                className="ct_input"
                                                required
                                            />
                                            <Eye isEye={isEye} onClick={() => setIsEye(!isEye)} />
                                        </div>
                                    </div>
                                    <div className="ct_input-group mb-3">
                                        <label className="mb-2 ct_fw_700">Confirm Password <span className="ct_required_star">*</span></label>
                                        <div className=" position-relative">
                                            <input
                                                type={isEye1 ? "text" : "password"}
                                                name="text"
                                                autocomplete="off"
                                                className="ct_input"
                                                required
                                            />
                                            <Eye isEye={isEye1} onClick={() => setIsEye1(!isEye1)} />
                                        </div>
                                    </div>
                                    <div className="ct_remember_text">
                                        <div className="ct_checkbox_main mb-3 align-items-start">
                                            <div>
                                                <input type="checkbox" id="ct_checkbox_cbx" className="ct_hidden-xs-up" />
                                                <label for="ct_checkbox_cbx" className="ct_checkbox_cbx"></label>
                                            </div>
                                            <p className="mb-0">I am a company that gives permission to create a account for and for Marine Manager
                                            to collect, use and disclose the information about my as set forth in the Terms of Use and Privacy Policy.</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button className="ct_custom_btm">
                                            <span className="circle1"></span>
                                            <span className="circle2"></span>
                                            <span className="circle3"></span>
                                            <span className="circle4"></span>
                                            <span className="circle5"></span>
                                            <span className="text">Sign Up</span>
                                        </button>
                                    </div>
                                    <p className="mb-0 mt-3 ct_login_btm">Already have an account? <a onClick={() => navigate(pageRoutes.login)} href="javscript:void(0)">Login</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp;
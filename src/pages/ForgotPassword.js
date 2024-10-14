import { Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ForgotPasswordSchema } from '../auth/Schema';
import ErrorMessage from '../components/ErrorMessage';
import { userForgotPassword } from '../redux/actions/authActions';
import { pageRoutes } from '../routes/PageRoutes';

const ForgotPassword = () => {
    const { isLoading } = useSelector((state) => state?.authReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialState = {
        email: ''
    };

    const onHandleForgotPassword = async (values, { setSubmitting }) => {
        setSubmitting(false);
        const callback = (response) => {
            if (response.success) {
                navigate(pageRoutes.login);
            }
        };
        dispatch(userForgotPassword({ payload: values, callback }));
    };

    if (isLoading) {
        return "Loading"
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
                                <Formik
                                    initialValues={initialState}
                                    validationSchema={ForgotPasswordSchema}
                                    onSubmit={(values, actions) => {
                                        onHandleForgotPassword(values, actions);
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                    }) => (
                                        <form>
                                            <div className="ct_input-group mb-4">
                                                <label className="mb-2 ct_fw_700">Email <span className="ct_required_star">*</span></label>
                                                <input
                                                    id="email"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values?.email}
                                                    type="email"
                                                    autocomplete="off"
                                                    className="ct_input"
                                                    required
                                                />
                                                <ErrorMessage
                                                    errors={errors}
                                                    touched={touched}
                                                    fieldName="email"
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <button type="submit" onClick={handleSubmit} className="ct_custom_btm">
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
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;
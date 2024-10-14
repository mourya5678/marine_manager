import React, { useState } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router';
import { signUpSchema } from '../auth/Schema';
import ErrorMessage from '../components/ErrorMessage';
import Eye from '../components/Eye';
import { pageRoutes } from '../routes/PageRoutes';
import { userSignUp } from '../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

const SignUp = () => {
    const { isLoading } = useSelector((state) => state?.authReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isEye, setIsEye] = useState(false);
    const [isEye1, setIsEye1] = useState(false);

    const initialState = {
        first_name: '',
        last_name: '',
        company_name: '',
        email: '',
        phone_no: '',
        password: '',
        confirm_password: '',
        ct_checkbox_cbx: false,
    };

    const handleSignUp = async (values, { setSubmitting }) => {
        setSubmitting(false);
        delete values.ct_checkbox_cbx;
        delete values.confirm_password;
        const callback = (response) => {
            if (response.success) navigate(pageRoutes?.login);
        };
        dispatch(userSignUp({ payload: values, callback }));
    };

    if (isLoading) {
        return "Loading"
    }
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
                                <Formik
                                    initialValues={initialState}
                                    validationSchema={signUpSchema}
                                    onSubmit={(values, actions) => {
                                        handleSignUp(values, actions);
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
                                        <form className="ct_signup_form_scroll">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="ct_input-group mb-3">
                                                        <label className="mb-2 ct_fw_700">First Name <span className="ct_required_star">*</span></label>
                                                        <input
                                                            id="first_name"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values?.first_name}
                                                            type="text"
                                                            className="ct_input"
                                                            required
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="first_name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="ct_input-group mb-3">
                                                        <label className="mb-2 ct_fw_700">Last Name <span className="ct_required_star">*</span></label>
                                                        <input
                                                            id="last_name"
                                                            value={values?.last_name}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className="ct_input"
                                                            required
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="last_name"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ct_input-group mb-3">
                                                <label className="mb-2 ct_fw_700">Company Name <span className="ct_required_star">*</span></label>
                                                <input
                                                    id="company_name"
                                                    value={values?.company_name}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    type="text"
                                                    className="ct_input"
                                                    required
                                                />
                                                <ErrorMessage
                                                    errors={errors}
                                                    touched={touched}
                                                    fieldName="company_name"
                                                />
                                            </div>

                                            <div className="ct_input-group mb-3">
                                                <label className="mb-2 ct_fw_700"> Email <span className="ct_required_star">*</span></label>
                                                <input
                                                    id="email"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values?.email}
                                                    type="email"
                                                    className="ct_input"
                                                />
                                                <ErrorMessage
                                                    errors={errors}
                                                    touched={touched}
                                                    fieldName="email"
                                                />
                                            </div>
                                            <div className="ct_input-group mb-3">
                                                <label className="mb-2 ct_fw_700">Phone <span className="ct_required_star">*</span></label>
                                                <input
                                                    id="phone_no"
                                                    value={values?.phone_no}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    type="text"
                                                    className="ct_input"
                                                />
                                                <ErrorMessage
                                                    errors={errors}
                                                    touched={touched}
                                                    fieldName="phone_no"
                                                />
                                            </div>
                                            <div className="ct_input-group mb-3">
                                                <label className="mb-2 ct_fw_700">Password <span className="ct_required_star">*</span></label>
                                                <div className=" position-relative">
                                                    <input
                                                        id="password"
                                                        value={values?.password}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type={isEye ? "text" : "password"}
                                                        className="ct_input"
                                                    />
                                                    <Eye isEye={isEye} onClick={() => setIsEye(!isEye)} />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="password"
                                                    />
                                                </div>
                                            </div>
                                            <div className="ct_input-group mb-3">
                                                <label className="mb-2 ct_fw_700">Confirm Password <span className="ct_required_star">*</span></label>
                                                <div className=" position-relative">
                                                    <input
                                                        id="confirm_password"
                                                        value={values?.confirm_password}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type={isEye1 ? "text" : "password"}
                                                        className="ct_input"
                                                        required
                                                    />
                                                    <Eye isEye={isEye1} onClick={() => setIsEye1(!isEye1)} />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="confirm_password"
                                                    />
                                                </div>
                                            </div>
                                            <div className="ct_remember_text">
                                                <div className="ct_checkbox_main mb-3 align-items-start">
                                                    <div>
                                                        <input
                                                            id="ct_checkbox_cbx"
                                                            value={values?.ct_checkbox_cbx}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="checkbox"
                                                            className="ct_hidden-xs-up"
                                                        />
                                                        <label for="ct_checkbox_cbx" className="ct_checkbox_cbx"></label>
                                                    </div>
                                                    <p className="mb-0">I am a company that gives permission to create a account for and for Marine Managerto collect,
                                                    use and disclose the information about my as set forth in the Terms of Use and Privacy Policy.
                                                    </p>
                                                </div>
                                            </div>
                                            {errors?.ct_checkbox_cbx &&
                                                <span style={{ color: "red" }}>
                                                    {errors?.ct_checkbox_cbx}
                                                </span>
                                            }
                                            <div className="mt-4">
                                                <button type="submit" className="ct_custom_btm" onClick={handleSubmit}>
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

export default SignUp;
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router";
import { signUpSchema } from "../auth/Schema";
import ErrorMessage from "../components/ErrorMessage";
import Eye from "../components/Eye";
import { pageRoutes } from "../routes/PageRoutes";
import {
    getAllSubscriptionPlan,
    userSignUp,
} from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import SelectSubscription from "../components/SelectSubscription";
import CardDeatilsModel from "../components/CardDeatilsModel";
import { message } from "antd";

const SignUp = () => {
    const { isLoading, subscriptionPlane } = useSelector(
        (state) => state?.authReducer
    );

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isEye, setIsEye] = useState(false);
    const [isEye1, setIsEye1] = useState(false);

    const [isSubscription, setIsSubscription] = useState(false);
    const [isCard, setIsCart] = useState(false);

    const [subscriptionType, setSubscriptionType] = useState();
    const [signUpValues, setSignUpValues] = useState();

    const initialState = {
        first_name: "",
        last_name: "",
        company_name: "",
        email: "",
        phone_no: "",
        password: "",
        confirm_password: "",
        ct_checkbox_cbx: false,
    };

    useEffect(() => {
        dispatch(getAllSubscriptionPlan());
    }, []);

    const handleSignUp = async (values, { setSubmitting }) => {
        setSubmitting(false);
        setIsSubscription(true);
        setIsCart(false);
        setSignUpValues(values);
    };

    const onSelectSubscription = (value) => {
        setIsCart(true);
        setIsSubscription(false);
        setSubscriptionType(value);
    };

    const handleClickBack = () => {
        setIsSubscription(true);
        setIsCart(false);
    };

    const handleCancel = () => {
        setIsSubscription(false);
        setIsCart(false);
        setSubscriptionType();
    };

    const handleCartDetailsAdd = (val, err) => {
        if (err?.message) {
            message.error(err?.message);
        } else {
            const callback = (response) => {
                if (response.success) {
                    setIsSubscription(false);
                    setIsCart(false);
                    setSignUpValues();
                    setSubscriptionType();
                    navigate(pageRoutes?.login);
                }
            };
            const data = {
                first_name: signUpValues?.first_name.trim(),
                last_name: signUpValues?.last_name?.trim(),
                company_name: signUpValues?.company_name.trim(),
                email: signUpValues?.email?.trim(),
                phone_no: signUpValues?.phone_no,
                password: signUpValues?.password,
                planId: subscriptionType?.id || "",
                paymentMethodId: val?.id,
            };
            dispatch(userSignUp({ payload: data, callback }));
        }
    };

    if (isLoading) {
        return <Loader />;
    }
    return (
        <section className="et_landing_main_bg">
            <div className="ct_header_flex">
                <div className="et_logo">
                    <img src="img/Logo_blue_new.png" />
                </div>
            </div>
            <div className="et_grid1234">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="et_signup_bg_new_344 w-60 mx-auto mx-lg-0 py-4 pe-0">
                                {" "}
                                <div className="mb-4 text-center">
                                    {" "}
                                    <h4 className="ct_fs_28 mb-2">
                                        Create an account for business
                                    </h4>{" "}
                                </div>{" "}
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
                                        <form className="ct_signup_form_scroll ct_pe_30 ">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="ct_input-group mb-3">
                                                        <label className="mb-2 ct_fw_700">
                                                            First Name{" "}
                                                            <span className="ct_required_star">*</span>
                                                        </label>
                                                        <input
                                                            id="first_name"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values?.first_name}
                                                            type="text"
                                                            className="ct_input et_input_login"
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
                                                        <label className="mb-2 ct_fw_700">
                                                            Last Name{" "}
                                                            <span className="ct_required_star">*</span>
                                                        </label>
                                                        <input
                                                            id="last_name"
                                                            value={values?.last_name}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className="ct_input et_input_login"
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
                                                <label className="mb-2 ct_fw_700">
                                                    Company Name{" "}
                                                    <span className="ct_required_star">*</span>
                                                </label>
                                                <input
                                                    id="company_name"
                                                    value={values?.company_name}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    type="text"
                                                    className="ct_input et_input_login"
                                                    required
                                                />
                                                <ErrorMessage
                                                    errors={errors}
                                                    touched={touched}
                                                    fieldName="company_name"
                                                />
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="ct_input-group mb-3">
                                                        <label className="mb-2 ct_fw_700">
                                                            {" "}
                                                            Email <span className="ct_required_star">*</span>
                                                        </label>
                                                        <input
                                                            id="email"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values?.email}
                                                            type="email"
                                                            className="ct_input et_input_login"
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="ct_input-group mb-3">
                                                        <label className="mb-2 ct_fw_700">
                                                            Phone <span className="ct_required_star">*</span>
                                                        </label>
                                                        <input
                                                            id="phone_no"
                                                            value={values?.phone_no}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className="ct_input et_input_login"
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="phone_no"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="ct_input-group mb-3">
                                                        <label className="mb-2 ct_fw_700">
                                                            Password{" "}
                                                            <span className="ct_required_star">*</span>
                                                        </label>
                                                        <div className=" position-relative">
                                                            <input
                                                                id="password"
                                                                value={values?.password}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                type={isEye ? "text" : "password"}
                                                                className="ct_input et_input_login"
                                                            />
                                                            <Eye
                                                                isEye={isEye}
                                                                onClick={() => setIsEye(!isEye)}
                                                            />
                                                        </div>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="password"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="ct_input-group mb-3">
                                                        <label className="mb-2 ct_fw_700">
                                                            Confirm Password{" "}
                                                            <span className="ct_required_star">*</span>
                                                        </label>
                                                        <div className=" position-relative">
                                                            <input
                                                                id="confirm_password"
                                                                value={values?.confirm_password}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                type={isEye1 ? "text" : "password"}
                                                                className="ct_input et_input_login"
                                                                required
                                                            />
                                                            <Eye
                                                                isEye={isEye1}
                                                                onClick={() => setIsEye1(!isEye1)}
                                                            />
                                                        </div>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="confirm_password"
                                                        />
                                                    </div>
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
                                                        <label
                                                            for="ct_checkbox_cbx"
                                                            className="ct_checkbox_cbx et_checkbox_clr"
                                                        ></label>
                                                    </div>
                                                    <p className="mb-0">
                                                        I am a company that gives permission to create a
                                                        account for and for ServiceHub to collect, use and
                                                        disclose the information about my as set forth in
                                                        the Terms of Use and Privacy Policy.
                                                    </p>
                                                </div>
                                            </div>
                                            {errors?.ct_checkbox_cbx && (
                                                <span style={{ color: "red" }}>
                                                    {errors?.ct_checkbox_cbx}
                                                </span>
                                            )}
                                            <div className="mt-4">
                                                <button
                                                    type="submit"
                                                    className="ct_custom_btm"
                                                    onClick={handleSubmit}
                                                >
                                                    <span className="circle1"></span>
                                                    <span className="circle2"></span>
                                                    <span className="circle3"></span>
                                                    <span className="circle4"></span>
                                                    <span className="circle5"></span>
                                                    <span className="text">Sign Up</span>
                                                </button>
                                            </div>
                                            <p className="mb-0 mt-3 ct_login_btm text-dark">
                                                Already have an account?{" "}
                                                <a
                                                    onClick={() => navigate(pageRoutes.login)}
                                                    href="javascript:void(0)"
                                                >
                                                    Login
                                                </a>
                                            </p>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
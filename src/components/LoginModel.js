import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import Eye from "../components/Eye";
import { pageRoutes } from "../routes/PageRoutes";
import { signInSchema } from "../auth/Schema";
import { userLogin } from "../redux/actions/authActions";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { pipSaveProfile } from "../auth/Pip";
const LoginModel = ({ onClick }) => {
  const { isLoading, fcm } = useSelector((state) => state?.authReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEye, setIsEye] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const initialState = {
    email: Cookies.get("admin_user_email") ?? "",
    password: Cookies.get("admin_user_password" ?? ""),
  };

  const onHandleLogin = async (values, { setSubmitting }) => {
    setSubmitting(false);
    if (isChecked) {
      Cookies.set("admin_user_email", values?.email, { expires: 365 });
      Cookies.set("admin_user_password", values?.password, { expires: 365 });
    }
    const callback = (response) => {
      if (response.success) {
        const data = {
          name: response?.data?.userData?.first_name ?? "",
          company_name: response?.data?.userData?.company_name ?? "",
        };
        console.log({ data }, { response });
        pipSaveProfile(data);
        navigate(pageRoutes.dashboard);
      }
    };
    // const local = JSON.parse(localStorage.getItem('MarinfcmToken'))
    const data = {
      email: values?.email,
      password: values?.password,
      // fcm_token: local
    };
    dispatch(userLogin({ payload: data, callback }));
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="modal fade ct_login_modal show" id="ct_logout_modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body border-0 ">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h4 className="ct_fs_24 text-center m-0 et_fw_700">Login to your Account</h4>
              <i class="fa fa-close" onClick={onClick}></i>
            </div>
            <Formik
              initialValues={initialState}
              validationSchema={signInSchema}
              onSubmit={(values, actions) => {
                onHandleLogin(values, actions);
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
                  <div className="ct_input-group mb-3">
                    <label className="mb-2 ct_fw_700">
                      Email <span className="ct_required_star">*</span>
                    </label>
                    <input
                      id="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values?.email}
                      type="email"
                      autocomplete="off"
                      className="ct_input et_input_login"
                      required
                    />
                    <ErrorMessage
                      errors={errors}
                      touched={touched}
                      fieldName="email"
                    />
                  </div>
                  <div className="ct_input-group mb-3">
                    <label className="mb-2 ct_fw_700">
                      Password <span className="ct_required_star">*</span>
                    </label>
                    <div className=" position-relative">
                      <input
                        id="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values?.password}
                        type={isEye ? "text" : "password"}
                        autocomplete="off"
                        className="ct_input et_input_login"
                      />
                      <Eye isEye={isEye} onClick={() => setIsEye(!isEye)} />
                    </div>
                    <ErrorMessage
                      errors={errors}
                      touched={touched}
                      fieldName="password"
                    />
                  </div>
                  <div className="ct_remember_text">
                    <div className="ct_checkbox_main">
                      <div>
                        <input
                          onClick={() => setIsChecked(!isChecked)}
                          type="checkbox"
                          value={isChecked}
                          checked={isChecked}
                          id="ct_checkbox_cbx"
                          className="ct_hidden-xs-up"
                        />
                        <label
                          for="ct_checkbox_cbx"
                          className="ct_checkbox_cbx et_checkbox_clr"
                        ></label>
                      </div>
                      <p className="mb-0">Remember me</p>
                    </div>
                    <div className="ct_forgot_link">
                      <a
                        href="javascript:void(0)"
                        onClick={() => navigate(pageRoutes.forgot_password)}
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-3 d-block">
                    <a href="javascript:void(0)">
                      {" "}
                      <button
                        onClick={handleSubmit}
                        type="submit"
                        className="ct_custom_btm et_btn_h_48"
                      >
                        <span className="circle1"></span>
                        <span className="circle2"></span>
                        <span className="circle3"></span>
                        <span className="circle4"></span>
                        <span className="circle5"></span>
                        <span className="text">Login</span>
                      </button>
                    </a>
                  </div>
                  <p className="mb-0 mt-3 ct_login_btm">
                    Not Registered Yet?{" "}
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes.signup)}
                    >
                      Create an account
                    </a>
                  </p>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModel;

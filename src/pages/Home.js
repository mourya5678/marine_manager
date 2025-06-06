import React, { useState } from "react";
import LoginModel from "../components/LoginModel";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../routes/PageRoutes";
import SupportModal from "../components/SupportModal";
import Loader from "../components/Loader";

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <section className="et_landing_main_bg">
        <div className="ct_header_flex">
          <div className="et_logo">
            <img src="img/Logo_blue_new.png" />
          </div>
          <div className="et_login_btns">
            <button className="et_blue_btn" onClick={() => {
              setIsLogin(true);
              setIsShow(false);
            }}>
              Login
            </button>
          </div>
        </div>
        <div className="et_grid1234">
          <div className="container mb-3">
            <div className="row">
              <div className="col-lg-8 mx-auto et_top_login_bg34">
                <div className="">
                  <div className="et_small_logo">
                    {/* <img src="img/Marine_Black_Lg.png" /> */}
                  </div>
                  <div data-aos="fade-down"
                    data-aos-duration="1000">
                    <p className="mb-0 ct_fs_16 text-center">
                      Select the option that best fits your business size.
                    </p>
                    <small className="d-block text-center"> All
                      plans include a 30 day free trial period. Pay annually and
                      save.</small>
                  </div>
                  <div className="et_small_logo">
                    {/* <img src="img/Marine_Black_Lg.png" /> */}
                  </div>
                </div>
                <div className="d-flex justify-content-center  gap-3 mt-3 ct_flex_wrap_575 mb-0">
                  <button className="et_blue_badge ct_wrap_100_1" data-aos="fade-up"
                    data-aos-duration="1000" style={{ width: "320px", }} onClick={() => navigate(pageRoutes.signup)}>
                    <p className="mb-0 ct_icon_30"> <i class="fa-solid fa-money-bill-trend-up"></i></p>
                    Sole Trader</button>
                  <button className="et_blue_badge ct_wrap_100_1" data-aos="fade-up"
                    data-aos-duration="1500" style={{ width: "320px", }} onClick={() => navigate(pageRoutes.signup)}>
                    <p className="mb-0 ct_icon_30"> <i class="fa-solid fa-briefcase"></i> </p> Small Business <br /> (2-5 Field Staff)
                  </button>
                  <button className="et_blue_badge ct_wrap_100_1" data-aos="fade-up"
                    data-aos-duration="2000" style={{ width: "320px", }} onClick={() => {
                      setIsShow(true);
                      setIsLogin(false);
                    }}>
                    <p className="mb-0 ct_icon_30">  <i class="fa-solid fa-users-gear"></i></p>
                    Enterprise More than <br /> (5 Field staff)
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="row mt-4">
              <div className="col-lg-7 mx-auto"> */}

            {/* </div>

            </div> */}
          </div>

          <div className="ct_bottom_section_main">
            <h4 className=" mb-4 et_fw_700 text-center">
              Why Join the <span className="ct_blue_text">FirstMate ServiceHub?</span>
            </h4>
            <ul className="et_login_bottom_bg567">
              <li data-aos="fade-right"
                data-aos-duration="1000">
                <i class="fa-solid fa-check-double"></i>
                <div>
                  <h6 className="mb-0">More Bookings, Less Hassle</h6>
                  <p className="mb-0">
                    Connect with boat owners looking for your services.
                  </p>
                </div>
              </li>
              <li data-aos="fade-right"
                data-aos-duration="1500">
                <i class="fa-solid fa-check-double"></i>
                <div>
                  <h6 className="mb-1">Automated Scheduling</h6>
                  <p className="mb-0">
                    Reduce no-shows with built-in appointment reminders.
                  </p>
                </div>
              </li>
              <li data-aos="fade-right"
                data-aos-duration="2000">
                <i class="fa-solid fa-check-double"></i>
                <div>
                  <h6 className="mb-1">Less Admin, More Productivity</h6>
                  <p className="mb-0">
                    Cut paperwork, automate invoicing, and streamline service
                    management, freeing up your team to focus on what they do
                    best.
                  </p>
                </div>
              </li>
              <li data-aos="fade-right"
                data-aos-duration="2500">
                <i class="fa-solid fa-check-double"></i>
                <div>
                  <h6 className="mb-1">Retain & Grow Your Business</h6>
                  <p className="mb-0">
                    Stay ahead with automated service announcements, allowing
                    you to proactively reach out to boat owners before scheduled
                    maintenance.
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section >
      {isLogin && <LoginModel onClick={() => setIsLogin(false)} />}
      {isShow && <SupportModal onClick={() => setIsShow(false)} />}
    </div >
  );
};

export default Home;

import React, { useState } from "react";
import { pageRoutes } from "../routes/path";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader";

function LogoutConfirm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    localStorage.clear();
    navigate(pageRoutes.login)
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="modal fade ct_assets_modal"
          id="ct_logout_modal"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0 pt-0">
                <button
                  type="button"
                  className="btn-close ct_cloose_btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <div className="modal-body border-0 ">
                <svg
                  width={21}
                  height={20}
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0117 0C4.51172 0 0.0117188 4.5 0.0117188 10C0.0117188 15.5 4.51172 20 10.0117 20C15.5117 20 20.0117 15.5 20.0117 10C20.0117 4.5 15.5117 0 10.0117 0ZM10.0117 15.9C6.81172 15.9 4.11172 13.3 4.11172 10C4.11172 8.3 4.91172 6.6 6.21172 5.5C6.61172 5.2 7.31172 5.2 7.61172 5.6C8.01172 6.1 7.91172 6.7 7.51172 7.1C6.61172 7.8 6.11172 8.9 6.11172 10.1C6.11172 12.2 7.81172 14 10.0117 14C12.2117 14 13.9117 12.3 13.9117 10.1C13.9117 9 13.4117 7.9 12.5117 7.1C12.1117 6.8 12.0117 6.1 12.4117 5.7C12.8117 5.3 13.4117 5.2 13.8117 5.6C15.1117 6.7 15.9117 8.4 15.9117 10.1C15.9117 13.3 13.2117 15.9 10.0117 15.9ZM10.0117 3.5C10.5117 3.5 11.0117 3.9 11.0117 4.5V8.2C11.0117 8.7 10.5117 9.2 10.0117 9.2C9.51172 9.2 9.01172 8.7 9.01172 8.2V4.5C9.01172 3.9 9.51172 3.5 10.0117 3.5Z"
                    fill="#DC0202"
                  />
                </svg>
                <h4 className="text-center mb-4 ct_fw_600 justify-content-center">
                  Log Out
                </h4>
                <p className="text-center ct_grey_text">
                  Are you sure, you want to logout? once you logout
                  you need to login again
                </p>
                <div className="modal-footer border-0 justify-content-center">
                  <button
                    type="button"
                    className="ct_outline_btn"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleLogout}
                    data-bs-dismiss="modal"
                    className="bg-danger ct_outline_btn ct_blue_btn text-white justify-content-center"
                    style={{ borderColor: "rgb(220, 53, 69)" }}
                  >
                    Yes, Log Out!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default LogoutConfirm;

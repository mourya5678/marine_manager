import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const CdsJobService = () => {
  const [isToggle, setIsToggle] = useState(false);

  const onHandleClick = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="ct_dashbaord_bg">
      <div className={`ct_dashbaord_main ${isToggle == false && "ct_active"}`}>
        <Sidebar path="all_boats" />
        <div className="ct_content_right">
          <Header onClick={onHandleClick} />
          <div className="ct_dashbaord_middle">
            <h4 className="ct_fs_24 ct_fw_600 mb-3">CDS Job/Service Sheet</h4>
            <div className="ct_grid_tem_5">
              <div className="ct_boat_white_bg">
                <div className="ct_boat_info_title mb-0">
                  <div className="ct_boat_info_icon_1">
                    <svg
                      width="16"
                      height="21"
                      viewBox="0 0 16 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.58251 11.6733H5.41501V18.2733C5.41501 19.8133 6.24918 20.125 7.26668 18.97L14.2058 11.0867C15.0583 10.1242 14.7008 9.32665 13.4083 9.32665H10.5758V2.72665C10.5758 1.18665 9.74168 0.874987 8.72418 2.02999L1.78501 9.91332C0.941679 10.885 1.29918 11.6733 2.58251 11.6733Z"
                        stroke="#E65F2B"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="ct_fs_20  ct_fw_500  mb-1"
                      style={{ color: "#6D6D6D" }}
                    >
                      Job Number
                    </p>
                    <p className=" mb-0 ct_fw_600">0255</p>
                  </div>
                </div>
              </div>
              <div className="ct_boat_white_bg">
                <div className="ct_boat_info_title mb-0">
                  <div className="ct_boat_info_icon_1">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 0.75V3.375"
                        stroke="#E65F2B"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 0.75V3.375"
                        stroke="#E65F2B"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.0625 6.95386H16.9375"
                        stroke="#E65F2B"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.375 6.4375V13.875C17.375 16.5 16.0625 18.25 13 18.25H6C2.9375 18.25 1.625 16.5 1.625 13.875V6.4375C1.625 3.8125 2.9375 2.0625 6 2.0625H13C16.0625 2.0625 17.375 3.8125 17.375 6.4375Z"
                        stroke="#E65F2B"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.49617 10.9875H9.50403"
                        stroke="#E65F2B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.2574 10.9875H6.26526"
                        stroke="#E65F2B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.2574 13.6125H6.26526"
                        stroke="#E65F2B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className=" ct_fw_500 mb-1" style={{ color: "#6D6D6D" }}>
                      Date
                    </p>
                    <p className=" mb-0 ct_fw_600">12/08/2024</p>
                  </div>
                </div>
              </div>
              <div className="ct_boat_white_bg">
                <div className="ct_boat_info_title mb-0">
                  <div className="ct_boat_info_icon_1">
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.615 12.4663C10.5958 12.4663 10.567 12.4663 10.5479 12.4663C10.5191 12.4663 10.4808 12.4663 10.452 12.4663C8.27663 12.3992 6.64746 10.703 6.64746 8.61379C6.64746 6.48629 8.38204 4.75171 10.5095 4.75171C12.637 4.75171 14.3716 6.48629 14.3716 8.61379C14.362 10.7125 12.7233 12.3992 10.6437 12.4663C10.6245 12.4663 10.6245 12.4663 10.615 12.4663ZM10.5 6.17963C9.15829 6.17963 8.07538 7.27213 8.07538 8.60421C8.07538 9.91713 9.10079 10.9809 10.4041 11.0288C10.4329 11.0192 10.5287 11.0192 10.6245 11.0288C11.9087 10.9617 12.915 9.90754 12.9245 8.60421C12.9245 7.27213 11.8416 6.17963 10.5 6.17963Z"
                        fill="#E65F2B"
                      />
                      <path
                        d="M10.4999 21.3021C7.92197 21.3021 5.45905 20.3438 3.55197 18.5996C3.37947 18.4463 3.3028 18.2163 3.32197 17.9959C3.44655 16.8555 4.15572 15.7917 5.33447 15.0059C8.1903 13.1084 12.819 13.1084 15.6653 15.0059C16.8441 15.8013 17.5532 16.8555 17.6778 17.9959C17.7066 18.2259 17.6203 18.4463 17.4478 18.5996C15.5407 20.3438 13.0778 21.3021 10.4999 21.3021ZM4.82655 17.8042C6.41738 19.1363 8.4203 19.8646 10.4999 19.8646C12.5795 19.8646 14.5824 19.1363 16.1732 17.8042C16.0007 17.2196 15.5407 16.6542 14.8603 16.1942C12.5028 14.6226 8.50655 14.6226 6.12988 16.1942C5.44947 16.6542 4.99905 17.2196 4.82655 17.8042Z"
                        fill="#E65F2B"
                      />
                      <path
                        d="M10.5001 21.3022C4.81716 21.3022 0.197998 16.683 0.197998 11.0001C0.197998 5.31716 4.81716 0.697998 10.5001 0.697998C16.183 0.697998 20.8022 5.31716 20.8022 11.0001C20.8022 16.683 16.183 21.3022 10.5001 21.3022ZM10.5001 2.1355C5.61258 2.1355 1.6355 6.11258 1.6355 11.0001C1.6355 15.8876 5.61258 19.8647 10.5001 19.8647C15.3876 19.8647 19.3647 15.8876 19.3647 11.0001C19.3647 6.11258 15.3876 2.1355 10.5001 2.1355Z"
                        fill="#E65F2B"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="ct_fs_20 ct_fw_500  mb-1"
                      style={{ color: "#6D6D6D" }}
                    >
                      Customer Name
                    </p>
                    <p className=" mb-0 ct_fw_600">John Smith</p>
                  </div>
                </div>
              </div>
              <div className="ct_boat_white_bg">
                <div className="ct_boat_info_title mb-0">
                  <div className="ct_boat_info_icon_1">
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.615 12.4663C10.5958 12.4663 10.567 12.4663 10.5479 12.4663C10.5191 12.4663 10.4808 12.4663 10.452 12.4663C8.27663 12.3992 6.64746 10.703 6.64746 8.61379C6.64746 6.48629 8.38204 4.75171 10.5095 4.75171C12.637 4.75171 14.3716 6.48629 14.3716 8.61379C14.362 10.7125 12.7233 12.3992 10.6437 12.4663C10.6245 12.4663 10.6245 12.4663 10.615 12.4663ZM10.5 6.17963C9.15829 6.17963 8.07538 7.27213 8.07538 8.60421C8.07538 9.91713 9.10079 10.9809 10.4041 11.0288C10.4329 11.0192 10.5287 11.0192 10.6245 11.0288C11.9087 10.9617 12.915 9.90754 12.9245 8.60421C12.9245 7.27213 11.8416 6.17963 10.5 6.17963Z"
                        fill="#E65F2B"
                      />
                      <path
                        d="M10.4999 21.3021C7.92197 21.3021 5.45905 20.3438 3.55197 18.5996C3.37947 18.4463 3.3028 18.2163 3.32197 17.9959C3.44655 16.8555 4.15572 15.7917 5.33447 15.0059C8.1903 13.1084 12.819 13.1084 15.6653 15.0059C16.8441 15.8013 17.5532 16.8555 17.6778 17.9959C17.7066 18.2259 17.6203 18.4463 17.4478 18.5996C15.5407 20.3438 13.0778 21.3021 10.4999 21.3021ZM4.82655 17.8042C6.41738 19.1363 8.4203 19.8646 10.4999 19.8646C12.5795 19.8646 14.5824 19.1363 16.1732 17.8042C16.0007 17.2196 15.5407 16.6542 14.8603 16.1942C12.5028 14.6226 8.50655 14.6226 6.12988 16.1942C5.44947 16.6542 4.99905 17.2196 4.82655 17.8042Z"
                        fill="#E65F2B"
                      />
                      <path
                        d="M10.5001 21.3022C4.81716 21.3022 0.197998 16.683 0.197998 11.0001C0.197998 5.31716 4.81716 0.697998 10.5001 0.697998C16.183 0.697998 20.8022 5.31716 20.8022 11.0001C20.8022 16.683 16.183 21.3022 10.5001 21.3022ZM10.5001 2.1355C5.61258 2.1355 1.6355 6.11258 1.6355 11.0001C1.6355 15.8876 5.61258 19.8647 10.5001 19.8647C15.3876 19.8647 19.3647 15.8876 19.3647 11.0001C19.3647 6.11258 15.3876 2.1355 10.5001 2.1355Z"
                        fill="#E65F2B"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="ct_fs_20 ct_fw_500 mb-1"
                      style={{ color: "#6D6D6D" }}
                    >
                      Person Attending
                    </p>
                    <p className=" mb-0 ct_fw_600">Alex Jhonson</p>
                  </div>
                </div>
              </div>
              <div className="ct_boat_white_bg">
                <div className="ct_boat_info_title mb-0">
                  <div className="ct_boat_info_icon_1">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5417 19.4584C13.6001 19.4584 12.6084 19.2334 11.5834 18.8001C10.5834 18.3751 9.57508 17.7917 8.59175 17.0834C7.61675 16.3667 6.67508 15.5667 5.78341 14.6917C4.90008 13.8001 4.10008 12.8584 3.39175 11.8917C2.67508 10.8917 2.10008 9.89175 1.69175 8.92508C1.25841 7.89175 1.04175 6.89175 1.04175 5.95008C1.04175 5.30008 1.15841 4.68341 1.38341 4.10841C1.61675 3.51675 1.99175 2.96675 2.50008 2.49175C3.14175 1.85841 3.87508 1.54175 4.65842 1.54175C4.98342 1.54175 5.31675 1.61675 5.60008 1.75008C5.92508 1.90008 6.20008 2.12508 6.40008 2.42508L8.33342 5.15008C8.50842 5.39175 8.64175 5.62508 8.73341 5.85841C8.84175 6.10841 8.90008 6.35842 8.90008 6.60008C8.90008 6.91675 8.80841 7.22508 8.63341 7.51675C8.50841 7.74175 8.31675 7.98342 8.07508 8.22508L7.50842 8.81675C7.51675 8.84175 7.52508 8.85842 7.53341 8.87508C7.63341 9.05008 7.83341 9.35008 8.21675 9.80008C8.62508 10.2667 9.00842 10.6917 9.39175 11.0834C9.88342 11.5667 10.2917 11.9501 10.6751 12.2667C11.1501 12.6667 11.4584 12.8667 11.6417 12.9584L11.6251 13.0001L12.2334 12.4001C12.4917 12.1417 12.7417 11.9501 12.9834 11.8251C13.4417 11.5417 14.0251 11.4917 14.6084 11.7334C14.8251 11.8251 15.0584 11.9501 15.3084 12.1251L18.0751 14.0917C18.3834 14.3001 18.6084 14.5667 18.7417 14.8834C18.8667 15.2001 18.9251 15.4917 18.9251 15.7834C18.9251 16.1834 18.8334 16.5834 18.6584 16.9584C18.4834 17.3334 18.2667 17.6584 17.9917 17.9584C17.5167 18.4834 17.0001 18.8584 16.4001 19.1001C15.8251 19.3334 15.2001 19.4584 14.5417 19.4584ZM4.65842 2.79175C4.20008 2.79175 3.77508 2.99175 3.36675 3.39175C2.98341 3.75008 2.71675 4.14175 2.55008 4.56675C2.37508 5.00008 2.29175 5.45841 2.29175 5.95008C2.29175 6.72508 2.47508 7.56675 2.84175 8.43342C3.21675 9.31675 3.74175 10.2334 4.40841 11.1501C5.07508 12.0667 5.83341 12.9584 6.66675 13.8001C7.50008 14.6251 8.40008 15.3917 9.32508 16.0667C10.2251 16.7251 11.1501 17.2584 12.0667 17.6417C13.4917 18.2501 14.8251 18.3917 15.9251 17.9334C16.3501 17.7584 16.7251 17.4917 17.0667 17.1084C17.2584 16.9001 17.4084 16.6751 17.5334 16.4084C17.6334 16.2001 17.6834 15.9834 17.6834 15.7667C17.6834 15.6334 17.6584 15.5001 17.5917 15.3501C17.5667 15.3001 17.5167 15.2084 17.3584 15.1001L14.5917 13.1334C14.4251 13.0167 14.2751 12.9334 14.1334 12.8751C13.9501 12.8001 13.8751 12.7251 13.5917 12.9001C13.4251 12.9834 13.2751 13.1084 13.1084 13.2751L12.4751 13.9001C12.1501 14.2167 11.6501 14.2917 11.2667 14.1501L11.0417 14.0501C10.7001 13.8667 10.3001 13.5834 9.85842 13.2084C9.45842 12.8667 9.02508 12.4667 8.50008 11.9501C8.09175 11.5334 7.68342 11.0917 7.25842 10.6001C6.86675 10.1417 6.58342 9.75008 6.40842 9.42508L6.30842 9.17508C6.25842 8.98341 6.24175 8.87508 6.24175 8.75841C6.24175 8.45841 6.35008 8.19175 6.55841 7.98341L7.18341 7.33341C7.35008 7.16675 7.47508 7.00841 7.55841 6.86675C7.62508 6.75841 7.65008 6.66675 7.65008 6.58342C7.65008 6.51675 7.62508 6.41675 7.58342 6.31675C7.52508 6.18341 7.43341 6.03341 7.31675 5.87508L5.38341 3.14175C5.30008 3.02508 5.20008 2.94175 5.07508 2.88341C4.94175 2.82508 4.80008 2.79175 4.65842 2.79175ZM11.6251 13.0084L11.4917 13.5751L11.7167 12.9917C11.6751 12.9834 11.6417 12.9917 11.6251 13.0084Z"
                        fill="#E65F2B"
                      />
                      <path
                        d="M15.4167 8.62492C15.075 8.62492 14.7917 8.34159 14.7917 7.99992C14.7917 7.69992 14.4917 7.07492 13.9917 6.54159C13.5 6.01659 12.9583 5.70825 12.5 5.70825C12.1583 5.70825 11.875 5.42492 11.875 5.08325C11.875 4.74159 12.1583 4.45825 12.5 4.45825C13.3083 4.45825 14.1583 4.89159 14.9 5.68325C15.5917 6.42492 16.0417 7.33325 16.0417 7.99992C16.0417 8.34159 15.7583 8.62492 15.4167 8.62492Z"
                        fill="#E65F2B"
                      />
                      <path
                        d="M18.3333 8.62508C17.9917 8.62508 17.7083 8.34175 17.7083 8.00008C17.7083 5.12508 15.375 2.79175 12.5 2.79175C12.1583 2.79175 11.875 2.50841 11.875 2.16675C11.875 1.82508 12.1583 1.54175 12.5 1.54175C16.0583 1.54175 18.9583 4.44175 18.9583 8.00008C18.9583 8.34175 18.675 8.62508 18.3333 8.62508Z"
                        fill="#E65F2B"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="ct_fs_20 ct_fw_600 mb-1"
                      style={{ color: "#6D6D6D" }}
                    >
                      Mobile Number
                    </p>
                    <p className="mb-0 ct_fw_600">54548 58484</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CdsJobService;

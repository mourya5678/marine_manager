import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import { pipViewDate } from "../auth/Pip";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CdsJobService = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [clicked, setClicked] = useState(true);
  const [sliceValue, setSlicValue] = useState(3);
  const { state } = useLocation();
  console.log(state?.data, "state?.data", state?.isShow);

  const onHandleClick = () => {
    setIsToggle(!isToggle);
  };

  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    const originalWidth = input.style.width;
    const originalHeight = input.style.height;
    html2canvas(input).then((canvas) => {
      input.style.width = originalWidth;
      input.style.height = originalHeight;
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        format: [canvas.width, canvas.height]
      });
      pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);
      pdf.save("download.pdf");
    });
  };

  return (
    <div className="ct_dashbaord_bg">
      <div className={`ct_dashbaord_main ${isToggle == false && "ct_active"}`}>
        <Sidebar path="cds" />
        <div className="ct_content_right">
          <Header onClick={onHandleClick} />
          {state?.data?.JobServiceSheet?.length != 0 &&
            <button className="ct_custom_btm ct_wrap_100_1 ms-auto mt-4 mx-4 ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22" onClick={printDocument}>Export Pdf</button>
          }
          <div className="ct_dashbaord_middle" id="divToPrint">
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
                    <p className=" mb-0 ct_fw_600">{state?.data?.JobServiceSheet[0]?.jobNumber ?? ''}</p>
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
                    <p className=" mb-0 ct_fw_600">{state?.data?.JobServiceSheet[0]?.date ? pipViewDate(state?.data?.JobServiceSheet[0]?.date) : ''}</p>
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
                    <p className=" mb-0 ct_fw_600">{state?.data?.JobServiceSheet[0]?.customerName ?? ''}</p>
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
                    <p className=" mb-0 ct_fw_600">{state?.data?.JobServiceSheet[0]?.personAttending ?? ''}</p>
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
                    <p className="mb-0 ct_fw_600">{state?.data?.JobServiceSheet[0]?.mobile ?? ''}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ct_boat_white_bg mt-4">
              <div className="ct_boat_detail_12  ct_border_grey_12">
                <div className="row mb-3">
                  <div className="col-md-4 mb-2 mb-md-0">
                    <p className="mb-0" style={{ color: "#6D6D6D" }}>
                      Work carried out
                    </p>
                  </div>
                  <div className="col-md-4 mb-2 mb-md-0">
                    <p className="mb-0" style={{ color: "#6D6D6D" }}>
                      {state?.data?.JobServiceSheet[0]?.workCarriedOut ?? ''}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4 mb-2 mb-md-0">
                    <p className="mb-0" style={{ color: "#6D6D6D" }}>
                      Work carried out with materials
                    </p>
                  </div>
                  <div className="col-md-4 mb-2 mb-md-0">
                    <p className="mb-0" style={{ color: "#6D6D6D" }}>
                      {state?.data?.JobServiceSheet[0]?.workToBeCarriedOut ?? ''}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4 mb-2 mb-md-0">
                    <p className="mb-0" style={{ color: "#6D6D6D" }}>
                      Further Actions
                    </p>
                  </div>
                  <div className="col-md-4 mb-2 mb-md-0">
                    <p className="mb-0" style={{ color: "#6D6D6D" }}>
                      {state?.data?.JobServiceSheet[0]?.furtherActionRequired ?? ''}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4 mb-2 mb-md-0">
                    <p className="mb-0" style={{ color: "#6D6D6D" }}>
                      CDS Signature
                    </p>
                  </div>
                  <div className="col-md-4 mb-2 mb-md-0">
                    <img
                      src={state?.data?.JobServiceSheet[0]?.cdsSignature ?? ''}
                      style={{ width: "110px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {state?.isShow &&
              <div className="mt-4">
                <h4 className="ct_fs_24 ct_fw_600 mb-3">Maintenance Task</h4>
                <div className="ct_grid_tem_5">
                  <div className="ct_boat_white_bg">
                    <div className="ct_boat_info_title mb-0">
                      <div className="ct_boat_info_icon_1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.6834 8.0166H10.3083C9.96668 8.0166 9.68335 7.73327 9.68335 7.3916C9.68335 7.04993 9.96668 6.7666 10.3083 6.7666H14.6834C15.025 6.7666 15.3084 7.04993 15.3084 7.3916C15.3084 7.73327 15.0334 8.0166 14.6834 8.0166Z"
                            fill="#E65F2B"
                          />
                          <path
                            d="M5.93322 8.65002C5.77489 8.65002 5.61655 8.59168 5.49155 8.46668L4.86655 7.84168C4.62489 7.60002 4.62489 7.20002 4.86655 6.95835C5.10822 6.71668 5.50822 6.71668 5.74989 6.95835L5.93322 7.14168L7.36655 5.70835C7.60822 5.46668 8.00822 5.46668 8.24989 5.70835C8.49155 5.95002 8.49155 6.35002 8.24989 6.59168L6.37489 8.46668C6.25822 8.58335 6.09989 8.65002 5.93322 8.65002Z"
                            fill="#E65F2B"
                          />
                          <path
                            d="M14.6834 13.8501H10.3083C9.96668 13.8501 9.68335 13.5668 9.68335 13.2251C9.68335 12.8834 9.96668 12.6001 10.3083 12.6001H14.6834C15.025 12.6001 15.3084 12.8834 15.3084 13.2251C15.3084 13.5668 15.0334 13.8501 14.6834 13.8501Z"
                            fill="#E65F2B"
                          />
                          <path
                            d="M5.93322 14.4833C5.77489 14.4833 5.61655 14.4249 5.49155 14.2999L4.86655 13.6749C4.62489 13.4333 4.62489 13.0333 4.86655 12.7916C5.10822 12.5499 5.50822 12.5499 5.74989 12.7916L5.93322 12.9749L7.36655 11.5416C7.60822 11.2999 8.00822 11.2999 8.24989 11.5416C8.49155 11.7833 8.49155 12.1833 8.24989 12.4249L6.37489 14.2999C6.25822 14.4166 6.09989 14.4833 5.93322 14.4833Z"
                            fill="#E65F2B"
                          />
                          <path
                            d="M12.5001 18.9584H7.50008C2.97508 18.9584 1.04175 17.0251 1.04175 12.5001V7.50008C1.04175 2.97508 2.97508 1.04175 7.50008 1.04175H12.5001C17.0251 1.04175 18.9584 2.97508 18.9584 7.50008V12.5001C18.9584 17.0251 17.0251 18.9584 12.5001 18.9584ZM7.50008 2.29175C3.65841 2.29175 2.29175 3.65841 2.29175 7.50008V12.5001C2.29175 16.3417 3.65841 17.7084 7.50008 17.7084H12.5001C16.3417 17.7084 17.7084 16.3417 17.7084 12.5001V7.50008C17.7084 3.65841 16.3417 2.29175 12.5001 2.29175H7.50008Z"
                            fill="#E65F2B"
                          />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="ct_fs_20  ct_fw_500  mb-1"
                          style={{ color: "#6D6D6D" }}
                        >
                          Task Description
                        </p>
                        <p className=" mb-0 ct_fw_600">{state?.data?.description ?? ''}</p>
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
                        <p
                          className=" ct_fw_500 mb-1"
                          style={{ color: "#6D6D6D" }}
                        >
                          Start Date
                        </p>
                        <p className=" mb-0 ct_fw_600">{pipViewDate(state?.data?.date_scheduled_from)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="ct_boat_white_bg">
                    <div className="ct_boat_info_title mb-0">
                      <div className="ct_boat_info_icon_1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.66675 4.79175C6.32508 4.79175 6.04175 4.50841 6.04175 4.16675V1.66675C6.04175 1.32508 6.32508 1.04175 6.66675 1.04175C7.00841 1.04175 7.29175 1.32508 7.29175 1.66675V4.16675C7.29175 4.50841 7.00841 4.79175 6.66675 4.79175Z"
                            fill="#E65F2B"
                          />
                          <path
                            d="M13.3333 4.79175C12.9916 4.79175 12.7083 4.50841 12.7083 4.16675V1.66675C12.7083 1.32508 12.9916 1.04175 13.3333 1.04175C13.6749 1.04175 13.9583 1.32508 13.9583 1.66675V4.16675C13.9583 4.50841 13.6749 4.79175 13.3333 4.79175Z"
                            fill="#E65F2B"
                          />
                          <path
                            d="M7.08333 12.0832C6.86667 12.0832 6.65 11.9916 6.49167 11.8416C6.34167 11.6832 6.25 11.4749 6.25 11.2499C6.25 11.1416 6.275 11.0332 6.31667 10.9332C6.35833 10.8332 6.41667 10.7416 6.49167 10.6583C6.8 10.3499 7.35833 10.3499 7.675 10.6583C7.825 10.8166 7.91667 11.0332 7.91667 11.2499C7.91667 11.2999 7.90834 11.3583 7.9 11.4166C7.89167 11.4666 7.875 11.5166 7.85 11.5666C7.83333 11.6166 7.80833 11.6666 7.775 11.7166C7.74167 11.7582 7.70833 11.7999 7.675 11.8416C7.51667 11.9916 7.3 12.0832 7.08333 12.0832Z"
                            fill="#E65F2B"
                          />
                          <path
                            d="M10.0001 12.0834C9.89175 12.0834 9.78342 12.0584 9.68342 12.0168C9.57508 11.9751 9.49175 11.9168 9.40842 11.8418C9.25842 11.6834 9.16675 11.4751 9.16675 11.2501C9.16675 11.1418 9.19175 11.0334 9.23342 10.9334C9.27508 10.8334 9.33342 10.7418 9.40842 10.6584C9.49175 10.5834 9.57508 10.5251 9.68342 10.4834C9.99175 10.3584 10.3584 10.4251 10.5917 10.6584C10.7417 10.8168 10.8334 11.0334 10.8334 11.2501C10.8334 11.3001 10.8251 11.3584 10.8168 11.4168C10.8084 11.4668 10.7917 11.5168 10.7667 11.5668C10.7501 11.6168 10.7251 11.6668 10.6917 11.7168C10.6667 11.7584 10.6251 11.8001 10.5917 11.8418C10.4334 11.9918 10.2167 12.0834 10.0001 12.0834Z"
                            fill="#E65F2B"
                          />
                          <path
                            d="M7.08333 14.9999C6.975 14.9999 6.86667 14.9749 6.76667 14.9332C6.65834 14.8916 6.56667 14.8332 6.49167 14.7582C6.41667 14.6832 6.35833 14.5916 6.31667 14.4832C6.275 14.3832 6.25 14.2749 6.25 14.1666C6.25 14.0582 6.275 13.9499 6.31667 13.8499C6.35833 13.7416 6.41667 13.6499 6.49167 13.5749C6.56667 13.4999 6.65834 13.4416 6.76667 13.3999C6.96667 13.3166 7.2 13.3082 7.4 13.3999C7.50833 13.4416 7.6 13.4999 7.675 13.5749C7.75 13.6499 7.80833 13.7416 7.85 13.8499C7.89166 13.9499 7.91667 14.0582 7.91667 14.1666C7.91667 14.2749 7.89166 14.3832 7.85 14.4832C7.80833 14.5916 7.75 14.6832 7.675 14.7582C7.6 14.8332 7.50833 14.8916 7.4 14.9332C7.3 14.9749 7.19167 14.9999 7.08333 14.9999Z"
                            fill="#E65F2B"
                          />
                          <path
                            d="M17.0834 8.19995H2.91675C2.57508 8.19995 2.29175 7.91662 2.29175 7.57495C2.29175 7.23328 2.57508 6.94995 2.91675 6.94995H17.0834C17.4251 6.94995 17.7084 7.23328 17.7084 7.57495C17.7084 7.91662 17.4251 8.19995 17.0834 8.19995Z"
                            fill="#E65F2B"
                          />
                          <path
                            d="M15.0001 19.7917C14.0251 19.7917 13.1001 19.4417 12.3918 18.8C12.0918 18.55 11.8251 18.2333 11.6084 17.8667C11.2417 17.2667 11.0417 16.5583 11.0417 15.8333C11.0417 13.65 12.8167 11.875 15.0001 11.875C16.1334 11.875 17.2167 12.3667 17.9667 13.2167C18.6084 13.95 18.9584 14.875 18.9584 15.8333C18.9584 16.5583 18.7584 17.2667 18.3834 17.875C17.6834 19.0583 16.3834 19.7917 15.0001 19.7917ZM15.0001 13.125C13.5084 13.125 12.2917 14.3417 12.2917 15.8333C12.2917 16.325 12.4251 16.8083 12.6834 17.225C12.8251 17.475 13.0084 17.6833 13.2084 17.8583C13.7084 18.3083 14.3334 18.5417 15.0001 18.5417C15.9584 18.5417 16.8251 18.05 17.3167 17.2333C17.5751 16.8083 17.7084 16.3333 17.7084 15.8333C17.7084 15.1833 17.4668 14.55 17.0334 14.0417C16.5168 13.4583 15.7751 13.125 15.0001 13.125Z"
                            fill="#E65F2B"
                          />
                          <path
                            d="M14.5248 17.2834C14.3665 17.2834 14.2082 17.225 14.0832 17.1L13.2582 16.275C13.0165 16.0334 13.0165 15.6334 13.2582 15.3917C13.4998 15.15 13.8998 15.15 14.1415 15.3917L14.5415 15.7917L15.8748 14.5584C16.1248 14.325 16.5248 14.3417 16.7582 14.5917C16.9915 14.8417 16.9748 15.2417 16.7248 15.475L14.9498 17.1167C14.8248 17.225 14.6748 17.2834 14.5248 17.2834Z"
                            fill="#E65F2B"
                          />
                          <path
                            d="M12.8083 18.9584H6.66667C3.625 18.9584 1.875 17.2084 1.875 14.1667V7.08342C1.875 4.04175 3.625 2.29175 6.66667 2.29175H13.3333C16.375 2.29175 18.125 4.04175 18.125 7.08342V13.6334C18.125 13.8917 17.9667 14.1251 17.7167 14.2167C17.475 14.3084 17.2 14.2418 17.025 14.0418C16.5083 13.4584 15.7667 13.1251 14.9917 13.1251C13.5 13.1251 12.2833 14.3417 12.2833 15.8334C12.2833 16.3251 12.4167 16.8084 12.675 17.2251C12.8167 17.4751 13 17.6834 13.2 17.8584C13.4 18.0251 13.475 18.3001 13.3833 18.5501C13.3083 18.7918 13.075 18.9584 12.8083 18.9584ZM6.66667 3.54175C4.28333 3.54175 3.125 4.70008 3.125 7.08342V14.1667C3.125 16.5501 4.28333 17.7084 6.66667 17.7084H11.5167C11.2083 17.1417 11.0417 16.5001 11.0417 15.8334C11.0417 13.6501 12.8167 11.8751 15 11.8751C15.6583 11.8751 16.3083 12.0418 16.875 12.3501V7.08342C16.875 4.70008 15.7167 3.54175 13.3333 3.54175H6.66667Z"
                            fill="#E65F2B"
                          />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="ct_fs_20 ct_fw_500  mb-1"
                          style={{ color: "#6D6D6D" }}
                        >
                          End Date
                        </p>
                        <p className=" mb-0 ct_fw_600">{pipViewDate(state?.data?.date_scheduled_to)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ct_boat_white_bg mt-4">
                  <div className="ct_boat_detail_12  ct_border_grey_12">
                    <div className="row mb-3">
                      <div className="col-md-4 mb-2 mb-md-0">
                        <p className="mb-0" style={{ color: "#6D6D6D" }}>
                          Task Info:
                        </p>
                      </div>
                      <div className="col-md-4 mb-2 mb-md-0">
                        <p className="mb-0" style={{ color: "#6D6D6D" }}>
                          {state?.data?.taskInfo ?? ''}
                        </p>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-4 mb-2 mb-md-0">
                        <p className="mb-0" style={{ color: "#6D6D6D" }}>
                          Notes from Supplier:
                        </p>
                      </div>
                      <div className="col-md-4 mb-2 mb-md-0">
                        <p className="mb-0" style={{ color: "#6D6D6D" }}>
                          {state?.data?.supplierNotes ?? ''}
                        </p>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-4 mb-2 mb-md-0">
                        <p className="mb-0" style={{ color: "#6D6D6D" }}>
                          Future Watch List:
                        </p>
                      </div>
                      <div className="col-md-4 mb-2 mb-md-0">
                        <p className="mb-0" style={{ color: "#6D6D6D" }}>
                          {state?.data?.futureWatchList ?? ''}
                        </p>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-4 mb-2 mb-md-0">
                        <p className="mb-0" style={{ color: "#6D6D6D" }}>
                          Recommended Due Date:
                        </p>
                      </div>
                      <div className="col-md-4 mb-2 mb-md-0">
                        <p className="mb-0" style={{ color: "#6D6D6D" }}>
                          {state?.data?.recommendedDueDate ? pipViewDate(state?.data?.recommendedDueDate) : ''}
                        </p>
                      </div>
                    </div>
                    {/* <div className="row mb-3">
                      <div className="col-md-4 mb-2 mb-md-0">
                        <p className="mb-0" style={{ color: "#6D6D6D" }}>
                          Photos
                        </p>
                      </div>
                      <div className="col-md-4 mb-2 mb-md-0">
                        <div className="ct_boat_cds_img_group">
                          {state?.data?.TaskPhoto?.length != 0 &&
                            state?.data?.TaskPhoto?.slice(0, sliceValue)?.map((item) => (
                              <div className="ct_cds_img_w_60">
                                <img data-bs-toggle="modal" data-bs-target="#ct_view_image" src={item?.url} onClick={() => setImageUrl(item?.url)} />
                              </div>
                            ))}
                          {state?.data?.TaskPhoto?.length > 3 &&
                            <div className="ct_cds_img_w_60">
                              {clicked ?
                                <a href="javascript:void(0)" className="mb-0 ct_orange_link" onClick={() => {
                                  setClicked(false)
                                  setSlicValue(state?.data?.TaskPhoto?.length)
                                }}>
                                  View All
                                </a>
                                :
                                <a href="javascript:void(0)" className="mb-0 ct_orange_link" onClick={() => {
                                  setClicked(true)
                                  setSlicValue(3)
                                }}>
                                  Less
                                </a>
                              }
                            </div>
                          }
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <div className="modal fade Committed_Price" id="ct_view_image" tabindex="-1" aria-labelledby="ct_view_imageLabel" aria-hidden="true" data-bs-backdrop='static' data-bs-keyboard="false">
        <div className="modal-dialog modal-md modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-2">
              <div className="pt-4">
                <h4 className="mb-4 text-center"><strong>Image Preview </strong></h4>
                {imageUrl && <img src={imageUrl} style={{
                  height: "356px",
                  objectFit: "contain"
                }} />}
              </div>
              <div className="modal-footer justify-content-center border-0 ct_flex_wrap_575 gap-2">
                <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CdsJobService;

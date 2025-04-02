import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Header from '../components/Header';
import '../Invoice.css';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { getGeneratedInvoiceData, sendPdfToBoatOwner } from '../redux/actions/maintainedBoatsActions';
import Loader from '../components/Loader';
import moment from 'moment';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Invoice = () => {
  const navigate = useNavigate();
  const targetRef = useRef();
  const dispatch = useDispatch();
  const [isToggle, setIsToggle] = useState(false);
  const { state } = useLocation();
  const { isLoading2, getInvoiceData } = useSelector(
    (state) => state?.maintainedReducer
  );

  const onHandleGeneratePDFFile = async () => {
    const element = targetRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      scrollX: 0,
      scrollY: 0,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight,
    });
    const contentWidth = canvas.width;
    const contentHeight = canvas.height;
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: contentWidth > contentHeight ? 'landscape' : 'portrait',
      unit: 'px',
      format: [contentWidth, contentHeight]
    });
    pdf.addImage(imgData, 'PNG', 0, 0, contentWidth, contentHeight);
    const pdfBlob1 = pdf.output('blob');
    const pdfFile = new File([pdfBlob1], 'BoatInvoice.pdf', { type: 'application/pdf' });
    const callback = (response) => {
      if (response.success) {
        pdf.save('BoatInvoice.pdf');
        navigate(pageRoutes.maintenance);
      };
    };
    const formData = new FormData()
    formData?.append("boatId", state?.boat_id);
    formData?.append("invoiceId", state?.invoice_id);
    formData?.append("invoice", pdfFile);
    dispatch(sendPdfToBoatOwner({ payload: formData, callback }));
  };

  const onHandleClick = () => {
    setIsToggle(!isToggle);
  };

  useEffect(() => {
    dispatch(getGeneratedInvoiceData({ payload: state?.invoice_id }));
  }, []);

  console.log(getInvoiceData, "getInvoiceData");

  if (isLoading2) {
    return <Loader />;
  };

  return (
    <div className="ct_dashbaord_bg">
      <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
        <Sidebar path="Invoice" />
        <div className="ct_content_right">
          <Header onClick={onHandleClick} />
          <div className='px-3 text-end mt-4'>
            <button className='ct_orange_btnct_custom_btm text-white ms-auto ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22' onClick={onHandleGeneratePDFFile}>Send Invoice</button>
          </div>
          <div ref={targetRef}>
            <section className="px-3 mb-5">
              <div className="col-md-9 mx-auto" >
                <div className="cti_invoice_bg">
                  <div className="cti_grid_2_1">
                    <div className="cti_logo23">
                      <img src="img/Logo_blue.svg" className="mb-0" />
                    </div>
                    <div>
                      {/* <p className="mb-1">Boat Owner Name : {getInvoiceData?.boat?.owners_name ?? ''}</p> */}
                      <p className="mb-1">Phone No : {getInvoiceData?.boat?.phone_no ?? ''}</p>
                      <p className="mb-1">Email : {getInvoiceData?.boat?.email ?? ''}</p>
                      <p className="mb-0">HIN : {getInvoiceData?.boat?.vin ?? ''}</p>
                      <p className="mb-0">Rego : {getInvoiceData?.boat?.rego ?? ''}</p>
                    </div>
                  </div>
                  <div>
                    <p className="mb-1  mb-3 ct_fw_600">{getInvoiceData?.user?.company_name ?? ''}</p>
                    <div className="cti_logo233">
                      <img className="mb-0" src={getInvoiceData?.user?.company_logo ?? ''} />
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 flex-wrap justify-content-between mt-5 pt-2">
                    <p className="mb-0">{getInvoiceData?.boat?.owners_name ?? ''}
                    </p>
                    <div className="cti_invoice_amoount_dtl">
                      <ul>
                        <li>
                          <p className="mb-1">PLEASE PAY BY
                          </p>
                          <h6 className="mb-0">{getInvoiceData?.pleasePayByDate ? moment(getInvoiceData?.pleasePayByDate).format('DD-MM-YYYY') : ''}
                          </h6>
                        </li>
                        <li>
                          <p className="mb-1">AMOUNT
                          </p>
                          <h6 className="mb-0">${getInvoiceData?.totalAmountAfterTax ? getInvoiceData?.totalAmountAfterTax?.toFixed(2) : '0.00'}
                          </h6>
                        </li>
                        <li>
                          <p className="mb-1">INVOICE DATE
                          </p>
                          <h6 className="mb-0">{getInvoiceData?.createdAt ? moment(getInvoiceData?.createdAt).format('DD-MM-YYYY') : ''}
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h5 className="text-end cti_fw_700 mt-4 mb-3">TAX INVOICE NO. {getInvoiceData?.invoiceNumber ?? 0}</h5>
                  {getInvoiceData?.tasks?.length != 0 && getInvoiceData?.tasks?.map((item, i) => (
                    <>
                      <ul className="cti_tax_invoice_bg">
                        <li>
                          <p className="mb-0 cti_fw_700">Job No.:
                          </p>
                          <p className="mb-0">{item?.jobNumber ?? ''}</p>
                        </li>
                        <li>
                          <p className="mb-0 cti_fw_700">Invoice Terms:
                          </p>
                          <p className="mb-0">COD</p>
                        </li>
                      </ul>
                      <div className="mt-3">
                        <h4 className="cti_fs_14 cti_fw_700 mb-1">Description</h4>
                        <h4 className="cti_fs_14 mb-0">{item?.description ?? ''}</h4>
                      </div>
                      <div className="mt-3">
                        <div className="mb-2">
                          <div className="mb-3">
                            <ul>
                              <li className="cti_fs_14 cti_fw_600">Task Info. :- {item?.taskInfo ?? ''}</li>
                              <li className="cti_fs_14 cti_fw_600">Time Allocated :- {item?.time_alloted ?? 0}</li>
                              <li className="cti_fs_14 cti_fw_600">Quoted Value :- ${item?.quoted_value ?? 0}</li>
                            </ul>
                          </div>
                        </div>
                        {item?.JobServiceSheet?.length != 0 && item?.JobServiceSheet?.map((items, index) => (
                          <div className="mb-4">
                            <p className="cti_fs_14 cti_fw_700 mb-2">Job Sheet Task</p>
                            <div className="mb-3">
                              <ul>
                                <li className="cti_fs_14 cti_fw_600">Person Attending :- {items?.personAttending ?? ''}</li>
                                <li className="cti_fs_14 cti_fw_600">Work Carried Out :- {items?.workCarriedOut ?? ''}</li>
                                <li className="cti_fs_14 cti_fw_600">Work To Be Carried Out :- {items?.workToBeCarriedOut ?? ''}</li>
                              </ul>
                            </div>
                            {items?.Material?.length != 0 &&
                              <>
                                <p className="cti_fs_14 cti_fw_700 mb-2">Materials</p>
                                <div className="table-responsive">
                                  <table className="table cti_basic_table table-bordered">
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Material</th>
                                        <th>Units</th>
                                        <th>Price Per Unit</th>
                                        <th>Total</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {items?.Material?.map((val, ind) => (
                                        <tr>
                                          <td>{ind + 1}</td>
                                          <td>{val?.materialName ?? ''}</td>
                                          <td>{val?.unitsUsed ?? 0}</td>
                                          <td>${val?.pricePerUnit ? val?.pricePerUnit?.toFixed(2) : '0.00'}</td>
                                          <td className="right">${val?.totalPrice ? val?.totalPrice?.toFixed(2) : '0.00'}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </>
                            }
                          </div>
                        ))}
                      </div>
                    </>
                  ))}
                  <div className="mb-4">
                    <div className="table-responsive">
                      <table className="table cti_basic_table table-bordered">
                        <tbody>
                          <tr style={{ borderBottom: "0px" }}>
                            <td className="border-0">Thank You</td>
                            <td colspan="3" className="border-0 border-top: 0px; text-end cti_fw_700">Sub-Total
                              ex GST</td>
                            <td className=" text-end "
                              style={{ borderBottom: "0px", borderTop: "0px", borderLeft: "0px", borderRight: "0px" }}>
                              ${getInvoiceData?.totalAmount ? getInvoiceData?.totalAmount?.toFixed(2) : '0.00'}</td>
                          </tr>
                          <tr style={{ borderTop: "0px", borderBottom: "0px" }}>
                            <td colspan="4" className="border-0 text-end cti_fw_700">GST</td>
                            <td className=" text-end "
                              style={{ borderBottom: "0px", borderLeft: "0px", borderRight: "0px" }}>10%</td>
                          </tr>
                          <tr style={{ borderTop: "0px", borderBottom: "0px" }}>
                            <td colspan="4" className="border-0 text-end cti_fw_700">Total inc GST</td>
                            <td className=" text-end "
                              style={{ borderBottom: "0px", borderLeft: "0px", borderRight: "0px" }}>${getInvoiceData?.totalAmountAfterTax ? getInvoiceData?.totalAmountAfterTax?.toFixed(2) : '0.00'}</td>
                          </tr>
                          <tr style={{ borderTop: "0px", borderBottom: "0px" }}>
                            <td colspan="4" className="border-0 text-end cti_fw_700">Amount Applied</td>
                            <td className=" text-end "
                              style={{ borderBottom: "0px", borderLeft: "0px", borderRight: "0px" }}>${getInvoiceData?.totalAmountAfterTax ? getInvoiceData?.totalAmountAfterTax?.toFixed(2) : '0.00'}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="cti_mt_200 ">
                    <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                      <h5 className="cti_fs_20 cti_fw_700 mb-0">How To Pay
                      </h5>
                      <button className="cti_invoice_btn">INVOICE NO. {getInvoiceData?.invoiceNumber ?? 0}</button>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="d-flex  gap-3">
                          <i className="fa-solid fa-arrow-up-right-from-square mt-1"></i>
                          <div>
                            <p className="cti_fs_14 cti_fw_700 mb-2">Direct Deposit
                            </p>
                            <ul className="cti_tax_invoice_bg bg-white px-0">
                              <li>
                                <p className="mb-0 cti_fw_700">BSB
                                </p>
                                <p className="mb-0">{getInvoiceData?.user?.BSB ?? 'X-XX-XXX'}</p>
                              </li>
                              <li>
                                <p className="mb-0 cti_fw_700">ACC No.
                                </p>
                                <p className="mb-0">{getInvoiceData?.user?.ACC ?? 'XXX-XXX-XXX'}</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="modal fade" id="confirm_save" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="confirm_saveLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="confirm_saveLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="img/check_icon.png" alt="" />
              <h4>Confirm to Send</h4>
            </div>
            <div className="modal-footer justify-content-center gap-4">
              <button type="button" className="btn-secondary ct_custom_btm  ct_news_ltr_btn mx-0" data-bs-dismiss="modal">Close</button>
              <button type="button" className="ct_custom_btm  ct_news_ltr_btn mx-0" data-bs-dismiss="modal" onClick={() => navigate(pageRoutes.maintenance)}>Save</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Invoice;
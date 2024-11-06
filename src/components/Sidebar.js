import React from 'react';
import { useNavigate } from 'react-router';
import { pageRoutes } from '../routes/PageRoutes';

const Sidebar = ({ path }) => {
    const navigate = useNavigate();

    return (
        <div className="ct_sidebar_menu">
            <div className="ct_side_logo">
                <img src="img/Logo_white.svg" alt="" />
            </div>
            <ul>
                <li className={`${path == "home" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.dashboard)}>
                        <i className="bi bi-grid"></i>
                         Home
                    </a>
                </li>
                <li className={`${path == "create-boat" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.crate_boat)}>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.80772 2.15796C8.46673 2.15796 8.16375 2.21758 7.97034 2.30418L7.96841 2.30505L2.55856 4.70738C1.84846 5.02066 1.7998 5.3041 1.7998 5.33421C1.7998 5.36432 1.84846 5.64776 2.55856 5.96104L2.56008 5.96171L7.97035 8.36423C8.16375 8.45084 8.46673 8.51046 8.80772 8.51046C9.14871 8.51046 9.45169 8.45084 9.6451 8.36424L9.64703 8.36338L15.0554 5.96171L15.0569 5.96104C15.767 5.64776 15.8156 5.36432 15.8156 5.33421C15.8156 5.3041 15.767 5.02066 15.0569 4.70738L9.64703 2.30504L9.6451 2.30418C9.45169 2.21758 9.14871 2.15796 8.80772 2.15796ZM10.206 1.04878C9.78543 0.860712 9.2776 0.782959 8.80772 0.782959C8.33784 0.782959 7.83002 0.860712 7.40946 1.04878C7.40911 1.04893 7.40877 1.04909 7.40843 1.04924L2.00355 3.44937C2.00331 3.44948 2.00379 3.44926 2.00355 3.44937C1.15563 3.82363 0.424805 4.45249 0.424805 5.33421C0.424805 6.2159 1.15485 6.84442 2.00273 7.21869C2.00246 7.21857 2.00301 7.21881 2.00273 7.21869L7.40843 9.61918C7.40882 9.61935 7.40921 9.61953 7.4096 9.6197C7.83013 9.80772 8.3379 9.88546 8.80772 9.88546C9.27757 9.88546 9.78536 9.80772 10.2059 9.61967C10.2063 9.61951 10.2066 9.61934 10.207 9.61918L15.6119 7.21905C15.6117 7.21915 15.6121 7.21894 15.6119 7.21905C16.4598 6.84479 17.1906 6.21593 17.1906 5.33421C17.1906 4.45246 16.4605 3.8239 15.6125 3.44965C15.6123 3.44956 15.6127 3.44974 15.6125 3.44965L10.207 1.04924C10.2067 1.04909 10.2063 1.04893 10.206 1.04878Z"
                                fill="#fff" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.75 8.396C1.1297 8.396 1.4375 8.7038 1.4375 9.0835C1.4375 9.30661 1.52576 9.59307 1.70324 9.86585C1.88071 10.1386 2.10673 10.3352 2.31104 10.4254L2.31273 10.4262L8.5356 13.1939C8.53537 13.1938 8.53582 13.194 8.5356 13.1939C8.83672 13.3269 9.174 13.3249 9.45986 13.1959L9.46311 13.1945L15.6873 10.4262L15.689 10.4254C15.8933 10.3352 16.1193 10.1386 16.2968 9.86585C16.4742 9.59307 16.5625 9.30661 16.5625 9.0835C16.5625 8.7038 16.8703 8.396 17.25 8.396C17.6297 8.396 17.9375 8.7038 17.9375 9.0835C17.9375 9.63039 17.737 10.1735 17.4493 10.6157C17.1617 11.0577 16.7463 11.4614 16.2451 11.6829C16.2449 11.683 16.2454 11.6828 16.2451 11.6829L10.0251 14.4494C10.0245 14.4497 10.0239 14.4499 10.0233 14.4502C9.37481 14.742 8.63083 14.7395 7.9794 14.4514L1.75563 11.6832C1.75532 11.6831 1.755 11.683 1.75469 11.6828C1.25359 11.4613 0.838273 11.0577 0.550718 10.6157C0.26299 10.1735 0.0625 9.63039 0.0625 9.0835C0.0625 8.7038 0.370304 8.396 0.75 8.396Z"
                                fill="#fff" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.75 12.9792C1.1297 12.9792 1.4375 13.2871 1.4375 13.6667C1.4375 14.245 1.77937 14.7707 2.31341 15.0097C2.31324 15.0096 2.31358 15.0098 2.31341 15.0097L8.5356 17.7772C8.53537 17.7771 8.53582 17.7773 8.5356 17.7772C8.83672 17.9101 9.174 17.9081 9.45986 17.7792L9.46311 17.7777L15.6861 15.0099C15.6859 15.01 15.6863 15.0099 15.6861 15.0099C16.2201 14.7709 16.5625 14.2449 16.5625 13.6667C16.5625 13.2871 16.8703 12.9792 17.25 12.9792C17.6297 12.9792 17.9375 13.2871 17.9375 13.6667C17.9375 14.7933 17.2713 15.8074 16.2473 16.2652L16.2461 16.2657L10.0251 19.0326C10.0245 19.0329 10.0239 19.0332 10.0233 19.0335C9.37481 19.3253 8.63083 19.3228 7.9794 19.0347L1.75274 16.2652C0.728744 15.8074 0.0625 14.7933 0.0625 13.6667C0.0625 13.2871 0.370304 12.9792 0.75 12.9792Z"
                                fill="#fff" />
                        </svg>
                          Create boat
                    </a>
                </li>
                <li className={`${path == "all_boats" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.all_boats)}>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.20711 0.5L9.35355 0.646446L15.3536 6.64645L15.5 6.79289V6.20711L9.79289 0.5H9.20711ZM8.5 1V0.5H2.00143C1.60529 0.502262 1.22612 0.661139 0.946686 0.941977C0.667001 1.22307 0.509995 1.60346 0.51 1.99999V2.00031L0.5 18C0.5 18.0001 0.5 18.0002 0.5 18.0003C0.500067 18.3967 0.657065 18.777 0.936686 19.058C1.2161 19.3388 1.59523 19.4977 1.99134 19.5H13.9992C14.3968 19.4986 14.7777 19.3401 15.0589 19.0589C15.3401 18.7777 15.4986 18.3968 15.5 17.9992V7.5H15H9H8.5V7V1Z"
                                stroke="#F1F1F1" />
                            <path
                                d="M11.1533 11.335L10.8635 12.3236H5.34082L5.63059 11.335H11.1533ZM8.56241 17.9997L5.44309 14.1816L5.42605 13.4656H6.97718C7.38059 13.4656 7.72434 13.4088 8.00843 13.2952C8.29253 13.1787 8.50985 13.0054 8.66042 12.7753C8.81099 12.5423 8.88628 12.2497 8.88628 11.8975C8.88628 11.3776 8.73003 10.9699 8.41753 10.6744C8.10502 10.3762 7.62491 10.227 6.97718 10.227H5.34082L5.63059 9.27246H6.97718C7.67037 9.27246 8.23855 9.38752 8.68173 9.61763C9.12775 9.8449 9.4573 10.1574 9.67037 10.5551C9.88627 10.95 9.99423 11.3975 9.99423 11.8975C9.99423 12.3492 9.8948 12.7654 9.69593 13.146C9.49991 13.5239 9.18457 13.8279 8.74991 14.058C8.31809 14.2881 7.74707 14.4031 7.03684 14.4031H7.01127L9.89196 17.9316V17.9997H8.56241ZM11.1533 9.27246L10.8635 10.2611L6.51696 10.227L6.80673 9.27246H11.1533Z"
                                fill="white" />
                        </svg>
                            List of all boats <br /> managed
                    </a>
                </li>
                <li className={`${path == "add-docks" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.add_new_docks)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.4177 1.52075C14.4866 1.52075 13.7402 2.26711 13.7402 3.19825C13.7402 4.09468 14.4297 4.81715 15.3025 4.87376C15.3757 4.86726 15.4506 4.86726 15.5238 4.87375C16.3951 4.8172 17.0876 4.09567 17.0952 3.1958C17.0939 2.27321 16.3463 1.52075 15.4177 1.52075ZM12.3652 3.19825C12.3652 1.50773 13.7272 0.145752 15.4177 0.145752C17.11 0.145752 18.4702 1.51863 18.4702 3.19825V3.20316H18.4702C18.4584 4.85218 17.1604 6.19106 15.5251 6.2503C15.4877 6.25166 15.4503 6.24996 15.4131 6.24522C15.376 6.24996 15.3386 6.25166 15.3012 6.2503C13.6668 6.19109 12.3652 4.85195 12.3652 3.19825Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14.4098 7.11356C15.8034 6.86942 17.3925 7.10218 18.5477 7.86873L18.549 7.86955C19.3386 8.39595 19.8245 9.15872 19.8245 10.0091C19.8245 10.8594 19.3386 11.6222 18.549 12.1486C17.4023 12.9161 15.8322 13.148 14.4421 12.9146C14.0677 12.8517 13.8151 12.4972 13.8779 12.1228C13.9408 11.7483 14.2953 11.4957 14.6698 11.5586C15.7908 11.7468 16.9884 11.5389 17.785 11.0054L17.7862 11.0045C18.2891 10.6693 18.4495 10.2954 18.4495 10.0091C18.4495 9.7229 18.2893 9.3492 17.7869 9.01404C16.9804 8.47922 15.7648 8.27212 14.6471 8.46793C14.2731 8.53345 13.9168 8.28337 13.8512 7.90937C13.7857 7.53537 14.0358 7.17907 14.4098 7.11356Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.50293 3.19825C1.50293 1.51863 2.86317 0.145752 4.55543 0.145752C6.24596 0.145752 7.60793 1.50773 7.60793 3.19825C7.60793 4.85195 6.3064 6.19109 4.67199 6.2503C4.63457 6.25166 4.59712 6.24996 4.56001 6.24522C4.5229 6.24996 4.48545 6.25166 4.44804 6.2503C2.81277 6.19106 1.51473 4.85218 1.50295 3.20316L1.50293 3.19825ZM2.87793 3.19581C2.88561 4.09567 3.57806 4.8172 4.44932 4.87375C4.52253 4.86726 4.5975 4.86726 4.67071 4.87376C5.54347 4.81715 6.23293 4.09468 6.23293 3.19825C6.23293 2.26711 5.48657 1.52075 4.55543 1.52075C3.62685 1.52075 2.87925 2.27321 2.87793 3.19581Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.18605 9.01403C2.99249 8.47922 4.20809 8.27212 5.32585 8.46793C5.69985 8.53345 6.05615 8.28337 6.12166 7.90937C6.18718 7.53537 5.93711 7.17907 5.56311 7.11356C4.16949 6.86942 2.58042 7.10218 1.42519 7.86873L1.42519 7.86872L1.42396 7.86955C0.634353 8.39595 0.148438 9.15872 0.148438 10.0091C0.148438 10.8592 0.634098 11.6218 1.42333 12.1482C2.57005 12.916 4.14044 13.148 5.5308 12.9146C5.90526 12.8517 6.15785 12.4972 6.09499 12.1228C6.03212 11.7483 5.67761 11.4957 5.30315 11.5586C4.1821 11.7468 2.98447 11.5389 2.18791 11.0054L2.18667 11.0045C1.68377 10.6693 1.52344 10.2954 1.52344 10.0091C1.52344 9.7229 1.68364 9.34919 2.18605 9.01403Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.91773 8.36816C8.9866 8.36816 8.24023 9.11453 8.24023 10.0457C8.24023 10.9421 8.92969 11.6646 9.80245 11.7212C9.87669 11.7146 9.95274 11.7147 10.0269 11.7214C10.8911 11.6719 11.5875 10.9479 11.5952 10.0432C11.5939 9.12062 10.8463 8.36816 9.91773 8.36816ZM6.86523 10.0457C6.86523 8.35514 8.2272 6.99316 9.91773 6.99316C11.61 6.99316 12.9702 8.36604 12.9702 10.0457V10.0506H12.9702C12.9585 11.6952 11.6637 13.0502 10.0202 13.0979C9.98439 13.0989 9.94861 13.0972 9.91315 13.0926C9.87604 13.0974 9.83859 13.0991 9.80117 13.0977C8.16676 13.0385 6.86523 11.6994 6.86523 10.0457Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10.0036 13.8818C11.0747 13.8818 12.1828 14.1486 13.049 14.7261C13.8386 15.2525 14.3245 16.0152 14.3245 16.8656C14.3245 17.7158 13.8387 18.4785 13.0493 19.0049C12.1794 19.5865 11.0717 19.8562 10.0002 19.8562C8.92858 19.8562 7.82088 19.5865 6.951 19.0049C6.16157 18.4785 5.67578 17.7158 5.67578 16.8656C5.67578 16.0152 6.1617 15.2525 6.9513 14.7261L6.95295 14.7249L6.95295 14.725C7.82285 14.1486 8.93227 13.8818 10.0036 13.8818ZM7.7132 15.8707C7.21094 16.2058 7.05078 16.5794 7.05078 16.8656C7.05078 17.1519 7.21112 17.5258 7.71401 17.861L7.71484 17.8616C8.31154 18.2606 9.13778 18.4812 10.0002 18.4812C10.8625 18.4812 11.6888 18.2606 12.2855 17.8616L12.2863 17.861C12.7892 17.5258 12.9495 17.1519 12.9495 16.8656C12.9495 16.5793 12.7892 16.2054 12.2863 15.8701C11.695 15.4759 10.8689 15.2568 10.0036 15.2568C9.13886 15.2568 8.30991 15.4757 7.7132 15.8707Z"
                                fill="#F1F1F1" />
                        </svg>
                            Create Dry Dock <br />Storage
                    </a>
                </li>
                <li className={`${path == "docks" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_docks)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.17547 5.24913C1.98709 4.28419 3.37861 3.8125 5.41639 3.8125H14.5831C16.6208 3.8125 18.0124 4.28419 18.824 5.24913C19.6277 6.20469 19.7042 7.46006 19.5754 8.63061L18.8875 15.9674C18.7866 16.9098 18.55 17.943 17.7085 18.7117C16.8733 19.4748 15.5793 19.8542 13.6664 19.8542H6.33306C4.42011 19.8542 3.12613 19.4748 2.29091 18.7117C1.44947 17.943 1.21294 16.9098 1.11197 15.9674L1.111 15.9583L0.424086 8.63063C0.295268 7.46008 0.371716 6.2047 1.17547 5.24913ZM2.22773 6.13421C1.79531 6.6483 1.6736 7.42076 1.79139 8.48522L1.79265 8.49665L2.47962 15.8254C2.57133 16.6773 2.76119 17.279 3.21833 17.6966C3.68249 18.1206 4.561 18.4792 6.33306 18.4792H13.6664C15.4384 18.4792 16.317 18.1206 16.7811 17.6966C17.2383 17.279 17.4281 16.6773 17.5198 15.8254L18.208 8.48521C18.3258 7.42075 18.2041 6.6483 17.7717 6.13421C17.3458 5.62789 16.4594 5.1875 14.5831 5.1875H5.41639C3.54001 5.1875 2.6536 5.62789 2.22773 6.13421Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7.06056 2.71276C7.02161 3.01104 7.02051 3.35 7.02051 3.76658V4.49992C7.02051 4.87961 6.71271 5.18742 6.33301 5.18742C5.95331 5.18742 5.64551 4.87961 5.64551 4.49992L5.64551 3.74276C5.64549 3.35453 5.64546 2.93048 5.69713 2.53476C5.75066 2.12473 5.86537 1.68942 6.13411 1.30059C6.69945 0.482619 7.73506 0.145752 9.26634 0.145752H10.733C12.2643 0.145752 13.2999 0.482619 13.8652 1.30059C14.134 1.68942 14.2487 2.12473 14.3022 2.53476C14.3539 2.93048 14.3539 3.35453 14.3538 3.74277L14.3538 4.49992C14.3538 4.87961 14.046 5.18742 13.6663 5.18742C13.2866 5.18742 12.9788 4.87961 12.9788 4.49992V3.76658C12.9788 3.35 12.9777 3.01104 12.9388 2.71276C12.9007 2.42068 12.832 2.22406 12.7341 2.08237C12.5661 1.8393 12.1351 1.52075 10.733 1.52075H9.26634C7.86429 1.52075 7.43324 1.8393 7.26524 2.08237C7.16731 2.22406 7.09869 2.42068 7.06056 2.71276Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.85425 10.6882C8.85354 10.7537 8.85352 10.8283 8.85352 10.9167V11.8608C8.85352 12.1189 8.85578 12.3087 8.87819 12.4698C8.89974 12.6246 8.93396 12.7 8.96297 12.7409C8.99532 12.7865 9.15654 12.9792 9.99936 12.9792C10.846 12.9792 11.0053 12.7847 11.037 12.7395C11.0661 12.6978 11.1003 12.6213 11.1215 12.4646C11.1435 12.3017 11.1452 12.111 11.1452 11.8517V10.9167C11.1452 10.8283 11.1452 10.7537 11.1445 10.6882C11.079 10.6875 11.0044 10.6875 10.916 10.6875H9.08269C8.99428 10.6875 8.91969 10.6875 8.85425 10.6882ZM9.05258 9.3125C9.06263 9.31251 9.07266 9.31251 9.08269 9.31251H10.916C10.9261 9.31251 10.9361 9.31251 10.9461 9.3125C11.1488 9.31246 11.3543 9.31241 11.5219 9.33104C11.6928 9.35002 11.9766 9.40078 12.2042 9.62846C12.4319 9.85613 12.4827 10.1399 12.5017 10.3108C12.5203 10.4784 12.5202 10.6839 12.5202 10.8866C12.5202 10.8966 12.5202 10.9066 12.5202 10.9167V11.862C12.5202 12.1 12.5202 12.3817 12.484 12.649C12.4465 12.9263 12.3644 13.241 12.1632 13.5283C11.7343 14.1407 10.9769 14.3542 9.99936 14.3542C9.02717 14.3542 8.27173 14.1435 7.84117 13.536C7.63871 13.2504 7.55492 12.9367 7.51631 12.6593C7.47857 12.3881 7.47852 12.1024 7.47852 11.8608V10.9167C7.47852 10.9066 7.47852 10.8966 7.47852 10.8866C7.47847 10.6839 7.47843 10.4784 7.49705 10.3108C7.51604 10.1399 7.5668 9.85613 7.79447 9.62846C8.02214 9.40078 8.30596 9.35002 8.47682 9.33104C8.64445 9.31241 8.84987 9.31246 9.05258 9.3125Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M19.4016 8.67893C19.6249 8.98601 19.557 9.41598 19.2499 9.63931C17.0351 11.2501 14.5047 12.2081 11.919 12.5337C11.5423 12.5812 11.1984 12.3143 11.151 11.9375C11.1035 11.5608 11.3705 11.217 11.7472 11.1695C14.1114 10.8718 16.421 9.99653 18.4412 8.52729C18.7483 8.30397 19.1783 8.37186 19.4016 8.67893Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.834096 8.94232C1.04855 8.62899 1.47641 8.54884 1.78974 8.76329C3.75956 10.1115 5.98087 10.9241 8.24293 11.1774C8.62027 11.2197 8.89191 11.5598 8.84966 11.9371C8.80741 12.3145 8.46727 12.5861 8.08993 12.5439C5.60367 12.2655 3.1683 11.3731 1.01312 9.89797C0.699791 9.68351 0.619638 9.25565 0.834096 8.94232Z"
                                fill="#F1F1F1" />
                        </svg>
                         Boats on Dock
                    </a>
                </li>
                <li className={`${path == "all-supplier" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.all_supplier)}>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.20711 0.5L9.35355 0.646446L15.3536 6.64645L15.5 6.79289V6.20711L9.79289 0.5H9.20711ZM8.5 1V0.5H2.00143C1.60529 0.502262 1.22612 0.661139 0.946686 0.941977C0.667001 1.22307 0.509995 1.60346 0.51 1.99999V2.00031L0.5 18C0.5 18.0001 0.5 18.0002 0.5 18.0003C0.500067 18.3967 0.657065 18.777 0.936686 19.058C1.2161 19.3388 1.59523 19.4977 1.99134 19.5H13.9992C14.3968 19.4986 14.7777 19.3401 15.0589 19.0589C15.3401 18.7777 15.4986 18.3968 15.5 17.9992V7.5H15H9H8.5V7V1Z"
                                stroke="#F1F1F1" />
                            <path
                                d="M12.75 9L6.26953 15.4805L3.53906 12.75L3 13.2891L6 16.2891L6.26953 16.5469L6.53906 16.2891L13.2891 9.53906L12.75 9Z"
                                fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.7501 8.46973L13.8194 9.53912L6.79839 16.5602L6.26959 17.0659L5.73483 16.5543L2.46973 13.2891L3.53912 12.2197L6.26959 14.9502L12.7501 8.46973ZM12.7501 9.53039L6.26959 16.0109L3.53912 13.2804L3.53039 13.2891L6.26227 16.021L6.26959 16.028L6.27691 16.021L12.7588 9.53912L12.7501 9.53039Z"
                                fill="white" />
                        </svg>
                            All Suppliers
                    </a>
                </li>
                <li className={`${path == "create-staff" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.create_staff)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.1445 17.3341C11.1445 16.7012 10.6315 16.1882 9.9987 16.1882C9.36587 16.1882 8.85286 16.7012 8.85286 17.3341C8.85286 17.9669 9.36587 18.4799 9.9987 18.4799C10.6315 18.4799 11.1445 17.9669 11.1445 17.3341ZM9.9987 14.8132C11.3909 14.8132 12.5195 15.9418 12.5195 17.3341C12.5195 18.7263 11.3909 19.8549 9.9987 19.8549C8.60648 19.8549 7.47786 18.7263 7.47786 17.3341C7.47786 15.9418 8.60648 14.8132 9.9987 14.8132Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M18.4775 17.3341C18.4775 16.7012 17.9645 16.1882 17.3317 16.1882C16.6989 16.1882 16.1859 16.7012 16.1859 17.3341C16.1859 17.9669 16.6989 18.4799 17.3317 18.4799C17.9645 18.4799 18.4775 17.9669 18.4775 17.3341ZM17.3317 14.8132C18.7239 14.8132 19.8525 15.9418 19.8525 17.3341C19.8525 18.7263 18.7239 19.8549 17.3317 19.8549C15.9395 19.8549 14.8109 18.7263 14.8109 17.3341C14.8109 15.9418 15.9395 14.8132 17.3317 14.8132Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3.81055 17.3341C3.81055 16.7012 3.29754 16.1882 2.66471 16.1882C2.03189 16.1882 1.51888 16.7012 1.51888 17.3341C1.51888 17.9669 2.03189 18.4799 2.66471 18.4799C3.29754 18.4799 3.81055 17.9669 3.81055 17.3341ZM2.66471 14.8132C4.05693 14.8132 5.18555 15.9418 5.18555 17.3341C5.18555 18.7263 4.05693 19.8549 2.66471 19.8549C1.2725 19.8549 0.14388 18.7263 0.14388 17.3341C0.14388 15.9418 1.2725 14.8132 2.66471 14.8132Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.1445 2.66732C11.1445 2.03449 10.6315 1.52148 9.9987 1.52148C9.36587 1.52148 8.85286 2.03449 8.85286 2.66732C8.85286 3.30014 9.36587 3.81315 9.9987 3.81315C10.6315 3.81315 11.1445 3.30014 11.1445 2.66732ZM9.9987 0.146484C11.3909 0.146484 12.5195 1.2751 12.5195 2.66732C12.5195 4.05954 11.3909 5.18815 9.9987 5.18815C8.60648 5.18815 7.47786 4.05954 7.47786 2.66732C7.47786 1.2751 8.60648 0.146484 9.9987 0.146484Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.99805 3.81323C10.3777 3.81323 10.6855 4.12104 10.6855 4.50073L10.6855 15.5007C10.6855 15.8804 10.3777 16.1882 9.99805 16.1882C9.61835 16.1882 9.31055 15.8804 9.31055 15.5007L9.31055 4.50073C9.31055 4.12104 9.61835 3.81323 9.99805 3.81323Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M17.1307 9.28535C17.7634 9.91809 18.0195 10.8113 18.0195 11.834L18.0195 15.5007C18.0195 15.8803 17.7117 16.1882 17.332 16.1882C16.9523 16.1882 16.6445 15.8803 16.6445 15.5007L16.6445 11.834C16.6445 11.0233 16.4423 10.5415 16.1584 10.2576C15.8745 9.97369 15.3927 9.77148 14.582 9.77148L5.41537 9.77148C4.60467 9.77148 4.12293 9.97369 3.839 10.2576C3.55507 10.5415 3.35287 11.0233 3.35287 11.834L3.35286 15.5007C3.35286 15.8803 3.04506 16.1882 2.66536 16.1882C2.28567 16.1882 1.97786 15.8803 1.97786 15.5007L1.97787 11.834C1.97787 10.8113 2.23399 9.91809 2.86673 9.28535C3.49947 8.65261 4.39272 8.39648 5.41537 8.39648L14.582 8.39648C15.6047 8.39648 16.4979 8.65261 17.1307 9.28535Z"
                                fill="#F1F1F1" />
                        </svg>
                            Create Staff
                    </a>
                </li>
                <li className={`${path == "review" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.review_schedule)}>
                        <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.39551 17.875C9.39551 17.4953 9.70331 17.1875 10.083 17.1875H19.2497C19.6294 17.1875 19.9372 17.4953 19.9372 17.875C19.9372 18.2547 19.6294 18.5625 19.2497 18.5625H10.083C9.70331 18.5625 9.39551 18.2547 9.39551 17.875Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.39551 11.4583C9.39551 11.0786 9.70331 10.7708 10.083 10.7708H19.2497C19.6294 10.7708 19.9372 11.0786 19.9372 11.4583C19.9372 11.8379 19.6294 12.1458 19.2497 12.1458H10.083C9.70331 12.1458 9.39551 11.8379 9.39551 11.4583Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.39551 5.0415C9.39551 4.66181 9.70331 4.354 10.083 4.354H19.2497C19.6294 4.354 19.9372 4.66181 19.9372 5.0415C19.9372 5.4212 19.6294 5.729 19.2497 5.729H10.083C9.70331 5.729 9.39551 5.4212 9.39551 5.0415Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.9028 2.72212C7.17129 2.9906 7.17129 3.4259 6.9028 3.69439L4.1528 6.44439C3.88432 6.71287 3.44902 6.71287 3.18053 6.44439L2.26386 5.52772C1.99538 5.25924 1.99538 4.82393 2.26386 4.55545C2.53235 4.28696 2.96765 4.28696 3.23614 4.55545L3.66667 4.98598L5.93053 2.72212C6.19902 2.45363 6.63432 2.45363 6.9028 2.72212Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.9028 9.13886C7.17129 9.40735 7.17129 9.84265 6.9028 10.1111L4.1528 12.8611C3.88432 13.1296 3.44902 13.1296 3.18053 12.8611L2.26386 11.9445C1.99538 11.676 1.99538 11.2407 2.26386 10.9722C2.53235 10.7037 2.96765 10.7037 3.23614 10.9722L3.66667 11.4027L5.93053 9.13886C6.19902 8.87038 6.63432 8.87038 6.9028 9.13886Z"
                                fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.9028 15.5554C7.17129 15.8239 7.17129 16.2592 6.9028 16.5276L4.1528 19.2776C3.88432 19.5461 3.44902 19.5461 3.18053 19.2776L2.26386 18.361C1.99538 18.0925 1.99538 17.6572 2.26386 17.3887C2.53235 17.1202 2.96765 17.1202 3.23614 17.3887L3.66667 17.8192L5.93053 15.5554C6.19902 15.2869 6.63432 15.2869 6.9028 15.5554Z"
                                fill="#F1F1F1" />
                        </svg>
                            Review <br /> schedule
                    </a>
                </li>
                <li className={`${path == "maintenance" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.maintenance)}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.0002 2.52075C6.31986 2.52075 2.521 6.31961 2.521 10.9999C2.521 15.6802 6.31986 19.4791 11.0002 19.4791C15.6805 19.4791 19.4793 15.6802 19.4793 10.9999C19.4793 6.31961 15.6805 2.52075 11.0002 2.52075ZM1.146 10.9999C1.146 5.56022 5.56047 1.14575 11.0002 1.14575C16.4399 1.14575 20.8543 5.56022 20.8543 10.9999C20.8543 16.4396 16.4399 20.8541 11.0002 20.8541C5.56047 20.8541 1.146 16.4396 1.146 10.9999Z"
                                fill="#F1F1F1" />
                            <path
                                d="M13.8125 7.0625L13.5227 8.05114H8L8.28977 7.0625H13.8125ZM11.2216 13.7273L8.10227 9.90909L8.08523 9.19318H9.63636C10.0398 9.19318 10.3835 9.13636 10.6676 9.02273C10.9517 8.90625 11.169 8.73295 11.3196 8.50284C11.4702 8.26989 11.5455 7.97727 11.5455 7.625C11.5455 7.10511 11.3892 6.69744 11.0767 6.40199C10.7642 6.10369 10.2841 5.95455 9.63636 5.95455H8L8.28977 5H9.63636C10.3295 5 10.8977 5.11506 11.3409 5.34517C11.7869 5.57244 12.1165 5.88494 12.3295 6.28267C12.5455 6.67756 12.6534 7.125 12.6534 7.625C12.6534 8.0767 12.554 8.4929 12.3551 8.87358C12.1591 9.25142 11.8438 9.5554 11.4091 9.78551C10.9773 10.0156 10.4063 10.1307 9.69602 10.1307H9.67045L12.5511 13.6591V13.7273H11.2216ZM13.8125 5L13.5227 5.98864L9.17614 5.95455L9.46591 5H13.8125Z"
                                fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14.7204 13.114C15.0932 13.5045 15.0932 14.1377 14.7204 14.5282L10.9022 18.5282C10.5295 18.9187 9.92508 18.9187 9.55231 18.5282L8.27958 17.1948C7.90681 16.8043 7.90681 16.1712 8.27958 15.7806C8.65235 15.3901 9.38625 16.0972 9.75902 16.4877L10.3568 17.1139L13.5 13.821C13.8728 13.4305 14.3476 12.7234 14.7204 13.114Z"
                                fill="#F1F1F1" />
                        </svg>
                            Create Tasks/ <br /> Scheduled <br /> maintenance
                    </a>
                </li>
                <li className={`${path == "quick-leads" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.quick_lead)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.5799 1.10409C14.4948 1.15551 14.2851 1.41261 14.1083 1.69029C13.8462 2.09137 13.7807 2.25592 13.7414 2.68785C13.7152 2.97581 13.7021 3.84997 13.7218 4.64185L13.7545 6.08163C14.1738 7.39801 14.2982 7.82995 14.2982 7.88137C14.2982 7.93279 14.1148 8.10762 13.8855 8.26188C13.6628 8.41614 13.178 8.78638 12.8046 9.08462C12.143 9.61939 12.1299 9.62968 11.5469 9.62968C11.2193 9.62968 10.8983 9.57826 10.8263 9.52684C10.7477 9.46513 10.6953 9.32115 10.6953 9.16689C10.6953 9.02291 10.8328 8.38529 10.9966 7.74767L11.2979 6.59584C11.2259 3.80883 11.18 2.90382 11.1538 2.79069C11.1276 2.67757 10.9507 2.42046 10.7542 2.22506C10.407 1.86512 10.4005 1.86512 9.64058 1.86512C8.93964 1.86512 8.86758 1.88569 8.6252 2.13251C8.48763 2.27649 8.31075 2.57473 8.24525 2.80098C8.13388 3.15064 8.11423 3.42831 8.11423 4.89895L8.10768 6.59584C8.54003 8.18989 8.65795 8.66296 8.64485 8.67325C8.64087 8.6795 8.47223 8.8112 8.2199 9.00825C8.0572 9.13531 7.8597 9.28955 7.64912 9.45485C7.1054 9.8765 6.43721 10.4318 6.15552 10.6889C5.73627 11.09 5.63145 11.1517 5.55284 11.0489C5.49389 10.9769 5.44803 10.7609 5.45458 10.5861C5.45458 10.401 5.53974 9.89707 5.65111 9.47542C5.84108 8.73495 5.84763 8.6424 5.86073 6.87352C5.88039 5.23833 5.86729 5.01208 5.75592 4.74469C5.69041 4.56986 5.5725 4.35389 5.49389 4.25105C5.42183 4.14821 5.2384 3.97338 5.09428 3.87053C4.90431 3.71627 4.68813 3.66485 4.27543 3.66485C3.81032 3.66485 3.65965 3.70599 3.37141 3.92196C3.10282 4.12764 3.00456 4.27162 2.89975 4.62128C2.83424 4.85782 2.72943 5.33089 2.67047 5.67027C2.61806 6.00964 2.57221 6.65755 2.57221 7.11005C2.57221 7.57284 2.61806 8.17961 2.67702 8.49842C2.73598 8.80694 2.8932 9.41371 3.03732 9.83536L3.28625 10.6067C2.25776 11.2649 1.98918 11.5117 1.76645 11.8408C1.59613 12.0979 1.3865 12.5504 1.29479 12.8486C1.20963 13.1366 1.10481 13.7331 1.07206 14.1547C1.03275 14.5764 1 15.5637 1 16.3453C1 17.1166 1.0131 17.7542 1.03275 17.7542C1.05241 17.7542 1.24893 17.6205 1.47166 17.4662C1.70094 17.3017 2.46084 16.6743 3.16178 16.0573C3.86272 15.4505 4.67503 14.7615 4.96327 14.5455C5.37597 14.2267 5.53974 14.1547 5.74937 14.1856C5.89349 14.2061 6.60098 14.6278 7.32158 15.1009C8.04217 15.5842 8.78897 16.0573 8.97239 16.1499L9.31959 16.3144C10.2564 15.5842 10.7935 15.1214 11.1211 14.8232C11.4421 14.525 12.916 13.2086 14.3965 11.8922C15.8704 10.5758 17.2068 9.36229 17.3575 9.20803C17.5147 9.04348 17.6392 8.82751 17.6392 8.73495C17.6392 8.61154 17.471 8.41272 17.1348 8.13847C16.8596 7.91222 16.6172 7.65511 16.6041 7.57284C16.5845 7.49057 16.6369 7.12034 16.7221 6.75011C16.8596 6.15362 16.8858 5.86567 16.9055 4.17906L16.9382 2.27649C16.591 1.64915 16.3421 1.36119 16.1652 1.2275C15.9032 1.04238 15.7329 0.990962 15.2809 1.00125C14.973 1.00125 14.6585 1.04238 14.5734 1.10409H14.5799Z"
                                stroke="white" />
                            <path
                                d="M18.6021 6.43181C18.5759 6.49351 18.7332 7.07971 18.9493 7.72761C19.1655 8.37552 19.3424 8.99257 19.3424 9.09541C19.3424 9.18797 19.2769 9.34223 19.1983 9.42451C19.1131 9.50678 18.91 9.69189 18.7463 9.83587C18.6943 9.88155 18.6206 9.94689 18.5343 10.0234C18.3487 10.1879 18.1049 10.4041 17.8947 10.5866C17.5933 10.8643 17.0954 11.3168 16.7876 11.5842C16.7228 11.6426 16.6386 11.7187 16.5403 11.8077C16.1713 12.1415 15.6033 12.6553 15.1171 13.0857C14.5079 13.6307 13.7742 14.2889 13.4925 14.5563C13.2173 14.8134 12.7522 15.2145 12.4705 15.4408C12.1823 15.667 11.8941 15.9344 11.8286 16.027C11.7631 16.1298 11.6844 16.2121 11.6451 16.2121C11.6124 16.2121 11.4748 16.3252 11.3503 16.4589C11.2259 16.5926 10.8983 16.8908 10.6298 17.1171C10.5009 17.2256 10.3358 17.3626 10.1707 17.4996C9.99172 17.6481 9.81276 17.7966 9.67988 17.909C9.23442 18.2895 9.21477 18.2895 8.99204 18.1352C8.86758 18.0529 8.23214 17.6107 7.58361 17.1582C7.42447 17.0472 7.26218 16.9343 7.10486 16.8248C6.62105 16.4883 6.1843 16.1845 6.03106 16.0681L5.65111 15.8007C4.96327 16.3458 4.15096 17.0451 3.39106 17.7033C2.63771 18.3717 1.85161 19.0505 1.65509 19.215C1.45856 19.3796 1.22928 19.6161 1.14412 19.7395C1.00655 19.9555 1 20.0481 1 21.2513C1 21.9609 1.0131 22.6397 1.03275 22.7734C1.05241 22.8968 1.10481 22.9996 1.15067 22.9996C1.18997 22.9996 1.3603 22.8865 1.52407 22.7425C1.68784 22.5985 1.86471 22.434 1.91712 22.3826C1.96953 22.3312 2.48704 21.8581 3.06352 21.3439C3.63999 20.8194 4.30163 20.2332 4.53746 20.0275C4.77329 19.8218 5.08118 19.5236 5.2253 19.3796C5.46768 19.1225 5.50699 19.1122 5.71661 19.2356C5.84108 19.3076 6.19483 19.5339 6.50272 19.7395C6.81061 19.9452 7.4919 20.3874 8.02907 20.7268C8.55969 21.0765 9.08375 21.3542 9.18857 21.3542C9.29993 21.3542 9.70609 21.0971 10.1253 20.7577C10.5249 20.4286 11.1538 19.8938 11.5141 19.5647C11.8744 19.2356 12.3919 18.7934 12.6605 18.5774C12.9291 18.3615 13.5252 17.8473 13.9838 17.4359C14.2946 17.1501 14.8099 16.6943 15.3076 16.2542C15.5443 16.0448 15.777 15.839 15.9818 15.6567C16.6238 15.1014 17.5016 14.3301 17.934 13.9495C18.3663 13.569 19.0869 12.9417 19.5389 12.5612C20.325 11.903 20.3643 11.8824 20.4626 12.0675C20.5215 12.1704 20.7377 12.7463 20.9408 13.3633C21.1439 13.9701 21.3076 14.5357 21.3076 14.618C21.3076 14.7003 21.3338 14.7723 21.3732 14.7723C21.4125 14.7723 21.5107 14.5255 21.5959 14.2375C21.681 13.9393 21.9758 12.6743 22.2575 11.4299C22.2808 11.3245 22.3043 11.2185 22.3277 11.1126C22.581 9.9675 22.8335 8.82577 22.8995 8.46808C22.9978 8.01557 23.024 7.74818 22.9781 7.68648C22.9388 7.64534 22.2182 7.4088 21.3732 7.17227C20.5281 6.93573 19.6306 6.67863 19.3751 6.59635C19.1197 6.51408 18.8576 6.42152 18.779 6.38039C18.707 6.34953 18.6218 6.3701 18.6021 6.43181Z"
                                stroke="white" />
                        </svg>
                            Quick Leads
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
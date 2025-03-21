import React from 'react';
import { useNavigate } from 'react-router';
import { pageRoutes } from '../routes/PageRoutes';

const Sidebar = ({ path }) => {
    const navigate = useNavigate();

    return (
        <div className="ct_sidebar_menu">
            <div className="ct_side_logo">
                <img src="img/Logo_white.png" alt="" />
            </div>
            <ul>
                <li className={`${path == "home" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.dashboard)}>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6678 0.947119C13.342 0.272912 14.2938 0 15.3835 0H17.337C18.4266 0 19.3784 0.272912 20.0527 0.947119C20.7269 1.62133 20.9998 2.57313 20.9998 3.66279V5.61628C20.9998 6.70594 20.7269 7.65774 20.0527 8.33195C19.3784 9.00616 18.4266 9.27907 17.337 9.27907H15.3835C14.2938 9.27907 13.342 9.00616 12.6678 8.33195C11.9936 7.65774 11.7207 6.70594 11.7207 5.61628V3.66279C11.7207 2.57313 11.9936 1.62133 12.6678 0.947119ZM13.7038 1.98311C13.4013 2.28565 13.1858 2.79897 13.1858 3.66279V5.61628C13.1858 6.4801 13.4013 6.99342 13.7038 7.29596C14.0064 7.59849 14.5197 7.81395 15.3835 7.81395H17.337C18.2008 7.81395 18.7141 7.59849 19.0167 7.29596C19.3192 6.99342 19.5347 6.4801 19.5347 5.61628V3.66279C19.5347 2.79897 19.3192 2.28565 19.0167 1.98311C18.7141 1.68058 18.2008 1.46512 17.337 1.46512H15.3835C14.5197 1.46512 14.0064 1.68058 13.7038 1.98311Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.947119 12.6678C1.62133 11.9936 2.57313 11.7207 3.66279 11.7207H5.61628C6.70594 11.7207 7.65774 11.9936 8.33195 12.6678C9.00616 13.342 9.27907 14.2938 9.27907 15.3835V17.337C9.27907 18.4266 9.00616 19.3784 8.33195 20.0527C7.65774 20.7269 6.70594 20.9998 5.61628 20.9998H3.66279C2.57313 20.9998 1.62133 20.7269 0.947119 20.0527C0.272912 19.3784 0 18.4266 0 17.337V15.3835C0 14.2938 0.272912 13.342 0.947119 12.6678ZM1.98311 13.7038C1.68058 14.0064 1.46512 14.5197 1.46512 15.3835V17.337C1.46512 18.2008 1.68058 18.7141 1.98311 19.0167C2.28565 19.3192 2.79897 19.5347 3.66279 19.5347H5.61628C6.4801 19.5347 6.99342 19.3192 7.29596 19.0167C7.59849 18.7141 7.81395 18.2008 7.81395 17.337V15.3835C7.81395 14.5197 7.59849 14.0064 7.29596 13.7038C6.99342 13.4013 6.4801 13.1858 5.61628 13.1858H3.66279C2.79897 13.1858 2.28565 13.4013 1.98311 13.7038Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.63953 1.46512C2.88635 1.46512 1.46512 2.88635 1.46512 4.63953C1.46512 6.39272 2.88635 7.81395 4.63953 7.81395C6.39272 7.81395 7.81395 6.39272 7.81395 4.63953C7.81395 2.88635 6.39272 1.46512 4.63953 1.46512ZM0 4.63953C0 2.07719 2.07719 0 4.63953 0C7.20188 0 9.27907 2.07719 9.27907 4.63953C9.27907 7.20188 7.20188 9.27907 4.63953 9.27907C2.07719 9.27907 0 7.20188 0 4.63953Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3602 13.1858C14.6071 13.1858 13.1858 14.6071 13.1858 16.3602C13.1858 18.1134 14.6071 19.5347 16.3602 19.5347C18.1134 19.5347 19.5347 18.1134 19.5347 16.3602C19.5347 14.6071 18.1134 13.1858 16.3602 13.1858ZM11.7207 16.3602C11.7207 13.7979 13.7979 11.7207 16.3602 11.7207C18.9226 11.7207 20.9998 13.7979 20.9998 16.3602C20.9998 18.9226 18.9226 20.9998 16.3602 20.9998C13.7979 20.9998 11.7207 18.9226 11.7207 16.3602Z" fill="#F1F1F1" />
                        </svg>
                        {/* <i className="bi bi-grid"></i> */}
                        Home
                    </a>
                </li>
                {/* <li className={`${path == "create-boat" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.crate_boat)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3C7.58 3 4 4.79 4 7C4 9.21 7.58 11 12 11C16.42 11 20 9.21 20 7C20 4.79 16.42 3 12 3ZM4 9V12C4 14.21 7.58 16 12 16C16.42 16 20 14.21 20 12V9C20 11.21 16.42 13 12 13C7.58 13 4 11.21 4 9ZM4 14V17C4 19.21 7.58 21 12 21C16.42 21 20 19.21 20 17V14C20 16.21 16.42 18 12 18C7.58 18 4 16.21 4 14Z" fill="white" />
                        </svg>
                        Create Boat
                    </a>
                </li> */}
                <li className={`${path == "all_boats" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.all_boats)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.7377 10.1347L21.2308 9.66755V4.28574C21.2308 3.83108 21.0363 3.39504 20.69 3.07355C20.3438 2.75206 19.8742 2.57144 19.3846 2.57144H12.9231V0.857148C12.9231 0.629818 12.8258 0.411799 12.6527 0.251053C12.4796 0.0903063 12.2448 0 12 0C11.7552 0 11.5204 0.0903063 11.3473 0.251053C11.1742 0.411799 11.0769 0.629818 11.0769 0.857148V2.57144H4.61538C4.12575 2.57144 3.65618 2.75206 3.30996 3.07355C2.96374 3.39504 2.76923 3.83108 2.76923 4.28574V9.66755L1.26231 10.1347C0.894704 10.2485 0.574978 10.4668 0.348423 10.7587C0.121868 11.0506 -2.87129e-05 11.4013 5.07314e-09 11.7611V14.5715C5.07314e-09 21.1651 11.295 23.863 11.7762 23.9744C11.9231 24.0085 12.0769 24.0085 12.2238 23.9744C12.705 23.863 24 21.1651 24 14.5715V11.7611C24 11.4013 23.8781 11.0506 23.6516 10.7587C23.425 10.4668 23.1053 10.2485 22.7377 10.1347ZM4.61538 4.28574H19.3846V9.09648L12.2919 6.90111C12.1024 6.84245 11.8976 6.84245 11.7081 6.90111L4.61538 9.09648V4.28574ZM22.1538 14.5715C22.1538 17.2405 19.4215 19.1787 17.1288 20.339C15.4965 21.1435 13.7774 21.786 12 22.2558C10.2334 21.7907 8.5244 21.1543 6.90115 20.3573C2.72308 18.2519 1.84615 16.049 1.84615 14.5715V11.7611L11.0769 8.90362V16.2858C11.0769 16.5131 11.1742 16.7312 11.3473 16.8919C11.5204 17.0526 11.7552 17.143 12 17.143C12.2448 17.143 12.4796 17.0526 12.6527 16.8919C12.8258 16.7312 12.9231 16.5131 12.9231 16.2858V8.90362L22.1538 11.7611V14.5715Z" fill="white" />
                        </svg>
                        {/* List Of All Boats <br /> Managed */}
                        Boats
                    </a>
                </li>
                {/* <li className={`${path == "add-docks" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.add_new_docks)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 4C19.5046 3.99984 19.9906 4.19041 20.3605 4.5335C20.7305 4.87659 20.9572 5.34684 20.995 5.85L21 6V10C21.0002 10.5046 20.8096 10.9906 20.4665 11.3605C20.1234 11.7305 19.6532 11.9572 19.15 11.995L19 12H5C4.49542 12.0002 4.00943 11.8096 3.63945 11.4665C3.26947 11.1234 3.04284 10.6532 3.005 10.15L3 10V6C2.99984 5.49542 3.19041 5.00943 3.5335 4.63945C3.87659 4.26947 4.34684 4.04284 4.85 4.005L5 4H19ZM19 6H5V10H19V6ZM10 7C10.2549 7.00028 10.5 7.09788 10.6854 7.27285C10.8707 7.44782 10.9822 7.68695 10.9972 7.94139C11.0121 8.19584 10.9293 8.44638 10.7657 8.64183C10.6021 8.83729 10.3701 8.9629 10.117 8.993L10 9H8C7.74512 8.99972 7.49997 8.90212 7.31463 8.72715C7.1293 8.55218 7.01777 8.31305 7.00283 8.05861C6.98789 7.80416 7.07067 7.55362 7.23426 7.35817C7.39786 7.16271 7.6299 7.0371 7.883 7.007L8 7H10ZM19 13C19.5046 12.9998 19.9906 13.1904 20.3605 13.5335C20.7305 13.8766 20.9572 14.3468 20.995 14.85L21 15V19C21.0002 19.5046 20.8096 19.9906 20.4665 20.3605C20.1234 20.7305 19.6532 20.9572 19.15 20.995L19 21H5C4.49542 21.0002 4.00943 20.8096 3.63945 20.4665C3.26947 20.1234 3.04284 19.6532 3.005 19.15L3 19V15C2.99984 14.4954 3.19041 14.0094 3.5335 13.6395C3.87659 13.2695 4.34684 13.0428 4.85 13.005L5 13H19ZM19 15H5V19H19V15ZM10 16C10.2652 16 10.5196 16.1054 10.7071 16.2929C10.8946 16.4804 11 16.7348 11 17C11 17.2652 10.8946 17.5196 10.7071 17.7071C10.5196 17.8946 10.2652 18 10 18H8C7.73478 18 7.48043 17.8946 7.29289 17.7071C7.10536 17.5196 7 17.2652 7 17C7 16.7348 7.10536 16.4804 7.29289 16.2929C7.48043 16.1054 7.73478 16 8 16H10Z" fill="white" />
                        </svg>
                        Create Dry Dock <br />Storage
                    </a>
                </li> */}
                <li className={`${path == "docks" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.boat_docks)}>
                        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.37333 6.81723C3.25874 5.76457 4.77675 5.25 6.99979 5.25H16.9998C19.2228 5.25 20.7408 5.76457 21.6262 6.81723C22.5031 7.85966 22.5865 9.22916 22.4459 10.5061L21.6956 18.5099C21.5854 19.538 21.3273 20.6651 20.4094 21.5037C19.4983 22.3361 18.0866 22.75 15.9998 22.75H7.99979C5.91294 22.75 4.50132 22.3361 3.59017 21.5037C2.67224 20.6651 2.41421 19.538 2.30406 18.5099L2.303 18.5L1.55364 10.5061C1.41311 9.22917 1.49651 7.85967 2.37333 6.81723ZM3.52125 7.78277C3.04952 8.3436 2.91674 9.18629 3.04524 10.3475L3.04662 10.36L3.79604 18.3549C3.89609 19.2843 4.1032 19.9407 4.6019 20.3963C5.10826 20.8589 6.06664 21.25 7.99979 21.25H15.9998C17.9329 21.25 18.8913 20.8589 19.3977 20.3963C19.8964 19.9407 20.1035 19.2843 20.2035 18.3549L20.9542 10.3475C21.0827 9.18628 20.9501 8.3436 20.4783 7.78277C20.0137 7.23043 19.0468 6.75 16.9998 6.75H6.99979C4.95282 6.75 3.98584 7.23043 3.52125 7.78277Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.79369 4.05038C8.75121 4.37577 8.75 4.74554 8.75 5.2V6C8.75 6.41421 8.41422 6.75 8 6.75C7.58579 6.75 7.25 6.41421 7.25 6L7.25 5.17401C7.24998 4.75048 7.24995 4.28789 7.30631 3.85619C7.36471 3.40889 7.48985 2.93401 7.78302 2.50983C8.39976 1.61749 9.52951 1.25 11.2 1.25H12.8C14.4705 1.25 15.6002 1.61749 16.217 2.50983C16.5101 2.93401 16.6353 3.40889 16.6937 3.85619C16.7501 4.28789 16.75 4.75049 16.75 5.17402L16.75 6C16.75 6.41421 16.4142 6.75 16 6.75C15.5858 6.75 15.25 6.41421 15.25 6V5.2C15.25 4.74554 15.2488 4.37577 15.2063 4.05038C15.1647 3.73174 15.0899 3.51724 14.983 3.36267C14.7998 3.09751 14.3295 2.75 12.8 2.75H11.2C9.67049 2.75 9.20025 3.09751 9.01698 3.36267C8.91015 3.51724 8.83529 3.73174 8.79369 4.05038Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7508 12.7508C10.75 12.8222 10.75 12.9036 10.75 13V14.03C10.75 14.3115 10.7525 14.5186 10.7769 14.6943C10.8004 14.8632 10.8378 14.9454 10.8694 14.9901C10.9047 15.0399 11.0806 15.25 12 15.25C12.9236 15.25 13.0974 15.0378 13.1319 14.9885C13.1638 14.9431 13.201 14.8596 13.2241 14.6887C13.2482 14.511 13.25 14.3029 13.25 14.02V13C13.25 12.9036 13.25 12.8222 13.2492 12.7508C13.1778 12.75 13.0965 12.75 13 12.75H11C10.9036 12.75 10.8222 12.75 10.7508 12.7508ZM10.9672 11.25C10.9781 11.25 10.9891 11.25 11 11.25H13C13.0109 11.25 13.0219 11.25 13.0329 11.25C13.254 11.25 13.4781 11.2499 13.661 11.2702C13.8474 11.2909 14.157 11.3463 14.4053 11.5947C14.6537 11.843 14.7091 12.1527 14.7298 12.3391C14.7501 12.5219 14.7501 12.746 14.75 12.9672C14.75 12.9781 14.75 12.9891 14.75 13V14.0312C14.75 14.291 14.75 14.5983 14.7106 14.8898C14.6696 15.1923 14.58 15.5357 14.3606 15.849C13.8926 16.5172 13.0664 16.75 12 16.75C10.9394 16.75 10.1153 16.5202 9.64562 15.8575C9.42476 15.5458 9.33335 15.2037 9.29123 14.901C9.25005 14.6052 9.25001 14.2935 9.25001 14.03V13C9.25001 12.9891 9.25001 12.9781 9.25 12.9672C9.24995 12.746 9.2499 12.5219 9.27022 12.3391C9.29093 12.1527 9.34631 11.843 9.59468 11.5947C9.84305 11.3463 10.1527 11.2909 10.3391 11.2702C10.5219 11.2499 10.746 11.25 10.9672 11.25Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2566 10.5589C22.5003 10.8939 22.4262 11.363 22.0912 11.6066C19.6751 13.3638 16.9146 14.409 14.0938 14.7642C13.6828 14.8159 13.3077 14.5247 13.256 14.1138C13.2042 13.7028 13.4954 13.3277 13.9064 13.2759C16.4856 12.9511 19.0051 11.9963 21.209 10.3935C21.5439 10.1499 22.013 10.2239 22.2566 10.5589Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00128 10.846C2.23523 10.5042 2.70198 10.4167 3.0438 10.6507C5.19269 12.1215 7.61593 13.008 10.0836 13.2843C10.4953 13.3304 10.7916 13.7014 10.7455 14.1131C10.6994 14.5247 10.3284 14.821 9.91673 14.7749C7.20444 14.4713 4.54768 13.4977 2.19658 11.8885C1.85476 11.6546 1.76732 11.1878 2.00128 10.846Z" fill="#F1F1F1" />
                        </svg> */}
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.36598 2.39041C2.40106 3.31134 0.786204 4.07723 0.776297 4.09274C0.756483 4.12374 1.06691 4.64157 1.18249 4.7749L1.24523 4.84623L4.59384 3.27723C6.43657 2.41211 7.96556 1.70514 7.99199 1.70514C8.01839 1.70514 9.54741 2.41211 11.3901 3.27723L14.7387 4.84623L14.8015 4.7749C14.927 4.62918 15.2308 4.12685 15.211 4.09583C15.1812 4.05243 8.05143 0.712891 7.98867 0.712891C7.96227 0.712891 6.33089 1.46638 4.36598 2.39041Z" fill="white" />
                            <path d="M7.26829 3.34864C6.40308 3.41685 5.49162 3.6215 4.95993 3.86957L4.71887 3.9812L4.62641 4.27578C4.491 4.69748 4.31267 5.24631 4.14755 5.75173C4.06829 5.9905 3.96922 6.30369 3.92959 6.44322C3.88667 6.58585 3.83713 6.70678 3.81732 6.71299C3.47057 6.79359 2.44353 7.15638 2.28171 7.25252C2.24208 7.27731 2.24869 7.34555 2.32464 7.71143C2.37418 7.94708 2.43362 8.21996 2.45344 8.32229C2.47325 8.4215 2.50958 8.50834 2.52939 8.51764C2.54921 8.52383 2.69781 8.47422 2.85962 8.4091C3.29554 8.22927 4.41175 7.92848 5.10195 7.80136C5.4619 7.73624 6.4196 7.63701 7.08996 7.59359C7.98492 7.53778 9.53043 7.60601 10.5839 7.75173C11.2939 7.85096 12.5686 8.18276 13.1696 8.42771C13.3348 8.49592 13.4537 8.52694 13.4735 8.50834C13.49 8.49283 13.5329 8.32538 13.5692 8.13934C13.6056 7.9502 13.6617 7.68352 13.6914 7.54399C13.7244 7.40445 13.741 7.28043 13.7311 7.27113C13.6683 7.2091 12.5983 6.81841 12.3077 6.74708L12.136 6.70678L12.0435 6.3998C11.994 6.23236 11.8322 5.72383 11.6836 5.27113C11.5383 4.81841 11.3831 4.34399 11.3434 4.21685L11.2675 3.98741L11.0264 3.87266C10.5971 3.67113 9.85737 3.47887 9.16716 3.39515C8.68171 3.33624 7.72734 3.31143 7.26829 3.34864ZM7.68771 5.06027C7.6943 5.76415 7.68771 6.17034 7.66458 6.18276C7.64808 6.19206 7.32444 6.21685 6.94467 6.23236C6.17192 6.26957 5.62371 6.32538 5.01937 6.43701C4.53724 6.52382 4.52402 6.52383 4.52402 6.46801C4.52402 6.44322 4.61318 6.16724 4.71887 5.85406C4.94344 5.2029 5.01608 4.98585 5.12176 4.62306C5.21093 4.31917 5.1845 4.33778 5.77893 4.19206C6.38988 4.0401 7.08667 3.9409 7.47966 3.94708L7.6778 3.95329L7.68771 5.06027ZM9.41484 4.0308C9.81442 4.09283 10.4914 4.24787 10.6763 4.31917C10.782 4.36259 10.7886 4.3781 10.9174 4.8091C10.9934 5.05406 11.1321 5.47887 11.2278 5.75173C11.4359 6.34708 11.4722 6.47731 11.4491 6.49903C11.4392 6.50834 11.2708 6.48662 11.0726 6.45252C10.3032 6.30987 10.1381 6.29438 8.62888 6.21376L8.32176 6.19515V5.06336V3.92848L8.67842 3.9502C8.87324 3.96259 9.2035 3.9998 9.41484 4.0308Z" fill="white" />
                            <path d="M6.52158 8.23613C5.71579 8.29815 4.81756 8.45008 4.02828 8.66094C3.87306 8.70436 3.70796 8.74466 3.66172 8.75706C3.52631 8.78497 2.88567 9.02373 2.82291 9.06715C2.76678 9.10436 2.80309 9.18187 3.25553 10.0439L3.74759 10.9772L4.08443 11.1012C4.26935 11.1695 4.43448 11.2253 4.45429 11.2253C4.4741 11.2253 4.7515 11.3152 5.07514 11.4299C5.39876 11.5416 5.81818 11.6811 6.00971 11.74C6.20124 11.802 6.44562 11.8826 6.5546 11.923C6.88815 12.0439 7.47267 12.2392 7.57174 12.2609L7.6609 12.2795V10.233V8.18652L7.35708 8.18962C7.18865 8.19273 6.81218 8.21443 6.52158 8.23613Z" fill="white" />
                            <path d="M8.32227 10.233V12.2795L8.41472 12.2609C8.46426 12.2485 8.75818 12.1524 9.0653 12.047C9.37571 11.9385 9.78191 11.802 9.97346 11.7431C10.165 11.6842 10.5844 11.5416 10.9047 11.4299C11.2283 11.3183 11.5057 11.2253 11.5256 11.2253C11.5454 11.2253 11.7138 11.1695 11.8987 11.1012L12.2356 10.9772L12.7276 10.0439C13.2989 8.96483 13.2956 9.09506 12.7673 8.9028C12.1827 8.69194 10.9708 8.40669 10.2542 8.31055C9.8942 8.26404 8.85396 8.18652 8.56333 8.18652H8.32227V10.233Z" fill="white" />
                            <path d="M0.759766 13.2374V13.7025L0.941395 13.7211C1.13293 13.7459 1.44006 13.87 1.80992 14.0777C2.3416 14.3723 2.7379 14.3692 3.29928 14.0653C3.95977 13.7087 4.21735 13.6343 4.5641 13.7025C4.78206 13.7459 4.96368 13.8204 5.41282 14.0591C5.73975 14.2359 5.93128 14.2948 6.17567 14.2948C6.43325 14.2948 6.60167 14.2359 7.09042 13.9847C7.88628 13.5754 8.09765 13.5754 8.89351 13.9847C9.38226 14.2359 9.55068 14.2948 9.80826 14.2948C10.0658 14.2948 10.2244 14.239 10.7494 13.9754C11.5585 13.5661 11.7666 13.5754 12.6714 14.056C13.2493 14.3661 13.6456 14.3723 14.1674 14.0808C14.5373 13.8731 14.851 13.7428 15.0359 13.7211C15.1317 13.7087 15.2175 13.6808 15.2308 13.6622C15.2638 13.6188 15.2638 13.3242 15.2374 13.0142C15.2143 12.7816 15.211 12.7754 15.1284 12.7754C14.9765 12.7754 14.7255 12.8653 14.2202 13.0979C13.5598 13.3986 13.5333 13.4049 13.3649 13.3832C13.289 13.3707 13.0182 13.2653 12.7639 13.1444C12.1893 12.8684 11.9053 12.7754 11.651 12.7754C11.3505 12.7754 11.1887 12.825 10.6174 13.0855C9.98991 13.3707 9.87761 13.4079 9.7158 13.38C9.64975 13.3707 9.37567 13.256 9.11147 13.132C8.51704 12.8498 8.27927 12.7754 7.99196 12.7754C7.70795 12.7754 7.44707 12.856 6.98473 13.0824C6.78659 13.1816 6.52571 13.2963 6.41012 13.3335C6.14263 13.4266 6.08318 13.4142 5.37319 13.0886C4.79526 12.825 4.63345 12.7754 4.33294 12.7754C4.08195 12.7754 3.80455 12.8684 3.22003 13.1444C2.96905 13.2653 2.69495 13.3707 2.61569 13.3832C2.45058 13.4049 2.29207 13.3521 1.66131 13.0514C1.26503 12.8622 1.01075 12.7754 0.852231 12.7754H0.759766V13.2374Z" fill="white" />
                        </svg>
                        {/* Boats On Dock */}Docks
                    </a>
                </li>
                <li className={`${path == "all-supplier" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.all_supplier)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1156 1.59197L12.3529 1.82933L18.8984 8.37478L19.1357 8.61214V7.84454L12.8832 1.59197H12.1156ZM11.4994 2.18288V1.59197H4.36411C3.92003 1.59457 3.49498 1.77269 3.18172 2.08752C2.86814 2.40269 2.6921 2.82919 2.69211 3.27379V3.27411L2.6812 20.7283C2.6812 20.7284 2.6812 20.7285 2.6812 20.7286C2.68126 21.1731 2.85729 21.5995 3.17081 21.9146C3.48412 22.2295 3.90927 22.4076 4.35343 22.4102H17.4531C17.8989 22.4086 18.326 22.2309 18.6412 21.9157C18.9565 21.6004 19.1342 21.1733 19.1357 20.7275V9.22834H18.5448H11.9994H11.4994V8.72834L11.4994 2.18288Z" stroke="#F1F1F1" />
                            <path d="M16.0905 10.9102L9.02086 17.9798L6.04217 15.0011L5.4541 15.5891L8.72683 18.8619L9.02086 19.1431L9.3149 18.8619L16.6785 11.4982L16.0905 10.9102Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0909 10.332L17.2575 11.4986L9.59816 19.158L9.02128 19.7096L8.4379 19.1516L4.87598 15.5896L6.04259 14.4229L9.02128 17.4016L16.0909 10.332ZM16.0909 11.4891L9.02128 18.5587L6.04259 15.58L6.03306 15.5896L9.0133 18.5698L9.02128 18.5774L9.02926 18.5698L16.1004 11.4986L16.0909 11.4891Z" fill="white" />
                        </svg>
                        Suppliers
                    </a>
                </li>
                <li className={`${path == "create-staff" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.create_staff)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4717 21.8629C16.4717 21.51 16.5413 21.1606 16.6767 20.8347C16.812 20.5087 17.0103 20.2128 17.2603 19.9637C17.5103 19.7146 17.807 19.5173 18.1334 19.3831C18.4597 19.2489 18.8094 19.1804 19.1623 19.1817C19.8734 19.1817 20.5554 19.4641 21.0582 19.967C21.5611 20.4698 21.8436 21.1518 21.8436 21.8629" stroke="white" stroke-miterlimit="10" />
                            <path d="M17.3721 15.5992C17.3721 16.0741 17.5607 16.5296 17.8965 16.8654C18.2323 17.2012 18.6878 17.3898 19.1627 17.3898C19.6376 17.3898 20.0931 17.2012 20.4289 16.8654C20.7647 16.5296 20.9533 16.0741 20.9533 15.5992C20.9533 15.1243 20.7647 14.6689 20.4289 14.3331C20.0931 13.9972 19.6376 13.8086 19.1627 13.8086C18.6878 13.8086 18.2323 13.9972 17.8965 14.3331C17.5607 14.6689 17.3721 15.1243 17.3721 15.5992Z" stroke="white" stroke-miterlimit="10" />
                            <path d="M9.31836 21.8629C9.31836 21.1518 9.60085 20.4698 10.1037 19.967C10.6065 19.4641 11.2885 19.1816 11.9996 19.1816C12.7107 19.1816 13.3927 19.4641 13.8955 19.967C14.3984 20.4698 14.6809 21.1518 14.6809 21.8629" stroke="white" stroke-miterlimit="10" />
                            <path d="M10.209 15.5992C10.209 15.8344 10.2553 16.0672 10.3453 16.2845C10.4353 16.5017 10.5672 16.6991 10.7334 16.8654C10.8997 17.0317 11.0971 17.1636 11.3144 17.2535C11.5316 17.3435 11.7645 17.3898 11.9996 17.3898C12.2348 17.3898 12.4676 17.3435 12.6849 17.2535C12.9021 17.1636 13.0995 17.0317 13.2658 16.8654C13.432 16.6991 13.5639 16.5017 13.6539 16.2845C13.7439 16.0672 13.7902 15.8344 13.7902 15.5992C13.7902 15.3641 13.7439 15.1312 13.6539 14.914C13.5639 14.6967 13.432 14.4993 13.2658 14.3331C13.0995 14.1668 12.9021 14.0349 12.6849 13.9449C12.4676 13.8549 12.2348 13.8086 11.9996 13.8086C11.7645 13.8086 11.5316 13.8549 11.3144 13.9449C11.0971 14.0349 10.8997 14.1668 10.7334 14.3331C10.5672 14.4993 10.4353 14.6967 10.3453 14.914C10.2553 15.1312 10.209 15.3641 10.209 15.5992Z" stroke="white" stroke-miterlimit="10" />
                            <path d="M12.9375 11.1281C12.9398 10.4233 13.2176 9.74732 13.7116 9.24458C14.2056 8.74183 14.8766 8.45218 15.5812 8.4375C16.2932 8.43998 16.9752 8.72455 17.4778 9.22887C17.9803 9.73319 18.2625 10.4161 18.2625 11.1281" stroke="white" stroke-miterlimit="10" />
                            <path d="M13.791 4.86484C13.791 5.33975 13.9797 5.7952 14.3155 6.13101C14.6513 6.46681 15.1067 6.65547 15.5816 6.65547C16.0565 6.65547 16.512 6.46681 16.8478 6.13101C17.1836 5.7952 17.3723 5.33975 17.3723 4.86484C17.3723 4.38994 17.1836 3.93449 16.8478 3.59868C16.512 3.26287 16.0565 3.07422 15.5816 3.07422C15.1067 3.07422 14.6513 3.26287 14.3155 3.59868C13.9797 3.93449 13.791 4.38994 13.791 4.86484Z" stroke="white" stroke-miterlimit="10" />
                            <path d="M5.7373 11.1281C5.7373 10.4161 6.01949 9.73319 6.52205 9.22887C7.02462 8.72455 7.70658 8.43998 8.41856 8.4375C9.13139 8.43997 9.81433 8.72424 10.3184 9.2283C10.8224 9.73235 11.1067 10.4153 11.1092 11.1281" stroke="white" stroke-miterlimit="10" />
                            <path d="M6.62793 4.86484C6.62793 5.33975 6.81658 5.7952 7.15239 6.13101C7.4882 6.46681 7.94365 6.65547 8.41855 6.65547C8.89346 6.65547 9.34891 6.46681 9.68472 6.13101C10.0205 5.7952 10.2092 5.33975 10.2092 4.86484C10.2092 4.38994 10.0205 3.93449 9.68472 3.59868C9.34891 3.26287 8.89346 3.07422 8.41855 3.07422C7.94365 3.07422 7.4882 3.26287 7.15239 3.59868C6.81658 3.93449 6.62793 4.38994 6.62793 4.86484Z" stroke="white" stroke-miterlimit="10" />
                            <path d="M2.15625 21.8629C2.15625 21.1518 2.43874 20.4698 2.94157 19.967C3.4444 19.4641 4.12639 19.1817 4.8375 19.1817C5.19039 19.1804 5.54006 19.2489 5.86645 19.3831C6.19284 19.5173 6.48952 19.7146 6.73949 19.9637C6.98946 20.2128 7.1878 20.5087 7.32313 20.8347C7.45846 21.1606 7.52813 21.51 7.52813 21.8629" stroke="white" stroke-miterlimit="10" />
                            <path d="M3.04688 15.5992C3.04688 16.0741 3.23553 16.5296 3.57134 16.8654C3.90714 17.2012 4.3626 17.3898 4.8375 17.3898C5.3124 17.3898 5.76786 17.2012 6.10366 16.8654C6.43947 16.5296 6.62813 16.0741 6.62813 15.5992C6.62813 15.1243 6.43947 14.6689 6.10366 14.3331C5.76786 13.9972 5.3124 13.8086 4.8375 13.8086C4.3626 13.8086 3.90714 13.9972 3.57134 14.3331C3.23553 14.6689 3.04688 15.1243 3.04688 15.5992Z" stroke="white" stroke-miterlimit="10" />
                        </svg>
                        Staff
                    </a>
                </li>
                <li className={`${path == "review" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.review_schedule)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 19.5C10.25 19.0858 10.5858 18.75 11 18.75H21C21.4142 18.75 21.75 19.0858 21.75 19.5C21.75 19.9142 21.4142 20.25 21 20.25H11C10.5858 20.25 10.25 19.9142 10.25 19.5Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 12.5C10.25 12.0858 10.5858 11.75 11 11.75H21C21.4142 11.75 21.75 12.0858 21.75 12.5C21.75 12.9142 21.4142 13.25 21 13.25H11C10.5858 13.25 10.25 12.9142 10.25 12.5Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 5.5C10.25 5.08579 10.5858 4.75 11 4.75H21C21.4142 4.75 21.75 5.08579 21.75 5.5C21.75 5.91421 21.4142 6.25 21 6.25H11C10.5858 6.25 10.25 5.91421 10.25 5.5Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.53033 2.96967C7.82322 3.26256 7.82322 3.73744 7.53033 4.03033L4.53033 7.03033C4.23744 7.32322 3.76256 7.32322 3.46967 7.03033L2.46967 6.03033C2.17678 5.73744 2.17678 5.26256 2.46967 4.96967C2.76256 4.67678 3.23744 4.67678 3.53033 4.96967L4 5.43934L6.46967 2.96967C6.76256 2.67678 7.23744 2.67678 7.53033 2.96967Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.53033 9.96967C7.82322 10.2626 7.82322 10.7374 7.53033 11.0303L4.53033 14.0303C4.23744 14.3232 3.76256 14.3232 3.46967 14.0303L2.46967 13.0303C2.17678 12.7374 2.17678 12.2626 2.46967 11.9697C2.76256 11.6768 3.23744 11.6768 3.53033 11.9697L4 12.4393L6.46967 9.96967C6.76256 9.67678 7.23744 9.67678 7.53033 9.96967Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.53033 16.9697C7.82322 17.2626 7.82322 17.7374 7.53033 18.0303L4.53033 21.0303C4.23744 21.3232 3.76256 21.3232 3.46967 21.0303L2.46967 20.0303C2.17678 19.7374 2.17678 19.2626 2.46967 18.9697C2.76256 18.6768 3.23744 18.6768 3.53033 18.9697L4 19.4393L6.46967 16.9697C6.76256 16.6768 7.23744 16.6768 7.53033 16.9697Z" fill="#F1F1F1" />
                        </svg>
                        {/* Review <br /> Schedule */}Calender
                    </a>
                </li>
                <li className={`${path == "maintenance" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.maintenance)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.25 5.625C2.25 4.72989 2.60558 3.87145 3.23851 3.23851C3.87145 2.60558 4.72989 2.25 5.625 2.25H18.375C19.2701 2.25 20.1285 2.60558 20.7615 3.23851C21.3944 3.87145 21.75 4.72989 21.75 5.625V12.219C21.1949 11.7217 20.5614 11.3198 19.875 11.0295V5.625C19.875 5.22718 19.717 4.84564 19.4357 4.56434C19.1544 4.28304 18.7728 4.125 18.375 4.125H5.625C5.22718 4.125 4.84564 4.28304 4.56434 4.56434C4.28304 4.84564 4.125 5.22718 4.125 5.625V18.375C4.125 18.7728 4.28304 19.1544 4.56434 19.4357C4.84564 19.717 5.22718 19.875 5.625 19.875H11.0295C11.3198 20.5614 11.7217 21.1949 12.219 21.75H5.625C4.72989 21.75 3.87145 21.3944 3.23851 20.7615C2.60558 20.1285 2.25 19.2701 2.25 18.375V5.625ZM17.25 22.875C18.7418 22.875 20.1726 22.2824 21.2275 21.2275C22.2824 20.1726 22.875 18.7418 22.875 17.25C22.875 15.7582 22.2824 14.3274 21.2275 13.2725C20.1726 12.2176 18.7418 11.625 17.25 11.625C15.7582 11.625 14.3274 12.2176 13.2725 13.2725C12.2176 14.3274 11.625 15.7582 11.625 17.25C11.625 18.7418 12.2176 20.1726 13.2725 21.2275C14.3274 22.2824 15.7582 22.875 17.25 22.875ZM18 13.6875V16.5H20.8125C20.9617 16.5 21.1048 16.5593 21.2102 16.6648C21.3157 16.7702 21.375 16.9133 21.375 17.0625C21.375 17.2117 21.3157 17.3548 21.2102 17.4602C21.1048 17.5657 20.9617 17.625 20.8125 17.625H18V20.4375C18 20.5867 17.9407 20.7298 17.8352 20.8352C17.7298 20.9407 17.5867 21 17.4375 21C17.2883 21 17.1452 20.9407 17.0398 20.8352C16.9343 20.7298 16.875 20.5867 16.875 20.4375V17.625H14.0625C13.9133 17.625 13.7702 17.5657 13.6648 17.4602C13.5593 17.3548 13.5 17.2117 13.5 17.0625C13.5 16.9133 13.5593 16.7702 13.6648 16.6648C13.7702 16.5593 13.9133 16.5 14.0625 16.5H16.875V13.6875C16.875 13.5383 16.9343 13.3952 17.0398 13.2898C17.1452 13.1843 17.2883 13.125 17.4375 13.125C17.5867 13.125 17.7298 13.1843 17.8352 13.2898C17.9407 13.3952 18 13.5383 18 13.6875Z" fill="white" />
                        </svg>
                        {/* Create Tasks/ <br /> Scheduled <br /> Maintenance */}Maintenance
                    </a>
                </li>
                <li className={`${path == "quick-leads" && 'active'}`}>
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.quick_lead)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9101 2.75C16.8943 2.75 16.0801 3.56421 16.0801 4.58C16.0801 5.55792 16.8322 6.34607 17.7843 6.40782C17.8642 6.40073 17.946 6.40073 18.0258 6.40782C18.9763 6.34613 19.7317 5.559 19.7401 4.57733C19.7386 3.57086 18.9231 2.75 17.9101 2.75ZM14.5801 4.58C14.5801 2.73579 16.0659 1.25 17.9101 1.25C19.7562 1.25 21.2401 2.74768 21.2401 4.58V4.58536H21.2401C21.2272 6.38428 19.8112 7.84488 18.0272 7.90951C17.9864 7.91099 17.9456 7.90913 17.9051 7.90396C17.8646 7.90913 17.8237 7.91099 17.7829 7.90951C15.9999 7.84491 14.5801 6.38403 14.5801 4.58Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8111 8.85124C18.3315 8.58491 20.065 8.83883 21.3252 9.67506L21.3266 9.67596C22.188 10.2502 22.7181 11.0823 22.7181 12.01C22.7181 12.9377 22.188 13.7698 21.3266 14.344C20.0757 15.1813 18.3629 15.4342 16.8464 15.1796C16.4379 15.1111 16.1623 14.7243 16.2309 14.3158C16.2995 13.9073 16.6862 13.6318 17.0947 13.7003C18.3177 13.9057 19.6242 13.6789 20.4932 13.0969L20.4945 13.096C21.0431 12.7302 21.2181 12.3223 21.2181 12.01C21.2181 11.6978 21.0433 11.2901 20.4952 10.9245C19.6155 10.3411 18.2894 10.1151 17.07 10.3287C16.662 10.4002 16.2733 10.1274 16.2018 9.71941C16.1303 9.31141 16.4031 8.92271 16.8111 8.85124Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.73047 4.58C2.73047 2.74768 4.21437 1.25 6.06047 1.25C7.90469 1.25 9.39047 2.73579 9.39047 4.58C9.39047 6.38403 7.97062 7.84491 6.18763 7.90951C6.14681 7.91099 6.10595 7.90913 6.06547 7.90396C6.02499 7.90913 5.98413 7.91099 5.94331 7.90951C4.15938 7.84488 2.74334 6.38429 2.73049 4.58536L2.73047 4.58ZM4.23047 4.57733C4.23885 5.559 4.99425 6.34613 5.94472 6.40782C6.02458 6.40073 6.10637 6.40073 6.18623 6.40782C7.13834 6.34607 7.89047 5.55792 7.89047 4.58C7.89047 3.56421 7.07626 2.75 6.06047 2.75C5.04747 2.75 4.23191 3.57087 4.23047 4.57733Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.47578 10.9245C4.35554 10.3411 5.68164 10.1151 6.90101 10.3287C7.30901 10.4002 7.6977 10.1274 7.76918 9.71941C7.84065 9.31141 7.56784 8.92271 7.15984 8.85124C5.63953 8.58491 3.906 8.83883 2.64575 9.67506L2.64575 9.67506L2.6444 9.67596C1.78302 10.2502 1.25293 11.0823 1.25293 12.01C1.25293 12.9374 1.78274 13.7693 2.64373 14.3436C3.89469 15.1812 5.60784 15.4343 7.1246 15.1796C7.5331 15.1111 7.80866 14.7243 7.74008 14.3158C7.6715 13.9073 7.28475 13.6318 6.87625 13.7003C5.65329 13.9057 4.34679 13.6789 3.47781 13.0969L3.47645 13.096C2.92784 12.7302 2.75293 12.3223 2.75293 12.01C2.75293 11.6978 2.9277 11.2901 3.47578 10.9245Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9111 10.2207C10.8953 10.2207 10.0811 11.0349 10.0811 12.0507C10.0811 13.0286 10.8332 13.8168 11.7853 13.8785C11.8663 13.8713 11.9492 13.8714 12.0302 13.8788C12.9729 13.8248 13.7326 13.035 13.7411 12.048C13.7396 11.0416 12.924 10.2207 11.9111 10.2207ZM8.58105 12.0507C8.58105 10.2065 10.0668 8.7207 11.9111 8.7207C13.7572 8.7207 15.2411 10.2184 15.2411 12.0507V12.0561H15.241C15.2282 13.8502 13.8158 15.3284 12.0228 15.3804C11.9838 15.3815 11.9447 15.3796 11.9061 15.3747C11.8656 15.3798 11.8247 15.3817 11.7839 15.3802C10.0009 15.3156 8.58105 13.8547 8.58105 12.0507Z" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0045 16.2363C13.173 16.2363 14.3818 16.5273 15.3267 17.1573C16.1881 17.7315 16.7182 18.5637 16.7182 19.4913C16.7182 20.4189 16.1883 21.2509 15.3271 21.8251C14.3781 22.4596 13.1697 22.7538 12.0007 22.7538C10.8317 22.7538 9.62331 22.4596 8.67435 21.8251C7.81316 21.2509 7.2832 20.4189 7.2832 19.4913C7.2832 18.5637 7.81329 17.7315 8.67468 17.1573L8.67648 17.1561L8.67648 17.1561C9.62546 16.5274 10.8357 16.2363 12.0045 16.2363ZM9.50584 18.406C8.95793 18.7715 8.7832 19.1792 8.7832 19.4913C8.7832 19.8037 8.95811 20.2115 9.50673 20.5773L9.50763 20.5779C10.1586 21.0132 11.0599 21.2538 12.0007 21.2538C12.9415 21.2538 13.8428 21.0132 14.4938 20.5779L14.4947 20.5773C15.0433 20.2115 15.2182 19.8037 15.2182 19.4913C15.2182 19.179 15.0433 18.7711 14.4947 18.4054C13.8496 17.9753 12.9484 17.7363 12.0045 17.7363C11.0611 17.7363 10.1568 17.975 9.50584 18.406Z" fill="#F1F1F1" />
                        </svg>
                        Leads
                    </a>
                </li>
                <li className={`${path == "invoice-list" && 'active'}`} onClick={() => navigate(pageRoutes.invoice_list_data)}>
                    <a href="javascript:void(0)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 9.75C13.5 9.55109 13.421 9.36032 13.2803 9.21967C13.1397 9.07902 12.9489 9 12.75 9H6.75C6.55109 9 6.36032 9.07902 6.21967 9.21967C6.07902 9.36032 6 9.55109 6 9.75C6 9.94891 6.07902 10.1397 6.21967 10.2803C6.36032 10.421 6.55109 10.5 6.75 10.5H12.75C12.9489 10.5 13.1397 10.421 13.2803 10.2803C13.421 10.1397 13.5 9.94891 13.5 9.75ZM12.5 12.75C12.5 12.5511 12.421 12.3603 12.2803 12.2197C12.1397 12.079 11.9489 12 11.75 12H6.75C6.55109 12 6.36032 12.079 6.21967 12.2197C6.07902 12.3603 6 12.5511 6 12.75C6 12.9489 6.07902 13.1397 6.21967 13.2803C6.36032 13.421 6.55109 13.5 6.75 13.5H11.75C11.9489 13.5 12.1397 13.421 12.2803 13.2803C12.421 13.1397 12.5 12.9489 12.5 12.75ZM12.75 15C12.9489 15 13.1397 15.079 13.2803 15.2197C13.421 15.3603 13.5 15.5511 13.5 15.75C13.5 15.9489 13.421 16.1397 13.2803 16.2803C13.1397 16.421 12.9489 16.5 12.75 16.5H6.75C6.55109 16.5 6.36032 16.421 6.21967 16.2803C6.07902 16.1397 6 15.9489 6 15.75C6 15.5511 6.07902 15.3603 6.21967 15.2197C6.36032 15.079 6.55109 15 6.75 15H12.75Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 21.7501H19C19.7293 21.7501 20.4288 21.4604 20.9445 20.9447C21.4603 20.4289 21.75 19.7295 21.75 19.0001V13.5001C21.75 13.3012 21.671 13.1104 21.5303 12.9698C21.3897 12.8291 21.1989 12.7501 21 12.7501H17.75V4.94312C17.75 3.52012 16.141 2.69212 14.983 3.51912L14.808 3.64412C14.4248 3.91615 13.9663 4.06195 13.4964 4.06123C13.0264 4.06051 12.5684 3.91331 12.186 3.64012C11.5476 3.18579 10.7835 2.94165 10 2.94165C9.21645 2.94165 8.45238 3.18579 7.814 3.64012C7.43162 3.91331 6.97359 4.06051 6.50364 4.06123C6.03369 4.06195 5.57521 3.91615 5.192 3.64412L5.017 3.51912C3.859 2.69212 2.25 3.51912 2.25 4.94312V18.0001C2.25 18.9947 2.64509 19.9485 3.34835 20.6518C4.05161 21.355 5.00544 21.7501 6 21.7501ZM8.686 4.86012C9.06995 4.58756 9.52915 4.44115 10 4.44115C10.4709 4.44115 10.9301 4.58756 11.314 4.86012C11.9507 5.31524 12.7136 5.56033 13.4962 5.56123C14.2788 5.56213 15.0423 5.31878 15.68 4.86512L15.855 4.74012C15.8923 4.71353 15.9363 4.69772 15.982 4.69442C16.0277 4.69112 16.0735 4.70046 16.1143 4.72142C16.1551 4.74237 16.1893 4.77414 16.2132 4.81324C16.2372 4.85234 16.2499 4.89727 16.25 4.94312V19.0001C16.25 19.4501 16.358 19.8751 16.55 20.2501H6C5.40326 20.2501 4.83097 20.0131 4.40901 19.5911C3.98705 19.1692 3.75 18.5969 3.75 18.0001V4.94312C3.75012 4.89727 3.76284 4.85234 3.78678 4.81324C3.81072 4.77414 3.84495 4.74237 3.88573 4.72142C3.9265 4.70046 3.97226 4.69112 4.01798 4.69442C4.06371 4.69772 4.10765 4.71353 4.145 4.74012L4.32 4.86512C4.95775 5.31878 5.72116 5.56213 6.5038 5.56123C7.28644 5.56033 8.0493 5.31524 8.686 4.86012ZM17.75 19.0001V14.2501H20.25V19.0001C20.25 19.3316 20.1183 19.6496 19.8839 19.884C19.6495 20.1184 19.3315 20.2501 19 20.2501C18.6685 20.2501 18.3505 20.1184 18.1161 19.884C17.8817 19.6496 17.75 19.3316 17.75 19.0001Z" fill="white" />
                        </svg>
                        All Invoices
                    </a>
                </li>
                <li className={`${path == "subscription" && 'active'}`} onClick={() => navigate(pageRoutes.subscription)}>
                    <a href="javascript:void(0)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 22C3.45 22 2.97933 21.8043 2.588 21.413C2.19667 21.0217 2.00067 20.5507 2 20V10C2 9.45 2.196 8.97933 2.588 8.588C2.98 8.19667 3.45067 8.00067 4 8H20C20.55 8 21.021 8.196 21.413 8.588C21.805 8.98 22.0007 9.45067 22 10V20C22 20.55 21.8043 21.021 21.413 21.413C21.0217 21.805 20.5507 22.0007 20 22H4ZM4 20H20V10H4V20ZM10 19L16 15L10 11V19ZM4 7V5H20V7H4ZM7 4V2H17V4H7Z" fill="white" />
                        </svg>
                        Subscription
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
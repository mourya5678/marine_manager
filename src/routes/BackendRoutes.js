export const BASE_URL = "http://192.168.29.19:4001/";   // Local 

// export const BASE_URL = "http://3.26.177.93:4000/";   // Live Url

// auth user
export const signupEndPointURL = "users/signup";
export const loginEndPointURL = "users/login";
export const forgotPasswordEndPointURL = "users/forgetPassword";

// Dashboard Data
export const getDashboardDataEndPointURL = "home/getHome";

// Bussiness profile
export const bussinessProfileEndPointURL = "users/myProfile";
export const updateBussinessProfileEndPointURL = "users/editProfile";

// staff 
export const addStaffEndPointURL = "staff/addStaffMember";
export const getStaffDataEndPointURL = "staff/staffMembers";
export const updateStaffEndPointURL = "staff/editStaffMember";

// supplier
export const getSupplierEndPointURL = "supplier";
export const addSupplierEndPointURL = "supplier/addsupllier";
export const updateSupplierEndPointURL = "supplier/editsupllier";

// Dock 
export const addDockDetailsEndPointURL = "dock/addDock";
export const getDockDetailsEndPointURL = "dock/getAllDock";
export const updateDockDetailsEndPointURL = "dock/updateDock";
export const getAvailableBoatsEndPointURL = "dock/availableBoats"


// Boats
export const getAllBoatsDataEndPointURL = "boat/getAllBoat";
export const addBoatDetailsEndPointURL = "boat/addBoat";
export const updateBoatDetailsEndPointURL = "boat/updateBoat"

// Images Delete 
export const deleteImageEndPointURL = "users/deleteFile";

// Task
export const createTaskEndPointURL = "task/addTask";
export const getAllBoatWithTasksEndPointURL = "task/getAllBoatsWithTasks";
export const updateTaskEndPointURL = "task/updateTask";
export const getAllTaskDataEndPointURL = "task/getAllTask";

// Lead
export const getAllLeaddataEndPointURL = "quickLeads/getAllQuickLeads";
export const AddLeaddataEndPointURL = "quickLeads/addQuickLeads";
export const UpdateLeaddataEndPointURL = "quickLeads/updateQuickLeads";
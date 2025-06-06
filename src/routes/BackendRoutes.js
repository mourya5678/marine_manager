// export const BASE_URL = "http://192.168.29.19:4001/";   // Local Url
// export const BASE_URL1 = "http://localhost:4001/";      // Local 

export const BASE_URL1 = "https://3.26.177.93:4000/";         // Dev
export const BASE_URL = "https://3.26.177.93:4000/";       // Live Url

// auth user
export const signupEndPointURL = "users/signup";
export const loginEndPointURL = "users/login";

export const forgotPasswordEndPointURL = "users/forgetPassword";

// Dashboard Data
export const getDashboardDataEndPointURL = "home/getHome";
export const getTomorrowTaskEndPointURL = "home/tasksForTommorrow";

export const getStaffTaskEndPointURL = "home/staffMembers";

// Bussiness profile
export const bussinessProfileEndPointURL = "users/myProfile";
export const updateBussinessProfileEndPointURL = "users/editProfile";

// staff 
export const addStaffEndPointURL = "staff/addStaffMember";
export const getStaffDataEndPointURL = "staff/staffMembers";

export const updateStaffEndPointURL = "staff/editStaffMember";
export const getActiveStaffDataEndPointURL = "staff/activeStaffMembers";

// supplier
export const getSupplierEndPointURL = "supplier/getAllSupplier";
export const addSupplierEndPointURL = "supplier/addsupllier";

export const updateSupplierEndPointURL = "supplier/editsupllier";

// Dock 
export const addDockDetailsEndPointURL = "dock/addDock";
export const getDockDetailsEndPointURL = "dock/getAllDock";

export const updateDockDetailsEndPointURL = "dock/updateDock";
export const getAvailableBoatsEndPointURL = "dock/availableBoats";

export const assignBoatsToDockEndPointURL = "dock/assignBoat";

// Boats
export const getAllBoatsDataEndPointURL = "boat/getAllBoat";
export const getBoatDataByRegNoEndPointURL = "boat/getBoatByRegiratationId"; // MVP1 Ventures
export const addBoatDetailsEndPointURL = "boat/addBoat";

export const updateBoatDetailsEndPointURL = "boat/updateBoat"

// Images Delete 
export const deleteImageEndPointURL = "users/deleteFile";

// Task
export const createTaskEndPointURL = "task/addTask";
export const getAllBoatWithTasksEndPointURL = "task/getAllBoatsWithTasks";

export const updateTaskEndPointURL = "task/updateTask";
export const getAllTaskDataEndPointURL = "task/getAllTask";

export const getAllCompletedBoatTasksEndPointURL = "invoice/getAllCompletedTask/";

// Lead
export const getAllLeaddataEndPointURL = "quickLeads/getAllQuickLeads";
export const AddLeaddataEndPointURL = "quickLeads/addQuickLeads";

export const UpdateLeaddataEndPointURL = "quickLeads/updateQuickLeads";
export const RecouringReminderEndPointURL = "quickLeads/getDueRecurringTasks";

export const UpdateRecouringEndPointURL = "quickLeads/updateRecurringTask";

// Notification
export const notificationEndPointURL = "notification";

// Invoice
export const generateBoatInvoiceEndPointURL = "invoice/generateInvoice";
export const getGeneratedInvoiceEndPointURL = "invoice/getInvoiceById/";

export const getBoatListOfInvoiceEndPointURL = "invoice/getAllBoatsWithCompletedTasks";
export const sendInvoicePdfToBoatOwnerEndPointURL = "invoice/sendPdfToBoatOwner";

// MVP1 Ventures
export const saveInvoicePdfEndPointURL = "invoice/saveInvoicePdf";
export const saveJobsheetPdfEndPointURL = "invoice/saveJobsheetPdf";

export const getAllInvoiceDataEndPointURL = "invoice/getAllInvoices"


// Subscriptions
export const getAllSubscriptionPlansEndPoitnURL = "subscription/allPlans";
export const getMySubscriptionPlansEndPoitnURL = "subscription/getMySubscriptionOrTrail";

export const cancelSubscriptionPlansEndPointURL = "subscription/cancelSubscription";
export const getSubscriptionHistoryEndPointURL = "subscription/getMySubscriptionHistory";

export const purchaseNewSubscriptionPlanEndPointURL = "subscription/buyNewPlan";
export const upgradeSubscriptionPlanEndPointURL = "subscription/upgradeSubscription";

// Xero Connect
export const getXerologinDataENDPOINTURL = "xero/connect";
export const pushInvoiceToXeroENDPOINTURL = "invoice/pushInvoiceToXero";
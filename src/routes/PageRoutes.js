import AddNewDocks from "../pages/AddNewDocks";
import AllBoats from "../pages/AllBoats";
import AllSupplier from "../pages/AllSupplier";
import BoatDetails from "../pages/BoatDetails";
import BoatDocks from "../pages/BoatDocks";
import BoatInQue from "../pages/BoatInQue";
import BoatTracker from "../pages/BoatTracker";
import BusinessProfile from "../pages/BusinessProfile";
import CreateBoat from "../pages/CreateBoat";
import CreateStaff from "../pages/CreateStaff";
import Dashboard from "../pages/Dashboard";
import DockDetails from "../pages/DockDetails";
import GenerateInvoice from "../pages/GenerateInvoice";
import Invoice from "../pages/Invoice";
import JobService from "../pages/JobService";
import LeadReceived from "../pages/LeadReceived";
import MaintainedBoats from "../pages/MaintainedBoats";
import MentenanceTask from "../pages/MentenanceTask";
import ReviewSchedule from "../pages/ReviewSchedule";
import ScheduledMaintenance from "../pages/ScheduledMaintenance ";
import StaffProductivity from "../pages/StaffProductivity";
import TaskDescription from "../pages/TaskDescription";
import TaskReview from "../pages/TaskReview";
import TodayInvoice from "../pages/TodayInvoice";
import TodayService from "../pages/TodayService";
import UpdateBoatDetails from "../pages/UpdateBoatDetails";
import UpdateBusinessProfile from "../pages/UpdateBusinessProfile";
import UpdateDocsks from "../pages/UpdateDocsks";

export const pageRoutes = {
    dashboard: '/',
    page_not_found: '*',
    login: '/login',
    signup: '/signup',
    forgot_password: '/forgot-password',
    boat_docks: '/docks',
    update_docks: '/update-docks',
    add_new_docks: '/add-new-docks',
    quick_lead: '/quick-lead',
    crate_boat: '/create-boat',
    maintenance: '/maintenance-task',
    generate_invoice: '/generate-invoice',
    maintained_boats: '/maintained-boats',
    all_boats: '/all-boats',
    boat_detail: '/boat-detail',
    all_supplier: '/all-supplier',
    create_staff: '/create-staff',
    review_schedule: '/review-schedule',
    business_profile: '/business-profile',
    update_business_profile: '/update-business-profile',
    job_service: '/job-service',
    // mentenance_task: '/maintenance-task',
    boat_tracer: '/boat-tracker',
    task_description: '/task-description',
    scheduled_boat: '/scheduled-boat',
    today_service: '/today-service',
    staff_productivity: '/staff-productivity',
    task_review: '/task-review',
    invoice: '/invoice',
    today_invoice: '/todays-invoice',
    dock_details: '/dock-details',
    update_boat: '/update-boat'
};

export const AllRoutes = [
    {
        name: 'Dashboard',
        path: pageRoutes.dashboard,
        element: <Dashboard />,
        isPrivate: true
    },
    {
        name: 'Scheduled Boat',
        path: pageRoutes.scheduled_boat,
        element: <BoatInQue />,
        isPrivate: true
    },
    {
        name: 'Today Service',
        path: pageRoutes.today_service,
        element: <TodayService />,
        isPrivate: true
    },
    {
        name: 'Task Review',
        path: pageRoutes.task_review,
        element: <TaskReview />,
        isPrivate: true
    },
    {
        name: 'Dock Details',
        path: pageRoutes.dock_details,
        element: <DockDetails />,
        isPrivate: true
    },
    {
        name: 'Todays Invoice',
        path: pageRoutes.today_invoice,
        element: <TodayInvoice />,
        isPrivate: true
    },
    {
        name: 'Invoice',
        path: pageRoutes.invoice,
        element: <Invoice />,
        isPrivate: true
    },
    {
        name: 'Staff Productivity',
        path: pageRoutes.staff_productivity,
        element: <StaffProductivity />,
        isPrivate: true
    },
    {
        name: 'BoatDocks',
        path: pageRoutes.boat_docks,
        element: <BoatDocks />,
        isPrivate: true
    },
    {
        name: 'UpdateDocks',
        path: pageRoutes.update_docks,
        element: <UpdateDocsks />,
        isPrivate: true
    },
    {
        name: 'AddNewDocks',
        path: pageRoutes.add_new_docks,
        element: <AddNewDocks />,
        isPrivate: true
    },
    {
        name: 'LeadReceived',
        path: pageRoutes.quick_lead,
        element: <LeadReceived />,
        isPrivate: true
    },
    {
        name: 'CreateBoat',
        path: pageRoutes.crate_boat,
        element: <CreateBoat />,
        isPrivate: true
    },
    {
        name: 'ScheduledMaintenance',
        path: pageRoutes.maintenance,
        element: <ScheduledMaintenance />,
        isPrivate: true
    },
    {
        name: 'GenerateInvoice',
        path: pageRoutes.generate_invoice,
        element: <GenerateInvoice />,
        isPrivate: true
    },
    {
        name: 'MaintainedBoats',
        path: pageRoutes.maintained_boats,
        element: <MaintainedBoats />,
        isPrivate: true
    },
    {
        name: 'ListOfBoats',
        path: pageRoutes.all_boats,
        element: <AllBoats />,
        isPrivate: true
    },
    {
        name: 'BoatDetails',
        path: pageRoutes.boat_detail,
        element: <BoatDetails />,
        isPrivate: true
    },
    {
        name: 'UpdateBoatDetails',
        path: pageRoutes.update_boat,
        element: <UpdateBoatDetails />,
        isPrivate: true
    },
    {
        name: 'AllSupplier',
        path: pageRoutes.all_supplier,
        element: <AllSupplier />,
        isPrivate: true
    },
    {
        name: 'CreateStaff',
        path: pageRoutes.create_staff,
        element: <CreateStaff />,
        isPrivate: true
    },
    {
        name: 'ReviewSchedule',
        path: pageRoutes.review_schedule,
        element: <ReviewSchedule />,
        isPrivate: true
    },
    {
        name: 'BusinessProfile',
        path: pageRoutes.business_profile,
        element: <BusinessProfile />,
        isPrivate: true
    },
    {
        name: 'UpdateBusinessProfile',
        path: pageRoutes.update_business_profile,
        element: <UpdateBusinessProfile />,
        isPrivate: true
    },
    {
        name: 'CdsJobService',
        path: pageRoutes.job_service,
        element: <JobService />,
        isPrivate: true
    },
    {
        name: 'MentenanceTask',
        path: pageRoutes.mentenance_task,
        element: <MentenanceTask />,
        isPrivate: true
    },
    {
        name: 'BoatTracker',
        path: pageRoutes.boat_tracer,
        element: <BoatTracker />,
        isPrivate: true
    },
    {
        name: 'TaskDescription',
        path: pageRoutes.task_description,
        element: <TaskDescription />,
        isPrivate: true
    }
]
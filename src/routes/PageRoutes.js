import AddNewDocks from "../pages/AddNewDocks";
import AllBoats from "../pages/AllBoats";
import AllSupplier from "../pages/AllSupplier";
import BoatDetails from "../pages/BoatDetails";
import BoatDocks from "../pages/BoatDocks";
import CreateBoat from "../pages/CreateBoat";
import CreateStaff from "../pages/CreateStaff";
import Dashboard from "../pages/Dashboard";
import GenerateInvoice from "../pages/GenerateInvoice";
import LeadReceived from "../pages/LeadReceived";
import MaintainedBoats from "../pages/MaintainedBoats";
import ReviewSchedule from "../pages/ReviewSchedule";
import ScheduledMaintenance from "../pages/ScheduledMaintenance ";
import UpdateDocsks from "../pages/UpdateDocsks";

export const pageRoutes = {
    dashboard: '/',
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
};

export const AllRoutes = [
    {
        name: 'Dashboard',
        path: pageRoutes.dashboard,
        element: <Dashboard />,
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
]
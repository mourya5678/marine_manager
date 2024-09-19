import Dashboard from "../pages/Dashboard";

export const pageRoutes = {
    dashboard: '/',
    login: '/login',
    signup: '/signup',
    forgot_password: '/forgot-password',
};

export const AllRoutes = [
    {
        name: 'Dashboard',
        path: pageRoutes.dashboard,
        element: <Dashboard />,
        isPrivate: true
    }
]
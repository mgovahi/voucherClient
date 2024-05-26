import { lazy } from 'react';

const DashboardPage = lazy(() => import('./DashboardPage'));

const DashboardPageConfigs = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: '/dashboard',
            element: <DashboardPage />,
        },
    ],
};

export default DashboardPageConfigs;

import { lazy } from 'react';


const ProfilePage = lazy(() => import('./ProfilePage'));

const ProfilePageConfigs = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: '/changeInfo',
            element: <ProfilePage />,
        },
        {
            path: '/changePass',
            element: <ProfilePage />,
        },
    ],
};

export default ProfilePageConfigs;

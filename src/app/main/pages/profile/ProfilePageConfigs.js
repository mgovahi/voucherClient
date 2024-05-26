import { lazy } from 'react';
import ProfilePassword from './components/ProfilePassword';

const ProfilePage = lazy(() => import('./ProfilePage'));

const ProfilePageConfigs = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: '/profile',
            element: <ProfilePage />,
        },
        {
            path: '/add',
            element: <ProfilePassword />,
        },
    ],
};

export default ProfilePageConfigs;

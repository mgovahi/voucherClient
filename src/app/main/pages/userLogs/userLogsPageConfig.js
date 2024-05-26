import { lazy } from "react";

const UserLogsPage = lazy(() => import("./userLogsPage"));


const UserLogsPagePageConfigs = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/userLogs",
      element: <UserLogsPage />,
    },
   
  ],
};

export default UserLogsPagePageConfigs;

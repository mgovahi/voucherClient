import { lazy } from "react";

const SystemManagementPage = lazy(() => import("./SystemManagementPage"));

const SystemManagementPageConfigs = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/systemManagement",
      element: <SystemManagementPage />,
    },
  ],
};

export default SystemManagementPageConfigs;
import { lazy } from "react";

const ReceivablesDashboardPage = lazy(() => import("./ReceivablesDashboardPage"));

const ReceivablesDashboardPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/receivablesDashboard",
      element: <ReceivablesDashboardPage />,
    },
  ],
};

export default ReceivablesDashboardPageConfig;

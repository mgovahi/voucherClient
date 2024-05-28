import { lazy } from "react";

const VouchersDashboardPage = lazy(() => import("./VoucherDashboardPage"));

const VouchersDashboardPageConfigs = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/vouchersDashboard",
      element: <VouchersDashboardPage />,
    },
  ],
};

export default VouchersDashboardPageConfigs;

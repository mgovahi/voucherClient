import { lazy } from "react";

const BalanceReportPage = lazy(() => import("./BalanceReportPage"));

const BalanceReportPageConfigs = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/balanceReport",
      element: <BalanceReportPage />,
    },
  ],
};

export default BalanceReportPageConfigs;

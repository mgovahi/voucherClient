import { lazy } from "react";

const VouchersReportPage = lazy(() => import("./VouchersReportPage"));

const VouchersReportPageConfigs = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/vouchersReport",
      element: <VouchersReportPage />,
    },
  ],
};

export default VouchersReportPageConfigs;

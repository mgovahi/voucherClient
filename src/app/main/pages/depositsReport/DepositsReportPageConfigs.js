import { lazy } from "react";


const DepositsReportPage = lazy(() => import("./DepositsReportPage"));

const DepositsReportConfigs = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/depositsReport",
      element: <DepositsReportPage/>,
    },
  ],
};

export default DepositsReportConfigs;

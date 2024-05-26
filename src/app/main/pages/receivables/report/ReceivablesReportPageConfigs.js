import { lazy } from "react";

const ReceivablesReportPage = lazy(() => import("./ReceivablesReportPage"));

const ReceivablesReportPageConfigs = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/receivablesReport",
      element: <ReceivablesReportPage />,
    },
  ],
};

export default ReceivablesReportPageConfigs;

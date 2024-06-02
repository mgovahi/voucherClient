import { lazy } from "react";


const DepositsReportPage = lazy(() => import("./DepositsReportPage"));

const AddDepositPage =  lazy(() => import("../addDeposit/AddDepositPage"));


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
    {
      path: "/AddDeposit",
      element: <AddDepositPage />,
    },
  ],
};

export default DepositsReportConfigs;

import { lazy } from "react";

const AddDepositPage = lazy(() => import("./AddDepositPage"));

const AddDepositPageConfigs = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/addDeposit",
      element: <AddDepositPage />,
    },
  ],
};

export default AddDepositPageConfigs;

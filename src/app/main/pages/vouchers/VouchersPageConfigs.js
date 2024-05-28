import { lazy } from "react";


const VouchersPage = lazy(() => import("./VouchersPage"));

const VouchersPageConfigs = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/vouchers",
      element: <VouchersPage />,
    },
  ],
};

export default VouchersPageConfigs;

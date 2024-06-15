import { lazy } from "react";


const VouchersPage = lazy(() => import("./VouchersPage"));
const VoucherGeneratePage = lazy(() => import("./../voucherGenerate/VoucherGeneratePage"));

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
    {
      path: "/voucherGenerate",
      element: <VoucherGeneratePage />,
    },
  ],
};

export default VouchersPageConfigs;

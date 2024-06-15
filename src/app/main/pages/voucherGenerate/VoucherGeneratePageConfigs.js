import { lazy } from "react";


const VoucherGeneratePage = lazy(() => import("./VoucherGeneratePage"));

const VoucherGeneratePageConfigs = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/voucherGenerate",
      element: <VoucherGeneratePage />,
    },
  ],
};

export default VoucherGeneratePageConfigs;

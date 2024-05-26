import { lazy } from "react";

const ApiConfigurationPage = lazy(() => import("./ApiConfigurationPage"));

const ApiConfigurationPageConfigs = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/apiConfiguration",
      element: <ApiConfigurationPage />,
    },
  ],
};

export default ApiConfigurationPageConfigs;

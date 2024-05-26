import FuseUtils from "@fuse/utils";
import FuseLoading from "@fuse/core/FuseLoading";
import { Navigate } from "react-router-dom";
import settingsConfig from "app/configs/settingsConfig";
import pagesConfigs from "../main/pages/pagesConfigs";

const routeConfigs = [...pagesConfigs];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(
    routeConfigs,
    settingsConfig.defaultAuth
  ),
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
    //auth: settingsConfig.defaultAuth,
  },
  {
    path: "/signin-oidc",
    element: <Navigate to="/dashboard" />,
    //auth: settingsConfig.defaultAuth,
  },
  {
    path: "loading",
    element: <FuseLoading />,
  },
  {
    path: "*",
    element: <Navigate to="pages/error/404" />,
  },
];

export default routes;

import { lazy } from "react";

const ClientManagementPage = lazy(() => import("./ClientManagementPage"));
const AddClientPage = lazy(() => import("./AddClientPage"));

const ClientManagementPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/clientManagement",
      element: <ClientManagementPage />,
    },
    {
      path: "/addClient",
      element: <AddClientPage />,
    },
  ],
};

export default ClientManagementPageConfig;

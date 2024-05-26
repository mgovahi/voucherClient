import { lazy } from "react";

const AdminManagementPage = lazy(() => import("./AdminManagementPage"));
const AddAdminPage = lazy(() => import("./AddAdminPage"));

const AdminManagementPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/adminManagement",
      element: <AdminManagementPage />,
    },
    {
      path: "/addAdmin",
      element: <AddAdminPage />,
    },
  ],
};

export default AdminManagementPageConfig;

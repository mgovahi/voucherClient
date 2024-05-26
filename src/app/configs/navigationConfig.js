import i18next from "i18next";
const navigationConfig = [
  {
    id: "home",
    title: i18next.t("DASHBOARD"),
    type: "item",
    icon: "heroicons-outline:home",
    url: "/dashboard",
  },
  {
    id: "admins",
    title: i18next.t("ADMINS_MANAGEMENT"),
    type: "item",
    icon: "mv-icons:icon-menu-admin-management",
    url: "/adminManagement",
  },
  {
    id: "clients",
    title: i18next.t("CLIENTS_MANAGEMENT"),
    type: "item",
    icon: "mv-icons:icon-menu-client-management",
    url: "/clientManagement",
  },
  {
    id: "finManagement",
    title: i18next.t("FIN_MANAGEMENT"),
    type: "collapse",
    icon: "mv-icons:icon-menu-financial",
    children: [
      {
        id: "vouchersDashboard",
        title: i18next.t("VOUCHERS_DASHBOARD"),
        type: "item",
        icon: "mv-icons:icon-menu-vouchers",
        url: "/vouchersDashboard",
      },
      {
        id: "vouchersReport",
        title: i18next.t("VOUCHERS_REPORT"),
        type: "item",
        icon: "mv-icons:icon-menu-vouchers",
        url: "/vouchersReport",
      },
      {
        id: "receivablesDashboard",
        title: i18next.t("RECEIVABLES_DASHBOARD"),
        type: "item",
        icon: "mv-icons:icon-menu-admin-income",
        url: "/receivablesDashboard",
      },
      {
        id: "receivablesReport",
        title: i18next.t("RECEIVABLES_REPORT"),
        type: "item",
        icon: "mv-icons:icon-menu-admin-income",
        url: "/receivablesReport",
      },
    ],
  },
  {
    id: "userLogs",
    title: i18next.t("USER_LOGS_MANAGEMENT"),
    type: "item",
    icon: "mv-icons:icon-menu-client-management",
    url: "/userLogs",
  },
];

export default navigationConfig;

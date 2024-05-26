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
    id: "addDeposit",
    title: i18next.t("ADD_DEPOSIT"),
    type: "item",
    icon: "mv-icons:icon-menu-admin-management",
    url: "/#",
  },
  {
    id: "depositsReport",
    title: i18next.t("DEPOSITS_REPORT"),
    type: "item",
    icon: "mv-icons:icon-menu-client-management",
    url: "/#",
  },
  {
    id: "vouchers",
    title: i18next.t("VOUCHERS"),
    type: "item",
    icon: "mv-icons:icon-menu-financial",
    url: "/#",
  },
  {
    id: "balanceReport",
    title: i18next.t("BALANCE_REPORT"),
    type: "item",
    icon: "mv-icons:icon-menu-financial",
    url: "/#",
  },
  {
    id: "apiConfiguration",
    title: i18next.t("API_CONFIGURATION"),
    type: "item",
    icon: "mv-icons:icon-menu-client-management",
    url: "/apiConfiguration",
  },
];

export default navigationConfig;

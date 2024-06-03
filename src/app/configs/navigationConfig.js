import i18next from "i18next";

const navigationConfig = [
  {
    id: "home",
    title: i18next.t("DASHBOARD"),
    translate: "DASHBOARD",
    type: "item",
    icon: "heroicons-outline:home",
    url: "/dashboard",
  },
  {
    id: "addDeposit",
    title: i18next.t("ADD_DEPOSIT"),
    translate: "ADD_DEPOSIT",
    type: "item",
    icon: "mv-icons:icon-icon-menu-transfer-add",
    url: "/addDeposit",
  },
  {
    id: "depositsReport",
    title: i18next.t("DEPOSITS_REPORT"),
    translate: "DEPOSITS_REPORT",
    type: "item",
    icon: "mv-icons:icon-icon-menu-transfer-report",
    url: "/depositsReport",
  },
  {
    id: "vouchers",
    title: i18next.t("VOUCHERS"),
    translate: "VOUCHERS",
    type: "item",
    icon: "mv-icons:icon-menu-financial",
    url: "/vouchers",
  },
  {
    id: "balanceReport",
    title: i18next.t("BALANCE_REPORT"),
    translate: "BALANCE_REPORT",
    type: "item",
    icon: "mv-icons:icon-icon-menu-balance-report",

    url: "/#",
  },
  {
    id: "apiConfiguration",
    title: i18next.t("API_CONFIGURATION"),
    translate: "API_CONFIGURATION",
    type: "item",
    icon: "mv-icons:icon-icon-menu-api-setting",
    url: "/apiConfiguration",
  },
];

export default navigationConfig;

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
    id: "voucherGenerate",
    title: i18next.t("VOUCHER_GENERATE"),
    translate: "VOUCHER_GENERATE",
    type: "item",
    icon: "mv-icons:icon-menu-new-voucher",
    url: "/voucherGenerate",
  },
  {
    id: "vouchersReport",
    title: i18next.t("VOUCHERS_REPORT"),
    translate: "VOUCHERS_REPORT",
    type: "item",
    icon: "mv-icons:icon-menu-vouchers",
    url: "/vouchers",
  },
  {
    id: "balanceReport",
    title: i18next.t("BALANCE_REPORT"),
    translate: "BALANCE_REPORT",
    type: "item",
    icon: "mv-icons:icon-icon-menu-balance-report",
    url: "/balanceReport",
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

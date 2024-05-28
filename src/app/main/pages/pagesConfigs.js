import ProfilePageConfigs from "./profile/ProfilePageConfigs";
import DashboardPageConfigs from "./dashboard/DashboardPageConfigs";
import ClientManagementPageConfig from "./clientManagement/ClientManagementPageConfig";
import AdminManagementPageConfig from "./adminManagement/AdminManagementPageConfig";
import VouchersDashboardPageConfigs from "./vouchers/dashboard/VoucherDashboardPageConfigs";
// import VouchersReportPageConfigs from "./vouchers/report/VouchersReportPageConfig";
import UserLogsPagePageConfigs from "./userLogs/userLogsPageConfig";
import ReceivablesDashboardPageConfig from "./receivables/dashboard/ReceivablesDashboardPageConfig";
import ReceivablesReportPageConfigs from "./receivables/report/ReceivablesReportPageConfigs";
import SystemManagementPageConfigs from "./systemManagement/SystemManagementPageConfigs";
import ApiConfigurationPageConfigs from "./apiConfiguration/ApiConfigurationPageConfigs";
import VouchersPageConfigs from "./vouchers/VouchersPageConfigs";

const pagesConfigs = [
  ProfilePageConfigs,
  DashboardPageConfigs,
  ClientManagementPageConfig,
  AdminManagementPageConfig,
  VouchersDashboardPageConfigs,
  // VouchersReportPageConfigs,
  UserLogsPagePageConfigs,
  ReceivablesDashboardPageConfig,
  ReceivablesReportPageConfigs,
  SystemManagementPageConfigs,

  ApiConfigurationPageConfigs,
  VouchersPageConfigs
];

export default pagesConfigs;

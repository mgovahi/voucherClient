import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { Paper, TextField, Button } from "@mui/material";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import { useAuth } from "react-oidc-context";
import LatestVouchers from "./components/LatestVouchers";
import SimpleStatBox from "app/shared-components/SimpleStatBox";
import { useState } from "react";
import VouchersState from "./components/VoucherState";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
function VoucherDashboardPage(props) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [dashStats, setDashStats] = useState([
    {
      icon: "mv-icons-mc:icon-Voucher-star-purple",
      value: "$805,450",
      title: "مبلغ حواله صادر شده امروز",
      color: theme.palette.primary,
    },
    {
      icon: "mv-icons-mc:icon-Voucher-check-pink",
      value: "$685,450",
      title: "مبلغ حواله مصرف شده امروز",
      color: theme.palette.secondary,
    },
    {
      icon: "mv-icons-mc:icon-VoucherInfo",
      value: "$805,450",
      title: "مبلغ حواله مصرف نشده امروز",
      color: theme.palette.info,
    },
    {
      icon: "mv-icons-mc:icon-VoucherYellow",
      value: "$805,450",
      title: "مبلغ حواله لغو شده امروز",
      color: theme.palette.yellow,
    },
  ]);
  const Root = styled(FusePageSimple)(({ theme }) => {});
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Root
        header={t("VOUCHERS_DASHBOARD")}
        headerActions={
          <>
            <Button variant="outlined" color="default" aria-label="refresh">
              <FuseSvgIcon>mv-icons:icon-Masked-Icon</FuseSvgIcon>
            </Button>
          </>
        }
        sx={{
          " .FusePageSimple-contentWrapper >  .FusePageSimple-header": {
            " h6": {
              color: theme.palette.text.grayV,
            },
          },
        }}
        content={
          <div className="w-full">
            <motion.div
              className="grid grid-cols-1 gap-24 w-full min-w-0"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item} className="col-span-1 ">
                <Box>
                  <VouchersState />
                </Box>
                <Box
                  className="flex gap-[24px] my-[24px]"
                  sx={{
                    " > div": {
                      flex: 1,
                    },
                  }}
                >
                  {dashStats.map((stat) => {
                    return (
                      <SimpleStatBox
                        icon={stat.icon}
                        color={stat.color}
                        statValue={stat.value}
                        statTitle={stat.title}
                      ></SimpleStatBox>
                    );
                  })}
                </Box>
                <LatestVouchers />
              </motion.div>
            </motion.div>
          </div>
        }
        variant="none"
      />
    </>
  );
}

export default VoucherDashboardPage;

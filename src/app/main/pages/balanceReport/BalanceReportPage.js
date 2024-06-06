import React, { useState } from "react";
import FusePageSimple from "@fuse/core/FusePageSimple";
import styled from "styled-components";
// import ApiInformation from "./components/ApiInformation";
// import IpLimit from "./components/IpLimit";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import BalanceReport from "./report/BalanceReport";
import AmountChart from "./report/components/AmountChart";
import TotalAmountChart from "./report/components/TotalAmountChart";
const BalanceReportPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const Root = styled(FusePageSimple)(({ theme }) => ({}));

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
        header={t("BALANCE_REPORT")}
        headerActions={
          <>
            <Button variant="outlined" color="default" aria-label="refresh">
              <FuseSvgIcon>mv-icons:icon-Masked-Icon</FuseSvgIcon>
            </Button>
          </>
        }
        content={
          <div className="w-full  ">
            <motion.div
              className="grid grid-cols-2 gap-24 w-full min-w-0"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item} className="col-span-1">
                <AmountChart />
              </motion.div>
              <motion.div variants={item} className="col-span-1 h-full">
                <TotalAmountChart />
              </motion.div>
              <motion.div variants={item} className="col-span-2">
                <BalanceReport />
              </motion.div>
            </motion.div>
          </div>
        }
        variant="none"
      />
    </>
  );
};

export default BalanceReportPage;

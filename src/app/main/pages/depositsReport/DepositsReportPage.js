import React, { useState } from "react";
import FusePageSimple from "@fuse/core/FusePageSimple";
import styled from "styled-components";
// import ApiInformation from "./components/ApiInformation";
// import IpLimit from "./components/IpLimit";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"; import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import SimpleStatBox from "app/shared-components/SimpleStatBox";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import DepositsReport from "./report/DepositsReport";


const DepositsReportPage = () => {
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

  const [dashStats, setDashStats] = useState([
    {
      icon: "mv-icons-mc:icon-icon-menu-transfer-report-3",
      value: "$678,690",
      title: "YOUR_DEPOSITS",
      color: theme.palette.info,
    },
    {
      icon: "mv-icons-mc:icon-icon-menu-transfer-report-2",
      value: "$622,690",
      title: "CONFIRMED_DEPOSITS",
      color: theme.palette.green,
    },
    {
      icon: "mv-icons-mc:icon-icon-menu-transfer-report-1",
      value: "$56,000",
      title: "WAITING_CONFIRM_DEPOSITS",
      color: theme.palette.yellow,
    },
  ]);


  return (

    <>
      <Root
        header={t("DEPOSITS_REPORT")}
        headerActions={
          <>
            <Button variant="outlined" color="default" aria-label="refresh"

            >
              <FuseSvgIcon>mv-icons:icon-Masked-Icon</FuseSvgIcon>
            </Button>
          </>
        }
        content={
          <div className="w-full  ">
            <motion.div
              className="grid grid-cols-1 gap-24 w-full min-w-0"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item} className="col-span-1 ">

                <Box
                  className="grid grid-cols-1 sm:grid-cols-3   w-full min-w-0 mb-[24px]"
                  sx={{
                       columnGap: { xs: 2, sm: 2.5, md: 2, lg: 3, xl: 4 },
                    rowGap: { xs: 2, sm: 2.5, md: 2, lg: 3, xl: 4 },
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



              </motion.div>
            </motion.div>
            <DepositsReport />
          </div>
        }
        variant="none"
      />
    </>
  );
};

export default DepositsReportPage;

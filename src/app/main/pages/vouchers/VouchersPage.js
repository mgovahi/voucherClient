import React, { useState } from "react";
import FusePageSimple from "@fuse/core/FusePageSimple";
import styled from "styled-components";
// import ApiInformation from "./components/ApiInformation";
// import IpLimit from "./components/IpLimit";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import SimpleStatBox from "app/shared-components/SimpleStatBox";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import VouchersReport from "./report/VouchersReport";

const  VouchersPage= () => {
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
        icon: "mv-icons-mc:icon-Voucher-star-purple",
        value: "$809,450",
      title: " مبلغ حواله‌ صادر شده شما ",
      color: theme.palette.primary,
    },
    {
        icon: "mv-icons-mc:icon-Voucher-check-pink",
        value: "$686,304",
        title: " مبلغ حواله مصرف شده شما",
        color: theme.palette.secondary,
      },
    {
        icon: "mv-icons-mc:icon-VoucherInfo",
        value: "$123,146",
      title: "مبلغ حواله مصرف نشده شما",
      color: theme.palette.info,
    },
    {
        icon: "mv-icons-mc:icon-VoucherYellow",
        value: "$104",
      title: "مبلغ حواله لغو شده",
      color: theme.palette.yellow,
    },
  ]);


  return (

    <>
    <Root
        header={t("VOUCHERS_REPORT")}
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
{/*                
                <Box
                  
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 sm:gap-16 xs:gap-x-36 md:gap-16 lg:gap-24 xl:gap-24 w-full min-w-0 mb-[24px] "
                  sx={{
                    " > div": {
                      flex: 1,
                    // columnGap:{ xs: '90px' }
                     
                    },
                  }}
                > */}


<Box
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full min-w-0 mb-[24px]"
                  sx={{
                    // columnGap: {
                    //   lg: '24px',
                    //   md: '16px',
                    //   sm: '10px',
                    //   xs: '10px',
                    // },
                    // rowGap: {
                    //   lg: '24px',
                    //   md: '16px',
                    //   sm: '10px',
                    //   xs: '10px',
                    // },

                    columnGap: { xs: 2, sm: 2.5, md: 2, lg: 3, xl:4},
                    rowGap: { xs: 2, sm: 2.5, md: 2, lg:3, xl:4},

                    "> div": {
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
                <VouchersReport/>
          </div>
        }
        variant="none"
      />
    </>
  );
};

export default VouchersPage;



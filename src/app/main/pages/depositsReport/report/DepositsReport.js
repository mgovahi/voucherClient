import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Box, border, fontSize } from "@mui/system";
import { Paper, TextField, Button } from "@mui/material";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useAuth } from "react-oidc-context";
import SearchForm from "./components/SearchForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";

import sx from "@mui/system/sx";
import DepositsList from "./components/DepositsList";
function DepositsReport(props) {
  const { t } = useTranslation();
  const naviage = useNavigate();
  const theme = useTheme();
  const [deposits, setDeposits] = useState({
    list: sampleData,
    totalInfo: { PageSize: 10, TotalRecords: 50, PageNumber: 1 },
  });
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
  const onPageSizeChange = (pageSize) => {
    //setReportData({ ...reportData, pageSize: pageSize });
  };
  
  return (
    <>
      <Paper className="w-full rounded"

      >
        <FusePageSimpleHeader

          header={<Typography sx={{ fontSize: { xs: "14px", md: "inherit" }, fontWeight: "bold" ,}}>
            {t("DEPOSITS_REPORT")}
          </Typography>}
          // inner
          headerActions={
            <>

              <Button
                sx={{
                  fontSize: { xs: "12px", md: "inherit" }
                }}
                className="py-10 px-20 min-h-full  rounded-[5px] flex "
                variant="contained"
                color="secondary"
                onClick={() => {
                  naviage("/AddDeposit");
                }}
                endIcon={
                  <FuseSvgIcon sx={{
                    stroke: "transparent !important",
                  }} >
                    mv-icons-mc:icon-icon-menu-transfer-add
                  </FuseSvgIcon>
                }
              >
                {t("NEW_DEPOSIT")}

              </Button>
            </>
          }
        ></FusePageSimpleHeader>


        <motion.div
          className="grid grid-cols-1  gap-24 w-full min-w-0 "
          variants={container}
          initial="hidden"
          animate="show"
        >

          <motion.div variants={item} className="col-span-1">
            <Box>
              <SearchForm />
            </Box>
            <Box>
              <DepositsList
                data={deposits.list}
                total={deposits.totalInfo}
                onPageSizeChange={onPageSizeChange}
              />
            </Box>
          </motion.div>
        </motion.div>


      </Paper>
    </>
  );
}

const sampleData = [
  {
    code: "1*34-*234-*234-*2*4*34*1",
    deposit: "۱۴۷,۱۸۶,۰۰",
    credit: "2,405",
    currency: "USD",
    transactionId: "VP12350xp12301",
    depositDate: new Date().getTime(),
    attachmentType: "فیش بانکی",
    latestActionDate: new Date().getTime(),
    status: "ACCEPTED",
  },
  {
    code: "1*34-*234-*234-*2*4*34*2",
    deposit: "۱۵,۲۸۷,۵۰۰",
    credit: "",
    currency: "USD",
    transactionId: "VP12350xp12893",
    depositDate: new Date().getTime(),
    attachmentType: "رسید بانکی",
    latestActionDate: new Date().getTime(),
    status: "WAITING",
  },
  {
    code: "1*34-*234-*234-*2*4*34*3",
    deposit: "۱۸,۵۵۵,۸۹۰",
    credit: "",
    currency: "USD",
    transactionId: "VP12350xp12890",
    depositDate: new Date().getTime(),
    attachmentType: "فیش بانکی",
    latestActionDate: new Date().getTime(),
    status: "REJECTED",
  },
  {

    code: "1*34-*234-*234-*2*4*34*4",
    deposit: "۱۴۷,۱۸۶,۰۰",
    credit: "2,237",
    currency: "USD",
    transactionId: "VP12350xp12891",
    depositDate: new Date().getTime(),
    attachmentType: "فیش بانکی",
    latestActionDate: new Date().getTime(),
    status: "ACCEPTED",
  },
  {
    code: "1*34-*234-*234-*2*4*34*5",
    deposit: "۱۵,۲۸۷,۵۰۰",
    credit: "",
    currency: "USD",
    transactionId: "VP12350xp12890",
    depositDate: new Date().getTime(),
    attachmentType: "فیش بانکی",
    latestActionDate: new Date().getTime(),
    status: "WAITING",
  },
  {
    code: "1*34-*234-*234-*2*4*34*6",
    deposit: "۱۸,۵۵۵,۸۹۰",
    credit: "",
    currency: "USD",
    transactionId: "VP12350xp12893",
    depositDate: new Date().getTime(),
    attachmentType: "رسید بانکی",
    latestActionDate: new Date().getTime(),
    status: "REJECTED",
  },
  {
    code: "1*34-*234-*234-*2*4*34*7",
    deposit: "۱۴۷,۱۸۶,۰۰",
    credit: "2,405",
    currency: "USD",
    transactionId: "VP12350xp12891",
    depositDate: new Date().getTime(),
    attachmentType: "فیش بانکی",
    latestActionDate: new Date().getTime(),
    status: "ACCEPTED",
  },
  {
    code: "1*34-*234-*234-*2*4*34*8",
    deposit: "۱۸,۵۵۵,۸۹۰",
    credit: "",
    currency: "USD",
    transactionId: "VP12350xp12890",
    depositDate: new Date().getTime(),
    attachmentType: "فیش بانکی",
    latestActionDate: new Date().getTime(),
    status: "WAITING",
  },
  {
    code: "1*34-*234-*234-*2*4*34*9",
    deposit: "۱۵,۲۸۷,۵۰۰",
    credit: "",
    currency: "USD",
    transactionId: "VP12350xp12893",
    depositDate: new Date().getTime(),
    attachmentType: "فیش بانکی",
    latestActionDate: new Date().getTime(),
    status: "REJECTED",
  },
  {
    code: "1*34-*234-*234-*2*4*34*10",
    deposit: "۱۸,۵۵۵,۸۹۰",
    credit: "2,405",
    currency: "USD",
    transactionId: "VP12350xp12891",
    depositDate: new Date().getTime(),
    attachmentType: "فیش بانکی",
    latestActionDate: new Date().getTime(),
    status: "ACCEPTED",
  },
];
export default DepositsReport;

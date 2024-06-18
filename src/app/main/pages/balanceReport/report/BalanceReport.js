import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Box, border } from "@mui/system";
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
import BalanceList from "./components/BalanceList";

function BalanceReport(props) {
  const { t } = useTranslation();
  const naviage = useNavigate();
  const theme = useTheme();
  const [vouchers, setVouchers] = useState({
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
      <Paper className="w-full rounded">
        <FusePageSimpleHeader
          header={t("BALANCE_REPORT")}
          // inner
        ></FusePageSimpleHeader>

        <motion.div
          className="grid grid-cols-1  gap-24 w-full min-w-0 "
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="col-span-1">
            <Box className="mt-[40px]">
              <SearchForm />
            </Box>
            <Box>
              <BalanceList
                data={vouchers.list}
                total={vouchers.totalInfo}
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
    balance: "145554",
    credit: "2,405",
    currency: "USD",
    transactionId: "VP12350xp12301",
    balanceDate: new Date().getTime(),
    balanceType: "wallet",
    latestActionDate: new Date().getTime(),
    status: "ACCEPTED",
    transactionDesc: "بابت کیف پول 6523",
    remaining:"3200"
  },
  {
    code: "1*34-*234-*234-*2*4*34*2",
    balance: "165466",
    credit: "",
    currency: "USD",
    transactionId: "VP12350xp12893",
    balanceDate: new Date().getTime(),
    balanceType: "voucher",
    latestActionDate: new Date().getTime(),
    status: "WAITING",
    remaining:"45215",
    transactionDesc: "صدور حواله v45265"
  },
  {
    code: "1*34-*234-*234-*2*4*34*3",
    balance: "365454",
    credit: "",
    currency: "USD",
    transactionId: "VP12350xp12890",
    balanceDate: new Date().getTime(),
    balanceType: "wallet",
    latestActionDate: new Date().getTime(),
    status: "REJECTED",
    remaining:"25215",
    transactionDesc: "بابت کیف پول 6523"
  },
  {
    code: "1*34-*234-*234-*2*4*34*4",
    balance: "54446",
    credit: "2,237",
    currency: "USD",
    transactionId: "VP12350xp12891",
    balanceDate: new Date().getTime(),
    balanceType: "wallet",
    latestActionDate: new Date().getTime(),
    status: "ACCEPTED",
    remaining:"35215",
    transactionDesc: "بابت تسویه حواله 6523"
  },
  {
    code: "1*34-*234-*234-*2*4*34*5",
    balance: "3256556",
    credit: "",
    currency: "USD",
    transactionId: "VP12350xp12890",
    balanceDate: new Date().getTime(),
    balanceType: "voucher",
    latestActionDate: new Date().getTime(),
    status: "WAITING",
    remaining:"15215",
    transactionDesc: "بابت کیف پول 6523"
  },
  {
    code: "1*34-*234-*234-*2*4*34*6",
    balance: "365215",
    credit: "",
    currency: "USD",
    transactionId: "VP12350xp12893",
    balanceDate: new Date().getTime(),
    balanceType: "voucher",
    latestActionDate: new Date().getTime(),
    status: "REJECTED",
    remaining:"25215",
    transactionDesc: "صدور حواله 326545"
  },
  {
    code: "1*34-*234-*234-*2*4*34*7",
    balance: "355645",
    credit: "2,405",
    currency: "USD",
    transactionId: "VP12350xp12891",
    balanceDate: new Date().getTime(),
    balanceType: "wallet",
    latestActionDate: new Date().getTime(),
    status: "ACCEPTED",
    remaining:"2215",
    transactionDesc: "بابت کیف پول 6523"
  },
  {
    code: "1*34-*234-*234-*2*4*34*8",
    balance: "2545448",
    credit: "",
    currency: "USD",
    transactionId: "VP12350xp12890",
    balanceDate: new Date().getTime(),
    balanceType: "wallet",
    latestActionDate: new Date().getTime(),
    status: "WAITING",
    remaining:"6215",
    transactionDesc: "بابت کیف پول 6523"
  },
  {
    code: "1*34-*234-*234-*2*4*34*9",
    balance: "232655",
    credit: "",
    currency: "USD",
    transactionId: "VP12350xp12893",
    balanceDate: new Date().getTime(),
    balanceType: "wallet",
    latestActionDate: new Date().getTime(),
    status: "REJECTED",
    remaining:"11215",
    transactionDesc: "بابت کیف پول 6523"
  },
  {
    code: "1*34-*234-*234-*2*4*34*10",
    balance: "124766",
    credit: "2,405",
    currency: "USD",
    transactionId: "VP12350xp12891",
    balanceDate: new Date().getTime(),
    balanceType: "wallet",
    latestActionDate: new Date().getTime(),
    status: "ACCEPTED",
    remaining:"20215",
    transactionDesc: "بابت کیف پول 6523"
  },
];
export default BalanceReport;

import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Box, border } from "@mui/system";
import { Paper, TextField, Button, Hidden } from "@mui/material";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useAuth } from "react-oidc-context";
import SearchForm from "./SearchForm";
import { useState } from "react";
import VouchersList from "./VouchersList";
import { useNavigate } from "react-router-dom";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";

import sx from "@mui/system/sx";
import CardList from "./CardList";
function VouchersReport(props) {
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
          header={t("VOUCHERS_REPORT")}
          // inner
          headerActions={
            <>


              <Button
                sx={{
                  fontSize: { xs: "12px", md: "inherit" }
                }}
                className="py-10 px-20 min-h-full h-[42px] rounded-[5px] flex "
                variant="contained"
                color="secondary"
                onClick={() => {
                  naviage("/voucherGenerate");
                }}
                endIcon={
                  <FuseSvgIcon sx={{
                    stroke: "transparent !important",
                  }} >
                    mv-icons:icon-icon-menu-vouchers
                  </FuseSvgIcon>
                }
              >
                {t("VOUCHER_GENERATE")}

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

              <Hidden mdUp>
                <CardList 
                 data={vouchers.list ? vouchers.list :[]}></CardList>
              </Hidden>
              <Hidden mdDown>
                <VouchersList
                  data={vouchers.list}
                  total={vouchers.totalInfo}
                  onPageSizeChange={onPageSizeChange}
                />
              </Hidden>



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
    client: "آرش توکلی",
    currency: "USD",
    amount: "1200000",
    wage: "",
    channel: "پنل",
    createDate: new Date().getTime(),
    transactionId: "",
    usedDate: new Date().getTime(),
    status: "ACTIVE",
  },
  {
    code: "1*34-*234-*234-*2*4*34*2",
    client: "آرش توکلی",
    currency: "USD",
    amount: "1200000",
    wage: "",
    channel: "سایت",
    createDate: new Date().getTime(),
    transactionId: "shdgs-3456dfh-346dsg-8jd80",
    usedDate: new Date().getTime(),
    status: "USED",
  },
  {
    code: "1*34-*234-*234-*2*4*34*3",
    client: "آرش توکلی",
    currency: "USD",
    amount: "1200000",
    wage: "",
    channel: "api",
    createDate: new Date().getTime(),
    transactionId: "",
    usedDate: new Date().getTime(),
    status: "CANCELED",
  },
  {
    code: "1*34-*234-*234-*2*4*34*4",
    client: "آرش توکلی",
    currency: "USD",
    amount: "1200000",
    wage: "",
    channel: "سایت",
    createDate: new Date().getTime(),
    transactionId: "shdgs-3456dfh-346dsg-8jd80",
    usedDate: new Date().getTime(),
    status: "MERGED",
  },
  {
    code: "1*34-*234-*234-*2*4*34*5",
    client: "نوید خیراللهی",
    currency: "USD",
    amount: "1200000",
    wage: "",
    channel: "api",
    createDate: new Date().getTime(),
    transactionId: "shdgs-3456dfh-346dsg-8jd80",
    usedDate: new Date().getTime(),
    status: "USED",
  },
  {
    code: "1*34-*234-*234-*2*4*34*6",
    client: "آرش توکلی",
    currency: "USD",
    amount: "1200000",
    wage: "",
    channel: "پنل",
    createDate: new Date().getTime(),
    transactionId: "shdgs-3456dfh-346dsg-8jd80",
    usedDate: new Date().getTime(),
    status: "USED",
  },
  {
    code: "1*34-*234-*234-*2*4*34*7",
    client: "نوید خیراللهی",
    currency: "USD",
    amount: "1200000",
    wage: "",
    channel: "سایت",
    createDate: new Date().getTime(),
    transactionId: "",
    usedDate: new Date().getTime(),
    status: "ACTIVE",
  },
  {
    code: "1*34-*234-*234-*2*4*34*8",
    client: "آرش توکلی",
    currency: "USD",
    amount: "1200000",
    wage: "",
    channel: "api",
    createDate: new Date().getTime(),
    transactionId: "",
    usedDate: new Date().getTime(),
    status: "ACTIVE",
  },
  {
    code: "1*34-*234-*234-*2*4*34*9",
    client: "آرش توکلی",
    currency: "USD",
    amount: "1200000",
    wage: "",
    channel: "پنل",
    createDate: new Date().getTime(),
    transactionId: "",
    usedDate: new Date().getTime(),
    status: "ACTIVE",
  },
  {
    code: "1*34-*234-*234-*2*4*34*10",
    client: "نوید خیراللهی",
    currency: "USD",
    amount: "1200000",
    wage: "",
    channel: "api",
    createDate: new Date().getTime(),
    transactionId: "",
    usedDate: new Date().getTime(),
    status: "ACTIVE",
  },
];
export default VouchersReport;

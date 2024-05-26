import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import SearchForm from "./components/SearchForm";
import { useState } from "react";
// import VouchersList from "./components/VouchersList";
import { useNavigate } from "react-router-dom";
import ReceivablesList from "./components/ReceivablesList";

function ReceivablesReportPage(props) {
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
      <Root
        header={t("REPORT")}
        content={
          <div className="w-full p-16 ">
            <motion.div
              className="grid grid-cols-1  gap-24 w-full min-w-0"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item} className="col-span-1">
                <Box>
                  <SearchForm />
                </Box>
                <Box>
                  <ReceivablesList
                    data={vouchers.list}
                    total={vouchers.totalInfo}
                    onPageSizeChange={onPageSizeChange}
                  />
                </Box>
              </motion.div>
            </motion.div>
          </div>
        }
      />
    </>
  );
}

const sampleData = [
  {
    currency: "USD",
    deposit: "15287500",
    credit: "2450.00",
    depositDate: new Date().getTime(),
    latestDate: new Date().getTime(),
    transactionId: "VP12350xp18299",
    attachmentType: "فیش بانکی",
    status: "ACCEPTED",
    client: "رادوین بزرگی",
  },
  {
    currency: "USD",
    deposit: "15287500",
    credit: "",
    depositDate: new Date().getTime(),
    latestDate: new Date().getTime(),
    transactionId: "VP12350xp18300",
    attachmentType: "فیش بانکی",
    status: "WAITING",
    client: "سیاوش",
  },
  {
    currency: "USD",
    deposit: "14718600",
    credit: "",
    depositDate: new Date().getTime(),
    latestDate: new Date().getTime(),
    transactionId: "VP12350xp12301",
    attachmentType: "فیش بانکی",
    status: "REJECTED",
    client: "نوید خیراللهی",
  },
  {
    currency: "USD",
    deposit: "14718600",
    credit: "2237.00",
    depositDate: new Date().getTime(),
    latestDate: new Date().getTime(),
    transactionId: "VP12350xp12302",
    attachmentType: "فیش بانکی",
    status: "ACCEPTED",
    client: "محمد مسعودیان",
  },
  {
    currency: "USD",
    deposit: "14718600",
    credit: "",
    depositDate: new Date().getTime(),
    latestDate: new Date().getTime(),
    transactionId: "VP12350xp12303",
    attachmentType: "فیش بانکی",
    status: "ACCEPTED",
    client: "آرش توکلی",
  },
  {
    currency: "USD",
    deposit: "15287250",
    credit: "",
    depositDate: new Date().getTime(),
    latestDate: new Date().getTime(),
    transactionId: "VP12350xp12895",
    attachmentType: "سایر اقلام",
    status: "WAITING",
    client: "آرش توکلی",
  },
  {
    currency: "USD",
    deposit: "18555890",
    credit: "",
    depositDate: new Date().getTime(),
    latestDate: new Date().getTime(),
    transactionId: "VP12350xp18490",
    attachmentType: "سایر اقلام",
    status: "REJECTED",
    client: "محسن تقی زاده",
  },
  {
    currency: "USD",
    deposit: "18555890",
    credit: "",
    depositDate: new Date().getTime(),
    latestDate: new Date().getTime(),
    transactionId: "VP12350xp18491",
    attachmentType: "فیش بانکی",
    status: "REJECTED",
    client: "نوید خیراللهی",
  },
  {
    currency: "USD",
    deposit: "147186000",
    credit: "2237.00",
    depositDate: new Date().getTime(),
    latestDate: new Date().getTime(),
    transactionId: "VP12350xp18492",
    attachmentType: "فیش بانکی",
    status: "ACCEPTED",
    client: "آرش توکلی",
  },
  {
    currency: "USD",
    deposit: "147186000",
    credit: "2450.00",
    depositDate: new Date().getTime(),
    latestDate: new Date().getTime(),
    transactionId: "VP12350xp18493",
    attachmentType: "فیش بانکی",
    status: "ACCEPTED",
    client: "یارمحمدی",
  },
];

export default ReceivablesReportPage;

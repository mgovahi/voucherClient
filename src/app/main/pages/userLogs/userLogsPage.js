import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { Paper, TextField, Button } from "@mui/material";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useAuth } from "react-oidc-context";
import SearchForm from "./components/SearchForm";
import { useState } from "react";
import LogsList from "./components/LogsList";
import { useNavigate } from "react-router-dom";
function UserLogsPage(props) {
  const { t } = useTranslation();
  const naviage = useNavigate();
  const theme = useTheme();
  const [logs, setLogs] = useState({
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
        header={t("USER_LOGS_MANAGEMENT")}
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
                  <LogsList
                    data={logs.list}
                    total={logs.totalInfo}
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
    userName:"رادوین بزرگی",
    action:"ثبت دریافتنی",
    ip:"112.20.116.25",
    eventId:"VP12350xp123011",
    eventDesc: "دریافتنی ثبت شد",
    dateTime: new Date().getTime()
  },
  {
    userName:"سیاوش احمدی",
    action:"مصرف حواله",
    ip:"112.20.116.25",
    eventId:"VP12350xp123012",
    eventDesc: "حواله 1*34-*234-*234-*2*4 مصرف شد",
    dateTime: new Date().getTime()
  },
  {
    userName:"علی رستگار",
    action:"اعتبار",
    ip:"112.20.116.25",
    eventId:"VP12350xp123013",
    eventDesc: "افزایش اعتبار",
    dateTime: new Date().getTime()
  },
  {
    userName:"حسین نیازی پور",
    action:"تغییر رمز",
    ip:"112.20.116.25",
    eventId:"VP12350xp123014",
    eventDesc: "رمز تغییر یافت",
    dateTime: new Date().getTime()
  }, {
    userName:"فهیمه کریمی",
    action:"ایجاد اعتبار",
    ip:"112.20.116.25",
    eventId:"VP12350xp123015",
    eventDesc: "دریافتنی ثبت شد",
    dateTime: new Date().getTime()
  }, {
    userName:"احمد رامهر",
    action:"ایجاد راهبر",
    ip:"112.20.116.25",
    eventId:"VP12350xp123016",
    eventDesc: "راهبر آرش ایجاد شد",
    dateTime: new Date().getTime()
  }, {
    userName:"شایان مسلک زاده",
    action:"ایجاد مشتری",
    ip:"112.20.116.25",
    eventId:"VP12350xp123017",
    eventDesc: "مشتری نوید ایجاد شده",
    dateTime: new Date().getTime()
  }, {
    userName:"زهر احمدی",
    action:"ثبت دریافتنی",
    ip:"112.20.116.25",
    eventId:"VP12350xp123018",
    eventDesc: "حواله 545*444354 ایجاد شد",
    dateTime: new Date().getTime()
  }, {
    userName:"نگین دوستی",
    action:"مصرف حواله",
    ip:"112.20.116.25",
    eventId:"VP12350xp123019",
    eventDesc: "دریافتنی ثبت شد",
    dateTime: new Date().getTime()
  }, {
    userName:"نیلوفر فرخی",
    action:"ثبت دریافتنی",
    ip:"112.20.116.25",
    eventId:"VP12350xp1230110",
    eventDesc: "دریافتنی ثبت شد",
    dateTime: new Date().getTime()
  }
];
export default UserLogsPage;

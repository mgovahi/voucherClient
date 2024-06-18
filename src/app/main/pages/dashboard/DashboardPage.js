import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { Paper, TextField } from "@mui/material";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import { useAuth } from "react-oidc-context";
import SimpleWidget from "./components/SimpleWidget";
import VoucherAmounts from "./components/VoucherAmounts";
import format from "date-fns/format";
import VoucherChart from "./components/VoucherChart";
import TotalAmountChart from "../balanceReport/report/components/TotalAmountChart";
import WelcomeBlock from "./components/WelcomeBlock";
function DashboardPage(props) {
  const { t } = useTranslation();
  const theme = useTheme();

  console.log(format(new Date(), "eeee"));

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
        content={
          <div className="w-full mt-[20px]">
            <motion.div
              className="grid grid-cols-1 w-full min-w-0"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div
                variants={item}
                className="col-span-1 grid  grid-cols-2 gap-[24px]"
              >
                <Box className="col-span-2 md:col-span-1">
                  <WelcomeBlock />
                </Box>
                <Box className="col-span-2 md:col-span-1">
                  <TotalAmountChart showTotal />
                </Box>
                <Box className="col-span-2">
                  <VoucherAmounts />
                </Box>
                <Box className="col-span-2">
                  <VoucherChart />
                </Box>
              </motion.div>
            </motion.div>
          </div>
        }
        variant="none"
      />
    </>
  );
}

export default DashboardPage;

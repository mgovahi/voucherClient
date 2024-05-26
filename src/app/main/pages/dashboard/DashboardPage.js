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
import format from 'date-fns/format';
import VoucherChart from "./components/VoucherChart";

function DashboardPage(props) {
  const { t } = useTranslation();
  const theme = useTheme();

  console.log(format(new Date(), 'eeee'))

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
          <div className="w-full">
            <motion.div
              className="grid grid-cols-1 gap-24 w-full min-w-0"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item} className="col-span-1">
                {/* <h1 style={{color: theme.palette.text.primary}}>Dashboard</h1> */}
                <VoucherAmounts />
                <SimpleWidget />
                <VoucherChart />
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

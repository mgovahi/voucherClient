import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { Tab } from "@mui/material";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import CurrencyPrice from "./components/CurrencyPrice/CurrencyPrice";
import BankAccounts from "./components/BankAccounts/BankAccounts";

function SystemManagementPage(props) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [value, setValue] = useState("1");

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Root
        content={
          <div className="w-full">
            <motion.div
              className="grid grid-cols-1 gap-20 w-full min-w-0 "
              variants={container}
              initial="hidden"
              animate="show"
            >
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                      borderRadius: "8px",
                      backgroundColor: "white",
                      border: `1px solid ${theme.palette.divider}`,
                      ".Mui-selected": {
                        fontWeight: "bold",
                      }
                    }}
                  >
                    <Tab label={t("CURRENCY_PRICE_DEFINITION")} value="1" />
                    <Tab label={t("BANK_ACCOUNTS")} value="2" />
                  </TabList>
                </Box>
                <motion.div variants={item} className="col-span-1 ">
                  <TabPanel
                    className="grid grid-cols-1 gap-20"
                    value="1"
                    sx={{ padding: "0 !important" }}
                  >
                    <CurrencyPrice />
                  </TabPanel>
                  <TabPanel
                    value="2"
                    className="grid grid-cols-1 gap-20"
                    sx={{ padding: "0 !important" }}
                  >
                    <BankAccounts />
                  </TabPanel>
                </motion.div>
              </TabContext>
            </motion.div>
          </div>
        }
        variant="none"
      />
    </>
  );
}

export default SystemManagementPage;

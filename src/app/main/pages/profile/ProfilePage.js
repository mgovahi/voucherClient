import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { Paper, Tab, TextField } from "@mui/material";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import { useAuth } from "react-oidc-context";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import SecuritySettings from "./components/SecuritySettings";
import Lastlogin from "./components/LastLogin";
import ProfilePassword from "./components/ProfilePassword";
import ClientInfo from "./components/ClientInfo";


function ProfilePage(props) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [value, setValue] = useState('1');

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

          <Box className="w-full ">
            <motion.div
              className="grid grid-cols-1   w-full min-w-0 "
              variants={container}
              initial="hidden"
              animate="show"
            >
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example"
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{

                      borderRadius: "8px",
                      backgroundColor: "white",
                      border: `1px solid ${theme.palette.divider}`,
                      // "Mui-selected": { color: `$theme.palette.primary.light!important` },
                    }}

                  >
                    <Tab
                      label={t("USER_INFO")}
                      value="1"
                      sx={{
                        "&.Mui-selected": {
                          color: theme.palette.primary.tabMain + " !important", fontWeight: "bold",
                        },
                      }}
                    />
                    <Tab
                      label={t("CHANGE_PASSWORD")}
                      value="2"
                      sx={{
                        "&.Mui-selected": {
                          color: theme.palette.primary.tabMain + " !important", fontWeight: "bold",
                        },
                      }}
                    />
                  </TabList>
                </Box>
                <motion.div variants={item} className="col-span-1 ">
                  <TabPanel value="1" sx={{ padding: "0 !important" }}>
                    <ClientInfo />
                    <SecuritySettings />
                    <Lastlogin />
                  </TabPanel>
                  <TabPanel value="2" sx={{ padding: "0 !important" }}>
                    <ProfilePassword />
                  </TabPanel>
                </motion.div>
              </TabContext>
            </motion.div>
          </Box>
        }
        variant="none"
      >
      </Root>
    </>
  );
}

export default ProfilePage;

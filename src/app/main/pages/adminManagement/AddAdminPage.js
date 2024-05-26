import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { Paper, TextField, Button } from "@mui/material";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import history from "@history";
import { useState } from "react";
import AddAdminForm from "./components/AddAdminForm";
import Permissions from "../adminManagement/components/details/permissions/Permissions";

function AddAdminPage(props) {
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
  const onPageSizeChange = (pageSize) => {
    //setReportData({ ...reportData, pageSize: pageSize });
  };

  return (
    <>
      <Root
        // header={t("ADMINS_MANAGEMENT")}
        headerActions={
          <></>
        }
        variant="none"
        content={
          <>
            <Box className="flex w-full flex-col">
              <Paper
                className="gap-4 grid my-20 "
                sx={{
                  display: "flex",
                  width: "100%",

                }}
              >
                <Box>
                  <Box className=" flex justify-between  items-center "
                    sx={{
                      borderBottom: 1,
                      borderColor: "divider"
                    }}
                  >
                    <Typography
                      variant="body1"
                      className="font-bold text-[18px] my-24 px-20  flex items-center"
                      sx={{

                        height: "30px",
                      }}
                    >
                      {t("TWO_FACTOR_LOGIN")}
                    </Typography>
                    <Button
                      className="py-10 px-28 min-h-full ml-20 h-[42px] rounded-[5px] flex gap-8"
                      variant="outlined"
                      color="default"
                      onClick={() => {
                        history.back();
                      }}
                      endIcon={
                        <FuseSvgIcon className="rotate-180">
                          mv-icons:icon-ArrowForward
                        </FuseSvgIcon>
                      }
                    >
                      {t("RETURN")}
                    </Button>
                  </Box>
                </Box>
                <AddAdminForm />
              </Paper>
              <Paper>
                  <Typography
                    variant="body1"
                    className="font-bold text-[18px] my-24 px-20   flex items-center"
                    sx={{
                      height: "33px",
                     
                    }}
                  >
                    {t("MANAGE_ACCESSES")}
                  </Typography>
                
                <Permissions />
              </Paper>
            </Box>
          </>
        }
      ></Root>
    </>
  );
}

export default AddAdminPage;

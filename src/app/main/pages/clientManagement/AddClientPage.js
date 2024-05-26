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
import AddClientForm from "./components/AddClientForm";
import { useState } from "react";

function AddClientPage(props) {
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
        header={t("CREATE_CLIENT")}
        headerActions={
          <>
            <Button
              className="py-10 px-28 min-h-full h-[42px] rounded-[5px] flex gap-8"
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
          </>
        }
        content={
          <>
            <AddClientForm />
          </>
        }
      ></Root>
    </>
  );
}

export default AddClientPage;

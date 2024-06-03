import React, { useState } from "react";
import FusePageSimple from "@fuse/core/FusePageSimple";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import AddDepositForm from "./comonents/AddDepositForm";
import { Typography } from "@mui/material";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useTheme } from "@mui/styles";
import AddDepositSuccess from "./comonents/AddDepositSuccess";

const AddDepositPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [isShow, setIsShow] = useState(false);
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

  const handleShowPage = () => {
    setIsShow((prev) => !prev)
  }

  return (
    <Root
      header={t("ADD_DEPOSIT")}
      headerActions={!isShow &&
        <div className="flex gap-10 items-center">
          <FuseSvgIcon size={24}>mv-icons-mc:icon-Info</FuseSvgIcon>
          <Typography sx={{ color: theme.palette.info.main }}>
            {t("ADD_DEPOSIT_HEADER_ACTION")}
          </Typography>
        </div>
      }
      content={
        <motion.div
          className="h-full w-full"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="h-full grid items-end">
            {isShow ? <AddDepositSuccess onShowPage={handleShowPage} /> : <AddDepositForm onShowPage={handleShowPage} />}
          </motion.div>
        </motion.div>
      }
    />
  );
};

export default AddDepositPage;

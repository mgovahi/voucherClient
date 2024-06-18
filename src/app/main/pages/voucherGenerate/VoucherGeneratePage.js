import React, { useState } from "react";
import FusePageSimple from "@fuse/core/FusePageSimple";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useTheme } from "@mui/styles";
import VoucherGenerateSuccess from "./components/VoucherGenerateSuccess";
import VoucherGenerateForm from "./components/VoucherGenerateForm";

const VoucherGeneratePage = () => {
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
    setIsShow((prev) => !prev);
  };

  return (
    <Root
      header={t("VOUCHER_GENERATE")}
      headerActions={
        !isShow && (
          <div className="flex gap-10 items-center">
            <FuseSvgIcon size={24}>mv-icons-mc:icon-Info</FuseSvgIcon>
            <Typography color="info.main">
              {t("VOUCHER_GENERATE_HEADER_ACTION")}
            </Typography>
          </div>
        )
      }
      content={
        <motion.div
          className="w-full"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="grid items-end">
          {isShow ? (
              <VoucherGenerateSuccess onShowPage={handleShowPage} />
            ) : (
              <VoucherGenerateForm onShowPage={handleShowPage} />
            )}
          </motion.div>
        </motion.div>
      }
    />
  );
};

export default VoucherGeneratePage;

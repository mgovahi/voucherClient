import React from "react";
import FusePageSimple from "@fuse/core/FusePageSimple";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import AddDepositForm from "./comonents/AddDepositForm";

const AddDepositPage = () => {
  const { t } = useTranslation();
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

  return (
    <Root
      header={t("ADD_DEPOSIT")}
      content={
        <motion.div
          className="grid grid-cols-1 w-full min-w-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="col-span-1 grid gap-20">
            <AddDepositForm />
          </motion.div>
        </motion.div>
      }
    />
  );
};

export default AddDepositPage;

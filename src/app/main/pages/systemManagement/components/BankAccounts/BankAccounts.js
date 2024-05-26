import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import { useTheme } from "@mui/material/styles";
import {
  Paper,
  TextField,
  Button,
  Box,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountsList from "./AccountsList";
import { useThemeMediaQuery } from "@fuse/hooks";
import AddBankAccountsForm from "./AddBankAccountsForm";

const BankAccounts = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [showModal, setShowModal] = useState();
  const [account, setAccount] = useState({
    list: sampleData,
    totalInfo: { PageSize: 10, TotalRecords: 50, PageNumber: 1 },
  });

  const handleShowModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <Paper>
      <FusePageSimpleHeader
        header={t("BANK_ACCOUNTS")}
        headerActions={
          <>
            <Button
              className="py-10 px-28 min-h-full h-[42px] rounded-[5px] flex gap-8"
              variant="contained"
              color="primary"
              onClick={handleShowModal}
              endIcon={
                <FuseSvgIcon className="rotate-180">
                  mv-icons:icon-Add
                </FuseSvgIcon>
              }
            >
              {t("ADD_BANK_ACCOUNT")}
            </Button>
          </>
        }
      ></FusePageSimpleHeader>
      <Box>
        <AccountsList
          data={account.list}
          total={account.totalInfo}
          // onPageSizeChange={onPageSizeChange}
        />
      </Box>
      <Dialog
        open={showModal}
        fullScreen={isMobile ? true : false}
        maxWidth="lg"
        fullWidth
        keepMounted
        onClose={handleShowModal}
      >
        <DialogTitle>
          <Box className="flex flex-row ">
            {
              <Typography
                variant="body2"
                className="text-lg my-12"
                sx={{
                  color: theme.palette.custome.info,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i className="inline-block rounded-xl ml-20 ">
                  <FuseSvgIcon
                    cursor="pointer"
                    color="gray"
                    cer
                    size={20}
                    onClick={handleShowModal}
                  >
                    {"heroicons-outline:x"}
                  </FuseSvgIcon>
                </i>
                {
                  <FusePageSimpleHeader
                    header={t("ADD_BANK_ACCOUNT")}
                  ></FusePageSimpleHeader>
                }
              </Typography>
            }
          </Box>
        </DialogTitle>
        <DialogContent className="p-[30px]">
          <AddBankAccountsForm
            onAddAccount={setAccount}
            onShowModal={handleShowModal}
          />
        </DialogContent>
      </Dialog>
    </Paper>
  );
};

const sampleData = [
  {
    id: 1,
    accountNumber: "1234567890",
    bank: "تجارت",
    status: "ACTIVE",
  },
  {
    id: 2,
    accountNumber: "123-1231234567-1",
    bank: "پاسارگاد",
    status: "ACTIVE",
  },

  {
    id: 3,
    accountNumber: "200-1231-1234567-1",
    bank: "ایران زمین",
    status: "ACTIVE",
  },
];

export default BankAccounts;

import React from "react";
import {
  Paper,
  useTheme,
  Box,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import { onKeyNumber } from "@fuse/utils/validations";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";

const CurrencyPriceDefinition = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const isFetching = false;

  const onApproveClick = () => {
    // const isValidNationalCode = isValidIranianNationalCode(inputNationalCode);
    // setIsValid(!isValidNationalCode);

    // if (isValidNationalCode && onApproveContinue) {
    //   if (!isFetching) {
    //     callCustomerInquery(inputNationalCode)
    //       .unwrap()
    //       .then((res) => {
    //         if (res && res.result) {
    //           if (res.result.creditBalance === 0) {
    //             setIsNationalCodeValid(true);
    //             return;
    //           }
    //           onApproveContinue({
    //             customer: { ...res.result, nationalCode: inputNationalCode },
    //           });
    //         }
    //       })
    //       .catch((err) => {
    //         if (err.status == 404) {
    //           dispatch(
    //             showMessage({
    //               message: t("CUSTOMER_INQUERY_ERROR_MESSAGE_404"),
    //               variant: "error",
    //             })
    //           );
    //         } else {
    //           dispatch(
    //             showMessage({
    //               message: t("CUSTOMER_INQUERY_ERROR_MESSAGE"),
    //               variant: "error",
    //             })
    //           );
    //         }
    //       });
    //   }
    // }
  };

  return (
    <Paper>
      <FusePageSimpleHeader header={t("CURRENCY_PRICE_DEFINITION")}></FusePageSimpleHeader>
      <Box className="grid gap-44 py-44 px-20">
        <TextField
          name="exchangeRate"
          label={t("EXCHANGE_RATE")}
          defaultValue={"61200".toAmount()}
          // value={inputNationalCode}
          helperText={t("EXCHANGE_RATE_HELPER")}
          inputProps={{ onKeyPress: onKeyNumber }}
          className="min-w-full sm:min-w-0 w-full sm:w-480"
          sx={{ ".MuiOutlinedInput-root": { paddingRight: 0 } }}
          // onChange={handleChangeFiled}
          InputProps={{
            endAdornment: (
              <Box
                sx={{ backgroundColor: theme.palette.custome.gray, color: theme.palette.text.primary }}
                className="flex items-center justify-center h-full w-92"
              >
                {t("TOMAN")}
              </Box>
            ),
          }}
        />
        <ButtonComponent
          className={`mr-auto ${
            isFetching && `gap-12`
          }`}
          onClick={onApproveClick}
          variant="contained"
          color="info"
          loading={isFetching}
          isLoading={isFetching}
          loadingPosition="end"
          endIcon={
            <FuseSvgIcon>
              mv-icons:icon-Check
            </FuseSvgIcon>
          }
        >
          {t("SAVE_INFO")}
        </ButtonComponent>
      </Box>
    </Paper>
    // <Box className="w-full bg-white rounded">

    // </Box>
  );
};

export default CurrencyPriceDefinition;

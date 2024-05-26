import { useTheme } from "@mui/material/styles";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import SimpleWidgetItem from "./SimpleWidgetItem";
import { Grid } from "@mui/material";

function SimpleWidget({ data }) {
  const theme = useTheme();

  const finalizedPurchaseProps = {
    color: theme.palette.primary,
    amount: 13024,
    description: "VOUCHER_ISSUED_LAST_WEEK",
    svgIcon: "mv-icons-mc:icon-Voucher-star-purple",
  };
  const unfinalizedPurchaseProps = {
    color: theme.palette.primary,
    amount: "$237,446,908",
    description: "VOUCHER_ISSUED_LAST_WEEK_AMOUNT",
    svgIcon: "mv-icons-mc:icon-Voucher-star-purple",
  };
  const totalPurchaseProps = {
    color: theme.palette.accent,
    amount: 9773,
    description: "VOUCHER_CONSUMED_LAST_WEEK",
    svgIcon: "mv-icons-mc:icon-Voucher-check-pink",
  };
  const untotalPurchaseProps = {
    color: theme.palette.accent,
    amount: "$158,695,030",
    description: "VOUCHER_CONSUMED_LAST_WEEK_AMOUNT",
    svgIcon: "mv-icons-mc:icon-Voucher-check-pink",
  };

  return (
    <>
      <Grid container spacing={3} className="mt-0 mb-[24px]" justifyContent="space-between" alignItems="center">
        <SimpleWidgetItem {...finalizedPurchaseProps} />
        <SimpleWidgetItem {...unfinalizedPurchaseProps} />
        <SimpleWidgetItem {...totalPurchaseProps} />
        <SimpleWidgetItem {...untotalPurchaseProps} />
      </Grid>
    </>
  );
}
export default memo(SimpleWidget);

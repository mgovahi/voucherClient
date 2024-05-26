import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Button,
  Box,
  Typography,
  Divider,
  LinearProgress,
  Grid,
  Paper,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";

function ReceivableState() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [mode, setMode] = useState("daily");
  const [stats, setStats] = useState([
    {
      value: 691,
      title: "تعداد واریزی در انتظار تایید مشتری",
      color: "yellow",
      percent: 30,
    },
    {
      value: 3918,
      title: "تعداد واریزی تایید شده مشتری ",
      color: "green",
      percent: 70,
    },
    {
      value: 4609,
      title: "تعداد واریزی مشتری",
      color: "info",
      percent: 99,
    },
  ]);

  return (
    <>
      <Paper>
        <FusePageSimpleHeader
          className={"noBorder"}
          header={t("RECEIVABLE_STATUS")}
          headerActions={
            <>
              <Box className="flex gap-x-[60px]">
                <Button
                  variant={mode == "daily" ? "text" : "contained"}
                  color={mode == "daily" ? "default" : "info"}
                  size="small"
                  onClick={() => {
                    setMode("weekly");
                  }}
                >
                  {t("WEEKLY")}
                </Button>
                <Button
                  variant={mode == "weekly" ? "text" : "contained"}
                  color={mode == "weekly" ? "default" : "info"}
                  size="small"
                  onClick={() => {
                    setMode("daily");
                  }}
                >
                  {t("DAILY")}
                </Button>
              </Box>
            </>
          }
        ></FusePageSimpleHeader>
        <Box className="p-[20px]">
          <Grid container>
            <Grid item sm={4}>
              <Typography
                className="font-bold mb-8"
                variant="h6"
                color="primary"
              >
                {mode == "weekly" ? "48,060,788,400" : "7,250,056,001"}
              </Typography>
              <Typography variant="caption" color={theme.palette.text.grayV}>
                {t("DEPOSIT_CUSTOMER_TOMAN")}
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Typography
                className="font-bold mb-8"
                variant="h6"
                color="primary"
              >
                {mode == "weekly" ? "51,323,115,709" : "7,051,789,430"}
              </Typography>
              <Typography variant="caption" color={theme.palette.text.grayV}>
                {t("TOTAL_PAYABLES_TOMAN")}
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Typography
                className="font-bold mb-8"
                variant="h6"
                color="primary"
              >
                {mode == "weekly" ? "$785,307" : "$95,056"}
              </Typography>
              <Typography variant="caption" color={theme.palette.text.grayV}>
                {t("CREDIT_CUSTOMER")}
              </Typography>
            </Grid>
          </Grid>
          <Divider className="mt-[24px]" />
        </Box>
        <Box className="w-full flex overflow-hidden gap-x-[100px]   pb-[40px] px-[20px]">
          {stats.map((stat) => {
            return (
              <Box className="flex-[0.33] text-left  overflow-hidden   max-w-[33%]">
                <Typography variant="h5" className="font-bold">
                  {stat.value.toAmount()}
                </Typography>
                <LinearProgress
                  sx={{
                    transform: "rotate(180deg)",
                    maxWidth: "100%",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  className="mb-8"
                  color={stat.color}
                  value={stat.percent}
                  variant={"determinate"}
                ></LinearProgress>
                <Typography
                  variant="caption"
                  className="font-bold"
                  color={theme.palette.text.grayV}
                >
                  {stat.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Paper>
    </>
  );
}

export default ReceivableState;

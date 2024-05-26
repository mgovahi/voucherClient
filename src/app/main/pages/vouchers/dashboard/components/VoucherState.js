import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Button,
  Box,
  Typography,
  Chip,
  Divider,
  LinearProgress,
  Paper,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import LoadingButton from "@mui/lab/LoadingButton";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";

function VouchersState() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [mode, setMode] = useState("daily");
  const [stats, setStats] = useState([
    {
      value: 230,
      title: "تعداد حواله های لغو شده",
      color: "yellow",
      percent: 30,
    },
    {
      value: "9,733",
      title: "تعداد حواله های مصرف شده",
      color: "secondary",
      percent: 70,
    },
    {
      value: "13,024",
      title: "تعداد حواله های صادر شده",
      color: "primary",
      percent: 99,
    },
  ]);

  return (
    <>
      <Paper>
        <FusePageSimpleHeader
          className={"noBorder"}
          header={t("VOUCHERS_STATE")}
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
          <Typography className="font-bold mb-8" variant="h6" color="primary">
            {mode == "daily" ? "$809,450" : "$4,025,650"}
          </Typography>
          <Typography variant="caption">
            {t("ISSUED_VOUCHERS_AMOUNT")}
          </Typography>
          <Divider className="mt-[24px]" />
        </Box>
        <Box className="w-full flex overflow-hidden gap-x-[100px]   pb-[40px] px-[20px]">
          {stats.map((stat) => {
            return (
              <Box className="flex-[0.33] text-left  overflow-hidden   max-w-[33%]">
                <Typography variant="h5" className="font-bold">
                  {stat.value}
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
                <Typography variant="caption" className="">
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

export default VouchersState;

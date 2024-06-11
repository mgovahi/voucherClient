import IconButton from "@mui/material/Button";
import clsx from "clsx";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { selectCurrentLanguageDirection } from "app/store/i18nSlice";
import { useSelector } from "react-redux";
function DollarLivePrice() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isPositive = false;
  const langDirection = useSelector(selectCurrentLanguageDirection);

  return (
    <>
      <Box className={"flex gap-x-[8px] justify-center items-center"}>
        <Typography color="text.grayDay" className="font-bold">
          <FuseSvgIcon size={24} sx={{ opacity: "0.8", mr: "4px" }}>
            mv-icons:icon-LocalAtm
          </FuseSvgIcon>
          {t("VOUCHER_DOLLAR")}:
        </Typography>
        <Typography
          color={isPositive ? "custome.green" : "error.main"}
          className="font-bold"
        >
          64,300 {t("TOMAN")}
        </Typography>
        <Typography
          variant="caption"
          className="rounded py-3 px-8 font-bold"
          color={isPositive ? "custome.green" : "error.main"}
          sx={{
            opacity: 0.88,
            lineHeight: "16px",
            backgroundColor: isPositive
              ? "rgba(76, 175, 80, 0.22)"
              : "rgba(255, 76, 81, 0.22)",
            direction: langDirection === "rtl" ? "rtl" : "ltr",
          }}
        >
          {isPositive ? "+" : "-"}2.5%
        </Typography>
      </Box>
    </>
  );
}

export default DollarLivePrice;

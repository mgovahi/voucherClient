import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, width } from "@mui/system";
import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  useMediaQuery,
  Tabs,
  Tab,
  TextField,
  Typography,
  Chip,
  Switch,
  InputLabel,
  FormControlLabel,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { InfoRounded } from "@mui/icons-material";
import moment from "jalali-moment";

function DepositsInfo({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [status, setStatus] = useState(info.status || "INACTIVE");
  const handleChange = (event, newValue) => {
    setActive(newValue);
  };
  const statusMap = {
    ACCEPTED: "تایید شده",
    WAITING: "در انتظار تایید",
    REJECTED: "رد شده",
  };

  const statusMapColor = {
    ACCEPTED: "successLight",
    REJECTED: "errorLight",
    WAITING: "warningLight",
  };
  const statusMapDescription = {
    ACCEPTED: " موفق بوده است. با تشکر",
    REJECTED: "لطفا تا پایان امروز تایید نمایید. با تشکر",
    WAITING: "مجدد اقدام فرماید. با تشکر",
  };


console.log(statusMapDescription[info.status],)

  const onStatusChange = (e) => {
    setStatus(e.target.checked ? "ACTIVE" : "INACTIVE");
  };
  const handleSaveClick = () => {};
  return (
    <Box
      className="p-[16px] rounded grid grid-cols-2 gap-x-[40px] gap-y-[20px]"
      sx={{ border: `1px solid ${theme.palette.divider}` }}
    >
      <Typography className="col-span-2 justify-self-end" variant="caption">
        <label>{t("VOUCHER_STATUS")}:</label>
        <Chip
          className="mr-8"
          size="small"
          color={statusMapColor[info.status]}
          label={statusMap[info.status]}
          // description={statusMapDescription[info.status]}

        />
      </Typography>
      <TextField
        sx={{ flex: 1 }}
        value={info.transactionId || " "}
        label={t("TRANSACTION_ID")}
        disabled
      />
         <TextField
          sx={{ flex: 1 }}
          value={info.deposit || " "}
          label={t("DEPOSIT_TOMAN")}
          disabled
        />
      <TextField
          sx={{ flex: 1 }}
          value={"61.200" || ""}
          label={t("EXCHANGE_RATE_REMITTANCE_RECEIVANLES_TOMAN")}
          disabled
        />
       <TextField
          sx={{ flex: 1 }}
          value={info.currency || " 123"}
          label={t("CURRENCY")}
          disabled
        />
      <TextField
        sx={{ flex: 1 }}
        value={info.attachmentType || ""}
        label={t("ATTACHMENT_TYPE")}
        disabled
      />
      <TextField
        sx={{
          flex: 1,
          direction: "rtl",
          ".MuiOutlinedInput-input": { textAlign: "left" },
        }}
        value={
          moment(info.depositDate)
            .locale("fa")
            .format("YYYY/MM/DD - hh:mm:ss") || "1403/01/25  23:10:13 "
        }
        label={t("DEPOSIT_DATE")}
        disabled
      />
      <TextField
        sx={{ flex: 1 }}
        value={info.transactionId || ""}
        label={t("TRANSACTION_ID")}
        disabled
      />
      <TextField
        sx={{
          flex: 1,
          direction: "rtl",
          ".MuiOutlinedInput-input": { textAlign: "left" },
        }}
        value={
          moment(info.usedDate).locale("fa").format("YYYY/MM/DD - hh:mm:ss") ||
          "1403/01/25  23:10:13 "
        }
        label={t("USED_DATE")}
        disabled
      />
          <TextField
        sx={{ flex: 1 }}
        value={statusMapDescription[info.status] ?? ""}
        label={t("DESCRIPTION_DEPOSIT")}
        disabled
      />
      <TextField
        sx={{ flex: 1 }}
        value={info.channel || " "}
        label={t("CHANNEL")}
        disabled
      />
    </Box>
  );
}
export default DepositsInfo;

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

function VoucherInfo({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [status, setStatus] = useState(info.status || "INACTIVE");
  const handleChange = (event, newValue) => {
    setActive(newValue);
  };
  const statusMap = {
    ACTIVE: "فعال",
    CANCELED: "لغو شده",
    MERGED: "ادغام شده",
    USED: "مصرف شده",
  };
  const statusMapColor = {
    ACTIVE: "successLight",
    CANCELED: "errorLight",
    MERGED: "warningLight",
    USED: "infoLight",
  };
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
        />
      </Typography>
      <TextField
        sx={{ flex: 1 }}
        value={info.code || " "}
        label={t("VOUCHER_CODE")}
        disabled
      />
      <TextField
        sx={{ flex: 1 }}
        value={info.currency || " "}
        label={t("CURRENCY")}
        disabled
      />
      <TextField
        sx={{ flex: 1 }}
        value={info.amount || ""}
        label={t("AMOUNT")}
        disabled
      />
      <TextField
        sx={{ flex: 1 }}
        value={info.wage || " 123"}
        label={t("TRANSACTION_FEE")}
        disabled
      />
      <TextField
        sx={{ flex: 1 }}
        value={info.client || ""}
        label={t("CLIENT")}
        disabled
      />
      <TextField
        sx={{
          flex: 1,
          direction: "rtl",
          ".MuiOutlinedInput-input": { textAlign: "left" },
        }}
        value={
          moment(info.createDate)
            .locale("fa")
            .format("YYYY/MM/DD - hh:mm:ss") || "1403/01/25  23:10:13 "
        }
        label={t("CREATE_DATE")}
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
        value={info.channel || " "}
        label={t("CHANNEL")}
        disabled
      />
    </Box>
  );
}
export default VoucherInfo;

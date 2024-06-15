import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
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
  Grid
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { InfoRounded } from "@mui/icons-material";
import moment from "jalali-moment";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";

function VoucherInfo({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [status, setStatus] = useState(info.status || "INACTIVE");
  const handleChange = (event, newValue) => {
    setActive(newValue);
  };
  const statusMap = {
    ACTIVE: t("ACTIVE"),
    CANCELED: t("CANCELED"),
    MERGED: t("MERGED"),
    USED: t("USED")
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
  const loading = false;

  return (
    <>
    <Box
      className="p-[16px] rounded gap-x-[40px] gap-y-[20px]"
      sx={{ border: `1px solid ${theme.palette.divider}` }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Typography variant="caption">
            <label>{t("VOUCHER_STATUS")}:</label>
            <Chip
              sx={{marginLeft:"20px"}}
              size="small"
              color={statusMapColor[info.status]}
              label={statusMap[info.status]}
            />
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            value={info.code || " "}
            label={t("VOUCHER_CODE")}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            value={info.currency || " "}
            label={t("CURRENCY")}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            value={info.amount || ""}
            label={t("AMOUNT")}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            value={info.transactionId || "123"}
            label={t("TRANSACTION_FEE")}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            value={info.client || ""}
            label={t("CLIENT")}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            sx={{
              direction: "rtl",
              ".MuiOutlinedInput-input": { textAlign: "left" },
            }}
            value={
              moment(info.createDate)
                .locale("fa")
                .format("YYYY/MM/DD - hh:mm:ss") || "1403/01/25 23:10:13"
            }
            label={t("CREATE_DATE")}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            value={info.transactionId || ""}
            label={t("TRANSACTION_ID")}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            sx={{
              direction: "rtl",
              ".MuiOutlinedInput-input": { textAlign: "left" },
            }}
            value={
              moment(info.usedDate).locale("fa").format("YYYY/MM/DD - hh:mm:ss") ||
              "1403/01/25 23:10:13"
            }
            label={t("USED_DATE")}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            value={info.channel || " "}
            label={t("CHANNEL")}
            disabled
          />
        </Grid>

    
      </Grid>
    </Box>
      <Box className="flex justify-end gap-x-[20px] my-20 mx-20">
   
        <ButtonComponent
            sx={{
              width: { xs: "100%", sm: "fit-content" },
            }}
            onClick={onCancelClick}
            color="default"
            size="middle"
            variant="outlined"
            isLoading={loading}
            // disabled={loading}
          >
            {t("CLOSE")}
          </ButtonComponent>
    </Box>
</>


  );
}

export default VoucherInfo;


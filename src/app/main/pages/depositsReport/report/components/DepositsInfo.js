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
  DialogActions,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { InfoRounded } from "@mui/icons-material";
import moment from "jalali-moment";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";

function DepositsInfo({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [status, setStatus] = useState(info.status || "INACTIVE");
  const handleChange = (event, newValue) => {
    setActive(newValue);
  };
  const [details, setDetails] = useState({
    showModal: false,
  });
  const handleClose = () => {
    setDetails({ showModal: false });
    if (onCancelClick) {
      onCancelClick();
    }
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
  const loading = false;



  const onStatusChange = (e) => {
    setStatus(e.target.checked ? "ACTIVE" : "INACTIVE");
  };
  const handleSaveClick = () => { };
  return (
    <>
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
          sx={{
            flex: 1,
            direction: "rtl",
            ".MuiOutlinedInput-input": { textAlign: "left" },
          }}
          value={
            moment(info.latestActionDate)
              .locale("fa")
              .format("YYYY/MM/DD - hh:mm:ss") || "1403/01/25  23:10:13"
          }
          label={t("LAST_ACTION_DATE")}
          disabled
        />
      </Box>
      <Box
        className="p-[16px] rounded grid gap-y-[20px] my-32"
        sx={{ border: `1px solid ${theme.palette.divider}` }}
      >
        <Typography
          variant="body2"
          color={theme.palette.text.grayV}
          className="font-bold"
        >
          {t("ATTACHMENT")}
        </Typography>
        <Box
          className="p-[16px] rounded flex justify-between items-center"
          sx={{
            backgroundColor: theme.palette.secondary.slowLight,
          }}
        >
          <img src={`/assets/images/PDF.png`} />
          <ButtonComponent
            endIcon={<FuseSvgIcon>mv-icons:icon-FilePresent</FuseSvgIcon>}
            variant="contained"
            color="info"
            skin="light"
            size="small"
            isLoading={loading}
          >
            {t("ATTACHMENT_VIEW")}
          </ButtonComponent>
        </Box>
      </Box>
      <Box
        className="p-[16px] rounded grid grid-cols-2 gap-x-[40px] gap-y-[20px]"
        sx={{ border: `1px solid ${theme.palette.divider}` }}
      >
        <Typography
          variant="body2"
          color={theme.palette.text.grayV}
          className="font-bold col-span-2"
        >
          {t("CREDIT_ALLOCATE_TO_CUSTOMER")}
        </Typography>
        <TextField
          sx={{ flex: 1 }}
          label={t("EXCHANGE_RATE_REMITTANCE_ALLOCATE_TO_CUSTOMER_TOMAN")}
          value={"60.400"}
          disabled
        />
        <TextField
          sx={{ flex: 1 }}
          // value={info.credit?.toAmount() || ""}
          value={17 || ""}
          label={t("CREDIT_ALLOCATE_TO_CUSTOMER")}
          disabled
        />


        <TextField
          sx={{ flex: 1 }}
          label={t("DESCRIPTION")}
          defaultValue={t("DESCRIPTION_SENTENCE")}
        />
      </Box>
      <Box className="flex justify-end gap-x-[20px] my-44 mx-20">
        {/* <DialogActions>
          <Button onClick={handleClose} 
          
          // sx={{border:'1px solid #cacaca'}}
          sx={{border: `1px solid ${theme.palette.text.grayDay}`}}

          >
            {t("CLOSE")}

          </Button>
        </DialogActions> */}
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
export default DepositsInfo;

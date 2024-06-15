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
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
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
  };

  const statusMap = {
    ACCEPTED: t("CONFIRMED"),
    WAITING: t("WAITING"),
    REJECTED: t("REJECTED"),
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
        className="p-[16px] rounded gap-x-[40px] gap-y-[20px]"
        sx={{ border: `1px solid ${theme.palette.divider}` }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} display="flex" justifyContent="flex-end">
            <Typography variant="caption"  sx={{
              //  direction: "rtl",
               
            }}>
              <label>{t("DEPOSIT_STATUS")}:</label>
              <Chip
                // className="mr-8"
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
              value={info.transactionId || " "}
              label={t("TRANSACTION_ID")}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              value={info.deposit || " "}
              label={t("DEPOSIT_TOMAN")}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              value={"61.200" || ""}
              label={t("EXCHANGE_RATE_REMITTANCE_RECEIVANLES_TOMAN")}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              value={info.currency || " 123"}
              label={t("CURRENCY")}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              value={info.attachmentType || ""}
              label={t("ATTACHMENT_TYPE")}
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
                moment(info.depositDate)
                  .locale("fa")
                  .format("YYYY/MM/DD - hh:mm:ss") || "1403/01/25  23:10:13 "
              }
              label={t("DEPOSIT_DATE")}
              disabled
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              value={info.transactionId || ""}
              label={t("TRANSACTION_ID")}
              disabled
            />
          </Grid> */}
          {/* <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              sx={{
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
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              value={statusMapDescription[info.status] ?? ""}
              label={t("DESCRIPTION_DEPOSIT")}
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
                moment(info.latestActionDate)
                  .locale("fa")
                  .format("YYYY/MM/DD - hh:mm:ss") || "1403/01/25  23:10:13"
              }
              label={t("LAST_ACTION_DATE")}
              disabled
            />
          </Grid>
        </Grid>
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
          {/* <img src={`/assets/images/PDF.png`} alt="Attachment"  className="xs:w-88 md:w-144"/> */}
          <Box
            component="img"
            src={`/assets/images/PDF.png`}
            alt="Attachment"
            sx={{
              width: {
                xs: "100px",
                sm: '150px',
              },
              height: "auto",
            }}
          />


          <ButtonComponent
            endIcon={<FuseSvgIcon>mv-icons:icon-FilePresent</FuseSvgIcon>}
            variant="contained"
            color="info"
            skin="light"
            size="small"
            isLoading={loading}
            sx={{
              //  width: {
              // xs:"100px"
              // },
              fontSize: {
                xs: "10px",
                md: "12px",
              },
            }}

          >
            {t("ATTACHMENT_VIEW")}
          </ButtonComponent>
        </Box>
      </Box>
      <Box
        className="p-[16px] rounded"
        sx={{ border: `1px solid ${theme.palette.divider}` }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              color={theme.palette.text.grayV}
              className="font-bold"
            >
              {t("FINAL_BALANCE")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label={t("EXCHANGE_RATE_REMITTANCE_ALLOCATE_TO_CUSTOMER_TOMAN")}
              value={"60.400"}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              // value={info.credit?.toAmount() || ""}
              value={17 || ""}
              label={t("CREDIT_ALLOCATE_TO_CUSTOMER")}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField

              fullWidth
              label={t("DESCRIPTION")}
              defaultValue={t("DESCRIPTION_SENTENCE")}
              disabled
              sx={{
                "& .MuiOutlinedInput-input": {
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box className="flex justify-end gap-x-[20px] my-44 mx-20">
        <ButtonComponent
          sx={{
            width: { xs: "100%", sm: "fit-content" },
          }}
          onClick={onCancelClick}
          color="default"
          size="middle"
          variant="outlined"
          isLoading={loading}
        >
          {t("CLOSE")}
        </ButtonComponent>
      </Box>
    </>
  );
}
export default DepositsInfo;

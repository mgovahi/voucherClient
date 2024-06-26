import _ from "@lodash";
import { useTheme } from "@mui/material/styles";
import { Box, width } from "@mui/system";
import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useMediaQuery,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useTranslation } from "react-i18next";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm, Controller } from "react-hook-form";
import EventIcon from "@mui/icons-material/Event";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
import { getFirstDayOfMonth } from "@fuse/utils/dateUtils";

function SearchForm({ onSearchClick, loading, isAdmin }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState({
    fromDate: false,
    toDate: false,
  });
  const isTablet = useMediaQuery("(max-width:1024px)");

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  const [shopList, setShopList] = useState([]);
  const [shopName, setShopName] = useState("");

  const { control, formState, handleSubmit, reset, getValues } = useForm({
    mode: "onChange",
  });
  // const channelMap = [
  //   {
  //     value: null,
  //     label: "همه موارد",
  //   },
  //   {
  //     label: "پنل",
  //     value: "panel",
  //   },
  //   {
  //     label: "api",
  //     value: "api",
  //   },
  //   {
  //     label: "website",
  //     value: "website",
  //   },
  // ];
  const statusMap = [
    {
      value: "-1",
      label: t("ALL_ITEMS"),
    },
    {
      label: t("ACTIVE"),
      value: "ACTIVE",
    },
    {
      label: t("USED"),
      value: "USED",
    },
    {
      label: t("MERGED"),
      value: "MERGED",
    },
    {
      label: t("CANCELED"),
      value: "CANCELED",
    },
  ];

  let firstDayOfMonth = getFirstDayOfMonth(null, "fa");

  const handleSearchClick = () => {
    let values = getValues();
    if (values.Status == "ALL") {
      values.Status = null;
    }
    if (onSearchClick) {
      onSearchClick(values);
    }
  };

  const handleDatePickerClick = (datePickerName) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [datePickerName]: !prevState[datePickerName],
    }));
  };

  const handleSelectShop = (e) => {
    let value = e.target.value;
    if (value && value.length >= 1) {
      setShopList(dataShop?.result);
    }
  };
  return (
    <>
      <Box sx={{ m: "2rem 2rem" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            // alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            flexDirection: { xs: "column", sm: "row" },
            // columnGap: { xs: 2, sm: 2.5, md: 2, lg: 3, xl:4},
            "  .MuiFormControl-root": {
              flex: {
                xs: "1 1 100%",
                sm: "1 1 calc(50% - 20px)",
                md: "1 1 calc(33.333% - 20px)",
                lg: 1,
                xl: 1,
              },
              // m: { sm: "0.1rem 0.5rem", xs: "0.1rem 0.5rem", md: "0.1rem 0.5rem" },

              width: {
                xs: "100%",
              },
            },
          }}
        >
          <FormControl>
            <Controller
              name="fromAmount"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  sx={{ flex: 1 }}
                  onChange={onChange}
                  value={value}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  label={t("FROM_AMOUNT")}
                />
              )}
            />
          </FormControl>
          <FormControl>
            <Controller
              name="toAmount"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  sx={{ flex: 1 }}
                  onChange={onChange}
                  value={value}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  label={t("TO_AMOUNT")}
                />
              )}
            />
          </FormControl>
          <FormControl>
            <Controller
              name="transactionId"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  sx={{ flex: 1 }}
                  onChange={onChange}
                  value={value}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  label={t("TRANSACTION_ID")}
                />
              )}
            />
          </FormControl>
          <FormControl>
            <Controller
              name="FromDate"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <DatePicker
                  open={isOpen.fromDate}
                  onClose={() => handleDatePickerClick("fromDate")}
                  sx={{
                    flex: 1,
                    ".MuiInputBase-adornedEnd": {
                      cursor: "pointer",
                      ".MuiInputBase-inputAdornedEnd": {
                        marginRight: "0 !important",
                        cursor: "pointer",
                      },
                    },
                  }}
                  defaultValue={firstDayOfMonth}
                  value={value}
                  label={t("FROM_DATE")}
                  slotProps={{
                    popper: {
                      sx: {
                        " .Mui-selected": {
                          backgroundColor: `${theme.palette.secondary.main} !important`,
                          color: `${theme.palette.text.primary} !important`,
                        },
                      },
                    },
                    textField: {
                      InputProps: isTablet && {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <EventIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                      onClick: () => handleDatePickerClick("fromDate"),
                    },
                    actionBar: {
                      actions: isTablet ? ["accept", "cancel", "clear"] : null,
                    },
                  }}
                  onChange={onChange}
                />
              )}
            />
          </FormControl>
          <FormControl>
            <Controller
              name="ToDate"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <DatePicker
                  open={isOpen.toDate}
                  onClose={() => handleDatePickerClick("toDate")}
                  label={t("TO_DATE")}
                  sx={{
                    flex: 1,
                    ".MuiInputBase-adornedEnd": {
                      cursor: "pointer",
                      ".MuiInputBase-inputAdornedEnd": {
                        marginRight: "0 !important",
                        cursor: "pointer",
                      },
                    },
                  }}
                  defaultValue={firstDayOfMonth}
                  value={value}
                  renderInput={(params) => (
                    <TextField {...params} sx={{ flex: 1 }} />
                  )}
                  InputProps={{
                    sx: { flex: 1 },
                    autocomplete: "off",
                  }}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  name="ToDate"
                  slotProps={{
                    popper: {
                      sx: {
                        " .Mui-selected": {
                          backgroundColor: `${theme.palette.secondary.main} !important`,
                          color: `${theme.palette.text.primary} !important`,
                        },
                      },
                    },
                    textField: {
                      InputProps: isTablet && {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <EventIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                      onClick: () => handleDatePickerClick("toDate"),
                    },
                    actionBar: {
                      actions: isTablet ? ["accept", "cancel", "clear"] : null,
                    },
                  }}
                  onChange={onChange}
                />
              )}
            />
          </FormControl>
          <FormControl>
            <InputLabel>{t("STATUS")}</InputLabel>
            <Controller
              name="Status"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <Select
                  label={t("STATUS")}
                  id="demo-simple-select-outlined"
                  labelId="demo-simple-select-outlined-label"
                  name="status"
                  onChange={onChange}
                  defaultValue={-1}
                  value={value}
                  sx={{ flex: 1, width: { xs: "100%", sm: "auto" } }}
                >
                  {statusMap.map((s, i) => (
                    <MenuItem key={`status_${i}`} value={s.value}>
                      {t(s.label)}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
          <ButtonComponent
            sx={{
              height: "54px",
              width: { xs: "100%", sm: "180px" },
            }}
            onClick={handleSearchClick}
            color="primary"
            size="large"
            variant="contained"
            isLoading={loading}
            // disabled={loading}
            endIcon={
              loading ? (
                <CircularProgress size={16} sx={{ color: "#fff" }} />
              ) : (
                <FuseSvgIcon color={theme.palette.common.white} size={20}>
                  heroicons-solid:search
                </FuseSvgIcon>
              )
            }
          >
            {t("SEARCH")}
          </ButtonComponent>
        </Box>
      </Box>
    </>
  );
}

export default SearchForm;

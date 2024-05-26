import _ from "@lodash";
import { useTheme } from "@mui/material/styles";
import { Box, width } from "@mui/system";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useMediaQuery,
} from "@mui/material";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";

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

  const statusMap = [
    {
      value: null,
      label: "همه موارد",
    },
    {
      label: "فعال",
      value: "ACTIVE",
    },
    {
      label: "غیرفعال",
      value: "INACTIVE",
    },
  ];
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
  // console.log(getValues(),"get");
  return (
    <>
      <Box sx={{ m: "2rem 1rem" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            flexDirection: { xs: "column", sm: "row" },
            "  .MuiFormControl-root": {
              flex: 1,
              width: {
                xs: "100%",
              },
            },
          }}
        >
          <FormControl>
            <Controller
              name="name"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  sx={{ flex: 1 }}
                  onChange={onChange}
                  value={value}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  label={t("NAME_LAST_NAME")}
                />
              )}
            />
          </FormControl>
          <FormControl>
            <Controller
              name="clientId"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  sx={{ flex: 1 }}
                  onChange={onChange}
                  value={value}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  label={t("CLIENT_ID")}
                />
              )}
            />
          </FormControl>
          <FormControl>
            <Controller
              name="mobile"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  sx={{ flex: 1 }}
                  onChange={onChange}
                  value={value}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  label={t("MOBILE")}
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
                  defaultValue={null}
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
              width: { xs: "100%", sm: "fit-content" },
            }}
            onClick={handleSearchClick}
            color="info"
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

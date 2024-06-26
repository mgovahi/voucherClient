import React from "react";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { isValidIP } from "@fuse/utils/validations";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const IpField = ({ ipList, onAddIp }) => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm({
    mode: "onChange",
  });

  const { t } = useTranslation();

  const onSubmit = (data) => {
    if (ipList.includes(data.validIp)) {
      setError("validIp", {
        type: "manual",
        message: t("IP_DUPLICATE_ERROR"),
      });
      return;
    }
    if (ipList.length >= 3) {
      setError("validIp", {
        type: "manual",
        message: t("IP_NUMBER_ERROR"),
      });
      return;
    }
    onAddIp(data.validIp);
  };

  const isValidIpHandle = (ip) => {
    if (!ip) return;
    return isValidIP(ip) ? true : t("IP_ERROR");
  };

  const onKeyIpAddress = (event) => {
    if (!/^[\d,.]+$/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl className="w-full">
        <Controller
          name="validIp"
          control={control}
          rules={{
            validate: isValidIpHandle,
          }}
          render={({ field: { value, onChange, onBlur, ref, ...field } }) => (
            <TextField
              {...field}
              sx={{ flex: 1 }}
              onChange={onChange}
              onBlur={onBlur}
              type="text"
              value={value}
              inputRef={ref}
              onKeyPress={onKeyIpAddress}
              InputProps={{
                autocomplete: "off",
                endAdornment: (
                  <Button
                    disabled={!isValid || !value}
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{
                      width: "120px",
                      gap: "4px",
                    }}
                  >
                    {t("ADD")}
                    <FuseSvgIcon
                      sx={{
                        stroke: "transparent !important",
                      }}
                      color="white"
                      size="20px"
                    >
                      mv-icons:icon-Add
                    </FuseSvgIcon>
                  </Button>
                ),
              }}
              label={t("VALID_IP")}
              error={!!errors.validIp}
            />
          )}
        />
        {errors.validIp && (
          <FormHelperText error={!!errors.validIp}>
            {errors.validIp.message}
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
};

export default IpField;

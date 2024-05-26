import React, { useState } from "react";
import {
  Button,
  FormControl,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/styles";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";

const IpLimit = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [ipList, setIpList] = useState(mockIpList)

  const isFetching = false;
  const { control, formState, handleSubmit, reset, getValues } = useForm({
    mode: "onChange",
  });

  return (
    <Paper className="w-full">
      <FusePageSimpleHeader header={t("IP_LIMIT")}></FusePageSimpleHeader>
      <Box className="grid gap-y-32 px-20 pt-[24px] pb-[40px]">
        <Box className="grid grid-cols-2 gap-x-[100px]">
          <FormControl>
            <Controller
              name="validIp"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  sx={{ flex: 1 }}
                  onChange={onChange}
                  type="text"
                  value={value}
                  InputProps={{
                    autocomplete: "off",
                    endAdornment: (
                      <Button
                        onClick={() => {}}
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          color: "white",
                          width: "120px",
                          gap: "4px",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                          },
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
                />
              )}
            />
          </FormControl>
        </Box>
        <Box className="grid gap-10">
          {ipList.map((item) => {
            return (
              <Box className="py-14 px-20 grid items-center" sx={{backgroundColor: theme.palette.custome.cyanBlueLight, gridTemplateColumns: "repeat(20, minmax(0, 1fr))"}}>
                <Box
                  sx={{
                    backgroundColor: theme.palette.yellow.main,
                  }}
                  className="w-36 h-36 rounded-full flex justify-center items-center col-span-1"
                >
                  <FuseSvgIcon color="white" size="20px">
                    mv-icons:icon-Security
                  </FuseSvgIcon>
                </Box>
                <Typography className="font-bold col-[span_18_/_span_18]" variant="body2">
                  {item}
                </Typography>
                <Button variant="outlined" color="error" className="col-span-1 gap-4">
                  {t("DELETE")}
                  <FuseSvgIcon color="error" size="20px">
                    mv-icons:icon-Cancel
                  </FuseSvgIcon>
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Paper>
  );
};

export default IpLimit;

const mockIpList = ["200.123.1.30", "200.123.1.40", "200.123.1.50"];

import React, { useState } from "react";
import { Button, Paper, Popover, Typography } from "@mui/material";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/styles";
import { Box } from "@mui/system";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import IpField from "./IpField";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";

const IpLimit = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [ipList, setIpList] = useState(mockIpList);
  const [cancel, setCancel] = useState({
    confirm: false,
    anchorEl: null,
    data: null,
  });


  const isFetching = false;

  const handleAddIp = (newIp) => {
    setIpList((prev) => [...prev, newIp]);
  };

  const handleRemoveIp = () => {
    let update = ipList.filter((ip) => ip !== cancel.data);
    setIpList(update);
    setCancel({
      confirm: false,
      anchorEl: null,
      data: null,
    });
  };

  // const handleCancelVoucher = (e) => {
  //   if (cancel.data) {
  //     if (onCancelVoucher) {
  //       onCancelVoucher(cancel.data);
  //     }
  //   }
  //   setCancel({
  //     confirm: false,
  //     data: null,
  //     anchorEl: null,
  //   });
  // };

  return (
    <Paper className="w-full">
      <FusePageSimpleHeader header={t("IP_LIMIT")}></FusePageSimpleHeader>
      <Box className="grid gap-y-32 px-20 pt-[24px] pb-[40px]">
        <Box className="grid  grid-cols-1 sm:grid-cols-2 sm:gap-x-[50px] md:gap-x-[100px]">
          <IpField onAddIp={handleAddIp} ipList={ipList} />
        </Box>
        <Box className="grid gap-10">
          {ipList.map((item, index) => {
            return (
              <Box
                className="py-14 px-14 sm:px-20 grid items-center"
                sx={{
                  backgroundColor: theme.palette.custome.cyanBlueLight,
                  gridTemplateColumns: {xs: "45px auto 80px", sm: "50px auto 90px"},
                }}
                key={index}
              >
                <Box
                  sx={{
                    backgroundColor: theme.palette.yellow.main,
                  }}
                  className="w-36 h-36 rounded-full flex justify-center items-center"
                >
                  <FuseSvgIcon color="white" size="20px">
                    mv-icons:icon-Security
                  </FuseSvgIcon>
                </Box>
                <Typography
                  className="font-bold"
                  variant="body2"
                >
                  {item}
                </Typography>
                <Button
                  variant="outlined"
                  color="error"
                  className="gap-4"
                  onClick={(e) => {
                    setCancel({
                      confirm: true,
                      anchorEl: e.currentTarget,
                      data: item,
                    });
                  }}
                >
                  {t("DELETE")}
                  <FuseSvgIcon color="error" size="20px">
                    mv-icons:icon-Cancel
                  </FuseSvgIcon>
                </Button>
              </Box>
            );
          })}
        </Box>
        <Popover
        open={cancel.confirm}
        anchorEl={cancel.anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={() => {
          setCancel({
            confirm: false,
            anchorEl: null,
            data: null,
          });
        }}
      >
        <Box className="py-[16px]">
          <Box class="px-[24px] mb-[16px]">
            <Typography variant="body2">{t("REMOVE_IP")}</Typography>
            <Typography className="mt-8">
              {t("REMOVE_IP_CONFIRM_MESSAGE")}
            </Typography>
          </Box>
          <Box
            className="px-[24px] mt-12 text-left"
            sx={{
              button: {
                padding: "3px 8px !important",
                margin: "0 0 0 5px",
                minWidth: "100px",
              },
            }}
          >
            <ButtonComponent
              size="small"
              //disabled={isLoading}
              isLoading={isFetching}
              onClick={(e) => {
                setCancel({
                  confirm: false,
                  anchorEl: null,
                  data: null,
                });
              }}
              variant="outlined"
            >
              {t("CANCEL")}
            </ButtonComponent>
            <ButtonComponent
              color="error"
              skin="light"
              size="small"
              //disabled={isLoading}
              isLoading={isFetching}
              onClick={handleRemoveIp}
              variant="contained"
              sx={{}}
              endIcon={
                <FuseSvgIcon
                  sx={{
                    stroke: "transparent !important",
                    fill: "#fff",
                  }}
                >
                  {"mv-icons:icon-Cancel"}
                </FuseSvgIcon>
              }
            >
              {t("YES")}
            </ButtonComponent>
          </Box>
        </Box>
      </Popover>
      </Box>
    </Paper>
  );
};

export default IpLimit;

const mockIpList = ["200.123.1.30", "200.123.1.40", "200.123.1.50"];

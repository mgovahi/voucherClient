import React, { useState } from "react";
import { Button, Paper, Typography } from "@mui/material";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/styles";
import { Box } from "@mui/system";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import IpField from "./IpField";

const IpLimit = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [ipList, setIpList] = useState(mockIpList);

  const isFetching = false;

  const handleAddIp = (newIp) => {
    setIpList((prev) => [...prev, newIp]);
  };

  const handleRemoveIp = (removedIp) => {
    let update = ipList.filter((ip) => ip !== removedIp);
    setIpList(update);
  };

  return (
    <Paper className="w-full">
      <FusePageSimpleHeader header={t("IP_LIMIT")}></FusePageSimpleHeader>
      <Box className="grid gap-y-32 px-20 pt-[24px] pb-[40px]">
        <Box className="grid grid-cols-2 gap-x-[100px]">
          <IpField onAddIp={handleAddIp} ipList={ipList} />
        </Box>
        <Box className="grid gap-10">
          {ipList.map((item, index) => {
            return (
              <Box
                className="py-14 px-20 grid items-center"
                sx={{
                  backgroundColor: theme.palette.custome.cyanBlueLight,
                  gridTemplateColumns: "repeat(20, minmax(0, 1fr))",
                }}
                key={index}
              >
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
                <Typography
                  className="font-bold col-[span_18_/_span_18]"
                  variant="body2"
                >
                  {item}
                </Typography>
                <Button
                  variant="outlined"
                  color="error"
                  className="col-span-1 gap-4"
                  onClick={() => handleRemoveIp(item)}
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
      </Box>
    </Paper>
  );
};

export default IpLimit;

const mockIpList = ["200.123.1.30", "200.123.1.40", "200.123.1.50"];
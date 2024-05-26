import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Button,
  Box,
  Typography,
  Alert,
  FormControl,
  TextField,
  IconButton,
  Chip,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";

function LastSignin({}) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [info, setInfo] = useState({
    date: "1403/01/22 13:45",
    ip: "200.123.1.30",
    browser: "chrome",
    os: "windows",
  });
  return (
    <>
      <Box className="w-full ">
        <FusePageSimpleHeader
          header={t("ADMIN_LAST_SIGNIN")}
          inner

        ></FusePageSimpleHeader>
        <Box
          className="flex justify-between mt-24 text-right "
          sx={{
            " p:not(:first-child)": {
              minWidth: "25%",                                                        
              textAlign: "center",
              
            },
          }}
        >
          <Typography className="font-bold"
           sx={{fontSize: "14px"}}
          >
            <Chip
              color="successLight"
              sx={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                mr: "10px",
              }}
              label={
                <FuseSvgIcon
                  size={16}
                  sx={{ stroke: "transparent !important", display:"block!important" }}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                >
                  mv-icons-mc:icon-Login
                </FuseSvgIcon>
              }
            ></Chip>
            {info.date}
          </Typography>
          <Typography  sx={{fontSize: "14px",color:theme.palette.text.grayT}} className="flex justify-center items-center">{info.ip}</Typography>
          <Typography  sx={{fontSize: "14px",color:theme.palette.text.grayT}} className="flex justify-center items-center">{info.browser}</Typography>
          <Typography  sx={{fontSize: "14px",color:theme.palette.text.grayT}} className="flex justify-center items-center">{info.os}</Typography>
        </Box>
      </Box>
    </>
  );
}

export default LastSignin;

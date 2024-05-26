import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import {
  CircularProgress,
  TextField,
  Typography,
  Chip,
  Switch,
  InputLabel,
  FormControlLabel,
  Paper,
  Button
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";

function ClientInfo({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setActive(newValue);
  };


  const Person = {
    firstName: "  سیاوش ",
    lastName: "   شاهی  ",
    position: "مشتری",
    email: "radwin@bozorgi.com",
    mobile: "۰۹۱۲۳۵۰۴۱۷۹",
  };




  const onStatusChange = (e) => {
    setStatus(e.target.checked ? "ACTIVE" : "INACTIVE");
  };
  const handleSaveClick = () => { };
  const loading = false;
  return (
    <Paper className="shadow gap-4 grid "
      sx={{
        display: "flex",
        marginY: "20px"
      }
      } >
      <Box
        className="p-[30px] rounded flex gap-x-[40px]"
        sx={{ border: `1px solid ${theme.palette.divider}` }}
      >
        {/* <Box
          className="rounded flex justify-center items-center"
          sx={{
            width: "160px",
            height: "160px",
            backgroundColor: "#f3f8ff",
          }}
        >
          <FuseSvgIcon size={100} sx={{ color: "#fff" }}>
            mv-icons:icon-User-_-Light-_-Duotone
          </FuseSvgIcon>
        </Box> */}

        <Box
          className=" flex justify-center items-center"
          sx={{
            borderRadius: "20px",
            width: "160px",
            height: "160px",
            backgroundColor: "#f3f8ff",
          }}
        >
          <img src="assets/images/user.png" className="rounded-[12px] " />
          {/* <FuseSvgIcon size={100} sx={{ color: "#fff" }}>
            mv-icons:icon-User-_-Light-_-Duotone
          </FuseSvgIcon> */}
        </Box>

        <Box className="flex-1 flex flex-col justify-between">
          <Box className="relative">
            <Typography variant="h6" className="font-bold text-xl mb-[12px]">
              {Person.firstName + " " + Person.lastName}
            </Typography>
            <Typography
              caption="body2"
              className="flex gap-x-[20px] font-bold text-[14px]"
              color={[theme.palette.text.grayDay]}

              sx={{
                " svg": {
                  marginRight: "7px",
                },


              }}
            >
              <span>
                <FuseSvgIcon size={16}>
                  mv-icons-mc:icon-User-_-Light-_-Duotone
                </FuseSvgIcon>
                {Person.position}
              </span>
              <span>
                <FuseSvgIcon size={16}>
                  mv-icons-mc:icon-profile-mobile
                </FuseSvgIcon>
                {Person.mobile}
              </span>
              <span>
                <FuseSvgIcon size={16}>
                  mv-icons-mc:icon-At-_-Light-_-Duotone
                </FuseSvgIcon>
                {Person.email}
              </span>
            </Typography>
            {/* <Chip
              skin="light"
              label={statusMap[info.status]}
              color={
                info.status == "ACTIVE"
                  ? "successLight"
                  : info.status == "INACTIVE"
                  ? "errorLight"
                  : "successLight"
              }
              sx={{
                position: "absolute",
                top: "0",
                right: "16px",
                height: 20,
                maxWidth: "initial",
                mt: 0.4,
                fontSize: "1.1rem",
                fontWeight: "normal",
              }}
            ></Chip> */}

            <Box
              className="flex  "
              sx={{
                position: "absolute",
                top: { xs: "98px", lg: '9px' },

                right: { xs: "5px", lg: '0' },
                maxWidth: "initial",
                fontSize: "1.1rem",
                fontWeight: "normal",

              }} >
              <Button
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.custome.info2
                  },
                  width: { xs: "150px", lg: '217px' },
                  height: "42px",

                  fontSize: { xs: "10px", lg: '14px' },
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                {t("UPDATE_PROFILE_PICTURE")}                
                 <span className=" flex justify-center items-center rounded-full "
                >                   
                <FuseSvgIcon
                  className="mr-4"
                  sx={{
                    fill: `${theme.palette.divider}!important`,
                    stroke: `${theme.palette.divider}!important`,
                  }}
                >
                    mv-icons:icon-CloudUpload
                  </FuseSvgIcon>
                </span>
              </Button>
            </Box>

          </Box>
          <Box
            className="flex gap-x-[20px]  justify-end"
            sx={{
              " span": {
                borderRadius: "6px",
                backgroundColor: theme.palette.infoLight.secondary,
                display: "inline-block",
                padding: "15px",
                textAlign: "right",
                " b": {
                  fontSize: "20px",
                },
                " i": {
                  color: theme.palette.text.grayDay,
                  fontStyle: "bold",
                  display: "block",
                  marginTop: "5px",
                  fontSize:"14px"
                },
              },
            }}
          >
            <Typography variant="caption">
              <b>87</b>
              <i>{t("VOUCHER_ISSUED")}</i>
            </Typography>
            <Typography variant="caption">
              <b>85</b>
              <i>{t("VOUCHER_CONSUMED")}</i>
            </Typography>
            <Typography
              variant="caption"
              sx={{
                " b": {
                  color: theme.palette.primary.main + " !important",
                  fontWeight: "bold",
                },
              }}
            >
              <b>$8,942
                {/* {t("TOMAN")} */}
                </b>
              <i>{t("BALANCE")}</i>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
export default ClientInfo;

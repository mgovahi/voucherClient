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
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
import { styled } from "@mui/material/styles";

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
  const handleSaveClick = () => {};
  const loading = false;

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("File selected:", file);
  };

  return (
    <Paper
      className="shadow gap-4 grid grid-cols-1 w-full min-w-0 "
      sx={{
        marginY: "20px",
      }}
    >
      <Box
        className="p-[30px] rounded   col-span-1 grid  "
        sx={{
          border: `1px solid ${theme.palette.divider}`,
          // gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gridTemplateColumns: { xs: "100%", md: "50% 50%" },
        }}
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
          className="grid lg:gap-x-[30px]  "
          sx={{
            gridTemplateColumns: { xs: "auto 1fr", md: "auto 1fr " },
            gap: { xs: "10px" },
          }}
        >
          <Box
            className="  "
            sx={{
              borderRadius: "20px",
              width: { xs: "120px", sm: "140px", md: "160px" },
              height: { xs: "120px", sm: "140px", md: "160px" },
              backgroundColor: "#f3f8ff",
            }}
          >
            <img src="assets/images/user.png" className="rounded-[12px] " />
            {/* <FuseSvgIcon size={100} sx={{ color: "#fff" }}>
            mv-icons:icon-User-_-Light-_-Duotone
          </FuseSvgIcon> */}
          </Box>

          <Box
            className=""
            sx={{
              width: { xs: "100%", sm: "auto", md: "350px" },
            }}
          >
            <Typography
              variant="h6"
              className="font-bold lg:text-xl    mb-[12px]"
              sx={{
                fontSize: {
                  xs: "12px", // Small screens
                  sm: "14px", // Small screens (adjust as needed)
                  md: "18px", // Medium screens
                },
              }}
            >
              {Person.firstName + " " + Person.lastName}
            </Typography>
            <Typography
              variant="body2"
              className="gap-x-[20px] font-bold lg:text-[12px]"
              color={theme.palette.text.grayDay}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                svg: {
                  marginRight: "7px",
                },

                fontSize: {
                  xs: "12px", // Small screens
                },
              }}
            >
              <span className="mb-2">
                <FuseSvgIcon size={16}>
                  mv-icons-mc:icon-User-_-Light-_-Duotone
                </FuseSvgIcon>
                {Person.position}
              </span>
              <span className="mb-2">
                <FuseSvgIcon size={16}>mv-icons-mc:icon-Mobile</FuseSvgIcon>
                {Person.mobile}
              </span>
              <span className="mb-2">
                <FuseSvgIcon size={16}>
                  mv-icons-mc:icon-At-_-Light-_-Duotone
                </FuseSvgIcon>
                {Person.email}
              </span>
            </Typography>
          </Box>
        </Box>

        <Box
          className="grid gap-4 "
          sx={{
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Box className=" col-span-2 md:col-span-4 flex flex-col  md:items-end   gap-4 gap-y-[30px]">
            <Box
              className="flex gap-x-[20px]"
              sx={{
                flexDirection: { sm: "row", md: "row" },
                justifyContent: "right",
              }}
            >
              <Button
                sx={{
                  padding: "0px !important",
                  marginTop: { xs: "10px !important" },
                  // backgroundColor: theme.palette.primary.main,
                  // "&:hover": {
                  //   backgroundColor: theme.palette.custome.info2,
                  // },
                  width: { xs: "150px", lg: "180px" },
                  height: "42px",
                  fontSize: { xs: "10px", lg: "12px" },
                  color: "#fff",
                  fontWeight: "bold",
                  // textAlign: "right", // Ensures left alignment
                }}
                component="label"
                variant="contained"
                color="primary"
                >
                {t("UPDATE_PROFILE_PICTURE")}
                <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                <span className="flex justify-center items-center rounded-full">
                  <FuseSvgIcon
                    className="mr-4"
                    sx={{
                      // fill: `${theme.palette.divider}!important`,
                      // stroke: `${theme.palette.divider}!important`,
                      style: { direction: "ltr" },
                      marginLeft: "5px",
                    }}
                  >
                    mv-icons:icon-CloudUpload
                  </FuseSvgIcon>
                </span>
              </Button>
            </Box>
            <Box
              className="flex gap-x-[20px]     "
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "row" },
                justifyContent: "right",

                " span": {
                  borderRadius: "6px",
                  backgroundColor: theme.palette.infoLight.secondary,
                  display: "inline-block",
                  padding: { lg: "15px", xs: "10px" },
                  // textAlign: {lg:"right",xs:"center"},
                  textAlign: { lg: "right", xs: "center" },
                  // width: { xs: "250px",md:'100px', lg: '140px' },
                  // height: { xs: "70px", lg: '100px' },
                  marginBottom: { xs: "10px" },

                  " b": {
                    fontSize: {
                      xs: "14px", // Small screens
                      sm: "18px", // Small screens (adjust as needed)
                      md: "20px", // Medium screens
                    },
                  },
                  " i": {
                    color: theme.palette.text.grayDay,
                    fontStyle: "bold",
                    display: "block",
                    marginTop: "5px",
                    fontSize: {
                      xs: "12px", // Small screens
                      sm: "12px", // Small screens (adjust as needed)
                      md: "14px", // Medium screens
                      lg: "14px",
                    },
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
                fontFamily="IRANYekanXNumEnBold"
                sx={{
                  " b": {
                    color: theme.palette.primary.main + " !important",
                    fontWeight: "bold",
                  },
                }}
              >
                <b>$8,942</b>
                <i>{t("BALANCE")}</i>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
export default ClientInfo;

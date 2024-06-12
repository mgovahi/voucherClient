import React, { useState } from "react";
import {
  Paper,
  useTheme,
  Box,
  Typography,
  Grid,
  Switch,
  FormControlLabel,
  Button,
} from "@mui/material";
import { useMemo } from "react";
import moment from "jalali-moment";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";

const SecuritySettings = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  // const [status, setStatus] = useState("INACTIVE");
  const [isActive, setIsActive] = useState(false);

  const statusMap = {
    ACTIVE: "فعال",
    INACTIVE: "غیرفعال",
  };

  const onStatusChange = (event) => {
    if (event.target.checked) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const handleSaveClick = () => {};
  const loading = false;

  const handleKeySecret = () => {};

  return (
    <Paper
      className="gap-4 grid my-20 "
      sx={{
        display: "flex",
      }}
    >
      <Box>
        <Box className="gap-x-[24px]">
          <Typography
            variant="body1"
            className="font-bold text-[18px] my-20 px-20 "
            sx={{
              height: "66px",
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            {t("TWO_FACTOR_LOGIN")}
          </Typography>
        </Box>
        <Box className="flex  flex-row" width={"100%"}>
          <Box
            className="flex  justify-center pr-20 my-24 "
            sx={{ height: "43px" }}
          >
            <i className=" flex justify-center items-center	  rounded-full ">
              <FuseSvgIcon
                size={28}
                sx={{
                  stroke: `${theme.palette.custome.lightPurple}!important`,
                }}
              >
                mv-icons-mc:icon-google-icon-2
              </FuseSvgIcon>
            </i>
          </Box>
          <Box className="flex-1 flex flex-col justify-between  my-24">
            <Box className="relative  ">
              <Typography
                variant="h6"
                className="font-bold  md:text-[16px] px-14"
                color={"#1a1c1f"}
                sx={{ fontSize: { xs: "14px" } }}
              >
                Google Authenticator
              </Typography>
              <Typography
                caption="body2"
                className="flex md:text-[14px] px-14"
                color={[theme.palette.text.grayDay]}
                sx={{ fontSize: { xs: "12px" } }}
              >
                <span >{t("ACTIVATING_TWO_FACTOR")}</span>
              </Typography>
            </Box>
          </Box>
          <Box
            className="d-flex  px-20 py-24"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: { md: "16px", xs: "12px" }
            }}
          >
            <b> {isActive ? t("ACTIVE") : t("INACTIVE")} </b>

            <FormControlLabel
              control={<Switch color="primary" />}
              label={statusMap[isActive]}
              labelPlacement="start"
              onChange={onStatusChange}
            />
          </Box>
        </Box>
        <Box
          className="mx-[20px] my-[24px] rounded flex "
          sx={{
            border: `1px dotted ${theme.palette.custome.borderSecure}`,
            backgroundColor: theme.palette.background.disabled,
            height:{lg:"240px",md:"240px",xs:"400px",} ,
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
               
              }}
            >
              <Box
                sx={{
                  width: { xs: "100", lg: "160" },
                  height: "160",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                 
                }}
              >
                <Typography
                  variant="body3"
                  fontSize={"14px"}
                  className="mt-30 mb-10"
                >
                  {t("SCAN_QR_CODE")}
                </Typography>
                <Typography
                  variant="body1"
                  className="flex  justify-center items-center "
                  sx={{
                    width: "160px !important",
                    height: "160px !important",
                    " img": {
                      margin: "17.3px",
                    },
                  }}
                >
                  <img src={`/assets/images/Qr/QR-Code.svg`} />
                </Typography>
              </Box>
            </Grid>
            
            {/* <Grid item xs={1}>
              <Box
                className="pr-0"
                sx={{
                  width: "1px",
                  height: "160px",
                  //   transform: rotate(-270deg);
                  backgroundColor: theme.palette.custome.borderSecure,
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              ></Box>
            </Grid> */}


            

            <Grid
              item
             md={6}
             xs={12}

              // sx={{
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   // borderLeft:`1px solid ${theme.palette.custome.borderSecure}`,
              // }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: '40px',
                  bottom: '40px',
                  width:{md:"1px",xs:"0px"},
                  backgroundColor: theme.palette.custome.borderSecure,
                },
              }}
            >
              {isActive ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="body3"
                    className=" mb-10 "
                    sx={{
                      marginTop: "30px",
                      fontSize: { lg: "14px", xs: "12px" },
                    }}
                  >
                    {t("ENTER_KEY_SECRET")}
                  </Typography>

                  <Button
                    sx={{
                      justifyContent: "space-between",
                      width: { lg: "320px", xs: "280px" },
                      height: "44px",
                      backgroundColor: "#fff",
                      border: `1px solid ${theme.palette.text.grayDay} `,
                      margin: "68px 102px 58px 48px",
                      padding: "13px 20px 13px 20px",
                    }}
                    // size="large"
                    id="key-secret-btn"
                    onClick={handleKeySecret}
                  >
                    Nx@71k989284LoP009134jfT1401
                    <Box className="flex   pr-20 my-24 " sx={{}}>
                      <i className=" flex items-center rounded-full ">
                        <FuseSvgIcon
                          size={18}
                          sx={{
                            fill: `${theme.palette.text.grayDay}!important`,
                            stroke: `${theme.palette.secondary.slowLight}!important`,
                          }}
                        >
                          mv-icons:icon-Copy
                        </FuseSvgIcon>
                      </i>
                    </Box>
                  </Button>
                </Box>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </Box>
        <Box className="col-span-2 flex justify-end mt-48 mb-20 mx-20">
          <ButtonComponent
            sx={{
              width: { xs: "100%", sm: "fit-content" },
            }}
            onClick={handleSaveClick}
            color="primary"
            size="middle"
            variant="contained"
            isLoading={loading}
            // disabled={loading}
            endIcon={
              loading ? (
                <CircularProgress size={16} sx={{ color: "#fff" }} />
              ) : (
                <FuseSvgIcon color={theme.palette.common.white} size={20}>
                  mv-icons:icon-Check
                </FuseSvgIcon>
              )
            }
          >
            {t("SAVE_INFO")}
          </ButtonComponent>
        </Box>
      </Box>
    </Paper>
  );
};

export default SecuritySettings;

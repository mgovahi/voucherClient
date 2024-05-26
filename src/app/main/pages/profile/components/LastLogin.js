import React, { useState } from "react";
import { useMemo } from "react";
import moment from "jalali-moment";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useTheme } from "@mui/material/styles";
import {
    Paper,
    Button,
    Box,
    Typography,
    Alert,
    FormControl,
    TextField,
    IconButton,
    Chip,
} from "@mui/material";



const Lastlogin = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const [info, setInfo] = useState({
        SampleData
    });

    return (
        <Paper
            className="gap-4 grid my-20 "
            sx={{
                display: "flex",
            }}
        >
            <Box>
                <Box className="gap-x-[24px] ">
                    <Typography
                        variant="body1"
                        className="font-bold text-[18px] mt-20 px-20 mb-44 "
                        sx={{
                            // paddingTop: "20px",
                            height: "66px",
                            borderBottom: 1,
                            borderColor: "divider",
                        }}
                    >
                        {t("LAST_LOGIN")}
                    </Typography>
                </Box>
                {SampleData.map((dataItem) => (
                    <Box

                        key={dataItem.id}
                        className="flex justify-between  text-right mx-40 my-24 "
                        sx={{
                            " p:not(:first-child)": {
                                minWidth: "25%",
                                textAlign: "center",
                            },
                        }}
                    >
                        <Typography className="font-bold "
                        sx={{fontSize: "14px",}}
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
                                        sx={{ stroke: "transparent !important",display:"block!important"  }}
                                        className="ml-14 "
                                    >
                                        mv-icons-mc:icon-Login
                                    </FuseSvgIcon>
                                }
                            ></Chip>
                            {moment(dataItem.date).format("YYYY-MM-DD hh:mm:ss")}
                        </Typography>
                        <Typography
                            className="flex justify-center items-center	 "
                             sx={{fontSize: "14px",color:theme.palette.text.grayT}}
                        >{dataItem.ip}</Typography>
                        <Typography  sx={{fontSize: "14px",color:theme.palette.text.grayT}} className="flex justify-center items-center">{dataItem.browser}</Typography>
                        <Typography  sx={{fontSize: "14px",color:theme.palette.text.grayT}} className="flex justify-center items-center">{dataItem.os}</Typography>
                    </Box>
                ))}
            </Box>
        </Paper>
    );
};

const SampleData = [
    {
        ip: "۲۰۰.۱۲۳.۱.۳۰",
        browser: "Chrome",
        os: "Windows",
        date: new Date().getTime(),
        id: 1
    },
    {
        ip: "۲۰۰.۱۲۳.۱.۳۰",
        browser: "Safari",
        os: "Mac OS",
        date: new Date().getTime(),
        id: 2
    },
    {
        ip: "۲۰۰.۱۲۳.۱.۳۰",
        browser: "iOS",
        os: "iPhone Pro",
        date: new Date().getTime(),
        id: 3
    },

];

export default Lastlogin;

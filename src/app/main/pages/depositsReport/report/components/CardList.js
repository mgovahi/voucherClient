import _ from "@lodash";
import { lighten, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Switch from "@mui/material/Switch";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";

import {
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TablePagination,
    Chip,
    Paper,
    Popover
} from "@mui/material";
import FusePageSimple from "@fuse/core/FusePageSimple";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import history from "@history";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "jalali-moment";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
import DepositsInfo from "./DepositsInfo";
function CardList(props) {
    const { t } = useTranslation();
    const theme = useTheme();
    const [page, setPage] = useState(0);
    const { data,
        handleClose,
        handleClickOpen,
        details,
        isAdmin,
        onCancelVoucher
    } = props;
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [sampleDataList, setSampleDataList] = useState(props.data || []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const isLoadingData = true;

    const [cancel, setCancel] = useState({
        confirm: false,
        anchorEl: null,
        data: null,
    });

    const handleCancelVoucher = (e) => {
        if (cancel.data) {
            if (onCancelVoucher) {
                onCancelVoucher(cancel.data);
            }
        }
        setCancel({
            confirm: false,
            data: null,
            anchorEl: null,
        });
    };

    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("sm"));


    const handleRemoveItem = (removedItem) => {
        const updatedList = sampleDataList.filter(item => item.code !== removedItem.code);
        setSampleDataList(updatedList);
    };

    const statusMap = {
        ACCEPTED: t("CONFIRMED"),
        WAITING: t("WAITING"),
        REJECTED: t("REJECTED"),
      };
    
      const statusMapColor = {
        ACCEPTED: "successLight",
        REJECTED: "errorLight",
        WAITING: "warningLight",
      };



    const listItems =
        sampleDataList && sampleDataList.length
            ? sampleDataList.map((row) => {
                console.log("Status:", row.status);           
                     return (
                    <Paper
                        className="flex flex-col flex-auto p-16 xs:p-24 shadow rounded-2xl mx-16"
                        sx={{
                            backgroundColor: theme.palette.custome.cyanBlueLighte,
                            " .MuiInputBase-input, .MuiInputBase-formControl": {
                                backgroundColor: "#fff",
                            },
                            " label": {
                                color: theme.palette.text.disabled,
                                marginRight: 2,
                                fontSize: '0.9em',


                            },
                            " span": {
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "0.9em",
                                },
                            },
                        }}
                    >
                        <Box className="grid  sm:grid-cols-2 xs:grid-cols-2 gap-24">
                            <Box >
                                <label variant="string">{t("DEPOSIT_TOMAN")} </label>
                                <Typography variant="string">{row.deposit}</Typography>
                            </Box>

                            <Box>
                                <label variant="string">{t("CREDIT")} </label>
                                <Typography
                                    variant="string"
                                    sx={{
                                        direction: "ltr",
                                    }}
                                >
                                    {row.credit}
                                </Typography>
                            </Box>
                            <Box>
                                <label variant="string">{t("CURRENCY")} </label>
                                <Typography
                                    variant="string"
                                    sx={{
                                        direction: "ltr",
                                    }}
                                >
                                    {row.currency}
                                </Typography>
                            </Box>
                            <Box >
                                <label variant="string">{t("TRANSACTION_ID")} </label>
                                <Typography
                                    variant="string"
                                    sx={{
                                        direction: "ltr",
                                    }}
                                >
                                    {row.transactionId}
                                </Typography>
                            </Box>

                            <Box className="">
                                <label variant="string">{t("DEPOSIT_DATE")}</label>
                                <Typography
                                    variant="string"
                                    sx={{
                                        direction: "ltr",
                                    }}
                                >
                                    {moment(new Date(row.depositDate))
                                        .locale("fa")
                                        .format("YYYY-MM-DD - hh:mm:ss")}
                                </Typography>
                            </Box>
                            <Box >
                                <label className="w-28 inline-block" variant="string">{t("LAST_ACTION_DATE")}</label>
                                <Typography
                                    variant="string"
                                    sx={{
                                        direction: "ltr",

                                    }}
                                >
                                    {moment(new Date(row.latestActionDate))
                                        .locale("fa")
                                        .format("YYYY/MM/DD hh:mm:ss")}
                                </Typography>
                            </Box>
                            <Box className="">
                                <label variant="string">{t("ATTACHMENT_TYPE")}</label>
                                <Typography
                                    variant="string"
                                    sx={{
                                        direction: "ltr",
                                    }}
                                >
                                   {row.attachmentType}
                                </Typography>
                            </Box>
                            <Box >
                                <label variant="string">{t("STATUS")}</label>
                                <Chip
                                    skin="light"
                                    //label={params.row.status=="1" ? <Translations  text ="DEPOSITED" /> :  <Translations text="CANCELD" />}
                                    label={statusMap[row.status] }
                                    color={statusMapColor[row.status]}
                                    sx={{
                                        textTransform: 'uppercase',
                                        height: 20,
                                        maxWidth: "initial",
                                        mt: 0.4,
                                        fontSize: "1.1rem",
                                        fontWeight: "normal",
                                    }}
                                ></Chip>
                            </Box>


                            <Box 
                            >
                                <label variant="string">{t("DETAILS")}</label>
                                {
                                    <ButtonComponent
                                    className="w-96"
                                        color="info"
                                        skin="light"
                                        size="small"
                                        //disabled={isLoading}
                                        isLoading={isLoadingData}
                                        onClick={() => handleClickOpen(row)}
                                        variant="contained"
                                        sx={{ padding: "5px"}}
                                        
                                        startIcon={
                                            <FuseSvgIcon
                                                sx={{
                                                    stroke: "transparent !important",
                                                    fill: "#fff",
                                                }}
                                            >
                                                {"mv-icons:icon-ListAlt"}
                                            </FuseSvgIcon>
                                        }
                                    >
                                        {t("DETAILS")}
                                    </ButtonComponent>
                                }
                            </Box>



                        </Box>
                    </Paper>
                );
            })
            : "";

    return (
        <>
            {data.length ? (
                <>
                    <Box className="grid gap-16">{listItems}</Box>
                    <TablePagination
                        rowsPerPageOptions={[10]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        labelDisplayedRows={(info) => {
                            var strFormat = function (str, args) {
                                if (args) {
                                    console.log(args);
                                    for (let i = 0; i < args.length; i++)
                                        str = str.replace("{" + i + "}", args[i]);
                                }
                                return str;
                            };

                            let text = t("LABLE_DISPLAY_ROWS");
                            return strFormat(text, [info.from, info.to, info.count]);
                        }}
                    />

                    <Dialog
                        open={details.showModal}
                        fullScreen={isMobile ? true : false}
                        maxWidth="lg"
                        fullWidth
                        keepMounted
                        onClose={handleClose}
                    >
                        <DialogTitle>
                            <Box className="">
                                <FusePageSimpleHeader
                                    header={t("DEPOSIT_INFORMATION")}
                                    headerActions={
                                        <i className="inline-block rounded-xl ">
                                            <FuseSvgIcon
                                                cursor="pointer"
                                                color="gray"
                                                cer
                                                size={20}
                                                onClick={handleClose}
                                            >
                                                {"heroicons-outline:x"}
                                            </FuseSvgIcon>
                                        </i>
                                    }
                                ></FusePageSimpleHeader>
                            </Box>
                        </DialogTitle>
                        <DialogContent>
                            <DepositsInfo info={details.data.depositsInfo} onCancelClick={handleClose}></DepositsInfo>
                        </DialogContent>
                    </Dialog>

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
                                <Typography variant="body2">{t("CANCEL_VOUCHER")}</Typography>
                                <Typography className="mt-8">
                                    {t("CANCEL_VOUCHER_CONFIRM_MESSAFE")}
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
                                    isLoading={isLoadingData}
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
                                    isLoading={isLoadingData}
                                    onClick={(e) => handleCancelVoucher(e)}
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


                </>
            ) : (
                <></>
            )}
        </>
    );
}

export default CardList;

import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useTheme } from "@mui/material/styles";
import {
  Button,
  CircularProgress,
  Chip,
  Typography,
  Hidden,
  Popover,
} from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, faIR } from "@mui/x-data-grid";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { dataGridStyles } from "app/shared-components/DataGridStyles";
import { useTranslation } from "react-i18next";
import moment from "jalali-moment";

import { useDispatch } from "react-redux";
import { showMessage } from "app/store/mv/messageSlice";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";

import { useThemeMediaQuery } from "@fuse/hooks";
import VoucherInfo from "./VoucherInfo";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
import CardList from "./CardList";

const VouchersList = (props) => {
  const [exportLoading, setExportLoading] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();

  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [cancel, setCancel] = useState({
    confirm: false,
    anchorEl: null,
    data: null,
  });

  const [sampleDataList, setSampleDataList] = useState(props.data || []);

  // const handleRemoveItem = (removedItem) => {
  //   const updatedList = sampleDataList.filter(
  //     (item) => item.code !== removedItem.code
  //   );
  //   setSampleDataList(updatedList);
  // };

  const isLoadingData = true;

  const {
    data,
    total,
    onPageChange,
    pageSize,
    totalSummary,
    onPageSizeChange,
    loading,
    onCashoutApproved,
    onSortModelChange,
    page,
    onApprovePurchases,
    onCancelVoucher,
    isAdmin,
    handleClose,
    handleClickOpen,
    details,
  } = props;

  const statusMap = {
    ACTIVE: t("ACTIVE"),
    CANCELED: t("CANCELED"),
    MERGED: t("MERGED"),
    USED: t("USED"),
  };
  const statusMapColor = {
    ACTIVE: "successLight",
    CANCELED: "errorLight",
    MERGED: "warningLight",
    USED: "infoLight",
  };
  let columns = [
    {
      minWidth: 40,
      headerName: t("ROW_NUMBER"),
      field: "id",
      sortable: false,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          {params.api.getRowIndex(params.row.code) +
            1 +
            (parseInt(total?.PageNumber) - 1) * total.PageSize}
        </Typography>
      ),
    },
    {
      minWidth: 250,
      headerName: t("VOUCHER_CODE"),
      field: "code",
      sortable: false,
      flex: 1,
      renderCell: (params) => (
        <Typography variant="body2" className="font-bold">
          {/* { params.row.clientId } */}
          {params.row?.code}
        </Typography>
      ),
    },
    {
      minWidth: 120,
      headerName: t("CURRENCY"),
      field: "currency",
      flex: 1,
      sortable: false,
      // renderCell: params => (
      //     <Typography variant='body2' sx={{ color: 'text.primary' }}>

      //     </Typography>
      // )
    },
    {
      field: "amount",
      minWidth: 150,
      headerName: t("AMOUNT"),
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "info.main", direction: "ltr", fontWeight: "bold" }}
        >
          {params.row.amount.toAmount()}
        </Typography>
      ),
    },
    {
      minWidth: 140,
      headerName: t("TRANSACTION_FEE"),
      field: "wage",
      flex: 1,
      sortable: false,
    },
    {
      minWidth: 100,
      headerName: t("CHANNEL"),
      field: "channel",
      flex: 1,
      sortable: false,
    },
    {
      field: "createDate",
      minWidth: 180,
      headerName: t("CREATE_DATE"),
      flex: 1,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ direction: "ltr" }}>
          {moment(new Date(params.row.createDate))
            .locale("fa")
            .format("YYYY-MM-DD hh:mm:ss")}
        </Typography>
      ),
    },

    {
      minWidth: 250,
      headerName: t("TRANSACTION_ID"),
      field: "transactionId",
      flex: 1,
      sortable: false,
    },
    {
      field: "usedDate",
      minWidth: 180,
      headerName: t("USED_DATE"),
      flex: 1,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ direction: "rtl" }}>
          {moment(new Date(params.row.usedDate))
            .locale("fa")
            .format("YYYY-MM-DD - hh:mm:ss")}
        </Typography>
      ),
    },
    {
      minWidth: 110,
      field: "status",
      headerName: t("STATUS"),
      sortable: false,
      renderCell: (params) => (
        <Chip
          skin="light"
          //label={params.row.status=="1" ? <Translations  text ="DEPOSITED" /> :  <Translations text="CANCELD" />}

          label={statusMap[params.row.status]}
          color={statusMapColor[params.row.status]}
          sx={{
            textTransform: "uppercase",
            height: 20,
            maxWidth: "initial",
            mt: 0.4,
            fontSize: "1.1rem",
            fontWeight: "normal",
          }}
        ></Chip>
      ),
    },
    {
      minWidth: 140,
      field: "cancel",
      sortable: false,
      headerName: t("ACTIONS"),
      renderCell: (params) => {
        {
          return params.row.status == "ACTIVE" ? (
            <ButtonComponent
              color="error"
              skin="light"
              size="small"
              //disabled={isLoading}
              isLoading={isLoadingData}
              // onClick={() => handleRemoveItem(params.row)}
              onClick={(e) => {
                setCancel({
                  confirm: true,
                  anchorEl: e.currentTarget,
                  data: params.row,
                });
              }}
              variant="outlined"
              sx={{ padding: "7px", minWidth: "87px!important" }}
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
              {t("CANCELLATION")}
            </ButtonComponent>
          ) : (
            <></>
          );
        }
      },
    },
    {
      minWidth: 150,
      field: "details",
      sortable: false,
      headerName: t("DETAILS"),
      renderCell: (params) => {
        return (
          <ButtonComponent
            color="info"
            skin="light"
            size="small"
            //disabled={isLoading}
            isLoading={isLoadingData}
            onClick={() => handleClickOpen(params.row)}
            variant="contained"
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
        );
      },
    },
  ];

  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  const handlePageSizeChange = (newPageSize) => {
    if (onPageSizeChange) {
      onPageSizeChange(newPageSize);
    }
  };

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

  const onDownloadClick = () => {
    if (!exportLoading) {
      //getFilter(formValues);
      // cashoutsApi.fetchCashouts({ skip: 0, filter: filter && filter.length ? JSON.stringify(filter) : null }).then(response => {
      //     if (response && response.data) {
      //         const fileType =
      //             "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      //         const fileExtension = ".xlsx";
      //         let result = [];
      //         let listData = response.data.map(row => {
      //             let obj = {};
      //             for (let i = 0; i < columns.length; i++) {
      //                 if (columns[i].field in row) {
      //                     obj[columns[i].headerName] = row[columns[i].field]
      //                 }
      //             }
      //             result.push(obj)
      //         })
      //         const ws = XLSX.utils.json_to_sheet(result);
      //         const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      //         const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      //         const data = new Blob([excelBuffer], { type: fileType });
      //         FileSaver.saveAs(data, ("cashouts-" + new Date().getTime()) + fileExtension);
      //     }
      //     setExportLoading(false)
      // });
      //setExportLoading(true)
    }
  };
  if (!isAdmin) {
    columns = columns.filter((col) => col.field != "store");
  }

  return (
    <>
      <Box
        sx={{
          m: "2rem 2rem",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <Typography
          caption="body2"
          className="text-base"
          sx={{ color: theme.palette.text.grayV }}
        >
          {t("VOUCHERS")}
        </Typography>
        <Box
          sx={{
            Button: {
              padding: "3px 3px",
              color: "#b4b2b7",
              minHeight: "32px",
            },
          }}
        >
          <Button
            variant="outlined"
            color="default"
            size="small"
            aria-label="refresh"
            sx={{
              marginRight: "8px",
            }}
          >
            <FuseSvgIcon size="16px">mv-icons:icon-Masked-Icon</FuseSvgIcon>
          </Button>
          <Button
            variant="outlined"
            color="default"
            size="small"
            aria-label="refresh"
          >
            {t("DOWNLOAD")}
            <FuseSvgIcon className="mx-8" size="16px">
              mv-icons:icon-Uplode_Icon
            </FuseSvgIcon>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          ...dataGridStyles,
          minHeight: "500px",
          width: "100%",
          "& .muirtl-1w8msm6-MuiDataGrid-root .MuiDataGrid-cell:last-of-type": {
            // paddingRight:'0px',
            paddingLeft: "0px",
            justifyContent: "center",
          },
        }}
      >
        {/* <Hidden mdDown> */}
        <DataGrid
          disableVirtualization
          columnBuffer={300} // Adjust buffer space here
          pagination
          rows={sampleDataList}
          getRowId={(row) => row.code}
          rowCount={total?.TotalRecords}
          autoHeight
          columns={columns}
          pageSize={total.PageSize}
          loading={loading}
          page={total.PageNumber - 1}
          disableColumnMenu
          disableColumnFilter
          disableColumnSelector
          sortable={false}
          sortColumn={false}
          disableSelectionOnClick={true}
          sortingMode="server"
          paginationMode="server"
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
          onResize={(e) => {
            console.log("onResize", e);
          }}
          localeText={{
            ...faIR.components.MuiDataGrid.defaultProps.localeText,
            footerTotalVisibleRows: (visibleCount, totalCount) =>
              `${visibleCount.toLocaleString()} از ${totalCount.toLocaleString()}`,
            noRowsLabel: t("NOT_FOUND"),
            MuiTablePagination: {
              labelRowsPerPage: t("ITEMS_PER_PAGE"),
              labelDisplayedRows: ({ from, to, count }) =>
                `${t("ROW_NUMBER")} ${from} ${t("PAGE_TO")} ${to} از ${
                  count !== -1 ? count : `بیشتر از ${to}`
                }`,
            },
          }}
        />
      </Box>

      <Dialog
        open={details.showModal}
        fullScreen={isMobile ? true : false}
        maxWidth="lg"
        fullWidth
        keepMounted
      >
        <DialogTitle>
          <Box className="">
            <FusePageSimpleHeader
              header={t("VOUCHER_DETAIL")}
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
          <VoucherInfo
            info={details.data.voucherInfo}
            onCancelClick={handleClose}
          ></VoucherInfo>
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
  );
};

export default VouchersList;

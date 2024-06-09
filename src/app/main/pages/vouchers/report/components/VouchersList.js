import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useTheme } from "@mui/material/styles";
import {
  Button,
  CircularProgress,
  Chip,
  Typography,
  Hidden,
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



const VouchersList = (props) => {
  const [exportLoading, setExportLoading] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();



  const [details, setDetails] = useState({
    showModal: false,
    data: {},
  });
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleClickOpen = (params) => {
    setDetails({
      showModal: true,
      data: { voucherInfo: params },
    });
  };


  const [sampleDataList, setSampleDataList] = useState(props.data || []);

  const handleRemoveItem = (removedItem) => {
    const updatedList = sampleDataList.filter(item => item.code !== removedItem.code);
    setSampleDataList(updatedList);
  };

  const handleClose = () => {
    setDetails({ showModal: false, data: { voucherInfo: {} } });
  };
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
    isAdmin,
  } = props;

  const statusMap = {
    ACTIVE: t("ACTIVE"),
    CANCELED:t("CANCELED"),
    MERGED: t("MERGED"),
    USED:t("USED"), 
  };
  const statusMapColor = {
    ACTIVE: "successLight",
    CANCELED: "errorLight",
    MERGED: "warningLight",
    USED: "infoLight",
  };
  let columns = [
    {
      minWidth: 10,
      headerName: t("ROW_NUMBER"),
      field: "id",
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "text.primary", fontWeight: "bold" }}
        >
          {params.api.getRowIndex(params.row.code) +
            1 +
            (parseInt(total?.PageNumber) - 1) * total.PageSize}
        </Typography>
      ),
    },
    {
      minWidth: 120,
      headerName: t("VOUCHER_CODE"),
      field: "code",
      flex: 1,
      renderCell: (params) => (
        <Typography variant="body2" className="font-bold">
          {/* { params.row.clientId } */}
          {params.row?.code}
        </Typography>
      ),
    },
    {
      minWidth: 100,
      headerName: t("CURRENCY"),
      field: "currency",
      flex: 1,
      // renderCell: params => (
      //     <Typography variant='body2' sx={{ color: 'text.primary' }}>

      //     </Typography>
      // )
    },
    {
      field: "amount",
      minWidth: 100,
      headerName: t("AMOUNT"),
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "info.main", direction: "ltr" }}
        >
          {params.row.amount.toAmount()}
        </Typography>
      ),
    },
    {
      minWidth: 100,
      headerName: t("TRANSACTION_FEE"),
      field: "wage",
      flex: 1,
    },
    {
      minWidth: 100,
      headerName: t("CHANNEL"),
      field: "channel",
      flex: 1,
    },
    {
      field: "createDate",
      minWidth: 160,
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
    },
    {
      field: "usedDate",
      minWidth: 160,
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
      renderCell: (params) => (
        <Chip
          skin="light"
          //label={params.row.status=="1" ? <Translations  text ="DEPOSITED" /> :  <Translations text="CANCELD" />}
          label={statusMap[params.row.status]}
          color={statusMapColor[params.row.status]}
          sx={{
            textTransform: 'uppercase',
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
                onClick={() => handleRemoveItem(params.row)}
                variant="outlined"
                sx={{ padding: "7px", }}
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
      minWidth: 180,
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
            sx={{}}
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
          m: "2rem 1rem",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <Typography caption="body2" className="text-lg">
          {t("VOUCHERS")}
        </Typography>
      </Box>
      <Box sx={{ ...dataGridStyles, minHeight: "500px", width: '100%' }}>

        <DataGrid
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
          localeText={{
            ...faIR.components.MuiDataGrid.defaultProps.localeText,
            footerTotalVisibleRows: (visibleCount, totalCount) =>
              `${visibleCount.toLocaleString()} از ${totalCount.toLocaleString()}`,
            noRowsLabel: t("NOT_FOUND"),
            MuiTablePagination: {
              labelRowsPerPage: t("ITEMS_PER_PAGE"),
              labelDisplayedRows: ({ from, to, count }) =>
                `${t("ROW_NUMBER")} ${from} ${t("PAGE_TO")} ${to} از ${count !== -1 ? count : `بیشتر از ${to}`
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
        onClose={handleClose}
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
          <VoucherInfo info={details.data.voucherInfo}></VoucherInfo>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VouchersList;

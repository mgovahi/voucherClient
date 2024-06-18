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
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
import { Parameters } from "redoc";
import {
  selectCurrentLanguage,
  selectCurrentLanguageDirection,
} from "app/store/i18nSlice";
import { useSelector } from "react-redux";
const BalanceList = (props) => {
  const [exportLoading, setExportLoading] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectCurrentLanguage);
  const currentDir = useSelector(selectCurrentLanguageDirection);
  const [details, setDetails] = useState({
    showModal: false,
    data: {},
  });
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleClickOpen = (params) => {
    setDetails({
      showModal: true,
      data: { DepositsInfo: params },
    });
  };

  const handleClose = () => {
    setDetails({ showModal: false, data: { DepositsInfo: {} } });
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

  const balanceTypeMap = {
    wallet: t("DEPOSIT"),
    voucher: t("WITHDRAW"),
  };
  const statusMapColor = {
    ACCEPTED: "successLight",
    REJECTED: "errorLight",
    WAITING: "warningLight",
  };

  let columns = [
    {
      minWidth: 20,
      headerName: t("ROW_NUMBER"),
      field: "id",
      sortable: false,
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
      field: "balanceDate",
      minWidth: 160,
      headerName: t("DATE"),
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ direction: currentDir }}>
          {moment(new Date(params.row.balanceDate))
            .locale(currentLanguage.id)
            .format("YYYY-MM-DD - hh:mm:ss")}
        </Typography>
      ),
    },

    {
      field: "balance",
      minWidth: 180,
      headerName: t("AMOUNT"),
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ direction: "ltr", fontFamily: "IRANYekanXNumEn" }}
        >
          {"$" + params.row.balance.toAmount()}
        </Typography>
      ),
    },
    {
      minWidth: 120,
      headerName: t("ACTION"),
      field: "balanceType",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{
            fontWeight:"bold",
            direction: "ltr",
            padding: "4px 20px",
            fontSize: "13px",
            borderRadius: "6px",
            " svg": {
              marginRight: "20px",
            },
          }}
        >
          {params.row.balanceType == "wallet" ? (
            <FuseSvgIcon>mv-icons-mc:icon-icon-menu-admin-income</FuseSvgIcon>
          ) : (
            <FuseSvgIcon>
              mv-icons-mc:icon-icon-menu-vouchers
            </FuseSvgIcon>
          )}

          {balanceTypeMap[params.row.balanceType]}
        </Typography>
      ),
    },
    {
      field: "remaining",
      minWidth: 180,
      headerName: t("REMAINING"),
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ direction: "ltr", fontFamily: "IRANYekanXNumEnBold" }}
        >
          {"$" + params.row.remaining.toAmount()}
        </Typography>
      ),
    },
   
    {
      minWidth: 250,
      headerName: t("TRANSACTION_DESC"),
      field: "transactionDesc",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Typography variant="body2">{params.row.transactionDesc}</Typography>
      ),
    },
    {
      minWidth: 250,
      headerName: t("REF_ID"),
      field: "transactionId",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Typography variant="body2">{params.row.transactionId}</Typography>
      ),
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
        <Typography caption="body2" className="text-lg" sx={{color:theme.palette.text.grayV}}>
          {t("BALANCE")}
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
      <Box sx={{ ...dataGridStyles, minHeight: "500px", width: "100%" }}>
        <DataGrid
          pagination
          rows={data}
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
              `${visibleCount.toLocaleString()} ${t(
                "FROM"
              )} ${totalCount.toLocaleString()}`,
            noRowsLabel: t("NOT_FOUND"),
            MuiTablePagination: {
              labelRowsPerPage: t("ITEMS_PER_PAGE"),
              labelDisplayedRows: ({ from, to, count }) =>
                `${t("ROW_NUMBER")} ${from} ${t("PAGE_TO")} ${to} ${t(
                  "FROM"
                )} ${count !== -1 ? count : `بیشتر از ${to}`}`,
            },
          }}
        />
      </Box>
    </>
  );
};

export default BalanceList;

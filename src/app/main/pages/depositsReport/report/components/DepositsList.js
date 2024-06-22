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
import DepositsInfo from "./DepositsInfo";
const DepositsList = (props) => {
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

  const statusMap = {
    ACCEPTED: t("CONFIRMED"),
    WAITING:t("WAITING"), 
    REJECTED:t("REJECTED") ,
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
          sx={{ color: "text.primary"}}
        >
          {params.api.getRowIndex(params.row.code) +
            1 +
            (parseInt(total?.PageNumber) - 1) * total.PageSize}
        </Typography>
      ),
    },

    {
      field: "deposit",
      minWidth: 180,
      headerName: t("DEPOSIT_TOMAN"),
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ direction: "ltr",fontWeight: "bold"  }}
        >
          {params.row.deposit.toAmount()}
        </Typography>
      ),
    },
    {
      minWidth: 100,
      headerName: t("CREDIT"),
      field: "credit",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "info.main", direction: "ltr",fontWeight: "bold"  }}
        >
          {params.row.credit.toAmount()}
        </Typography>
      ),

    },
    {
      minWidth: 100,
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
      minWidth: 150,
      headerName: t("TRANSACTION_ID"),
      field: "transactionId",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Typography variant="body2">
          {params.row.transactionId}
        </Typography>
      ),
    },
    {
      field: "depositDate",
      minWidth: 180,
      headerName: t("DEPOSIT_DATE"),
      flex: 1,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ direction: "rtl" }}>
          {moment(new Date(params.row.depositDate))
            .locale("fa")
            .format("YYYY-MM-DD - hh:mm:ss")}
        </Typography>
      ),
    },
    {
      minWidth: 50,
      headerName: t("ATTACHMENT_TYPE"),
      field: "attachmentType",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Typography variant="body2">{params.row.attachmentType}</Typography>
      ),
    },
    {
      field: "latestActionDate",
      minWidth: 200,
      headerName: t("LAST_ACTION_DATE"),
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "text.primary", direction: "rtl" }}
        >
          {moment(new Date(params.row.latestActionDate))
            .locale("fa")
            .format("YYYY/MM/DD hh:mm:ss")}
        </Typography>
      ),
    },
    {
      minWidth: 118,
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
      minWidth: 180,
      field: "details",
      sortable: false,
      headerName: t("DETAILS"),
      sortable: false,
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
          m: "2rem 2rem",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <Typography caption="body2"    className="text-base"
       color={theme.palette.text.grayV}>
          {t("DEPOSITS")}
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
      <Box sx={{ ...dataGridStyles, minHeight: "500px" ,width: '100%'}}>
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
          <DepositsInfo info={details.data.DepositsInfo}  onCancelClick={handleClose}></DepositsInfo>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DepositsList;

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

const LogsList = (props) => {
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
      data: { clientInfo: params },
    });
  };

  const handleClose = () => {
    setDetails({ showModal: false });
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
    ACTIVE: "فعال",
    INACTIVE: "غیرفعال",
  };

  let columns = [
    {
      minWidth: 40,
      headerName: t("ROW_NUMBER"),
      field: "id",
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "text.primary", fontWeight: "bold" }}
        >
          {params.api.getRowIndex(params.row.eventId) +
            1 +
            (parseInt(total?.PageNumber) - 1) * total.PageSize}
        </Typography>
      ),
    },
    {
      minWidth: 30,
      headerName: t("USER"),
      field: "userName",
      flex: 1,
      renderCell: (params) => (
        <Typography variant="body2" className="font-bold">
          {/* { params.row.clientId } */}
          {params.row?.userName}
        </Typography>
      ),
    },
    {
      minWidth: 70,
      headerName: t("ACTION"),
      field: "action",
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "info.main", fontWeight: "bold" }}
        >
          {(params?.row?.action)}
        </Typography>
      ),
    },
    {
      minWidth: 80,
      headerName: t("IP"),
      field: "ip",
      flex: 1,
      // renderCell: params => (
      //     <Typography variant='body2' sx={{ color: 'text.primary' }}>
      //         {typeof params.row.wageAmount != undefined ? <Amount text={params.row.wageAmount} hideUnit /> : <></>}
      //     </Typography>
      // )
    },
    {
      field: "eventId",
      minWidth: 100,
      headerName: t("EVENT_ID"),
      flex: 1,
    },
    {
      field: "eventDesc",
      minWidth: 280,
      headerName: t("EVENT_DESC"),
      flex: 1,
  
    },
    {
      field: "dateTime",
      minWidth: 100,
      headerName: t("TIME"),
      flex: 1,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ direction: "ltr" }}>
          {moment(new Date(params.row.dateTime))
            .locale("fa")
            .format("YYYY-MM-DD hh:mm:ss")}
        </Typography>
      ),
    },
    {
      minWidth: 200,
      field: "details",
      sortable: false,
      headerName: t("DETAILS"),
      renderCell: (params) => {
        return (
          <ButtonComponent
            color="info"
            skin="light"
            size="small"
            isLoading={isLoadingData}
            //disabled={isLoading}
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
          {t("LOGS")}
        </Typography>
      </Box>
      <Box sx={{ ...dataGridStyles, minHeight: "500px" }}>
        <DataGrid
          pagination
          rows={data}
          getRowId={(row) => row.eventId}
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
          <Box className="flex flex-row ">
            {
              <Typography
                variant="body2"
                className="text-lg my-12"
                sx={{
                  color: theme.palette.custome.info,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i className="inline-block rounded-xl ml-20 ">
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
                {
                  <FusePageSimpleHeader
                    header={t("LOG_INFO")}
                  ></FusePageSimpleHeader>
                }
              </Typography>
            }
          </Box>
        </DialogTitle>
        <DialogContent>
         
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LogsList;

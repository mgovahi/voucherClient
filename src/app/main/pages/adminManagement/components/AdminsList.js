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
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";;
import { useThemeMediaQuery } from "@fuse/hooks";
import AdminDetails from "./details/AdminDetails";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";

const AdminsList = (props) => {
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
      data: { adminInfo: params },
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
//   console.log("setDetails",data)
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
          {params.api.getRowIndex(params.row.id) +
            1 +
            (parseInt(total?.PageNumber) - 1) * total.PageSize}
        </Typography>
      ),
    },
    {
      minWidth: 30,
      headerName: t("CLIENT_ID"),
      field: "clientId",
      flex: 1,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          {/* { params.row.clientId } */}
          {params.row?.clientId}
        </Typography>
      ),
    },
    {
      minWidth: 70,
      headerName: t("NAME_LAST_NAME"),
      field: "name",
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "text.primary", fontWeight: "bold" }}
        >
          {(params?.row?.firstName || "") + " " + (params?.row?.lastName || "")}
        </Typography>
      ),
    },
    {
      minWidth: 70,
      headerName: t("MOBILE"),
      field: "mobile",
      flex: 1,
      // renderCell: params => (
      //     <Typography variant='body2' sx={{ color: 'text.primary' }}>

      //     </Typography>
      // )
    },
    {
      minWidth: 120,
      headerName: t("EMAIL"),
      field: "email",
      flex: 1,
      // renderCell: params => (
      //     <Typography variant='body2' sx={{ color: 'text.primary' }}>
      //         {typeof params.row.wageAmount != undefined ? <Amount text={params.row.wageAmount} hideUnit /> : <></>}
      //     </Typography>
      // )
    },
    {
      field: "balance",
      minWidth: 100,
      headerName: t("BALANCE"),
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "text.primary", direction: "ltr" }}
        >
          {params.row.balance.toAmount()}
        </Typography>
      ),
    },
    {
      field: "lastLogin",
      minWidth: 100,
      headerName: t("LAST_LOGIN"),
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "text.primary", direction: "ltr" }}
        >
          {moment(new Date(params.row.lastLogin))
            .locale("fa")
            .format("YYYY-MM-DD hh:mm:ss")}
        </Typography>
      ),
    },
    {
      minWidth: 120,
      field: "status",
      headerName: t("STATUS"),
      renderCell: (params) => (
        <Chip
          skin="light"
          //label={params.row.status=="1" ? <Translations  text ="DEPOSITED" /> :  <Translations text="CANCELD" />}
          label={statusMap[params.row.status]}
          color={
            params.row.status == "ACTIVE"
              ? "successLight"
              : params.row.status == "INACTIVE"
              ? "errorLight"
              : ""
          }
          sx={{
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
            // sx={{width: 110, height:38}}
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
          {t("ADMIN")}
        </Typography>
      </Box>
      <Box sx={{ ...dataGridStyles, minHeight: "500px" }}>
        <DataGrid
          pagination
          rows={data}
          getRowId={(row) => row.id}
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
                    header={t("ADMIN_MANAGEMENT")}
                  ></FusePageSimpleHeader>
                }
              </Typography>
            }
          </Box>
        </DialogTitle>
        <DialogContent>
          <AdminDetails
            onCancelClick={handleClose}
           adminInfo={details.data ? details.data.adminInfo : {}}
          ></AdminDetails>
        </DialogContent>
      </Dialog>
      
    </>
  );
};

export default AdminsList;

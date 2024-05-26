import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Button, Box, Typography, Chip, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import { dataGridStyles } from "app/shared-components/DataGridStyles";
import { DataGrid, faIR } from "@mui/x-data-grid";
import moment from "jalali-moment";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
function LatestReceivables({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [vouchersData, setVouchersData] = useState(sampleData);

  const loading = false;
  const statusMap = {
    ACCEPTED: "تایید شده",
    WAITING: "در انتظار تایید",
    REJECTED: "رد شده",
  };
  const handleClickOpen = () => {};
  let columns = [
    {
      minWidth: 140,
      headerName: t("CLIENT"),
      field: "client",
      renderCell: (params) => (
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          {params.row.client}
        </Typography>
      ),
    },
    {
      minWidth: 140,
      headerName: t("DEPOSIT_TOMAN"),
      field: "deposit",
      renderCell: (params) => (
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          {params.row.deposit.toAmount()}
        </Typography>
      ),
    },
    {
      minWidth: 100,
      headerName: t("AMOUNT"),
      field: "credit",
      flex: 1,
      renderCell: (params) => (
        <Typography
          sx={{ color: "info.main", direction: "ltr", fontWeight: "bold" }}
        >
          {params.row.credit.toAmount()}
        </Typography>
      ),
    },
    {
      minWidth: 60,
      headerName: t("CURRENCY"),
      field: "currency",
      renderCell: (params) => (
        <Typography variant="body2">{params.row.currency}</Typography>
      ),
    },
    {
      minWidth: 160,
      headerName: t("TRANSACTION_ID"),
      field: "transactionId",
      renderCell: (params) => (
        <Typography variant="body2">{params.row.transactionId}</Typography>
      ),
    },
    {
      field: "depositDate",
      minWidth: 160,
      headerName: t("DEPOSIT_DATE"),
      flex: 1,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ direction: "rtl" }}>
          {moment(new Date(params.row.depositDate))
            .locale("fa")
            .format("YYYY/MM/DD - hh:mm:ss")}
        </Typography>
      ),
    },
    {
      field: "attachmentType",
      minWidth: 130,
      headerName: t("ATTACHMENT_TYPE"),
      renderCell: (params) => (
        <Typography variant="body2">{params.row.attachmentType}</Typography>
      ),
    },
    {
      field: "latestDate",
      minWidth: 180,
      headerName: t("LAST_ACTION_DATE"),
      flex: 1,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ direction: "rtl" }}>
          {moment(new Date(params.row.latestDate))
            .locale("fa")
            .format("YYYY/MM/DD - hh:mm:ss")}
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
          label={statusMap[params.row.status]}
          color={
            params.row.status == "ACCEPTED"
              ? "successLight"
              : params.row.status == "WAITING"
              ? "warningLight"
              : params.row.status == "REJECTED"
              ? "errorLight"
              : "successLight"
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
            //disabled={isLoading}
            isLoading={loading}
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
  return (
    <Paper>
      <FusePageSimpleHeader
        header={t("LATEST_RECEIVABLES")}
        inner
        headerActions={
          <>
            <Button
              className="py-10 px-28 min-h-full h-[42px] rounded-[5px] flex gap-8"
              variant="contained"
              color="primary"
              endIcon={
                <FuseSvgIcon sx={{ stroke: "transparent !important" }}>
                  mv-icons:icon-ListAlt
                </FuseSvgIcon>
              }
            >
              {t("REPORT")}
            </Button>
          </>
        }
      ></FusePageSimpleHeader>
      <Box sx={{ ...dataGridStyles, minHeight: "150px", mt: "20px" }}>
        <DataGrid
          pagination={null}
          rows={vouchersData}
          getRowId={(row) => row.transactionId}
          autoHeight
          columns={columns}
          loading={loading}
          disableColumnMenu
          disableColumnFilter
          disableColumnSorting={true}
          sortable={false}
          sortColumn={false}
          disableSelectionOnClick={true}
          hideFooterPagination
        />
      </Box>
    </Paper>
  );
}

const sampleData = [
  {
    currency: "USD",
    deposit: "14718600",
    credit: "2450.00",
    depositDate: new Date().getTime(),
    latestDate: new Date().getTime(),
    transactionId: "VP12350xp12301",
    attachmentType: "فیش بانکی",
    status: "ACCEPTED",
    client: "نوید خیراللهی",
  },
  {
    currency: "USD",
    deposit: "15287250",
    credit: "",
    depositDate: new Date().getTime(),
    latestDate: new Date().getTime(),
    transactionId: "VP12350xp12893",
    attachmentType: "سایر اقلام",
    status: "WAITING",
    client: "آرش توکلی",
  },
  {
    currency: "USD",
    deposit: "18555890",
    credit: "",
    depositDate: new Date().getTime(),
    latestDate: new Date().getTime(),
    transactionId: "VP12350xp18490",
    attachmentType: "سایر اقلام",
    status: "REJECTED",
    client: "محسن تقی زاده",
  },
  {
    currency: "USD",
    deposit: "18555890",
    credit: "",
    depositDate: new Date().getTime(),
    latestDate: new Date().getTime(),
    transactionId: "VP12350xp18491",
    attachmentType: "فیش بانکی",
    status: "REJECTED",
    client: "نوید خیراللهی",
  },
  {
    currency: "USD",
    deposit: "147186000",
    credit: "2450.00",
    depositDate: new Date().getTime(),
    latestDate: new Date().getTime(),
    transactionId: "VP12350xp18492",
    attachmentType: "فیش بانکی",
    status: "ACCEPTED",
    client: "آرش توکلی",
  },
];
export default LatestReceivables;

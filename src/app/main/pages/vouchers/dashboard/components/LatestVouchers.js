import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Button, Box, Typography, Chip, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import LoadingButton from "@mui/lab/LoadingButton";
import FusePageSimple from "@fuse/core/FusePageSimple";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import { dataGridStyles } from "app/shared-components/DataGridStyles";
import { DataGrid, faIR } from "@mui/x-data-grid";
import moment from "jalali-moment";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
function LatestVouchers({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [vouchersData, setVouchersData] = useState(SampleData);

  const loading = false;
  const statusMap = {
    ACTIVE: "فعال",
    USED: "مصرف شده",
    CANCELED: "لغو شده",
  };
  const handleClickOpen = () => {};
  let columns = [
    {
      minWidth: 180,
      headerName: t("VOUCHER_CODE"),
      field: "code",
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "text.primary", fontWeight: "bold" }}
        >
          {params.row.code}
        </Typography>
      ),
    },
    {
      headerName: t("CLIENT"),
      field: "client",
      flex: 1,
    },
    {
      headerName: t("CURRENCY"),
      field: "currency",
      flex: 1,
    },
    {
      minWidth: 160,
      headerName: t("AMOUNT"),
      field: "amount",
      flex: 1,
      renderCell: (params) => (
        <Typography
          sx={{ color: "info.main", direction: "ltr", fontWeight: "bold" }}
        >
          {params.row.amount.toAmount()}
        </Typography>
      ),
    },
    {
      headerName: t("CHANNEL"),
      field: "channel",
      flex: 1,
      renderCell: (params) => params.row.channel,
    },
    {
      field: "createDate",
      minWidth: 160,
      headerName: t("CREATE_DATE"),
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "text.primary", direction: "ltr" }}
        >
          {moment(new Date(params.row.createDate))
            .locale("fa")
            .format("YYYY/MM/DD - hh:mm:ss")}
        </Typography>
      ),
    },
    {
      minWidth: 280,
      headerName: t("TRANSACTION_ID"),
      field: "transactionId",
      flex: 1,
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
            params.row.status == "ACTIVE"
              ? "successLight"
              : params.row.status == "USED"
              ? "infoLight"
              : params.row.status == "CANCELED"
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
        header={t("LATEST_VOUCHERS")}
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
              {t("VOUCHERS_REPORT")}
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

const SampleData = [
  {
    code: "1*34*4*12*3",
    currency: "USD",
    amount: "145456800",
    channel: "پنل",
    createDate: new Date().getTime(),
    transactionId: "8sdgfu-3456dfh-346dsg-dg4y",
    status: "ACTIVE",
    client: "نوید خیراللهی",
  },
  {
    code: "1*34*4*12*3",
    currency: "USD",
    amount: "145456800",
    channel: "سایت",
    createDate: new Date().getTime(),
    transactionId: "8sdgfu-3456dfh-346dsg-dg4w",
    status: "USED",
    client: "آرش توکلی",
  },
  {
    code: "1*34*4*12*3",
    currency: "USD",
    amount: "145456800",
    channel: "api",
    createDate: new Date().getTime(),
    transactionId: "8sdgfu-3456dfh-346dsg-dg4x",
    status: "CANCELED",
    client: "محسن تقی زاده",
  },
  {
    code: "1*34*4*12*3",
    currency: "USD",
    amount: "145456800",
    channel: "پنل",
    createDate: new Date().getTime(),
    transactionId: "8sdgfu-3456dfh-346dsg-dg4v",
    status: "ACTIVE",
    client: "نوید خیراللهی",
  },
  {
    code: "1*34*4*12*3",
    currency: "USD",
    amount: "145456800",
    channel: "سایت",
    createDate: new Date().getTime(),
    transactionId: "8sdgfu-3456dfh-346dsg-dg4z",
    status: "ACTIVE",
    client: "آرش توکلی",
  },
];
export default LatestVouchers;

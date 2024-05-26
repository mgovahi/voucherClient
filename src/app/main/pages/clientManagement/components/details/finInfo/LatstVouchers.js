import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Button, Box, Typography, Chip } from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import { dataGridStyles } from "app/shared-components/DataGridStyles";
import { DataGrid, faIR } from "@mui/x-data-grid";
import moment from "jalali-moment";
function LatestVouchers({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [vouchersData, setVouchersData] = useState(SampleData);

  const loading = false;
  const statusMap = {
    ACTIVE: "فعال",
    INACTIVE: "غیرفعال",
  };
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
      headerName: t("CURRENCY"),
      field: "currency",
      flex: 1,
    },
    {
      minWidth: 160,
      headerName: t("AMOUNT"),
      field: "amount",
      flex: 1,
      renderCell: (params) => params.row.amount.toAmount(),
    },
    {
      headerName: t("WAGE"),
      field: "fee",
      flex: 1,
      renderCell: (params) => params.row.fee.toAmount(),
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
            .format("YYYY-MM-DD hh:mm:ss")}
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
  ];
  return (
    <Box className="w-full">
      <FusePageSimpleHeader
        header={t("LATEST_CLIENT_VOUCHERS")}
        inner
        headerActions={
          <>
            <Button
              className="py-10 px-28 min-h-full h-[42px] rounded-[5px] flex gap-8"
              variant="contained"
              color="info"
              endIcon={
                <FuseSvgIcon sx={{ stroke: "transparent !important" }}>
                  mv-icons:icon-ListAlt
                </FuseSvgIcon>
              }
            >
              {t("CLIENT_VOUCHERS_REPORT")}
            </Button>
          </>
        }
      ></FusePageSimpleHeader>
      <Box sx={{ ...dataGridStyles, minHeight: "150px", mt: "20px" }}>
        <DataGrid
          pagination={null}
          rows={vouchersData}
          getRowId={(row) => row.code}
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
    </Box>
  );
}

const SampleData = [
  {
    code: "1*34*4*12*3",
    currency: "USD",
    amount: "145456800",
    fee: "15200",
    createDate: new Date().getTime(),
    transactionId: "8sdgfu-3456dfh-346dsg-dg4y",
    status: "ACTIVE",
  },
];
export default LatestVouchers;

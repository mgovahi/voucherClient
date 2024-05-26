import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Button, Box, Typography, Chip } from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import LoadingButton from "@mui/lab/LoadingButton";
import FusePageSimple from "@fuse/core/FusePageSimple";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import { dataGridStyles } from "app/shared-components/DataGridStyles";
import { DataGrid, faIR } from "@mui/x-data-grid";
import moment from "jalali-moment";
function LatestDeposits({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [vouchersData, setVouchersData] = useState(SampleData);
  const loading = false;

  const statusMap = {
    APPROVED: "تایید شده",
    DECLINED: "لغو شده",
  };
  let columns = [
    {
      minWidth: 145,
      headerName: t("DEPOSIT_TOMAN"),
      field: "depAmount",
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "text.primary", fontWeight: "bold" }}
        >
          {params.row.depAmount.toAmount()}
        </Typography>
      ),
    },
    {
      minWidth: 140,
      headerName: t("CREDIT"),
      field: "credit",
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "info.main", fontWeight: "bold" }}
        >
          {params.row.credit.toAmount()}
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
      headerName: t("TRANSACTION_ID"),
      field: "transactionId",
      flex: 1,
    },
    {
      field: "depositDate",
      minWidth: 155,
      headerName: t("DEPOSIT_DATE"),
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "text.primary", direction: "ltr" }}
        >
          {moment(new Date(params.row.depositDate))
            .locale("fa")
            .format("YYYY/MM/DD hh:mm:ss")}
        </Typography>
      ),
    },
    {
      minWidth: 130,
      headerName: t("ATTACHMENT_TYPE"),
      field: "attachmentType",
      flex: 1,
    },
    {
      field: "latestActionDate",
      minWidth: 170,
      headerName: t("LAST_ACTION_DATE"),
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "text.primary", direction: "ltr" }}
        >
          {moment(new Date(params.row.latestActionDate))
            .locale("fa")
            .format("YYYY/MM/DD hh:mm:ss")}
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
            params.row.status == "APPROVED"
              ? "successLight"
              : params.row.status == "DECLINED"
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
        header={t("LAST_CLIENT_DEPOSIT")}
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
              {t("CLIENT_RECIEVED_REPORT")}
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
    </Box>
  );
}

const SampleData = [
  {
    depAmount: "15456440000",
    credit: "24560000",
    currency: "USD",
    transactionId: "VP12350xp12301",
    depositDate: new Date().getTime(),
    attachmentType: "فیش بانکی",
    latestActionDate: new Date().getTime(),
    status: "APPROVED",
  },
];
export default LatestDeposits;

import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useTheme } from "@mui/material/styles";
import {
    Button,
    Chip,
    Typography,
    Switch,
    FormControlLabel,
} from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, faIR } from "@mui/x-data-grid";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { dataGridStyles } from "app/shared-components/DataGridStyles";
import { useTranslation } from "react-i18next";
// import moment from "jalali-moment";
import { useDispatch } from "react-redux";



const AccountsList = (props) => {
    const [exportLoading, setExportLoading] = useState(false);
    const { t } = useTranslation();
    const theme = useTheme();
    const dispatch = useDispatch();

    // const [details, setDetails] = useState({
    //     showModal: false,
    //     data: {},
    // });
    // const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("sm"));

    // const handleClose = () => {
    //     setDetails({ showModal: false });
    // };

    const {
        data,
        total,
        loading,
        isAdmin,
    } = props;

    const [accountStatus, setAccountStatus] = useState({});

    const statusMap = {
        ACTIVE: "فعال",
        INACTIVE: "غیرفعال",
    };


    const handleStatusChange = (accountId) => (event) => {
        const newStatus = event.target.checked ? 'ACTIVE' : 'INACTIVE';
        setAccountStatus((prevStatus) => ({
            ...prevStatus,
            [accountId]: newStatus,
        }));
    };
    console.log(data, "1212")

    let columns = [

        {
            minWidth: 30,
            headerName: t("ACCOUNT_NUMBER"),
            field: "accountNumber",
            flex: 1,
            renderCell: (params) => (
                <>
                    <Typography className="font-bold "
                        sx={{ fontSize: "14px", }}
                    >
                        <Chip
                            //   color={theme.primary}
                            sx={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                mr: "10px",
                                backgroundColor: theme.palette.primary.light,


                            }}

                            label={
                                <FuseSvgIcon
                                    size={20}

                                    className=""
                                    sx={{
                                        stroke: "transparent !important", display: "block!important"
                                    }}

                                >
                                    mv-icons-mc:icon-Bank
                                </FuseSvgIcon>
                            }
                        >
                        </Chip>
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.primary", fontWeight: "bold" }}>
                        {params.row?.accountNumber}
                    </Typography>
                </>
            ),
        },
        {
            minWidth: 30,
            headerName: t("BANK"),
            field: "name",
            flex: 1,
            renderCell: (params) => (

                <Typography
                    variant="body2"
                    sx={{ color: "text.grayDay", }}
                >
                    {(params?.row?.bank || "")}
                </Typography>
            ),
        },

        {
            minWidth: 30,
            headerName: t("STATUS"),
            field: "status",
            flex: 1,
            renderCell: params => (
                <>
                    <FormControlLabel

                        control={<Switch color="primary"

                            checked={accountStatus[params.row.id] === 'ACTIVE'}
                            onChange={handleStatusChange(params.row.id)}
                        />}

                        label={statusMap[accountStatus[params.row.id] || 'INACTIVE']}
                        labelPlacement="end"
                    />
                </>
            )
        }

    ];

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
                <Typography caption="body1" className="text-14 px-10 pt-24">
                    <span style={{ color: `${theme.palette.error.main}` }} >{t("ATTENTION")}:</span>
                    <span style={{ color: `${theme.palette.text.secondary}` }} >{t("BANK_ACCOUNTS_HELPER")}</span>

                </Typography>
            </Box>
            <Box sx={{ ...dataGridStyles, minHeight: "200px" }}>
                <DataGrid
                    pagination={null}
                    rows={data}
                    getRowId={(row) => row.id}
                    // rowCount={total?.TotalRecords}
                    autoHeight
                    columns={columns}
                    loading={loading}
                    disableColumnMenu
                    disableColumnFilter
                    disableColumnSelector
                    sortable={false}
                    sortColumn={false}
                    disableSelectionOnClick={true}
                    hideFooterPagination
                    sortingMode="server"
                    disableColumnSorting={true}
                />
            </Box>
            <Typography caption="body1" className="text-14 px-40 pb-32 mb-40">

                <span style={{ color: `${theme.palette.text.grayDay}` }} >{t("BANK_ACCOUNT_NUMBER")}</span>
                <span style={{ color: `${theme.palette.text.grayDay}`, marginRight: '5px' }}>{data.length}</span>

            </Typography>

        </>
    );
};

export default AccountsList;

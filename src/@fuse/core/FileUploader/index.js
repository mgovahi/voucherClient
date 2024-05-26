// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
// ** Third Party Imports
import FuseSvgIcon from '../FuseSvgIcon/FuseSvgIcon'
import { useDropzone } from 'react-dropzone'

import FormHelperText from '@mui/material/FormHelperText'
import { CircularProgress } from "@mui/material";
import { useTranslation } from 'react-i18next'

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(4)
    }
}))

const FileUploaderSingle = (props) => {
    // ** State
    const [file, setFile] = useState({})
    const { value, readOnly, disabled } = props;
    const { t } = useTranslation();
    // ** Hook
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        multiple: false,
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif']
        },
        onDrop: acceptedFiles => {
            setFile(acceptedFiles[0])
            if (props.onChange) {
                props.onChange(acceptedFiles[0])
            }

        }
    })

    const handleLinkClick = event => {
        event.preventDefault()
    }

    const handleFileRemove = (e) => {
        e.stopPropagation();
        if (disabled) {
            return
        }
        setFile({});
        props.onChange({});
    }


    return (
        <>
            <input {...getInputProps()} />
            <InputLabel sx={{ backgroundColor: "#fff" }}
                htmlFor={props.id} error={props.error}>
                {props.label}
            </InputLabel>
            <OutlinedInput
                {...getRootProps({ className: 'dropzone' })}
                type={'text'}
                sx={{ width: "100%" }}
                id={props.id}
                value={value ? value : file && file.name ? file.name : ""}
                readOnly={readOnly}
                disabled={disabled}
                error={props.error}

                inputProps={{
                    sx: {
                        fontFamily: "IransansxRE !important"
                    }
                }}
                endAdornment={
                    <InputAdornment position="end" sx={{ marginLeft: "0" }} >
                        {/* { file.name || value ?
                 <CloseCircleOutline
                 sx={{cursor:"pointer"}}
                 onClick={handleFileRemove} /> :  */}
                        {
                            props.loading ? <CircularProgress size={16} /> : <FuseSvgIcon >ob_icons:icon-paper-upload</FuseSvgIcon>
                        }
                    </InputAdornment>
                } />
            {
                props.error ? props.errorsText.map(error => <FormHelperText >
                    {t("error")}
                </FormHelperText>) : props.helperText && <FormHelperText >
                    {props.helperText}
                </FormHelperText>
            }
        </>
    )
}

export default FileUploaderSingle
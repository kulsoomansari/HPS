import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'
import NumberFormat from 'react-number-format';
import axios from 'axios'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import GlobalHeader from './Header';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
//Dropdown  Gender
const Gender = [
    {
        value: '',
        label: '',
    },
    {
        value: 'Male',
        label: 'Male',
    },
    {
        value: 'Female',
        label: 'Female',
    },
];
function Services({ handleNext, handleBack, step, handleClose }) {
    const classes = useStyles();
    const [Header, setHeader] = useState({
        TokenNo: "",
        ServiceDate: new Date(),
        // MRNo: recID,
        Ward: "",
        Amount: "",
        TotalAmount: "",
        PatientContribution: "",
        Remarks: "",
        CreatedUser: "Admin",
        ModifyUser: "Admin"
    })
    const [gender, setGender] = useState('');
    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleSubmit = () => {
        let payload = {
            Header,
        }
        console.log(payload)
    }
    return (
        <>
            <h2>Services</h2>
            <GlobalHeader handleSubmit={handleSubmit} handleBack={handleBack} step={step} handleClose={handleClose} />
        </>
    )
}

export default Services






























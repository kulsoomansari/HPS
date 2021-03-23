import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NumberFormat from 'react-number-format';
import Checkbox from '@material-ui/core/Checkbox';
import GlobalHeader from './Header';
import axios from 'axios'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

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
//Dropdown RELIGION
const Religion = [
    {
        value: '',
        label: '',
    },
    {
        value: 'islam',
        label: 'islam',
    },
    {
        value: 'other',
        label: 'other',
    },
];
//Dropdown helptype
const HelpType = [
    {
        value: '',
        label: '',
    },
    {
        value: 'zakat',
        label: 'zakat',
    },
    {
        value: 'other',
        label: 'other',
    },
];
// checkboxes
// const GreenCheckbox = withStyles({
//     root: {
//         color: green[400],
//         '&$checked': {
//             color: green[600],
//         },
//     },
//     checked: {},
// })((props) => <Checkbox color="default" {...props} />);


function Register({ handleNext, handleBack }) {
    const classes = useStyles();
    const [Header, setHeader] = useState({
        MRNo: "",
        TokenNo: "",
        RegistrationDate: new Date(),
        Name: "",
        FatherOrHusband: "",
        DOB: new Date(),
        Age: "",
        Gender: "",
        Religion: "",
        District: "",
        City: "",
        Area: "",
        HousNo: "",
        Address: "",
        CNIC: "",
        Phone: "",
        OffPhone: "",
        Mobile: "",
        RefBy: "",
        Remarks: "",
        IsRejected: "false",
        IsZakat: "false",
        IsPAFEmp: "false",
        MonthlyConsLimit: 0,
        // ThumbImage: "",
        NOY: "",
        // EmpID: "",
        IsStaff: "false",
        CreateUser: "Admin",
        ModifyUser: "Admin",
        CreateDate: new Date,
        ModifyDate: new Date
    });
    const [gender, setGender] = useState('');
    const [religion, setReligion] = useState('');
    const [help, setHelp] = useState('');
    const [state, setState] = useState({
        checkedA: false,
        checkedB: false,
        checkedF: false,
        checkedG: false,
    });
    const [err, setErr] = useState('')
    const [open, setOpen] = useState(false)
    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const handleReligion = (event) => {
        setReligion(event.target.value);
    };
    const handleHelp = (event) => {
        setHelp(event.target.value);
    };
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const validate = () => {
        if (Header.TokenNo === '' || Header.TokenNo === undefined || Header.TokenNo === null) {
            setErr('Token is missing')
            setOpen(true)
            return false;
        }
        else if (Header.RegistrationDate === '' || Header.RegistrationDate === undefined || Header.RegistrationDate === null) {
            setErr('RegistrationDate is missing')
            return false;
        }
        else if (Header.Name === '' || Header.Name === undefined || Header.Name === null) {
            setErr('Name is missing')
            return false;
        }
        else if (Header.FatherOrHusband === '' || Header.FatherOrHusband === undefined || Header.FatherOrHusband === null) {
            setErr('FatherOrHusband is missing')
            return false;
        }
        else if (Header.DOB === '' || Header.DOB === undefined || Header.DOB === null) {
            setErr('Date of Birth is missing')
            return false;
        }
        else if (Header.Age === '' || Header.Age === undefined || Header.Age === null) {
            setErr('Age is missing')
            return false;
        }
        else if (Header.Gender === '' || Header.Gender === undefined || Header.Gender === null) {
            setErr('Gender is missing')
            return false;
        }
        else if (Header.Religion === '' || Header.Religion === undefined || Header.Religion === null) {
            setErr('Religion is missing')
            return false;
        }
        else if (Header.IsZakat === '' || Header.IsZakat === undefined || Header.IsZakat === null) {
            setErr('Zakaat is missing')
            return false;
        }
        else if (Header.CNIC === '' || Header.CNIC === undefined || Header.CNIC === null) {
            setErr('CNIC is missing')
            return false;
        }

        else if (Header.HousNo === '' || Header.HousNo === undefined || Header.HousNo === null) {
            setErr('House No is missing')
            return false;
        }
        else if (Header.Address === '' || Header.Address === undefined || Header.Address === null) {
            setErr('Address is missing')
            return false;
        }
        else if (Header.Area === '' || Header.Area === undefined || Header.Area === null) {
            setErr('Area is missing')
            return false;
        }
        else if (Header.City === '' || Header.City === undefined || Header.City === null) {
            setErr('Ciy is missing')
            return false;
        }

        else if (Header.Mobile === '' || Header.Mobile === undefined || Header.Mobile === null) {
            setErr('Mobile is missing')
            return false;
        }
        else if (Header.EmpID === '' || Header.EmpID === undefined || Header.EmpID === null) {
            setErr('Employee ID is missing')
            return false;
        }
        else if (Header.NOY === '' || Header.Name === undefined || Header.Name === null) {
            setErr('NOY is missing')
            return false;
        }
        else if (Header.IsPAFEmp === '' || Header.IsPAFEmp === undefined || Header.IsPAFEmp === null) {
            setErr('PAF Employee is missing')
            return false;
        }

        else if (Header.IsRejected === '' || Header.IsRejected === undefined || Header.IsRejected === null) {
            setErr('Rejection is missing')
            return false;
        }

        else {
            return true;
        }
    }
    const handleSubmit = () => {
        axios.post("http://localhost:4000/api/Register/add", Header)
            .then(res => {
                console.log(res.data)
                handleNext();
            })
            .catch(err => console.log('error', err))
    }
    return (
        <>
            <h2>Registration</h2>
            <GlobalHeader handleSubmit={handleSubmit} handleBack={handleBack} />
            <div className={classes.root} className="overflow">
                <Grid container spacing={3} className="row1">
                    <Grid item xs={3}>
                        <NumberFormat allowLeadingZeros={true}
                            format="#####"
                            customInput={TextField}
                            fullWidth
                            id="MRNo"
                            placeholder="MR #"
                            label="MR no"
                            onChange={(e) => setHeader({ ...Header, MRNo: (e.target.value) })}
                            variant="outlined"
                            value={Header.MRNo}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <NumberFormat allowLeadingZeros={true}
                            format="###"
                            customInput={TextField}
                            fullWidth
                            id="TokenNo"
                            onChange={(e) => setHeader({ ...Header, TokenNo: Number(e.target.value) })}
                            placeholder="Token no"
                            label="Token no"
                            value={Header.TokenNo}
                            variant="outlined"
                        />
                    </Grid>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid item xs={3}>
                            <KeyboardDatePicker
                                autoOk
                                variant="inline"
                                inputVariant="outlined"
                                label="Registration Date"
                                id="RegistrationDate"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                InputAdornmentProps={{ position: "start" }}
                                onChange={date => handleDateChange(date)}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <Grid item xs={3}>
                        <TextField
                            fullWidth
                            id="Name"
                            placeholder="Name"
                            label="Name"
                            value={Header.Name}
                            onChange={(e) => setHeader({ ...Header, Name: e.target.value })}
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3} className="row2">
                    <Grid item xs={3}>
                        <TextField
                            fullWidth
                            id="FatherOrHusband"
                            label="Father/Husband name"
                            value={Header.FatherOrHusband}
                            placeholder="Father Name"
                            onChange={(e) => setHeader({ ...Header, FatherOrHusband: e.target.value })}
                            variant="outlined"
                        />
                    </Grid>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid item xs={3}>
                            <KeyboardDatePicker
                                autoOk
                                variant="inline"
                                inputVariant="outlined"
                                label="Date of birth"
                                id="DOB"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                InputAdornmentProps={{ position: "start" }}
                                onChange={date => handleDateChange(date)}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <Grid item xs={3}>
                        <TextField
                            fullWidth
                            label="Age"
                            id="Age"
                            type="number"
                            value={Header.Age}
                            onChange={(e) => setHeader({ ...Header, Age: Number(e.target.value) })}
                            variant="outlined"
                        />

                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            fullWidth
                            id="Gender"
                            select
                            label="Gender"
                            value={Header.Gender}
                            onChange={handleChange, (e) => setHeader({ ...Header, Gender: e.target.value })}
                            variant="outlined"
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {Gender.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className="row3">
                    <Grid item xs={3}>
                        <TextField
                            id="Religion"
                            fullWidth
                            select
                            label="Religion"
                            value={Header.Religion}
                            onChange={handleReligion, (e) => setHeader({ ...Header, Religion: e.target.value })}
                            variant="outlined"
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {Religion.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            id="HelpType"
                            fullWidth
                            select
                            label="HelpType"
                            value={Header.HelpType}
                            onChange={handleHelp, (e) => setHeader({ ...Header, HelpType: e.target.value })}
                            variant="outlined"
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {HelpType.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <NumberFormat
                            format="##### ####### #"
                            mask="_"
                            label="CNIC"
                            id="CNIC"
                            value={Header.CNIC}
                            customInput={TextField}
                            variant="outlined"
                            fullWidth
                            onChange={(e) => setHeader({ ...Header, CNIC: e.target.value })}
                        />
                    </Grid>
                </Grid>
                <fieldset className="contact">
                    <legend>Contact</legend>
                    <Grid container spacing={3} className="row4">
                        <Grid item sm={3}>
                            <TextField
                                fullWidth
                                id="HousNo"
                                placeholder="House no"
                                value={Header.HousNo}
                                onChange={(e) => setHeader({ ...Header, HousNo: e.target.value })}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item sm={3}>
                            <TextField
                                id="Address"
                                label="Address"
                                fullWidth
                                value={Header.Address}
                                placeholder="Address"
                                onChange={(e) => setHeader({ ...Header, Address: e.target.value })}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item sm={3}>
                            <TextField
                                id="Area"
                                fullWidth
                                placeholder="Area"
                                label="Area"
                                value={Header.Area}
                                onChange={(e) => setHeader({ ...Header, Area: e.target.value })}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item sm={3}>
                            <TextField
                                fullWidth
                                id="District"
                                label="District"
                                value={Header.District}
                                placeholder="District"
                                onChange={(e) => setHeader({ ...Header, District: e.target.value })}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} className="row4">
                        <Grid item sm={3}>
                            <TextField
                                fullWidth
                                id="City"
                                placeholder="City"
                                value={Header.City}
                                onChange={(e) => setHeader({ ...Header, City: e.target.value })}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item sm={3}>
                            <TextField
                                fullWidth
                                id="Phone"
                                placeholder="Phone 1"
                                value={Header.Phone}
                                onChange={(e) => setHeader({ ...Header, Phone: e.target.value })}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item sm={3}>
                            <TextField
                                fullWidth
                                id="OffPhone"
                                value={Header.OffPhone}
                                placeholder="Phone 2"
                                onChange={(e) => setHeader({ ...Header, OffPhone: e.target.value })}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item sm={3}>
                            <TextField
                                fullWidth
                                id="Mobile"
                                value={Header.Mobile}
                                placeholder="Mobile"
                                onChange={(e) => setHeader({ ...Header, Mobile: e.target.value })}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} className="row4">
                        <Grid item sm={3}>
                            <TextField
                                fullWidth
                                type="number"
                                id="MonthlyConsLimit"
                                value={Header.MonthlyConsLimit}
                                label="monthly consumtion limit"
                                onChange={(e) => setHeader({ ...Header, MonthlyConsLimit: e.target.value })}
                                placeholder="0"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </fieldset>
                <fieldset className="reffer">
                    <legend>Reffer Info</legend>
                    <Grid container spacing={3} className="row4">
                        <Grid item sm={3}>
                            <TextField
                                fullWidth
                                id="RefBy"
                                value={Header.RefBy}
                                placeholder="Referred By"
                                onChange={(e) => setHeader({ ...Header, RefBy: e.target.value })}
                                variant="outlined"
                            />
                        </Grid>
                        {/* <Grid item sm={3}>
                            <TextField
                                fullWidth
                                id="EmpID"
                                value={Header.EmpID}
                                placeholder="Employe Id"
                                onChange={(e) => setHeader({ ...Header, EmpID: e.target.value })}
                                variant="outlined"
                            />
                        </Grid> */}
                        <Grid item sm={3}>
                            <NumberFormat
                                format="#####"
                                customInput={TextField}
                                fullWidth
                                id="NOY"
                                placeholder="NOY"
                                label="NOY"
                                onChange={(e) => setHeader({ ...Header, NOY: e.target.value })}
                                variant="outlined"
                                value={Header.NOY}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} className="row4">
                        <Grid item sm={6}>
                            <TextField
                                fullWidth
                                id="Remarks"
                                value={Header.Remarks}
                                placeholder="Remarks"
                                onChange={(e) => setHeader({ ...Header, Remarks: e.target.value })}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </fieldset>
                <fieldset className="staff">
                    <legend>Staff</legend>
                    <Grid container className="row4">
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox name="checkedC" />} label="Is PAF employee"
                                id="IsPAFEmp"
                                value={Header.IsPAFEmp}
                                onChange={(e) => setHeader({ ...Header, IsPAFEmp: e.target.value })}
                            />
                            <FormControlLabel control={<Checkbox name="checkedC" />} label="Is Rejected"
                                id="IsRejected"
                                value={Header.IsRejected}
                                onChange={(e) => setHeader({ ...Header, IsRejected: e.target.value })}
                            />
                            <FormControlLabel control={<Checkbox name="checkedC" />} label="Is staff"
                                id="IsStaff"
                                value={Header.IsStaff}
                                onChange={(e) => setHeader({ ...Header, IsStaff: e.target.value })}
                            />
                        </FormGroup>
                    </Grid>
                </fieldset>
            </div>
        </>
    )
}

export default Register

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NumberFormat from 'react-number-format';
import Checkbox from '@material-ui/core/Checkbox';
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
const formName = "Registration Form";
//Dropdown  Gender
const Gender = [
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
        value: 'zakat',
        label: 'zakat',
    },
    {
        value: 'other',
        label: 'other',
    },
];
//checkboxes
const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);
function Services({ handleNext, handleBack }) {
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
        IsRejected: false,
        IsZakat: false,
        IsPAFEmp: false,
        MonthlyConsLimit: 0,
        ThumbImage: "",
        NOY: "",
        EmpID: "",
        IsStaff: false,
        CreateUser: "",
        ModifyUser: "",
        CreateDate: "",
        ModifyDate: ""
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
    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const handleReligion = (event) => {
        setReligion(event.target.value);
    };
    const handleHelp = (event) => {
        setHelp(event.target.value);
    };
    const handleChecked = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <>
            <h2>Registration</h2>
            <GlobalHeader handleNext={handleNext} handleBack={handleBack} />
            <div className={classes.root} className="overflow">
                <Grid container spacing={3} className="row1">
                    <Grid item xs={3}>
                        <TextField
                            // label="Size"
                            fullWidth
                            id="outlined-size-small"
                            placeholder="MR #"
                            variant="outlined"
                            value={Header.MRNo}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            // label="Size"
                            fullWidth
                            id="outlined-size-small"
                            placeholder="Token no"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            fullWidth
                            label="Registration date"
                            id="outlined-size-small"
                            placeholder="01-2-2021"
                            onChange={(e) => setHeader({ ...Header, RegistrationDate: e.target.value })}
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            // label="Size"
                            fullWidth
                            id="Name"
                            placeholder="Name"
                            onChange={(e) => setHeader({ ...Header, Name: e.target.value })}
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3} className="row2">
                    <Grid item xs={3}>
                        <TextField
                            fullWidth
                            // label="Size"
                            id="outlined-size-small"
                            placeholder="Father Name"
                            onChange={(e) => setHeader({ ...Header, FatherOrHusband: e.target.value })}
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            fullWidth
                            label="Date of birth"
                            id="outlined-size-small"
                            placeholder="01-02-2021"
                            onChange={(e) => setHeader({ ...Header, DOB: e.target.value })}
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            // label="Size"
                            fullWidth
                            id="outlined-size-small"
                            defaultValue="Age"
                            onChange={(e) => setHeader({ ...Header, Age: e.target.value })}
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            fullWidth
                            id="textfield"
                            select
                            label="Gender"
                            placeholder={gender}
                            value={gender}
                            onChange={handleChange, (e) => setHeader({ ...Header, Gender: e.target.value })}
                            variant="outlined"
                            size="small"
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
                            id="textfield"
                            fullWidth
                            select
                            label="Religion"
                            placeholder={religion}
                            value={religion}
                            onChange={handleReligion, (e) => setHeader({ ...Header, Religion: e.target.value })}
                            variant="outlined"
                            size="small"
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
                            id="textfield"
                            fullWidth
                            select
                            label="HelpType"
                            placeholder={help}
                            value={help}
                            onChange={handleHelp, (e) => setHeader({ ...Header, Age: e.target.value })}
                            variant="outlined"
                            size="small"
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
                        <TextField
                            fullWidth
                            label="CNIC"
                            onChange={(e) => setHeader({ ...Header, CNIC: e.target.value })}
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                </Grid>
                <fieldset className="contact">
                    <legend>Contact</legend>
                    <Grid container spacing={3} className="row4">
                        <Grid item sm={3}>
                            <TextField
                                // label="Size"
                                fullWidth
                                id="outlined-size-small"
                                placeholder="House no"
                                onChange={(e) => setHeader({ ...Header, HousNo: e.target.value })}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                        <Grid item sm={3}>
                            <TextField
                                // label="Size"
                                id="outlined-size-small"
                                fullWidth
                                placeholder="Address"
                                onChange={(e) => setHeader({ ...Header, Address: e.target.value })}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                        <Grid item sm={3}>
                            <TextField
                                id="outlined-size-small"
                                fullWidth
                                placeholder="Area"
                                onChange={(e) => setHeader({ ...Header, Area: e.target.value })}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                        <Grid item sm={3}>
                            <TextField
                                // label="Size"
                                fullWidth
                                id="outlined-size-small"
                                placeholder="District"
                                onChange={(e) => setHeader({ ...Header, District: e.target.value })}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} className="row4">
                        <Grid item sm={3}>
                            <TextField
                                fullWidth
                                // label="Size"
                                id="outlined-size-small"
                                placeholder="City"
                                onChange={(e) => setHeader({ ...Header, City: e.target.value })}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                        <Grid item sm={3}>
                            <TextField
                                // label="Size"
                                fullWidth
                                id="outlined-size-small"
                                placeholder="Phone 1"
                                onChange={(e) => setHeader({ ...Header, Phone: e.target.value })}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                        <Grid item sm={3}>
                            <TextField
                                fullWidth
                                id="outlined-size-small"
                                placeholder="Phone 2"
                                onChange={(e) => setHeader({ ...Header, OffPhone: e.target.value })}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                        <Grid item sm={3}>
                            <TextField
                                // label="Size"
                                fullWidth
                                id="outlined-size-small"
                                placeholder="Mobile"
                                onChange={(e) => setHeader({ ...Header, Mobile: e.target.value })}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} className="row4">
                        <Grid item sm={3}>
                            <TextField
                                // label="Size"
                                fullWidth
                                id="outlined-size-small"
                                label="monthly consumtion limit"
                                onChange={(e) => setHeader({ ...Header, MonthlyConsLimit: e.target.value })}
                                placeholder="0"
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                    </Grid>
                </fieldset>
                <fieldset className="reffer">
                    <legend>Reffer Info</legend>
                    <Grid container spacing={3} className="row4">
                        <Grid item sm={3}>
                            <TextField
                                // label="Size"
                                fullWidth
                                id="outlined-size-small"
                                placeholder="Referred By"
                                onChange={(e) => setHeader({ ...Header, RefBy: e.target.value })}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                        <Grid item sm={3}>
                            <TextField
                                // label="Size"
                                fullWidth
                                id="outlined-size-small"
                                placeholder="Employe Id"
                                onChange={(e) => setHeader({ ...Header, EmpID: e.target.value })}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                        <Grid item sm={3}>
                            <TextField
                                // label="Size"
                                fullWidth
                                id="outlined-size-small"
                                placeholder="NOY"
                                onChange={(e) => setHeader({ ...Header, NOY: e.target.value })}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} className="row4">
                        <Grid item sm={6}>
                            <TextField
                                // label="Size"
                                fullWidth
                                id="outlined-size-small"
                                placeholder="Remarks"
                                onChange={(e) => setHeader({ ...Header, Remarks: e.target.value })}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                    </Grid>
                </fieldset>
                <fieldset className="staff">
                    <legend>Staff</legend>
                    <Grid container className="row4">
                        <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox checked={state.checkedA}
                                    onChange={handleChecked, (e) => setHeader({ ...Header, IsPAFEmp: e.target.value })}
                                    name="checkedA"
                                />}
                                label="Is PAF employee"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={state.checkedB}
                                        onChange={handleChecked, (e) => setHeader({ ...Header, IsRejected: e.target.value })}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Is Rejected"
                            />
                            <FormControlLabel control={<Checkbox name="checkedC" />} label="Is staff"
                                onChange={(e) => setHeader({ ...Header, IsStaff: e.target.value })}
                            />
                        </FormGroup>
                    </Grid>
                </fieldset>
            </div>
        </>
    )
}

export default Services

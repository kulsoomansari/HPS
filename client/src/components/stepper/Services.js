import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
//Dropdown  
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
function Services({handleNext, handleBack, handleClose, step}) {
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
    const [state, setState] = useState({
        checkedA: false,
        checkedB: false,
        checkedF: false,
        checkedG: false,
      });
    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const handleChecked = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      }; 
      const handleSubmit = () => {
        console.log("form has submitted")
        let payload = {
            Header,
        };
        console.log(payload)
    }
    return (
        <>
        <GlobalHeader handleSubmit={handleSubmit} handleClose={handleClose} handleBack={handleBack} step={step}/>
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <TextField
                        // label="Size"
                        id="outlined-size-small"
                        placeholder="MR #"
                        variant="outlined"
                        size="small"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        // label="Size"
                        id="outlined-size-small"
                        placeholder="Token no"
                        variant="outlined"
                        size="small"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Registration date"
                        id="outlined-size-small"
                        placeholder="01-2-2021"
                        variant="outlined"
                        size="small"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        // label="Size"
                        id="outlined-size-small"
                        placeholder="Name"
                        variant="outlined"
                        size="small"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <TextField
                        // label="Size"
                        id="outlined-size-small"
                        placeholder="Father Name"
                        variant="outlined"
                        size="small"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Date of birth"
                        id="outlined-size-small"
                        placeholder="01-02-2021"
                        variant="outlined"
                        size="small"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        // label="Size"
                        id="outlined-size-small"
                        defaultValue="Age"
                        variant="outlined"
                        size="small"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        id="textfield"
                        select
                        label="Gender"
                        placeholder={gender}
                        value={gender}
                        onChange={handleChange}
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
            <fieldset>
                <legend>Contact</legend>
                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <TextField
                            // label="Size"
                            id="outlined-size-small"
                            placeholder="House no"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item sm={3}>
                        <TextField
                            // label="Size"
                            id="outlined-size-small"
                            placeholder="Address"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item sm={3}>
                        <TextField
                            id="outlined-size-small"
                            placeholder="Area"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item sm={3}>
                        <TextField
                            // label="Size"
                            id="outlined-size-small"
                            placeholder="District"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <TextField
                            // label="Size"
                            id="outlined-size-small"
                            placeholder="City"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item sm={3}>
                        <TextField
                            // label="Size"
                            id="outlined-size-small"
                            placeholder="Phone 1"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item sm={3}>
                        <TextField
                            id="outlined-size-small"
                            placeholder="Phone 2"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item sm={3}>
                        <TextField
                            // label="Size"
                            id="outlined-size-small"
                            placeholder="Mobile"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <TextField
                            // label="Size"
                            id="outlined-size-small"
                            label="monthly consumtion limit"
                            placeholder="0"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                </Grid>
            </fieldset>
            <fieldset>
                <legend>Reffer Info</legend>
                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <TextField
                            // label="Size"
                            id="outlined-size-small"
                            placeholder="Referred By"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item sm={3}>
                        <TextField
                            // label="Size"
                            id="outlined-size-small"
                            placeholder="Employe Id"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item sm={3}>
                        <TextField
                            // label="Size"
                            id="outlined-size-small"
                            placeholder="NOY"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <TextField
                            // label="Size"
                            id="outlined-size-small"
                            placeholder="Remarks"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                </Grid>
            </fieldset>
            <fieldset>
                <legend>Staff</legend>
                <Grid container>
                    <FormGroup row>
                    <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChecked} name="checkedA" />}
        label="Is PAF employee"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChecked}
            name="checkedB"
            color="primary"
          />
        }
        label="Is Rejected"
      />
      <FormControlLabel control={<Checkbox name="checkedC" />} label="Is staff" />
                    </FormGroup>
                </Grid>
            </fieldset>
        </div>
        </>
    )
}

export default Services

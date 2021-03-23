import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, TextField } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import GlobalHeader from './Header';
import MaterialTable from 'material-table';
import NumberFormat from 'react-number-format';
import { tableIcons } from '../tableIcons';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import axios from 'axios'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
    //Radio button Css

}));
function Welfare({ handleNext, handleBack }) {
    const classes = useStyles();
    const [recID, setrecID] = useState('MR0000000012')
    const [Header, setHeader] = useState({
        MRNo: recID,
        TokenNo: "",
        WelfareDate: new Date(),
        Profession: "",
        Fiqa: "",
        Education: '',
        Cast: "",
        MonthlyIncome: 0,
        Guardian: "",
        OtherInfo: "",
        NoOfKids: "",
        NoOFFamilyMembers: "",
        IsMarried: false,
        IsAbleToPay: false,
        IsEarning: false,
        HaveGold: false,
        ReqName: '',
        ReqPhone: "",
        ReqRelationWithPatient: '',
        CreateUser: "Admin",
        ModifyUser: "Admin",
    })
    const [err, setErr] = useState('')
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([]);
    const [state, setState] = useState({
        checkedA: false,
        checkedB: false,
        checkedF: false,
        checkedG: false,
    });
    const [ItemTable, setItemTable] = useState({
        columns: [
            {
                title: 'MemberName',
                field: 'MemberName',
            },
            {
                title: 'RelationWithPatient',
                field: 'RelationWithPatient',
            }
            , {
                title: 'MonthlyIncome',
                field: 'MonthlyIncome',
            }
        ], rows: []
    })
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
const validate = () =>{
    if (Header.TokenNo === '' || Header.TokenNo === undefined || Header.TokenNo === null) {
        setErr('Token is missing')
        setOpen(true)
        return false;
    }
    else if (Header.WelfareDate === '' || Header.WelfareDate === undefined || Header.WelfareDate === null) {
        setErr('WelfareDate is missing')
        return false;
    }
    else {
        return true;
    }
}
    const handleSubmit = () => {
        let payload = {
            Header,
            ItemTable
        };
        console.log(payload)
            axios.post('http://localhost:4000/api/Welfare/add', Header)
                .then(res => {
                    console.log(res)
                    handleNext()
                })
                .catch(err => console.log(err, 'err'))

      }

    return (
        <>
                    <h2>Welfare</h2>
            <GlobalHeader handleSubmit={handleSubmit} handleBack={handleBack} />
            <form onSubmit={handleSubmit}>
                <div className={classes.root}>
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
                                onChange={(e) => setHeader({ ...Header, TokenNo: (e.target.value) })}
                                placeholder="Token no"
                                label="Token no"
                                value={Header.TokenNo}
                                variant="outlined"
                            />
                        </Grid>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid item xs={3}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="WelfareDate"
                                    label="Welfare date"
                                    format="MM/dd/yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <Grid item xs={3}>
                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                <FormControlLabel
                                    value="zakat"
                                    control={<Radio color="primary" />}
                                    label="Zakat"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="Donation"
                                    control={<Radio color="primary" />}
                                    label="Donation"
                                    labelPlacement="start"
                                />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <fieldset>
                        <legend>Contact</legend>
                        <Grid container spacing={3} className="row2">
                            <Grid item xs={3}>
                                <TextField
                                    label="Profession"
                                    id="Profession"
                                    onChange={(e) => setHeader({ ...Header, Profession: e.target.value })}
                                    value={Header.Profession}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Education"
                                    id="Education"
                                    value={Header.Education}
                                    onChange={(e) => setHeader({ ...Header, Education: e.target.value })}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Fiqa"
                                    id="Fiqa"
                                    value={Header.Fiqa}
                                    onChange={(e) => setHeader({ ...Header, Fiqa: e.target.value })}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Cast"
                                    id="Cast"
                                    value={Header.Cast}
                                    onChange={(e) => setHeader({ ...Header, Cast: e.target.value })}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </fieldset>
                    <fieldset>
                        <legend>Requester Info</legend>
                        <Grid container spacing={1} className="row3">
                            <Grid item xs={3}>
                                <TextField
                                    label="Requester name"
                                    id="ReqName"
                                    value={Header.ReqName}
                                    onChange={(e) => setHeader({ ...Header, ReqName: e.target.value })}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Requester phone no"
                                    id="ReqPhone"
                                    value={Header.ReqPhone}
                                    onChange={(e) => setHeader({ ...Header, ReqPhone: e.target.value })}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Relation With Patient"
                                    id="ReqRelationWithPatient"
                                    value={Header.ReqRelationWithPatient}
                                    onChange={(e) => setHeader({ ...Header, ReqRelationWithPatient: e.target.value })}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="No. of kids"
                                    id="NoOfKids"
                                    value={Header.NoOfKids}
                                    onChange={(e) => setHeader({ ...Header, NoOfKids: e.target.value })}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} className="row3">
                            <Grid item xs={3}>
                                <TextField
                                    label="Guardian"
                                    id="Guardian"
                                    value={Header.Guardian}
                                    onChange={(e) => setHeader({ ...Header, Guardian: e.target.value })}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Monthly income"
                                    id="MonthlyIncome"
                                    value={Header.MonthlyIncome}
                                    onChange={(e) => setHeader({ ...Header, MonthlyIncome: e.target.value })}
                                    defaultValue="0"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="No. of family members"
                                    id="NoOFFamilyMembers"
                                    value={Header.NoOFFamilyMembers}
                                    onChange={(e) => setHeader({ ...Header, NoOFFamilyMembers: e.target.value })}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} className="row3">
                            <FormGroup row>
                                <FormControlLabel control={<Checkbox name="checkedC"
                                    id="IsMarried"
                                    value={Header.IsMarried}
                                    onChange={(e) => setHeader({ ...Header, IsMarried: e.target.value })} />
                                }
                                    label="Married"
                                />
                                <FormControlLabel control={<Checkbox name="checkedC"
                                    id="HaveGold"
                                    value={Header.HaveGold}
                                    onChange={(e) => setHeader({ ...Header, HaveGold: e.target.value })} />
                                }
                                    label="HaveGold"
                                />
                                <FormControlLabel control={<Checkbox name="checkedC"
                                    id="IsEarning"
                                    value={Header.IsEarning}
                                    onChange={(e) => setHeader({ ...Header, IsEarning: e.target.value })} />
                                }
                                    label="Is Earning" />
                                <FormControlLabel control={<Checkbox name="checkedC"
                                    id="IsAbleToPay"
                                    value={Header.IsAbleToPay}
                                    onChange={(e) => setHeader({ ...Header, IsAbleToPay: e.target.value })} />
                                }
                                    label="Is Able to pay"
                                />
                            </FormGroup>
                        </Grid>
                    </fieldset>
                </div>
                <MaterialTable
                    title="Additional Details"
                    columns={ItemTable.columns}
                    icons={tableIcons}
                    data={data}
                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    let arr = ItemTable.rows;
                                    arr.push(newData)
                                    setData([...data, newData]);
                                    setItemTable({ ...ItemTable, rows: arr })
                                    console.log(newData);
                                    console.log(ItemTable);
                                    resolve();
                                }, 1000)
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const dataUpdate = [...data];
                                    const index = oldData.tableData.id;
                                    dataUpdate[index] = newData;
                                    setData([...dataUpdate]);
                                    resolve();
                                }, 1000)
                            }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const dataDelete = [...data];
                                    const index = oldData.tableData.id;
                                    dataDelete.splice(index, 1);
                                    setData([...dataDelete]);
                                    resolve();
                                }, 1000)
                            }),
                    }}
                />
            </form>

        </>
    )
}

export default Welfare

















{/* <MaterialTable
title={
    <div>
        <span>Details</span>
        <Button onClick={() => AddRow()}>Add</Button>
    </div>
}
columns={ItemTable.columns}
data={ItemTable.rows} actions={
[
    {
        icon: 'tableIcons.Delete',
        tooltip: 'delete record',
        // onClick: (event, rowData)
    }
]
} /> */}
// const AddRow = () => {
//     console.log(ItemTable.rows);
//     let arr = ItemTable.rows
//     let check = arr.filter((data) => {
//         return data.MemberName === "" || data.RelationWithPatient === ""
//     })

//     if (check.length > 0) {
//         setProperty({
//             ...property,
//             msg: "Please Completely Fill Previous row",
//             severity: 'error',
//             open: true,
//         });
//     }
//     else {
//         // setProperty({ ...property, CurrencyLookup: true })
//         console.log('faaa');
//         let Item = {
//             MRNo: recID,
//             MemberName: "",
//             RelationWithPatient: "",
//             MonthlyIncome: ""
//         }

//         arr.push({ ...Item })
//         newRowsArr = arr
//         SetItemTable({ ...ItemTable, rows: arr })
//         console.log(ItemTable.rows);
//     }
// }
import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core'
import clsx from 'clsx';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import GlobalHeader from './Header';
import MaterialTable from 'material-table';
import NumberFormat from 'react-number-format';
import { tableIcons } from '../tableIcons';

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
    const [Header, setHeader] = useState({
        // MRNo: recID,
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
    const handleSubmit = (e) => {
        console.log("form has submitted")
        e.preventDefault();
        let payload = {
            Header,
            ItemTable
        };
        console.log(payload)
    }
    return (
        <>
            <GlobalHeader handleNext={handleNext} handleBack={handleBack} />
            <form onSubmit={handleSubmit}>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <TextField
                                label="MR #"
                                id="outlined-size-small"
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Token no"
                                id="TokenNo"
                                value={Header.TokenNo}
                                onChange={(e) => setHeader({ ...Header, TokenNo: e.target.value })}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Welfare date"
                                id="WelfareDate"
                                value={Header.WelfareDate}
                                onChange={(e) => setHeader({ ...Header, WelfareDate: e.target.value })}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            {/* radio button */}
                        </Grid>
                    </Grid>
                    <fieldset>
                        <legend>Contact</legend>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <TextField
                                    label="Profession"
                                    id="Profession"
                                    onChange={(e) => setHeader({ ...Header, Profession: e.target.value })}
                                    value={Header.Profession}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Education"
                                    id="Education"
                                    value={Header.Education}
                                    onChange={(e) => setHeader({ ...Header, Education: e.target.value })}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Fiqa"
                                    id="Fiqa"
                                    value={Header.Fiqa}
                                    onChange={(e) => setHeader({ ...Header, Fiqa: e.target.value })}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Cast"
                                    id="Cast"
                                    value={Header.Cast}
                                    onChange={(e) => setHeader({ ...Header, Cast: e.target.value })}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                        </Grid>
                    </fieldset>
                    <fieldset>
                        <legend>Requester Info</legend>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <TextField
                                    label="Requester name"
                                    id="ReqName"
                                    value={Header.ReqName}
                                    onChange={(e) => setHeader({ ...Header, ReqName: e.target.value })}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Requester phone no"
                                    id="ReqPhone"
                                    value={Header.ReqPhone}
                                    onChange={(e) => setHeader({ ...Header, ReqPhone: e.target.value })}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Relation With Patient"
                                    id="ReqRelationWithPatient"
                                    value={Header.ReqRelationWithPatient}
                                    onChange={(e) => setHeader({ ...Header, ReqRelationWithPatient: e.target.value })}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="No. of kids"
                                    id="NoOfKids"
                                    value={Header.NoOfKids}
                                    onChange={(e) => setHeader({ ...Header, NoOfKids: e.target.value })}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <TextField
                                    label="Guardian"
                                    id="Guardian"
                                    value={Header.Guardian}
                                    onChange={(e) => setHeader({ ...Header, Guardian: e.target.value })}
                                    variant="outlined"
                                    size="small"
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
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="No. of family members"
                                    id="NoOFFamilyMembers"
                                    value={Header.NoOFFamilyMembers}
                                    onChange={(e) => setHeader({ ...Header, NoOFFamilyMembers: e.target.value })}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
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
                <Button type="submit">Submit</Button>
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
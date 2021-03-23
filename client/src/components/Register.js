import React, {useEffect} from 'react'
import MaterialTable from 'material-table'
import { tableIcons } from './tableIcons';
import DialogBox from './Dialog';
import StepperForm from './stepper/StepperForm';
import axios from 'axios'

function Register() {
    const { useState } = React;
    const [columns, setColumns] = useState([
        { title: 'Name', field: 'Name' },
        { title: 'TokenNo', field: 'TokenNo'},
        { title: 'MRNo', field: 'MRNo' },
    ]);

    const [data, setData] = useState([
        // { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        // { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    ]);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  useEffect(() => {
      axios.get('http://localhost:4000/api/Register/')
      .then(res => {
          setData(res.data.data)
        console.log(res.data.data)
    })
    .catch(err => console.log(err, 'err'))
  }, [])
const handleDelete = ()=>{
    // axios.delete('http://localhost:4000/api/Register/_id')
    console.log('delete')
}
    return (
        <>
        {/* <DialogBox open={open} handleClose={handleClose}/> */}
        { open ? (
            <StepperForm  handleClose={handleClose}/>
        ) : (
        <MaterialTable
            title="Registration"
            icons={tableIcons}
            columns={columns}
            data={data}
            actions={[
                {
                    icon: tableIcons.Add,
                    tooltip: 'Add new patient',
                    onClick: handleClickOpen,
                    isFreeAction: true,
                },
                rowData => ({
                    icon: tableIcons.Edit,
                    tooltip: 'edit patient'
                }),
                rowData => ({
                    icon: tableIcons.View,
                    tooltip: 'view aptient',
                }),
                rowData => ({
                    icon: tableIcons.Delete,
                    tooltip: 'delete patient',
                    // onClick: (event, rowData) => alert("You want to delete " + rowData.name)
                    onClick: handleDelete,
                })
            ]
            }
            options={{
                actionsColumnIndex: -1,
            }
            }
        // editable={{
        //   onRowAdd: newData =>
        //     new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         setData([...data, newData]);

        //         resolve();
        //       }, 1000)
        //     }),
        //   onRowUpdate: (newData, oldData) =>
        //     new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         const dataUpdate = [...data];
        //         const index = oldData.tableData.id;
        //         dataUpdate[index] = newData;
        //         setData([...dataUpdate]);

        //         resolve();
        //       }, 1000)
        //     }),
        //   onRowDelete: oldData =>
        //     new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         const dataDelete = [...data];
        //         const index = oldData.tableData.id;
        //         dataDelete.splice(index, 1);
        //         setData([...dataDelete]);

        //         resolve()
        //       }, 1000)
        //     }),
        // }}
        />
        )}
        
        </>
    )
}

export default Register

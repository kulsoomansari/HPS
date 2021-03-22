import React, {useEffect} from 'react'
import MaterialTable from 'material-table'
import { tableIcons } from './tableIcons';
import DialogBox from './Dialog';
import StepperForm from './stepper/StepperForm';
import axios from 'axios'

function Register() {
    const { useState } = React;
    const [columns, setColumns] = useState([
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
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

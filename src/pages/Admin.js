
import React, { useMemo, useContext, useState, useEffect } from 'react'
import { DataContext } from '../context/GlobalContext';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ProjectsHeroImage from "../images/projects.jpg"
import {
    MaterialReactTable,
    useMaterialReactTable,

} from 'material-react-table';
import { Box, Button } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { mkConfig, generateCsv, download } from 'export-to-csv'
import axios from 'axios';
import { GET_PROJECT_URL, INSERT_PROJECT_URL } from '../config';

// const data = [
//     {

//         customer_name: "Kamal Enterprise",
//         customer_address: "Tumkur",
//         work_type: "80 kva HT",
//         trf_capacity: "160 kva",
//         issued_rr_num: "ht2-568",
//         divison: "Tumkur",
//         sub_divison: "RSD-1"

//     },
//     {

//         customer_name: "Kingston ventures india pvt ltd",
//         customer_address: "Banglore",
//         work_type: "500 kva HT",
//         trf_capacity: "480 kva",
//         issued_rr_num: "E11HT-022",
//         divison: "Indranagara",
//         sub_divison: "Rm nagar"

//     },
//     {

//         customer_name: "J Gopal reddy",
//         customer_address: "Banglore",
//         work_type: "250kva",
//         trf_capacity: "200kva",
//         issued_rr_num: "E4HT 677",
//         divison: "Whitefield ",
//         sub_divison: "E4"

//     },
//     {

//         customer_name: "M/s SLV international tech park",
//         customer_address: "Banglore",
//         work_type: "250kva",
//         trf_capacity: "150kva",
//         issued_rr_num: "E12HT96",
//         divison: "Whitefield ",
//         sub_divison: "Mahadevpura "

//     },
// ]
const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
});
const Admin = () => {
    const [data, setData] = useState([])
    const state = useContext(DataContext);
    const [isLogin] = state.isLogin;
    const [projectDetails, setProjectDetails] = useState({
        "customer_name": "",
        "customer_address": "",
        "work_type": "",
        "trf_capacity": "",
        "issued_rr_num": "",
        "divison": "",
        "sub_divison": "",
    })
    const columns = useMemo(
        () => [
            {
                accessorKey: 'customer_name', //access nested data with dot notation
                header: 'Customer Name',
                size: 150,
            },
            {
                accessorKey: 'customer_address', //access nested data with dot notation
                header: 'Address',
                size: 150,
            },
            {
                accessorKey: 'work_type',
                header: 'Work Type',
                size: 150,
            },
            {
                accessorKey: 'trf_capacity', //normal accessorKey
                header: 'TRF CAPACITY',
                size: 200,
            },
            {
                accessorKey: 'issued_rr_num',
                header: 'Issued RR No.',
                size: 150,
            },
            {
                accessorKey: 'divison',
                header: 'Division',
                size: 150,
            },
            {
                accessorKey: 'sub_divison',
                header: 'Sub Division',
                size: 150,
            },
        ],
        [],
    );
    const handleClick = () => {
        axios.post(INSERT_PROJECT_URL, projectDetails).then(res => {
            console.log(res.data)
            setData([...data, projectDetails])
            setProjectDetails({
                "customer_name": "",
                "customer_address": "",
                "work_type": "",
                "trf_capacity": "",
                "issued_rr_num": "",
                "divison": "",
                "sub_divison": "",
            })
        }).catch(err => {
            console.log(err)

            setProjectDetails({
                "customer_name": "",
                "customer_address": "",
                "work_type": "",
                "trf_capacity": "",
                "issued_rr_num": "",
                "divison": "",
                "sub_divison": "",
            })
        })
    }
    useEffect(() => {
        axios.get(GET_PROJECT_URL).then(res => {
            console.log(res.data)
            setData(res.data)
        }
        ).catch(err => console.log(err))
    }, [])

    const handleExportRows = (rows) => {
        const rowData = rows.map((row) => row.original);
        const csv = generateCsv(csvConfig)(rowData);
        download(csvConfig)(csv);
    };
    const handleExportData = () => {
        const csv = generateCsv(csvConfig)(data);
        download(csvConfig)(csv);
    };
    const handleChange = (prop) => (event) => {
        setProjectDetails({ ...projectDetails, [prop]: event.target.value });

    }
    const table = useMaterialReactTable({
        columns,
        data,
        enableFullScreenToggle: false,
        renderTopToolbarCustomActions: ({ table }) => (
            <Box
                sx={{
                    display: 'flex',
                    gap: '16px',
                    padding: '8px',
                    flexWrap: 'wrap',
                }}
            >
                <Button
                    //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                    onClick={handleExportData}
                    startIcon={<FileDownloadIcon />}
                >
                    Export All Data
                </Button>

                <Button
                    disabled={table.getRowModel().rows.length === 0}
                    //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
                    onClick={() => handleExportRows(table.getRowModel().rows)}
                    startIcon={<FileDownloadIcon />}
                >
                    Export Page Rows
                </Button>

            </Box>
        ),

    });
    return (
        <div className='mt-5 bg-light'>
            <div className="position-relative">
                <img src={ProjectsHeroImage} alt="service" style={{ width: "100%", height: "50vh", filter: "brightness(60%)" }} />
                <h5 className="position-absolute top-50 start-50 translate-middle text-center display-3 text-white fw-normal">ADMIN</h5>
            </div>
            <div className='container p-5'>
                <h5 className='display-6 fw-normal text-center'>Admin <span className='col_1'>Operations</span></h5>

            </div>

            {isLogin ?
                <div className='container mb-5'>
                    <div>
                        <h3>Insert New Record to Projects</h3>
                        <div className='my-4'>
                            <form>
                                <div className='row'>
                                    <div className="form-group col-sm-4">
                                        <label for="exampleInputEmail1">Customer Name</label>
                                        <input type="text" value={projectDetails.customer_name} onChange={handleChange("customer_name")} className="form-control bg-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Customer Name" />

                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label for="exampleInputPassword1">Customer Address</label>
                                        <input type="email" value={projectDetails.customer_address} onChange={handleChange("customer_address")} className="form-control bg-light" id="exampleInputEmail1" placeholder="Enter Customer Address" />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label for="exampleInputPassword1">Work Type</label>
                                        <input type="text" value={projectDetails.work_type} onChange={handleChange("work_type")} className="form-control bg-light" id="exampleInputEmail1" placeholder="Enter Work Type" />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label for="exampleInputPassword1">TRF Capacity</label>
                                        <input type="text" value={projectDetails.trf_capacity} onChange={handleChange("trf_capacity")} className="form-control bg-light" id="exampleInputEmail1" placeholder="Enter Trf Capacity" />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label for="exampleInputPassword1">Issued RR No</label>
                                        <input type="text" value={projectDetails.issued_rr_num} onChange={handleChange("issued_rr_num")} className="form-control bg-light" id="exampleInputEmail1" placeholder="Enter Issued RR Num" />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label for="exampleInputPassword1">Division</label>
                                        <input type="text" value={projectDetails.divison} onChange={handleChange("divison")} className="form-control bg-light" id="exampleInputEmail1" placeholder="Enter Division" />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label for="exampleInputPassword1">Sub Division</label>
                                        <input type="text" value={projectDetails.sub_divison} onChange={handleChange("sub_divison")} className="form-control bg-light" id="exampleInputEmail1" placeholder="Enter Sub-Division" />
                                    </div>
                                    <div className="col-sm-4 py-3">
                                        {/* <label for="exampleInputPassword1 bg-light" style={{color:''}}>Sub Division</label> */}
                                        <button className='btn fw-bold mt-4 ' onClick={handleClick} style={{ backgroundColor: "#f47629", color: "white" }}>Insert</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <MaterialReactTable table={table} />
                    </div>
                </div>

                :
                <div className='text-center mb-5'>
                    <h2>Only admin can have accesss here</h2>
                    <Link to="/">Back to home</Link>
                </div>

            }
            <Footer />
        </div>
    )
}

export default Admin

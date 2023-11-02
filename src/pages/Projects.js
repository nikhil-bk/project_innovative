import React, { useState } from 'react'
import ProjectsHeroImage from "../images/projects.jpg"
import DataTable from 'react-data-table-component';
import Footer from '../components/Footer'
import { CSVLink } from "react-csv"
const Projects = () => {
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const columns = [
        {
            name: "Customer Name",
            selector: row => row.customer_name,
            sortable: true,
            wrap: true,

        },
        {
            name: 'Address',
            selector: row => row.customer_address,
            sortable: true,
            wrap: true
        },
        {
            name: 'Work Type',
            selector: row => row.work_type,
            sortable: true,
            wrap: true
        },
        {
            name: 'TRF CAPACITY',
            selector: row => row.trf_capacity,
            sortable: true,
            wrap: true
        },
        {
            name: 'Issued RR No.',
            selector: row => row.issued_rr_num,
            sortable: true,
        },
        {
            name: 'Divison',
            selector: row => row.divison,
            sortable: true,
            wrap: true
        },
        {
            name: 'Sub Division',
            selector: row => row.sub_divison,
            sortable: true,
            wrap: true
        }
    ]
    const data = [
        {
            id: 1,
            customer_name: "Kamal Enterprise",
            customer_address: "Tumkur",
            work_type: "80 kva HT",
            trf_capacity: "160 kva",
            issued_rr_num: "ht2-568",
            divison: "Tumkur",
            sub_divison: "RSD-1"

        },
        {
            id: 2,
            customer_name: "Kingston ventures india pvt ltd",
            customer_address: "Banglore",
            work_type: "500 kva HT",
            trf_capacity: "480 kva",
            issued_rr_num: "E11HT-022",
            divison: "Indranagara",
            sub_divison: "Rm nagar"

        },
        {
            id: 3,
            customer_name: "J Gopal reddy",
            customer_address: "Banglore",
            work_type: "250kva",
            trf_capacity: "200kva",
            issued_rr_num: "E4HT 677",
            divison: "Whitefiled ",
            sub_divison: "E4"

        },
        {
            id: 3,
            customer_name: "M/s SLV international tech park",
            customer_address: "Banglore",
            work_type: "250kva",
            trf_capacity: "150kva",
            issued_rr_num: "E12HT96",
            divison: "Whitefiled ",
            sub_divison: "Mahadevpura "

        }
    ]
    const [tableData, setTableData] = useState(data)
    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
                setTableData(data)

            }
        };
        const handleChange = (e) => {
            let search = e.target.value
            setFilterText(search)
            setTableData(data.filter(
                item => item.divison && item.divison.toLowerCase().includes(search.toLowerCase())
            ))
        }
        return (
            <div>
                {/* // <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} /> */}
                <input onChange={(e) => handleChange(e)} value={filterText} placeholder='Enter keyword to search' />
                <button onClick={handleClear} >X</button>
            </div>
        );
    }, [filterText, resetPaginationToggle]);
    const actionsMemo = React.useMemo(() => <CSVLink data={data} filename={"installation-works-table.csv"} className='col_1 m-2'><i>Export</i></CSVLink>, []);
    return (
        <div className='mt-5 bg-light'>
            <div className="position-relative">
                <img src={ProjectsHeroImage} alt="service" style={{ width: "100%", height: "50vh", filter: "brightness(60%)" }} />
                <h5 className="position-absolute top-50 start-50 translate-middle text-center display-3 text-white fw-normal">PROJECTS</h5>
            </div>
            <div className='container p-5'>
                <h5 className='display-6 fw-normal text-center'>Projects Undertaken by<span className='col_1'> US</span></h5>

            </div>
            <div className='mx-5'>
                <DataTable
                    title="Installation Works"
                    striped={true}
                    columns={columns}
                    data={tableData}
                    responsive={true}
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle}
                    actions={actionsMemo}
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}

                />
            </div>

            <Footer />
        </div>
    )
}

export default Projects
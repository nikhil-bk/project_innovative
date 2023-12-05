import React, { useEffect, useState, useMemo } from 'react'
import ProjectsHeroImage from "../images/projects.jpg"

import Footer from '../components/Footer'
import {
  MaterialReactTable,
  useMaterialReactTable,

} from 'material-react-table';
import axios from 'axios';
import { GET_PROJECT_URL } from '../config';




const Projects = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

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


  useEffect(() => {
    axios.get(GET_PROJECT_URL).then(res => {
      console.log(res.data)
      setData(res.data)
      setLoading(false)
    }
    ).catch(err => {
      console.log(err)
      setLoading(false)
    })
  }, [])
  const table = useMaterialReactTable({
    columns,
    data,
    enableFullScreenToggle: false,
    state:{ isLoading },

    muiCircularProgressProps:{
      color: 'primary',
      thickness: 5,
      size: 55,
    },
    muiSkeletonProps:{
      animation: 'pulse',
      height: 28,
    }


  });
  return (
    <div className='mt-5 bg-light'>
      <div className="position-relative">
        <img src={ProjectsHeroImage} alt="service" style={{ width: "100%", height: "50vh", filter: "brightness(60%)" }} />
        <h5 className="position-absolute top-50 start-50 translate-middle text-center display-3 text-white fw-normal">PROJECTS</h5>
      </div>
      <div className='container p-5'>
        <h5 className='display-6 fw-normal text-center'>Projects Undertaken</h5>

      </div>
      <div className='mx-5 mb-5'>

        <MaterialReactTable 
        table={table} 
       
        />

      </div>

      <Footer />
    </div>
  )
}

export default Projects

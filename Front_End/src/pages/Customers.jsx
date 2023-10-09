import React, { useEffect, useState } from 'react'
import 'react-bootstrap'
import AddFileBtn from '../components/AddFileBtn'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FcSynchronize } from "react-icons/fc";

function Customers() {
  const navigate = useNavigate()
  const [data, setData] = useState([])


  
  useEffect(() => {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete=(id)=>{
    axios.delete('http://localhost:3001/delete/'+id)
    .then(res=>{
      navigate('/customer')
    })
    .catch(err=> console.log(err))

    window.location.reload(false);
  }
  function addingDatas(info) {
    return (
     
      <tr key={info.id} >
        <td>{info.Customer_Id}</td>
        <td>{info.Customer_Name}</td>
        <td>{info.Email}</td>
        <td >{info.Active_Status}</td>
        <td onClick={()=> handleDelete(info.id)}>
        <i class="fa-solid fa-trash" style={{ color: "#e51515" }}></i>
        </td>
        <td ><FcSynchronize/></td>
      </tr>
    )
  }
  console.log(data)
  return (
    <div>
      <h1>Customers</h1>
      <hr />
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Customer Id</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Email</th>
              <th scope="col">Active Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map(addingDatas)}
          </tbody>
        </table>
        <AddFileBtn datas="Customer" />
      </div>
    </div>
  )
}

export default Customers
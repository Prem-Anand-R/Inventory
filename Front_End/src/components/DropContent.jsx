import React, { useEffect, useState } from 'react';
import AddFileBtn from '../components/AddFileBtn';
import { FcSynchronize } from "react-icons/fc";
import axios from 'axios';

function DropContent({ selectedOption }) {
  const [data, setData] = useState([])
  const [outward,setOutward]=useState([])
  useEffect(() => {
    fetch("http://localhost:3001/inward/")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])

  // Outward input getter 

  useEffect(() => {
    fetch("http://localhost:3001/outward/")
      .then(res => res.json())
      .then(data => setOutward(data))
      .catch(err => console.log(err))
  }, [])

function inwardDatas(info){
  return(
    <tr >
    <td>{info.Product_Id}</td>
    <td>{info.Date}</td>
    <td>{info.Product_Name}</td>
    <td >{info.No_of_Product}</td>
    <td onClick={() => inwardDelete(info.Product_Id)}>
      <i class="fa-solid fa-trash" style={{ color: "#e51515" }}></i>
    </td>
    <td ><FcSynchronize /></td>
  </tr>
  )
}

function outwardDatas(info){
  return(
    <tr >
    <td>{info.Product_Id}</td>
    <td>{info.Date}</td>
    <td>{info.Product_Name}</td>
    <td >{info.No_of_Product}</td>
    <td onClick={() => outwardDelete(info.Product_Id)}>
      <i class="fa-solid fa-trash" style={{ color: "#e51515" }}></i>
    </td>
    <td ><FcSynchronize /></td>
  </tr>
  )
}

  const inwardDelete=(id)=>{
    axios.delete('http://localhost:3001/inwarddelete/'+id)
    .then(res=> console.log(res))
    .catch(err=> console.log(err))

    window.location.reload(false);
  }

  const outwardDelete=(id)=>{
    axios.delete('http://localhost:3001/outwarddelete/'+id)
    .then(res=>console.log(res))
    .catch(err=> console.log(err))

    window.location.reload(false);
  }

  let content = '';

  switch (selectedOption) {
    case 'Inward':
      content =
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Date</th>
                <th scope="col">Product Name</th>
                <th scope="col">No of Product</th>
              </tr>
            </thead>
            <tbody>
              {data.map(inwardDatas)}

            </tbody>
          </table>
          <AddFileBtn datas={selectedOption} />
        </div>

      break;
    case 'Outward':
      content = <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
            <th scope="col">Product ID</th>
              <th scope="col">Date</th>
              <th scope="col">Product Name</th>
              <th scope="col">No of Product</th>
            </tr>
          </thead>
          <tbody>
          {outward.map(outwardDatas)}
          </tbody>
        </table>
        <AddFileBtn datas={selectedOption} />
      </div>;
      break;
    default:
      content = <p>Select an option to display content.</p>;
      <AddFileBtn />
      break;
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default DropContent;

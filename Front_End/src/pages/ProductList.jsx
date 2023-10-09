import React, { useEffect, useState } from 'react'
import 'react-bootstrap'
import AddFileBtn from '../components/AddFileBtn'
import axios from 'axios'
import { FcSynchronize } from "react-icons/fc";

function ProductList() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/product_list")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/productlistdelete/' + id)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    window.location.reload(false);
  }

  function addingDatas(info) {
    return (

      <tr key={info.id}>
        <td>{info.Product_Id}</td>
        <td>{info.Product_Name}</td>
        <td>{info.Product_Price}</td>
        <td >{info.Stock_Status}</td>
        <td onClick={() => handleDelete(info.id)}>
          <i class="fa-solid fa-trash" style={{ color: "#e51515" }}></i>
        </td>
        <td><FcSynchronize /></td>
      </tr>
    )
  }
  console.log(data)
  return (
    <div>
      <h1>Product List</h1>
      <hr />
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Product Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Stock Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map(addingDatas)}
          </tbody>
        </table>
        <AddFileBtn datas="Product List" />
      </div>
    </div>
  )
}

export default ProductList
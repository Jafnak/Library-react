import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
  return (
    <div>
<Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
  <thead>
    <tr>
      <th scope="col">Booktitle</th>
      <th scope="col">Category</th>
      <th scope="col">Published Date</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Half Girlfriend</td>
      <td>Fiction</td>
      <td>30-05-1999</td>
      <td>200</td>
    </tr>
    <tr>
      <td scope="row">Brida</td>
      <td>Fiction</td>
      <td>01-06-1958</td>
      <td>600</td>
    </tr>
    <tr>
      
      <td scope="row">Larry the bird</td>
      <td>Fiction</td>
      <td>20-09-2000</td>
      <td>700</td>
    </tr>

    <tr>
      
      <td scope="row">Wings of Fire</td>
      <td>autobiography</td>
      <td>20-09-2000</td>
      <td>800</td>
    </tr>

    <tr>
      <td scope="row">Half Girlfriend</td>
      <td>Fiction</td>
      <td>30-05-1999</td>
      <td>200</td>
    </tr>
    <tr>
      <td scope="row">Brida</td>
      <td>Fiction</td>
      <td>01-06-1958</td>
      <td>600</td>
    </tr>
    <tr>
      
      <td scope="row">Larry the bird</td>
      <td>Fiction</td>
      <td>20-09-2000</td>
      <td>700</td>
    </tr>

    <tr>
      
      <td scope="row">Wings of Fire</td>
      <td>autobiography</td>
      <td>20-09-2000</td>
      <td>800</td>
    </tr>

  </tbody>
</table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll
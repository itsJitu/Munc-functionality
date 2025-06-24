import React from 'react'
import "./Sales.css";
import { LuSquarePlus } from "react-icons/lu";
import {Link} from 'react-router-dom';


function Sales() {



  return (
    <div className='sale'>
      
      <div className='navbar'>
        <p>All sales</p>
        <Link to='/'> <LuSquarePlus /> create Order</Link>
      </div>

      {/* Select tags */}

      <div className='cost'>
        <select className='name'><option>Aman Kumar - Rajendra Chowk</option></select>
        <select className='days'><option>Last 7 Days</option> </select>
        <select className='days'><option>Completed </option></select>
      </div>

      {/* Table */}

      <table className="table">
            <thead>
                <tr className="table-row">
                    <th>
                    Invoice ID</th>
                    <th  style={{width:'200px', textAlign:'left'}}>Product name</th>
                    <th>Customer</th>
                    <th>Order Date</th>
                    <th>Total Amount</th>
                    <th>Status</th>
                    <th>Due Amount</th>                 
                    <th>Due Date</th>                    
                    <th>Actions</th>                    

                </tr>
            </thead>

            <tbody>

            </tbody>
         </table>

    </div>
  )
}

export default Sales;

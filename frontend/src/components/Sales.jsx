// import { useState } from "react";
// import "./Sales.css";
// import { LuSquarePlus } from "react-icons/lu";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";

// // const productdata = [
// //   {
// //     invoiceid: "INV-1023",
// //     productname: "Wireless Keyboard",
// //     customer: "John Doe",
// //     orderDate: "2025-06-24",
// //     totalamount: 2499,
// //     status: "Pending",
// //     dueamout: 1499,
// //     duedate: "2025-07-10",
// //   },
// // ];

// const SupplierRow = ({ supplier }) => {
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Received":
//         return "approved";
//       case "Pending":
//         return "pending";
//       case "Order":
//         return "rejected";
//       default:
//         return "return";
//     }
//   };

//   const getPaymentStatusColor = (paymentStatus) => {
//     switch (paymentStatus) {
//       case "Paid":
//         return "fpaid";
//       case "Unpaid":
//         return "ppaid";
//       case "Overdue":
//         return "upaid";
//       default:
//         return "rpaid";
//     }
//   };

//   return (
//     <tr className="t-row">
//       <td>
//         <input type="checkbox" />
//       </td>
//       <td>{supplier.invoiceid}</td>
//       <td>{supplier.productname}</td>
//       <td>{supplier.customer}</td>
//       <td>${supplier.orderDate}</td>
//       <td>${supplier.totalamount}</td>
//       <td>
//         <span className={`${getStatusColor(supplier.status)}`}>
//           {supplier.status}
//         </span>
//       </td>
//       <td>{supplier.dueamout}</td>
//       <td>{supplier.duedate}</td>
//       <td>
//         <span
//           className="three-icon"
//           style={{ textAlign: "center", display: "flex" }}
//         >
//           {/* <IoEyeOutline className="eye" />
//           <FaRegEdit className="eye" />
//           <RiDeleteBinFill className="eye" /> */}
//         </span>
//       </td>
//     </tr>
//   );
// };

// function Sales() {
//   //  const filteredData =
//   // const paginatedData = filteredData;
//   const [InvoiceData, setInvoiceData] = useState([]);
//   const [Error, setError] = useState(null);
//   useEffect(() => {
//     const fetchInvoiceData = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/addproduct");
//         if (!response.ok) {
//           throw new Error("Failed to fetch stock in data");
//         }
//         const data = await response.json();
//         setInvoiceData(data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };
//     fetchInvoiceData();
//   }, []);
//   return (
//     <div className="sale">
//       <div className="navbar">
//         <p>All sales</p>
//         <Link to="/">
//           {" "}
//           <LuSquarePlus /> create Order
//         </Link>
//       </div>

//       {/* Select tags */}

//       <div className="cost">
//         <select className="name">
//           <option>Aman Kumar - Rajendra Chowk</option>
//         </select>
//         <select className="days">
//           <option>Last 7 Days</option>{" "}
//         </select>
//         <select className="days">
//           <option>Completed </option>
//         </select>
//       </div>

//       {/* Table */}

//       <table className="table">
//         <thead>
//           <tr className="table-row">
//             <th>Invoice ID</th>
//             <th style={{ width: "200px", textAlign: "left" }}>Product name</th>
//             <th>Customer</th>
//             <th>Order Date</th>
//             <th>Total Amount</th>
//             <th>Status</th>
//             <th>Due Amount</th>
//             <th>Due Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {InvoiceData.map((supplier) => (
//             <SupplierRow key={supplier.id} supplier={supplier} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Sales;

import { useState, useEffect } from "react";
import "./Sales.css";
import { LuSquarePlus } from "react-icons/lu";
import { Link } from "react-router-dom";

function Sales() {
  const [invoiceData, setInvoiceData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvoiceData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/addproduct");
        if (!response.ok) {
          throw new Error("Failed to fetch stock in data");
        }
        const data = await response.json();
        setInvoiceData(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchInvoiceData();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Received":
        return "approved";
      case "Pending":
        return "pending";
      case "Order":
        return "rejected";
      default:
        return "return";
    }
  };

  const getPaymentStatusColor = (paymentStatus) => {
    switch (paymentStatus) {
      case "Paid":
        return "fpaid";
      case "Unpaid":
        return "ppaid";
      case "Overdue":
        return "upaid";
      default:
        return "rpaid";
    }
  };

  return (
    <div className="sale">
      <div className="navbar">
        <p>All sales</p>
        <Link to="/">
          <LuSquarePlus /> create Order
        </Link>
      </div>

      {/* Filters */}
      <div className="cost">
        <select className="name">
          <option>Aman Kumar - Rajendra Chowk</option>
        </select>
        <select className="days">
          <option>Last 7 Days</option>
        </select>
        <select className="days">
          <option>Completed</option>
        </select>
      </div>

      {/* Table */}
      <table className="table">
  <thead>
    <tr className="table-row">
      <th>
        <input type="checkbox" />
      </th>
      <th>Invoice ID</th>
      <th style={{ width: "200px", textAlign: "left" }}>Product Name</th>
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
    {invoiceData.map((supplier) => (
      <tr key={supplier._id || supplier.id} className="t-row">
        <td>
          <input type="checkbox" />
        </td>
        <td>{supplier.invoiceid}</td>
        <td>{supplier.productname}</td>
        <td>{supplier.customer}</td>
        <td>{supplier.orderDate}</td>
        <td>₹{supplier.totalamount?.toFixed(2)}</td>
        <td>
          <span className={getStatusColor(supplier.status)}>
            {supplier.status}
          </span>
        </td>
        <td>₹{supplier.dueamout?.toFixed(2)}</td>
        <td>{supplier.duedate}</td>
        <td>
          <span
            className="three-icon"
            style={{ textAlign: "center", display: "flex" }}
          >
            {/* Icons like Edit/Delete can be added here */}
          </span>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      {/* Optional Error Display */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Sales;

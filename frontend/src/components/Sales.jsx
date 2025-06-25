import { useState, useEffect } from "react";
import "./Sales.css";
import { LuSquarePlus } from "react-icons/lu";
import { IoIosPrint } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
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
        <div className="icon-link">
          <Link to="/" className="pluse-icon">
          <LuSquarePlus/> <span>Create Order</span>
        </Link>
        </div>
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
      <table className="te">
  <thead className="tr-head">
    <tr className="table-rose">
      <th style={{padding:"10px 30px", borderTopLeftRadius:"10px",}}>Invoice ID</th>
      <th>Product Name</th>
      <th>Customer</th>
      <th>Order Date</th>
      <th>Total Amount</th>
      <th>Status</th>
      <th>Due Amount</th>
      <th>Due Date</th>
      <th style={{padding:"10px 0px", borderTopRightRadius:"10px",}}>Actions</th>
    </tr>
  </thead>

  <tbody>
    {invoiceData.map((supplier) => (
      <tr key={supplier._id || supplier.id} className="t-row">
        <td  style={{padding:"10px 20px"}}><input type="checkbox" />
        {supplier.invoiceid}</td>
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
            {/* Icons like Edit/View can be added here */}

            <td><IoIosPrint /></td>
            <td><FaEye /></td>
            <td><MdEdit /></td>
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

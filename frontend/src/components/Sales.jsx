import { useState, useEffect } from "react";
import "./Sales.css";
import { LuSquarePlus } from "react-icons/lu";
import { IoIosPrint } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

function Sales() {
  const [invoiceData, setInvoiceData] = useState([]);
  const [costumerData, setCostumerData] = useState([]);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchInvoiceData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/getproduct");
        if (!response.ok) {
          throw new Error("Failed to fetch invoice in data");
        }
        const data = await response.json();
        setInvoiceData(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchInvoiceData();
  }, []);

  useEffect(() => {
    const fetchCostumerData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/getcostumer");
        if (!response.ok) {
          throw new Error("Failed to fetch customer in data");
        }
        const datacustomer = await response.json();
        setCostumerData(datacustomer);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCostumerData();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "completed";
      case "Pending":
        return "pending";
      default:
        return "default";
    }
  };

  // ✅ Pagination logic
  const totalPages = Math.ceil(invoiceData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = invoiceData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="sale">
      <div className="navbar">
        <p>All sales</p>
        <div className="icon-link">
          <Link to="/" className="pluse-icon">
            <LuSquarePlus /> <span>Create Order</span>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="cost">
        <select className="name">
          {costumerData.map((costumer) => (
            <option>
              {costumer.customerFullName} - {costumer.CustomerAddress}
            </option>
          ))}
          ;
        </select>

        <select className="days">
          <option>Last 7 Days</option>
        </select>
        <select className="days">
          <option>Completed</option>
        </select>
      </div>

      {/* Table */}
       <div className="db-table">
      <table className="te">
        <thead className="tr-head">
          <tr className="table-rose">
            <th style={{ padding: "10px 30px", borderTopLeftRadius: "10px" }}>
              Invoice ID
            </th>
            <th>Product Name</th>
            <th>Customer</th>
            <th>Order Date</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Due Amount</th>
            <th>Due Date</th>
            <th style={{ padding: "10px 0px", borderTopRightRadius: "10px" }}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {invoiceData.map((supplier) => (
            <tr key={supplier._id || supplier.id} style={{borderBottom: "1px solid rgb(209, 210, 211)"}}>
              <td style={{ padding: "10px 20px",  }}>
                <input type="checkbox" />
                {supplier.invoiceno}
              </td>
              <td>{supplier.productName}</td>
              <td>{supplier.customerName}</td>
              <td>{supplier.invoicedate}</td>
              <td>₹{supplier.payAmout + supplier.dueAmount}</td>
              <td>
                <span className={getStatusColor(supplier.status)}>
                  {supplier.status}
                </span>
              </td>
              <td>₹{supplier.dueAmount?.toFixed(2)}</td>
              <td>{supplier.invoiceDueDate}</td>
              <td>
                <span
                  className="three-icon"
                  style={{ textAlign: "center", display: "flex" }}
                >
                  {/* Icons like Edit/View can be added here */}

                  <IoIosPrint />
                  <FaEye />
                  <MdEdit />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {/* Optional Error Display */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* next Button */}
{/* 
      <div className="pagination" style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="page-btn"
        >
          <IoIosArrowBack />
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="page-btn"
        >
          <MdArrowForwardIos />
        </button> 
      </div>
*/}
       
      

     
    </div>
  );
}

export default Sales;

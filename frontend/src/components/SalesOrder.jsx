import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function SalesOrder() {
  const [produtsData, setproductsData] = useState([]);

  const [costumerData, setCostumerData] = useState([]);
  const [customerName, setCustomerName] = useState("");

  const [salesPersonData, setsalesPersonData] = useState([]);
  const [salesPerson, setsalesPerson] = useState("");
  const [PayMethod, setPayMethod] = useState("");

  useEffect(() => {
    const fetchproductsData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/getprod");
        if (!response.ok) {
          throw new Error("Failed to fetch products in data");
        }
        const dataproducts = await response.json();
        setproductsData(dataproducts);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchproductsData();
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

  useEffect(() => {
    const fetchsalesPerson = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/getsalesPerson"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch salesman in data");
        }
        const datasalesman = await response.json();
        setsalesPersonData(datasalesman);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchsalesPerson();
  }, []);

  const subtotal = produtsData.reduce((sum, item) => {
    const quantity = Number(item.quantity) || 0;
    const price = Number(item.price) || 0;

    const itemTotal = quantity * price;

    return sum + itemTotal;
  }, 0);

  const total = produtsData.reduce((sum, item) => {
    const quantity = Number(item.quantity) || 0;
    const price = Number(item.price) || 0;
    const tax = Number(item.tax) || 0;
    const discount = Number(item.discount) || 0;

    const itemTotal = quantity * price + quantity * tax - quantity * discount;

    return sum + itemTotal;
  }, 0);

  const tax = produtsData.reduce((sum, item) => {
    const quantity = Number(item.quantity) || 0;
    const tax = Number(item.tax) || 0;

    const totaltax = quantity * tax;

    return sum + totaltax;
  }, 0);

  const totaldiscount = produtsData.reduce((sum, item) => {
    const quantity = Number(item.quantity) || 0;
    const discount = Number(item.discount) || 0;

    const totaldis = quantity * discount;

    return sum + totaldis;
  }, 0);

  return (
    <div className="main">
      <div className="genrate">
        <p>Create Sales Order</p>
      </div>

      {/* Quotations section */}
      <div className="customer-details">
        <div className="invoice-nos">
          {/* Select customer */}
          <div className="inv-div">
            <span>Select Customer </span>
            <select
              className="select"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            >
              {costumerData.map((costumer) => (
                <option key={costumer.id} value={costumer.customerFullName}>
                  {costumer.customerFullName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="invoice-details">
          <span>Sales Details</span>
        </div>

        <div className="invoice-nos">
          {/* salesman */}

          <div className="inv-div">
            <span>Salesman</span>
            <select
              className="select"
              value={salesPerson}
              onChange={(e) => setsalesPerson(e.target.value)}
            >
              {salesPersonData.map((salesman) => (
                <option key={salesman.id} value={salesman.salesMan}>
                  {salesman.salesMan}
                </option>
              ))}
            </select>
          </div>
          {/* Sales Date*/}
          <div className="inv-div">
            <span>Sales Date</span>
            <input
              className="
                select"
              type="date"
            ></input>
          </div>
        </div>

        {/* Add products */}
        <div className="add-products">
          <span> Add Products </span>
        </div>

        {/* products Details */}
        <div className="db-table">
          <table className="te">
            <thead className="tr-head">
              <tr className="table-rose">
                <th
                  style={{ padding: "10px 30px", borderTopLeftRadius: "10px" }}
                >
                  Product Name
                </th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Tax</th>
                <th>Discount</th>
                <th style={{ borderTopRightRadius: "10px" }}>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {produtsData.map((supplier) => (
                <tr
                  key={supplier._id || supplier.id}
                  style={{ borderBottom: "1px solid gray" }}
                >
                  <td style={{ padding: "10px 20px", display: "flex" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "5px",
                      }}
                    >
                      <input type="checkbox" />
                    </div>

                    <div>
                      <span style={{ color: "rgb(0, 122, 255)" }}>
                        {supplier.products}
                      </span>

                      <br></br>
                      <span style={{ color: "gray", fontSize: "15px" }}>
                        ({supplier.title})
                      </span>
                    </div>
                  </td>
                  <td>{supplier.quantity} pcs</td>
                  <td>${supplier.price}</td>
                  <td>${supplier.tax}</td>
                  <td>{supplier.discount}</td>
                  <td>
                    $
                    {supplier.quantity * supplier.price +
                      supplier.quantity * supplier.tax -
                      supplier.quantity * supplier.discount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ color: " rgb(24, 138, 169)" }}> + Add products</p>

        {/* Bill details table */}
        <div className="table-cont">
          <table>
            <thead className="bill-details">
              {/*Sub Total */}

              <tr>
                <td
                  className="subtotal"
                  style={{ width: "10%", textAlign: "right" }}
                >
                  Subtotal
                </td>
                <td className="amount" style={{ textAlign: "left" }}>
                  {subtotal}
                </td>
              </tr>

              {/* Total Discount */}

              <tr>
                <td
                  className="subtotal"
                  style={{ width: "10%", textAlign: "right" }}
                >
                  Total Discount
                </td>
                <td className="amount" style={{ textAlign: "left" }}>
                  {totaldiscount}
                </td>
              </tr>

              {/* Total Tax */}
              <tr>
                <td
                  className="subtotal"
                  style={{ width: "10%", textAlign: "right" }}
                >
                  Total tax
                </td>
                <td className="amount" style={{ textAlign: "left" }}>
                  {tax}
                </td>
              </tr>
            </thead>
          </table>
        </div>

        {/* total table */}

        <div className="total-cont">
          <div className="total-amount">
            <div>
              <hr></hr>

              <div className="total-dis">
                <span>Total</span>
                <span>{total}</span>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* payment & paid  */}
        <div>
          <div className="payment-info">
            <span>payment info.</span>
          </div>

          <div className="invoice-nos">
            <div className="inv-div">
              <span>Payment Method</span>
              <select
                className="select"
                value={PayMethod}
                onChange={(e) => setPayMethod(e.target.value)}
              >
                <option value="" disabled>
                  --Select Payment Method--
                </option>
                <option>Cash</option>
                <option>Online-Payment</option>
                <option>Credit-Card</option>
                <option>Debit-Card</option>
              </select>
            </div>

            <div className="inv-div">
              <span>paid Amount</span>
              <input className="select" type="text"></input>
            </div>
          </div>

          <br></br>
          <div className="inv-div">
            <span>Due Amount</span>
            <br></br>
            <input className="select-due" type="text" />
          </div>
        </div>

        <div className="genrate-checkbox">
          <input type="checkbox" />
          <span>Genrate Invoice</span>
        </div>

        {/* save & send */}

        <div className="button">
          <Link to="/" className="save">
            {" "}
            Save as Draft
          </Link>
          <Link to="/Invoice" className="send">
            {" "}
            Send
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SalesOrder;

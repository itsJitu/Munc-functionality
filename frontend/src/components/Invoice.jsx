import { useState, useEffect } from "react";
import "./Invoice.css";
import { Link } from "react-router-dom";

function Invoice() {
  const [produtsData, setproductsData] = useState([]);
  const [costumerData, setCostumerData] = useState([]);
  const [customerName, setCustomerName] = useState("");

  const [invoiceno, setInvoiceno] = useState("");
  const [invoicedate, setInvoicedate] = useState("");
  const [invoiceDueDate, setInvoiceDueDate] = useState("");
  const [invoiceRef, setInvoiceRef] = useState("");
  const [notes, setNotes] = useState("");
  const [PayMethod, setPayMethod] = useState("");
  const [payAmout, setPaidAmount] = useState("");
  const [dueAmount, setDueAmount] = useState("");
  const [productName, setproductName] = useState("");
  const [status, setStatus] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:8080/api/addproduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          invoiceno,
          invoicedate,
          invoiceDueDate,
          invoiceRef: Number(invoiceRef),
          notes,
          PayMethod,
          payAmout: Number(payAmout),
          dueAmount: Number(dueAmount),
          productName,
          status,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Product added successfully!");
        setInvoiceno("");
        setInvoicedate("");
        setInvoiceDueDate("");
        setInvoiceRef("");
        setNotes("");
        setPayMethod("");
        setPaidAmount("");
        setDueAmount("");
        setproductName("");
        setCustomerName("");
        setStatus("");
      } else {
        setMessage(data.error || "Error adding product");
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

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
      <form action="" onSubmit={handleSubmit}>
        <div className="genrate">
          <p>Generate Invoices</p>
          {message && <p>{message}</p>}
        </div>

        
        <div className="customer-details">
          {/* select customer */}
          <div>
            <p> Select Customer </p>
            <select
              className="select"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            >
              <option disabled>--select--</option>
              {costumerData.map((costumer) => (
                <option key={costumer.id} value={costumer.customerFullName}>
                  {costumer.customerFullName}
                </option>
              ))}
            </select>
          </div>

          {/* Details */}
          <div className="invoice-details">
            <span>Invoice Details</span>
          </div>

          <div className="invoice-nos">
            {/* Nos.*/}
            <div className="inv-div">
              <span>Invoice Nos.</span>
              <input
                className="select"
                type="text"
                required
                value={invoiceno}
                onChange={(e) => setInvoiceno(e.target.value)}
              ></input>
            </div>
            {/* Invoice Date */}

            <div className="inv-div">
              <span>Invoice Date</span>
              <input
                className="select"
                type="date"
                value={invoicedate}
                onChange={(e) => setInvoicedate(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="invoice-nos">
            {/* Due Date */}
            <div className="inv-div">
              <span>Due Date</span>
              <input
                className="select"
                type="date"
                value={invoiceDueDate}
                onChange={(e) => setInvoiceDueDate(e.target.value)}
              ></input>
            </div>

            {/* Reference No */}
            <div className="inv-div">
              <span>Reference Nos.</span>
              <input
                className="select"
                type="number"
                value={invoiceRef}
                onChange={(e) => setInvoiceRef(e.target.value)}
              ></input>
            </div>
          </div>

          {/* Add products */}
          <div className="add-products">
            <span> Add Products </span>
          </div>

          {/* table div */}
          <div className="db-table">
            <table className="te">
              <thead className="tr-head">
                <tr className="table-rose">
                  <th
                    style={{
                      padding: "10px 30px",
                      borderTopLeftRadius: "10px",
                    }}
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

          {/* Notes */}
          <div>
            <p className="notes">Notes</p>
            <textarea
              className="select-notes"
              type="text"
              placeholder="please review and approve the quotations."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>

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

          {/* Payment info. */}
          <div>
            
            <div className="payment-info">
              <span>payment info.</span>
            </div>

            <div className="invoice-nos">
              {/* Payment Method*/}
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
              {/* Invoice Date */}

              <div className="inv-div">
                <span>paid Amount</span>
                <input
                  className="select"
                  type="number"
                  value={payAmout}
                  onChange={(e) => setPaidAmount(e.target.value)}
                />
              </div>
            </div>

            <br></br>
            <div className="inv-div">
              <span>Due Amount</span>
              <br></br>
              <input
                className="select-due"
                type="text"
                value={dueAmount}
                onChange={(e) => setDueAmount(e.target.value)}
              />
            </div>
          </div>

          {/* save & send */}

          <div className="button">
            <button className="save">Save as draft</button>
            <button type="submit" className="send">
              Send
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default Invoice;

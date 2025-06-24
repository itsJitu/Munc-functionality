import "./Invoice.css";
import { Link } from 'react-router-dom';


function Invoice() {
  return (

      <div className="main">
        <div className="genrate">
          <p>Generate Invoices</p>
        </div>

        {/* invoice details */}
        <div className="customer-details">
          {/* select customer */}
          <div>
            <p> Select Customer </p>
            <select className="select"></select>
          </div>

          {/* Details */}
          <div className="invoice-details">
            <span>Invoice Details</span>
          </div>

          <div className="invoice-nos">
            {/* Nos.*/}
            <div className="inv-div">
              <span>Invoice Nos.</span>
                <input className="select" type="text"></input>
            </div >  
              {/* Invoice Date */}
               
               <div className="inv-div">
                <span>Invoice Date</span>
                <input className="select" type="date"></input>
               </div>
           
          </div>

        
          <div className="invoice-nos">
              {/* Due Date */}
            <div className="inv-div">
                <span>Due Date</span>
                <input className="
                select" type="date"></input>
            </div>
            {/* Reference No */}
            <div className="inv-div">
                <span>Reference Nos.</span>
                <input className="
                select" type="number"></input>
            </div>

          </div>

          {/* Add products */}
          <div className="add-products">
            <span> Add Products </span>
          </div>

          {/* products Details */}
         <table className="table">
            <thead>
                <tr className="table-row">
                    <th style={{width:'200px', textAlign:'left'}}>
                    Products</th>
                    <th>Quantity</th>
                    <th>price</th>
                    <th>Tax</th>
                    <th>discount</th>
                    <th>Total Amout</th>
                </tr>
            </thead>
         </table>

         <hr />
         <p style={{color:' rgb(46, 133, 247)'}}> + Add products</p>

         <div >
            <p className="notes">Notes</p>
            <textarea className="select-notes"type="text" placeholder="please review and approve the quotations."></textarea>
         </div>

         {/* Bill details table */}
        <div className="table-cont">
         <table >
            <thead className="bill-details">
                <tr>
                    <td className="subtotal" style={{width:'10%', textAlign:'right'}}>Subtotal</td>
                    <td className="amount" style={{textAlign:'left'}}>$189</td>
                </tr>

                <tr>
                    <td className="subtotal" style={{width:'10%', textAlign:'right'}}>Total Discount</td>
                    <td className="amount" style={{textAlign:'left'}} >--</td>
                </tr>

                <tr>
                    <td className="subtotal" style={{width:'10%', textAlign:'right'}}>Total tax</td>
                    <td className="amount" style={{textAlign:'left'}}>45</td>
                </tr>
            </thead>
         </table>
        </div>

        {/* total table */}

        <div className="total-cont">
            
            <div className="total-amount">
            
            <div><hr></hr>
           
           <div className="total-dis">
            <span>Total</span>
            <span>450</span>
            </div>
            </div>
           
           </div>

        </div>

         <hr />

         {/* Payment info. */}
         <div>
            {/* payment & paid */}
            <div className="payment-info">
                <span>payment info.</span>
            </div>
{/* 
            <div className="payment-met">
            <div className="pay-div">
                <span>payment Method</span>
                <input type="text" />
            </div>

            <div>    
                <span>paid Amount</span>
                <br />
                <input type="text" />
            </div>
            </div> */}

              <div className="invoice-nos">
            {/* Payment Method*/}
            <div className="inv-div">
              <span>Payment Method</span>
                <input className="select" type="text"></input>
            </div >  
              {/* Invoice Date */}
               
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

         {/* save & send */}

         <div className="button">
            <Link to="/Quotations" className="save"> SalesOrder</Link>
             <Link to="/Quotations" className="send"> Send</Link>
         </div>

          
        </div>
      </div>
    
  );
}

export default Invoice;

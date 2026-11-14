import React from "react";
import { useNavigate } from "react-router-dom";

const Bill = () => {
    const bill = JSON.parse(localStorage.getItem("latestBill"));
    const navigate = useNavigate();

    if(!bill) return <div style={{padding: '30px'}}>No Invoice Found. 
    <button onClick={()=> navigate("/")}>Go Home</button></div>;

    return(
        <div style={{maxWidth: '500px', margin: '30px auto', background: 'white',
            padding: '25px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            fontFamily: 'Arial'}}>
                <h2 style={{textAlign: 'center', color: '#1b5e20'}}>Order Confirmed!</h2>
                <p style={{textAlign: 'center'}}>Thank you, {bill.customerName}</p>

                <div style={{border: '2px dashed #1b5e20', padding: '20px',
                     borderRadius: '12px', margin: '15px'}}>
                        <h3 style={{textAlign: 'center'}}>PlantMatch - INVOICE</h3>
                        <hr />
                        <p><b>Order: ID:</b>{bill.orderId}</p>
                        <p><b>Date:</b>{bill.date}</p>
                        <p><b>Customer:</b>{bill.customerName}({bill.phone})</p>
                        <p><b>Address:</b>{bill.location}</p>
                        <hr />
                        {(bill.items || []).map((item, index) => (
                            <p key={index} style={{display: 'flex',
                                 justifyContent: 'space-between'}}>
                                    <span>{item.name} * {item.qty || 1}</span>
                                    <span>Rs. {(item.price || 500) *(item.qty || 1)}</span>
                                 </p>
                        ))}
                        <hr />
                        <h2 style={{textAlign: 'right'}}>Total: Rs. {bill.totalAmount}</h2>
                     </div>

                     <button onClick={() => window.print()} style={{width: '100%',
                        marginTop: '20px', background: 'black', color: 'white', padding: '12px',
                        borderRadius: '10px', border: 'none', cursor: 'pointer'
                     }}>Print Invoice</button>

                     <button onClick={() => navigate("/")} style={{width: '100%',
                        marginTop: '10px', background: '#1b5e20', color: 'white', padding: '12px',
                        borderRadius: '10px', border: 'none', cursor: 'pointer'}}>
                            Continue Shopping
                        </button>
            </div>
    );
};
export default Bill;
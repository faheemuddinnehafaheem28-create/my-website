import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import {useNavigate} from "react-router-dom";

function Cart() {
    const {cart, removeFromCart, clearCart} = useContext(CartContext);
    const total = cart.reduce((sum, item) => sum + (item.price || 500) * (item.qty || 1), 0);
    const navigate = useNavigate();

    //popup for buynow
    const [showModel, setShowModel] = useState(false);
    const [formData, setFormData] = useState({
        customerName: "",
        phone: "",
        location: "",
    });
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
};

//Buy now click karne pr popup open hoga
const handleBuy = () => {
    setShowModel(true)
};
//Confirm Order wala.. Backend me jayega!
const handleConfirmOrder = async () => {
    if(!formData.customerName || !formData.phone || !formData.location){
        alert("Please fill all the feilds!");
        return;
    }

    try{
        for (let item of cart){
            await fetch("http://localhost:7000/api/orders/post", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    plantName: item.name,
                    quantity: item.qty || 500,
                    price: item.price || 500,
                    totalPrice: (item.price || 500) * (item.qty || 1),
                    customerName: formData.customerName,
                    phone: formData.phone,
                    location: formData.location,
                }),
            });
        }
        //Bill logic 
        const finalBill = {
            orderId: "PM-" + Date.now(),
            customerName: formData.customerName,
            phone: formData.phone,
            location: formData.location,
            items: cart,
            totalAmount: total,
            date: new Date().toLocaleString(),
        };
        localStorage.setItem("latestBill", JSON.stringify(finalBill));

        setShowModel(false);
        clearCart();
        setFormData({customerName: "", phone: "", location: ""});

        navigate("/bill");

    }catch(err){
        console.log(err);
        alert("Order Failed!");
    }   
};

    return(
        <div style={{padding: "30px", fontFamily: "Arial"}}>
            <h1 style={{fontSize: "24px", fontWeight: "bold"}}>Your Cart 🛒</h1>
            {cart.length === 0 && <p style={{marginTop: "15px"}}>Cart is Empty!</p>}

            {cart.map((item) => (
                <div key={item._id} style={{display: "flex", justifyContent: "space-between",
                    border: "1px solid #ddd", padding: "10px", borderRadius: "5px"}}>
                        <span>{item.name} * {item.qty || 1}</span>
                        <span>Rs{(item.price || 500) *( item.qty || 1)}</span>
                        <button onClick={() => removeFromCart(item._id)} style={{
                            color: "red",
                            border: "none", background: "none", cursor: "pointer"}}>
                                Remove
                            </button>
                    </div>
            ))}
            <h2 style={{marginTop: "20px", fontWeight: "bold"}}>Total: Rs {total}</h2>

            {cart.length > 0 && (
                <button onClick={handleBuy} style={{backgroundColor: "#1b5e20",
                     color: "white", padding: "10px 25px", border: "none",
                    borderRadius: "5px", marginTop: "15px", cursor: "pointer"}}>
                        Buy Now
                    </button>
            )}
            {/*POPUP MODEL!*/}
            {showModel && (
                <div style={{position: "fixed", top: "0px", left: "0px", right: "0px",
                     width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.5)", 
                     display: "flex",
                    justifyContent: "center", alignItems: "center", zIndex: "9999"
                }}>
                    <div style={{backgroundColor: "white", padding: "25px",
                         borderRadius: "10px", width: "350px", display: "flex",
                          flexDirection: "column", boxShadow: "0px 0px 10px black"}}>

                    <h3 style={{fontWeight: "bold", marginBottom: "15px", 
                        textAlign: "center"}}>Delivery Details</h3>

                    <input type="text"
                    name="customerName"
                    placeholder="Full Name"
                    value={formData.customerName}
                    onChange={handleChange} 
                    style={{width: "100%", padding: "8px", marginBottom: "10px",
                     border: "1px solid #ccc", borderRadius: "5px"}}
                     />
                     <input type="text"
                     name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange} 
                    style={{width: "100%", padding: "8px", marginBottom: "10px",
                     border: "1px solid #ccc", borderRadius: "5px"}}
                     />
                     <textarea name="location"
                     placeholder="Full Address/ Location"
                     value={formData.location}
                     onChange={handleChange}
                     style={{width: "100%", padding: "8px", marginBottom: "10px",
                     border: "1px solid #ccc", borderRadius: "5px"}}></textarea>

                     <div style={{display: "flex", gap: "10px", marginTop: "15px"}}>
                        <button onClick={() => setShowModel(false)} style={{
                            width: "50%", padding: "10px", backgroundColor: "#ccc",
                             border: "none", borderRadius: "5px", cursor: "pointer"
                        }}>Cancel</button>
                        <button 
                        onClick={handleConfirmOrder}
                        style={{width: "50%", padding: "8px", backgroundColor: "#1b5e20",
                            color: "white", border: "none", borderRadius: "5px", cursor: "pointer"
                        }}>Confirm Order</button>
                     </div>
                </div>
                </div>
            )}
        </div>         
    );
}
export default Cart;
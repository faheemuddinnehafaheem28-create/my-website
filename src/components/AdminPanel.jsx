import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function AdminPanel(){

    //--- Logout k liye
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    const handleLogout = () => {
        localStorage.removeItem("logout Clicked");
        localStorage.removeItem("isAdminLogin");
        localStorage.removeItem("adminEmail");
        window.location.href = "/admin";
    };

    // ---Password lock selection ---
    const [isLogin, setLogin] = useState(false);
    const [password, setPassword] = useState("");
    const ADMIN_PASSWORD = "uddinFaheem@725"; //password of login

    const handleLogin = () => {
        if (password === ADMIN_PASSWORD) {
            setLogin(true);
            localStorage.setItem("isAdminLogin", "true"); // Taake bar bar na puchy!
        }else{
            alert("Password wrong Neha!")
        }
    };

    useEffect(() => {
        //Agar pehly se login hy to direct open kardu!
        if(localStorage.getItem("isAdminLogin") === "true"){
            setLogin(true);
        }
    }, []);

    //---Admin panel ka overall data ---
    const [activeTab, setActiveTab] = useState("contacts");
    const [contacts, setContacts] = useState([]);
    const [donations, setDonations] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (isLogin){
        fetch("http://localhost:7000/api/contact/get")
        .then(r=>r.json())
        .then(d=> { console.log("CONTACT:", d); setContacts(d.data || d); });
         fetch("http://localhost:7000/api/donate/get")
        .then(r=>r.json())
        .then(d=> { console.log("DONATE:", d); setDonations(d.data || d); });
         fetch("http://localhost:7000/api/testimonial/get")
        .then(r=>r.json())
        .then(d=>{ console.log("TESTMONIAL:", d); setTestimonials(d.data || d); });
        fetch("http://localhost:7000/api/orders/get")
        .then(r=>r.json())
        .then(d=>{ console.log("ORDERS:", d); setOrders(d.data || d); });
        }
    }, [isLogin]);

    //Delete Order Function
    const handleDelete = async (id) => {
        const confirm = window.confirm("Deleted Now!");
        if(!confirm) return;
        try{
            await fetch(`"http://localhost:7000/api/orders/delete/${id}`, {
                method: "DELETE",
            });
            setOrders(orders.filter((o) => o._id !== id));
            alert("Order deleted successfully!");
        }catch(err){
            console.log(err);
        }
    };

    //Delete Donation Function
    const handleDeleteDonation = async (id) => {
        const confirm = window.confirm("Delete this donation?");
        if(!confirm) return;
        try{
            await fetch(`http://localhost:7000/api/donate/delete/${id}`,{
                method: "DELETE",
            });
            setDonations(donations.filter((d) => d._id !== id));
            alert("Donation deleted successfully");
        }catch(err){
            console.log(err)
        }
    }

    //Delete Contact Function
    const handleDeleteContact = async (id) => {
        const confirm = window.confirm("Delete this contact?");
        if(!confirm) return;
        try{
            await fetch(`http://localhost:7000/api/contact/delete/${id}`,{
                method: "DELETE",
            });
            setContacts(contacts.filter((d) => d._id !== id));
            alert("Contact deleted successfully");
        }catch(err){
            console.log(err)
        }
    }

    //Delete Testimonials Function
    const handleDeleteTestimonial = async (id) => {
        const confirm = window.confirm("Delete this testimonials?");
        if(!confirm) return;
        try{
            await fetch(`http://localhost:7000/api/testimonial/delete/${id}`,{
                method: "DELETE",
            });
            setTestimonials(testimonials.filter((d) => d._id !== id));
            alert("Testimonials deleted successfully");
        }catch(err){
            console.log(err)
        }
    }

    //Update and Pending
    const handleStatusChange = async (id, currentStatus) => {
        const newSatus = currentStatus === "Pending" ? "Delivered" : "Pending";
        try{
            await fetch(`http://localhost:7000/api/orders/update-status/${id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({status: newSatus})
            });
            setOrders(orders.map(o => o._id === id ? {...o, status: newSatus} : o));
        }catch(err)
        {console.log(err)   
        }
    }



    //---Admin Login nhh hy to yr dekhyga!
    if(!isLogin){
        return(
            <div style={{display: "flex", justifyContent: "center", alignItems: "center",
                height: "100vh", background: "#f1f8e9"}}>
                    <div style={{background: "white", padding: "30px", borderRadius: "12px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)", width: "320px",
                         textAlign: "center" }}>
                            <h2 style={{color: "#666", fontSize: "14px"}}>
                                Only for Admin
                            </h2>
                            <input type="password"
                            placeholder="Enter your paasword!"
                            style={{width: "100%", padding: "10px", margin: "15px 0",
                                border: "1px solid #ccc", borderRadius: "8px" }}
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                />
                                <button onClick={handleLogin} style={{
                                    width: "100%", padding: "10px", background: "#2e7d32", 
                                    color: "white", border: "none", borderRadius: "8px",
                                    cursor: "pointer"
                                }}>Login</button>
                         </div>
                </div>
        );
    }

    return(
        <div style={{padding: "30px", fontFamily: "Arial"}}>
            <div style={{display: "flex", justifyContent: "space-between",
                alignItems: "center"
            }}>
            <div>
            <h1 style={{color: '#2e7d32', fontSize: "32px"}}>🌿PlantMatch Admin Panel Dashboard</h1>
            <p style={{color: '#666'}}>Manage all user submission from here.</p>
            </div>
            <button onClick={handleLogout}
            style={{background: "#e53935",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                height: "40px"
            }}>Logout</button>
            </div>

            <div style={{display: 'flex', gap: '10px', margin: '20px 0'}}>
                
                <button onClick={() => setActiveTab("contacts")} 
                style={{padding: '10px 20px',
                 background: activeTab==="contacts"?"#2e7d32":"#eee",
                 color: activeTab==="contacts"?"white":"black",
                 border: "none",
                 borderRadius: "8px",
                 cursor: "pointer"}}>
                Contact Messages ({contacts.length})</button>

                 <button onClick={() => setActiveTab("donations")} 
                style={{padding: '10px 20px',
                 background: activeTab==="contacts"?"#2e7d32": "#eee",
                 color: activeTab==="donations"?"white":"black",
                 border: "none",
                 borderRadius: "8px",
                 cursor: "pointer"}}>
                Plant Donations ({donations.length})</button>

                 <button onClick={() => setActiveTab("testimonials")} 
                style={{padding: '10px 20px',
                 background: activeTab==="contacts"?"#2e7d32": "#eee",
                 color: activeTab==="testimonials"?"white":"black",
                 border: "none",
                 borderRadius: "8px",
                 cursor: "pointer"}}>
                Testimonials ({testimonials.length})</button>

                <button 
                onClick={() => setActiveTab("orders")}
                style={{padding: '10px 20px',
                 background: activeTab==="orders"?"#2e7d32": "#eee",
                 color: activeTab==="orders"?"white":"black",
                 border: "none",
                 borderRadius: "8px",
                 cursor: "pointer"}}>
                    Plant Orders({orders.length})
                 </button>
            </div>

            {activeTab === "contacts" && (
                    <div>
                    <table style={{width: "100%", borderCollapse: "collapse"}}>
                        <thead><tr style={{background: "#e8f5e9"}}>
                            <th style={{border: "1px solid #ddd", padding: "12px"}}>Name</th>
                            <th style={{border: "1px solid #ddd", padding: "12px"}}>Email</th>
                            <th style={{border: "1px solid #ddd", padding: "12px"}}>Message</th></tr></thead>
                    <tbody>{contacts.map ( c => (<tr key={c._id}><td style={{
                        border: "1px solid #ddd", padding: "10px"}}>{c.name}</td>
                        <td style={{border: "1px solid #ddd", padding: "10px"}}>{c.email}</td>
                        <td style={{border: "1px solid #ddd", padding: "10px"}}>{c.message}</td>
                         <td style={{ border: "1px solid #ddd", padding: "10px"}}>
                                        <button onClick={() =>
                                             handleDeleteContact(c._id)}
                                             style={{background: "red", color: "white",
                                         border: "none", padding: "6px 12px",
                                          borderRadius: "5px", cursor: "pointer"}}>
                                            Delete
                                          </button>
                                    </td>
                        </tr>))}</tbody>
                    </table>
                    </div>
            )}

             {activeTab === "donations" && (
                    <div>
                   <h2 style={{color: "#2e5c32"}}>🌱Plant Donation List</h2>
                   <p style={{color: "#666"}}>All customer plant donation here!</p>
                   <table style={{width: "100%", borderCollapse: "collapse", margin: "10px"}}>
                    <thead><tr style={{background: "#e8f5e9"}}>
                        <th style={{border: "1px solid #ddd", padding: "12px"}}>Donor Name</th>
                        <th style={{border: "1px solid #ddd", padding: "12px"}}>Email</th>
                        <th style={{border: "1px solid #ddd", padding: "12px"}}>Amount</th>
                        <th style={{border: "1px solid #ddd", padding: "12px"}}>Message</th>
                        <th style={{border: "1px solid #ddd", padding: "12px"}}>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                            {donations.map(d =>
                             (<tr key={d._id}>
                            <td style={{
                            border: "1px solid #ddd", padding: "10px"}}>
                        {d. name || d.donorName}</td>
                        <td style={{   border: "1px solid #ddd", padding: "10px"}}>
                            {d.email}</td>
                            <td style={{   border: "1px solid #ddd", padding: "10px"}}>
                                Rs. {d.amount}</td>
                                <td style={{   border: "1px solid #ddd", padding: "10px"}}>
                                    {d.message}</td>
                                    <td style={{
                                   border: "1px solid #ddd", padding: "10px"
                                    }}>{d.createAt ? new Date(d.createAt).toLocaleDateString() : "-"}
                                    </td>
                                    <td style={{ border: "1px solid #ddd", padding: "10px"}}>
                                        <button onClick={() =>
                                             handleDeleteDonation(d._id)}
                                             style={{background: "red", color: "white",
                                         border: "none", padding: "6px 12px",
                                          borderRadius: "5px", cursor: "pointer"}}>
                                            Delete
                                          </button>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                   </table>
                    </div>
            )}

            {activeTab === "testimonials" && (
                <div>
                    <h2 style={{color: "#2e7d32"}}>🌿User Testimoinals</h2>
                    <p style={{color: "#666"}}>All user feedback and reviews!</p>
                    <table style={{width: "100%", borderCollapse: "collapse", margin: "15px"}}>
                        <thead>
                            <tr style={{background: "#e8f5e9"}}>
                                <th style={{border: "1px solid #ddd", padding: "12px",
                                     textAlign: "left"}}>Name</th>
                                <th style={{border: "1px solid #ddd", padding: "12px",
                                     textAlign: "left"}}>Feedback</th>
                                <th style={{border: "1px solid #ddd", padding: "12px",
                                     textAlign: "left"}}>Rating</th>
                                <th style={{border: "1px solid #ddd", padding: "12px",
                                     textAlign: "left"}}>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testimonials.length === 0 ?(
                                <tr><td colSpan={"4"} style={{padding: "20px", textAlign: "center",
                                    color: "#999"
                                }}>No testimonials yet!</td></tr>
                            ) : (
                                testimonials.map(t => (
                                    <tr key={t._id}>
                                    <td style={{border: "1px solid #ddd", padding: "10px"}}>
                                            {t.name}</td>
                                    <td style={{border: "1px solid #ddd", padding: "10px"}}>
                                            {t.message || t.feedback}</td>
                                    <td style={{border: "1px solid #ddd", padding: "10px"}}>
                                           {t.rating ? "⭐".repeat(t.rating) : "⭐⭐⭐⭐⭐"}</td>
                                     <td style={{border: "1px solid #ddd", padding: "10px"}}>
                                            {t.createAt ? new Date(t.createAt)
                                            .toLocaleDateString() : "-"}</td>
                                             <td style={{ border: "1px solid #ddd", padding: "10px"}}>
                                        <button onClick={() =>
                                             handleDeleteTestimonial(t._id)}
                                             style={{background: "red", color: "white",
                                         border: "none", padding: "6px 12px",
                                          borderRadius: "5px", cursor: "pointer"}}>
                                            Delete
                                          </button>
                                    </td>

                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
            {activeTab === "orders" && (
                <div>
                    <h2 style={{color: "#2e5c32"}}>🌱 Plant Orders</h2>
                    <p style={{color: "#666"}}>All customer plant orders from cart!</p>

                    <div style={{textAlign: "center", margin: "15px 0"}}>
                        <input type="text"
                        placeholder="🔍Search by Plant or Customer..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{padding: "10px", width: "320px", borderRadius: "8px",
                            border: "1px solid green"
                        }}/>
                    </div>

                    <table style={{width: "100%", borderCollapse: "collapse", margin: "15px"}}>
                        <thead>
                            <tr style={{background: "#e8f5e9"}}>
                                <th style={{border: "1px soild #ddd", padding: "12px"}}>
                                    Plant Name
                                </th>
                                 <th style={{border: "1px soild #ddd", padding: "12px"}}>
                                    Customer
                                </th>
                                 <th style={{border: "1px soild #ddd", padding: "12px"}}>
                                    Phone
                                </th>
                                 <th style={{border: "1px soild #ddd", padding: "12px"}}>
                                    Location
                                </th>
                                 <th style={{border: "1px soild #ddd", padding: "12px"}}>
                                    Total
                                </th>
                                 <th style={{border: "1px soild #ddd", padding: "12px"}}>
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.filter(o => 
                            o.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            o.plantName?.toLowerCase().includes(searchTerm.toLowerCase())
                            ).map((o) => ( 
                            <tr key={o._id}>
                                <td style={{border: "1px solid #ddd", padding: "10px"}}>
                                    {o.plantName}
                                </td>
                                 <td style={{border: "1px solid #ddd", padding: "10px"}}>
                                    {o.customerName}
                                </td>
                                 <td style={{border: "1px solid #ddd", padding: "10px"}}>
                                    {o.phone}
                                </td>
                                 <td style={{border: "1px solid #ddd", padding: "10px"}}>
                                    {o.location}
                                </td> <td style={{border: "1px solid #ddd", padding: "10px"}}>
                                    {o.totalPrice}
                                </td>
                                 <td style={{border: "1px solid #ddd", padding: "10px"}}>
                                    {o.createdAt ? new 
                                    Date(o.createdAt).toLocaleDateString() : "-"}
                                </td>

                                <td style={{border: "1px solid #ddd", padding: "10px"}}>
                                    <span style={{
                                        backgroundColor: o.status ===
                                         "Delivered" ? "green" : "orange",
                                         color: "white",
                                         padding: "4px 8px",
                                         borderRadius: "5px"
                                    }}>
                                        {o.status || "Pending"}
                                    </span>
                                </td>
                                <td style={{border: "1px solid #ddd", padding: "10px"}}>
                                    <button onClick={() => handleStatusChange(o._id,)}
                                        style={{background: "blue", color: "white",
                                         border: "none", padding: "6px 12px",
                                          borderRadius: "5px", cursor: "pointer"}}>
                                            {o.status === "Delivered" ? "Mark Pending" : "Mark Delivered"}
                                          </button>
                                </td>

                                <td style={{border: "1px solid #ddd", padding: "10px"}}>
                                    <button onClick={() => handleDelete(o._id)}
                                        style={{background: "red", color: "white",
                                         border: "none", padding: "6px 12px",
                                          borderRadius: "5px", cursor: "pointer"}}>
                                            Delete
                                          </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
           )}
           export default AdminPanel;
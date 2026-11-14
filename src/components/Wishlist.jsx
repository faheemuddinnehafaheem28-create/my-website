import {useContext, useEffect ,useState } from "react";
import { CartContext } from "./CartContext";

function Wishlist(){
    const [wishlist, setWishlist] = useState([]);
    const {addToCart: addToCartContext} = useContext(CartContext)

    useEffect(() => {
        fetch("http://localhost:7000/api/wishlist")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setWishlist(Array.isArray(data) ? data : []);
        });
    }, []);

    const removeItem = async (item) => {
        await fetch(`http://localhost:7000/api/wishlist/${item._id || item.plantId}`,
             {method: "DELETE"});
        setWishlist(wishlist.filter(i => i._id !== (item._id || item.plantId)));
    };

    const addToCart = async (wishlistItem) => {
        const item = Array.isArray(wishlistItem) ? wishlistItem[0]: wishlistItem;
        console.log("Real item", item);

        //CartContext plant
        const plantForCart = {
            _id: item.plantId || item._id,
            Name: item.plantName || "Snake Plant",
            name: item.plantName || "Snake Plant",
            price: item.plantPrice || 500
        };

        //local cart (NavBar) update
        addToCartContext(plantForCart);


        await fetch("http://localhost:7000/api/cart", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                plantId: item.plantId || item._id,
                plantName: item.plantName || item.name || "Snake Plant",
                plantPrice: item.plantPrice || item.price || item.Rs || 500
            })
        });
        alert("Added to Cart Neha!");
        window.location.reload();
    };

    return(
        <div style={{padding: "20px"}}>
            <h2>❤️ My Wishlist ({wishlist.length})</h2>
            <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
                {wishlist.map(item => (
                    <div key={item._id} style={{border: "1px solid #ddd", padding: "15px",
                        borderRadius: "12px", width: "220px", textAlign: "center",
                         background: "#f9fff9"
                    }}>
                        <div style={{fontSize: "50px", background: "#e8f5e9",
                             borderRadius: "10px", padding: "10px", marginBottom: "10px"}}>
                                🌿
                             </div>
                             <h3 style={{margin: "5px 0"}}>{item.plantName}</h3>
                             <p style={{color: "green", fontSize: "bold"}}>Rs. {item.plantPrice}</p>
                             <div style={{display: "flex", gap: "10px", justifyContent: "center",
                                marginTop: "10px"
                             }}>
                                <button 
                                onClick={() => addToCart(item)}
                                style={{background: "green", color: "white",
                                     border: "none", padding: "6px 12px",
                                      borderRadius: "5px", cursor: "pointer"}}>Add to Cart</button>
                                <button onClick={() => removeItem(item._id)}
                                 style={{background: "red", color: "white", border: "none",
                                    padding: "6px 12px", borderRadius: "5px", cursor: "pointer"
                                 }}>Remove</button>
                             </div>
                    </div>
                ))}
            </div>
        </div>
    ); 
}
export default Wishlist;
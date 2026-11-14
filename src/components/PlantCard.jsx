import { useContext } from "react";
import { CartContext } from "./CartContext";

function PlantCard ({ plant }) {
    const {addToCart} = useContext(CartContext);

    return(
        <div style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "10px",
            width: "250px"
        }}>
            <h3>{plant.name}</h3>
            <p>Rs. {plant.price}</p>
            <button onClick={() => addToCart(plant)}
            style={{backgroundColor: "#2e7d32",
                color: "white",
                padding: "8px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px"
            }}>Add to Cart🛒</button>
        </div>
    );
}
export default PlantCard


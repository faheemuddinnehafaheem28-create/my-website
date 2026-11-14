import { useState, useEffect } from "react";

function ReviewBox ({plantId, plantName}){
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

    const fetchReviews = () => {
        fetch(`http://localhost:7000/api/reviews/${plantId}`)
        .then(res => res.json())
        .then (data => setReviews(data));
    };

    useEffect(() => {
        fetchReviews();
    }, [plantId]);

    const handleSubmit = async () => {
        await fetch("http://localhost:7000/api/reviews", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({plantId, plantName, rating, comment, userName: "Neha"})
        });
        setComment("");
        fetchReviews();
        alert("Review Added ⭐");
    };

    const avg = reviews.length ? (reviews.reduce((a, b)=> a+b.rating,0)/reviews.length)
    .toFixed(1) : "No rating";
    return(
        <div style={{marginTop: "10px", borderTop: "1px solid #eee", paddingTop: "8px"}}>
            <p style={{fontSize: "12px", fontWeight: "bold"}}>
                ⭐ {avg} ({reviews.length} reviews)</p>
                <div style={{display: "flex", gap: "3px", margin: "5px 0"}}>
                    {[1,2,3,4,5].map(s => (
                        <span key={s} onClick={()=>setRating(s)} style={{cursor: "pointer",
                            color: s <= rating ? "gold" : "#ccc", fontSize: "18px"
                        }}>⭐</span>
                    ))}
                </div>

                <input value={comment} 
                onChange={(e)=> setComment(e.target.value)}
                placeholder="Write your review!"
                style={{width: "70%", padding: "4px", fontSize: "11px", 
                border: "1px solid #ccc", borderRadius: "4px"}}
                />
                <button onClick={handleSubmit} style={{marginLeft: "4px", padding: "4px 8px",
                    fontSize: "11px", background: "#22c55e", color: "white", border: "none",
                    borderRadius: "4px", cursor: "pointer"
                }}>Post</button>
                {reviews.slice(0,2).map((r,i)=>(
                    <p key={i} style={{fontSize: "11px", margin: "4px 0", color: "#555"}}>
                        ⭐{r.rating} - {r.comment}
                    </p>
                ))}
        </div>
    );
}
export default ReviewBox;
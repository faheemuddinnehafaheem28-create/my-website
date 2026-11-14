import {Link} from "react-router-dom";
import { CartContext } from "./CartContext"
import { useState, useEffect, useContext } from "react";



function Navbar({onSearch}){
    const [searchValue, setSearchValue] = useState('')
    const [scrolled, setScrolled] = useState(false);
    const {cart} = useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
   <div style={{ position: 'sticky', top: '0', zIndex: '1000',
     background: scrolled ? 'blur rgba(255, 255, 255, 0.85)' : 'white',
     backdropFilter: scrolled ? 'blur (12px)':'none',
     boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)':'0 1px 5px rgba(0,0,0,0.08)',
     transition: 'all 0.3s ease'
   }}>
    {/* --- Search Box + Buttons --- */}
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',
     flexWrap: 'wrap', padding: scrolled ? '8px 20px': '12px 20px'
    }}>
        <h2 style={{fontWeight: 'bold', margin: 0, fontSize: scrolled ? '20px': '24px',
            transition: 'all 0.3s ease', whiteSpace: 'nowrap'
        }}>☘️PlantMatch</h2>
        <div style={{flex: 1, display: 'flex', justifyContent: 'center', position: 'relative',
            alignItems: 'center'
        }}>
            <input type="text"
            placeholder="Search Plant🔍"
            value={searchValue}
            onChange={(e)=> {setSearchValue(e.target.value)
            onSearch && onSearch(e.target.value)
            }}
            style={{padding: '7px 30px 7px 15px', borderRadius: '20px',
                 border: '1px solid #e5e7eb',
                background: '#f9fafb', outline: 'none', width: '100%',
                maxWidth: '280px', minWidth: '150px',
                fontSize: '13px'
            }}/>
            {searchValue && (
                <span onClick={()=> {
                    setSearchValue('')
                    onSearch && onSearch('')
                }}
                style={{position: 'absolute', right: 'calc(50% - 110px)',
                    cursor: 'pointer', fontWeight: 'bold', color: '#22c55e'
                }}>X</span>
            )}
        </div>
        <div style={{display: 'flex', gap: '7px', alignItems: 'center'}}>
            <button onClick={() => document.getElementById('donate')?.scrollIntoView
                ({behavior: 'smooth'})} style={{background: '#22c55e', color: 'white',
                    border: 'none', padding: '7px 12px', 
                    borderRadius: '8px' ,cursor: 'pointer', fontWeight: 'bold', fontSize: '12px'
                }}>Donate Now</button>
                <Link to="/login">
               <button
               style={{background: '#f3f4f6', color: 'black', border: 'none',
                 padding: '7px 12px', borderRadius: '8px', cursor: 'pointer',
                  fontWeight: 'bold', fontSize: '12px'
                }}>Login</button>
          </Link>
          <Link to="/signup">
            <button style={{background: '#22c55e', color: 'white', border: 'none',
            padding: '7px 12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold',
             fontSize: '12px'
            }}>Signup</button>
            </Link>
            <button onClick={() => {
            const el = document.getElementById("contact");
            if(el) el.scrollIntoView({behavior: 'smooth'});
            else window.location.href = "/contact";   
            }}style={{background: 'black', color: 'white', border: 'none',
            padding: '7px 12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', 
            fontSize: '12px'}}>
            Contact Now
          </button>
        </div>
    </div>
    {/* --- Line 2 Links --- */}
    <div style={{display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '13px',
        alignContent: 'center', padding: '8px 10px', borderTop: '1px solid #f3f4f6',
        background: scrolled ? 'tranparent': '#fafafa', overflow: 'auto', flexWrap: 'wrap',
        whiteSpace: 'nowrap', scrollbarWidth: 'none'}}>
        <Link to={"/"} style={{textDecoration: 'none', color: '#374151'}}>Home</Link>
        <a href="#howitworks" style={{textDecoration: 'none', color: '#374151'}}>How It Works</a>
        <a href="#why-us" style={{textDecoration: 'none', color: '#374151'}}>Why Us</a>
        <a href="#OurResult" style={{textDecoration: 'none', color: '#374151'}}>Our Result</a>
        <a href="#testimonials" style={{textDecoration: 'none', color: '#374151'}}>Testimonials</a>
        <Link to={"/cart"} style={{textDecoration: 'none', color: 'black', 
            fontWeight: 'bold'}}>Cart ({cart.length})</Link>
            <Link to={"/wishlist"} style={{textDecoration: 'none', color: 'black',
                 fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px'}}>
                    <span style={{color: 'red'}}>❤️</span>Wishlist</Link>
        </div> 
    </div>
    );
};
export default Navbar
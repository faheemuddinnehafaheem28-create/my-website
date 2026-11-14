import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Plant from "./components/Plant"
import Login from "./components/login"
import Signup from "./components/Signup"
import HowItWork from './components/HowItWork'
import WhyUs from './components/WhyUs'
import OurResult from './components/OurResult'
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import Donate from "./components/Donate"
import Contact from "./components/Contact"
import AdminPanel from "./components/AdminPanel"
import Cart from "./components/Cart"
import Wishlist from "./components/Wishlist";
import Bill from "./components/Bill";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react"

function App(){
    const [search, setSearch] = useState("");
    return(
        
            <BrowserRouter>
            
            <Navbar onSearch={setSearch}/>
            <Routes>
                <Route path="/"element={
                
                     <>
                 <Hero/>
                 <HowItWork/>
                 <WhyUs/>
                 <OurResult/>
                 <div id="testimonials">
                    <Testimonials/>
                    <Footer/>
                 </div>
            <div id="plants">
            <Plant search={search}/>
            <Donate/>
            <Contact/>
            </div>
            </>} />
                
            <Route path= "/login" element={<Login/>}/>
            <Route path="/signup" element= {<Signup/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/admin" element={<AdminPanel/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/orders" element={<AdminPanel/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/bill" element={<Bill/>}/>
            </Routes>       
            </BrowserRouter>           
    )
}
export default App
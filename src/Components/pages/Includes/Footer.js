import React from 'react';
import {Link } from 'react-router-dom';




function Footer(){
    return(
        <section className="footer bg-dark text-white">
            <div className="container">
             <div className="row">
                 <div className="col-md-4">
                 <h6> Zero 40 Info</h6><hr/>
                 <p> Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.</p>  
                 </div>
                <div className="col-md-4">
                    <h6> Quick Links</h6>
                    <hr/>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/aboutus">About Us</Link></div>
                    <div><Link to="/contactus">Contact Us</Link></div>
                </div>
                <div className="col-md-4">
                    <h6>Contact Information</h6>
                    <hr/>
                    <div><p className="text-white mb1">#plot 723, 302,Sudaksha Educational Institute,Madhapur</p></div>
                    <div><p className="text-white mb1">+91-995xxxxx40</p></div>
                    <div><p className="text-white mb1">+91-834xxxxx40</p></div>
                    <div><p className="text-white mb1">email@sudaksha.com</p></div>
                 </div>   
             </div>  
             </div>
        </section>
    )
}
export default Footer;
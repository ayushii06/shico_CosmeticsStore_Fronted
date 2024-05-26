import React from 'react'
import './Footer.css'
import f1 from '../assets/FooterIcon/Footer-Icon-01.avif'
import f2 from '../assets/FooterIcon/Footer-Icon-02.png'
import f3 from '../assets/FooterIcon/Footer-Icon-03.png'


function Footer() {
  return (
    <>
       <div className="about-us">
        <div className="motive p-12">
            <div className="Heading">Shico</div>
            <div className="para">Shico is a one-stop beauty destination that gives you access to a comprehensive range of Cosmetics, Skincare, Haircare, Personal Grooming & Fragrances. We strive to make your shopping journey pleasant by offering exclusive and exciting deals. Join us and let us make your shopping experience an exciting and thrilling affair!</div>
        </div>
        <hr/>
        <div className="sp-btw p-12">
            <div className="footer-info flex">
                <img className="footer-icon" src={f1} />
                <div className="white">
                    <p className="">Safe & Secure Payment</p>
                    <p className="">Safe</p>
                </div>
            </div>
            <div className="footer-info flex">
                <img className="footer-icon" src={f2} />
                <div className="white">
                    <p className="">Safe & Secure Payment</p>
                    <p className="">Safe</p>
                </div>
            </div>
            <div className="footer-info flex">
                <img className="footer-icon " src={f3} />
                <div className="white">
                    <p className="">Safe & Secure Payment</p>
                    <p className="">Safe</p>
                </div>
            </div>
            
        </div>
       </div>
    <div className="Upper-part">
        <div className="grid-5">
            <div className="col">
                <p className=" bold">Get to Know US</p>
                <p className="data">About Us</p>
                <p className="data">Careers</p>
                <p className="data">Press Releases</p>
                <p className="data">Shico Stories</p>
                <p className="data">Corporate Information</p>
            </div>
            <div className="col">
                <p className="bold">Help</p>
                <p className="data">Contact Us</p>
                <p className="data">Frequently Asked Questiond</p>
                <p className="data">Store Location</p>
                <p className="data">Cancellation & Return</p>
                <p className="data">Shipping & Delivery</p>
            </div>
            <div className="col">
                <p className="bold">Consumer Policy</p>
                <p className="data">Cancellation & Return</p>
                <p className="data">Terms Of Use</p>
                <p className="data">Security</p>
                <p className="data">Privacy</p>
                <p className="data">Sitemap</p>
            </div>
            <div className="col">
                <p className="bold">Connect with Us</p>
                <p className="data">Facebook</p>
                <p className="data">Instagram</p>
                <p className="data">Twitter</p>
                <p className="data">Youtube</p>
                <p className="data">Pinterest</p>
            </div>
   
        </div>
    </div>
    <div className="lower-part">
        <div className="flex-content center">
            <p className="">Terms & Conditions</p>
            <p className="">Shipping Policy</p>
            <p className="">Cancellation Policy</p>
            <p className="">Privacy Policy</p>
        </div>
        <p className="center">© 2024 Shico Limited All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer
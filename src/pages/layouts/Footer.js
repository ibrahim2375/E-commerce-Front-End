import React from 'react'
//css 
import '../../css/Footer.css'
function Footer() {
    return (
        <footer>
            <div className="footer-head text-white main-bg">
                <div className="subscribe-section">
                    <h1>Sign up to Online Shopping</h1>
                    {/* <p>...and receive $25 coupon for first shopping.</p> */}
                    <form>
                        <input type="text" placeholder="subscribe" className="subscribe-input" />
                        <button className="btn btn-dark">subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-content bg-light">
                <GroupDataSection />
            </div>
            <hr />
            <div className="footer text-center">
                <p className="text-muted fw-bold"> &copy;<i> Copyright 2022</i> - All rights reserved</p>
            </div>
        </footer >
    )
}
const GroupDataSection = () => {
    return (
        <div className="container d-flex  justify-content-start justify-content-lg-center align-items-start flex-wrap py-5" style={{ gap: '60px' }}>
            <div className="listDataSection">
                <h3>contact</h3>
                <ul>
                    <li>Street 32, San Francisco</li>
                    <li>+01 2222 365 /(+91) 01 2345 6789</li>
                    <li>10:00 - 18:00, Mon - Sat</li>
                </ul>
            </div>
            <div className="listDataSection">
                <h3>about</h3>
                <ul>
                    <li>About Us</li>
                    <li>Delivery Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms Conditions</li>
                </ul>
            </div>
            <div className="listDataSection">
                <h3>my Account</h3>
                <ul>
                    <li>Sign In</li>
                    <li>Track My Order</li>
                    <li>Help</li>
                    <li>Order</li>
                </ul>
            </div>
            <div className="listDataSection">
                <h3>download Our App</h3>
                <ul>
                    <li>From App Store or Google Play</li>
                    <li>google play</li>
                    <li>app store</li>
                </ul>
            </div>
        </div>
    )
}
export default Footer
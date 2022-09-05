import React from 'react'
import FooterData from './FooterData'
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
                <FooterData />
            </div>
            <hr />
            <div className="footer text-center">
                <p className="text-muted fw-bold"> &copy;<i> Copyright 2022</i> - All rights reserved</p>
            </div>
        </footer >
    )
}

export default Footer
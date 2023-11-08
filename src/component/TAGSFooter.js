import { TfiFacebook, TfiPinterest } from "react-icons/tfi";
import { IoChevronUp, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";

function TAGSFooter() {
    return (
        <div className="footer-wrapper">
            <footer>
                <div className="footer-container-top">
                    <div className="footer-top">
                        <p>Have some questions about us?</p>
                        <button>MORE ABOUT US</button>
                    </div>
                </div>
                <div className="footer-container-bottom">
                    <div className="footer-bottom">
                        <div>
                            <h5>HELP & INFORMATION</h5>
                            <ul>
                                <li>FAQS</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Blog</li>
                                <li>Email Us</li>
                                <li>All Services</li>
                                <li>Journal</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Quick Links</h5>
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Properties</li>
                                <li>Services</li>
                                <li>Map Layout</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h5>SERVICES</h5>
                            <ul>
                                <li>Apartments</li>
                                <li>Properties</li>
                                <li>For Sale</li>
                                <li>For Rent</li>
                                <li>Sign Up</li>
                            </ul>
                            <div className="footer-link">
                                <h5>ACCOUNT</h5>
                                <ul>
                                    <li>Main Account</li>
                                    <li>Login</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-item-right">
                            <h5>SOCIAL MEDIA</h5>
                            <div className="TAGS-social-links">
                                <p><TfiFacebook /></p>
                                <p><IoLogoInstagram /></p>
                                <p><IoLogoWhatsapp /></p>
                                <p><TfiPinterest /></p>
                            </div>
                            <div className="footer-link">
                                <ul>
                                    <h5>SIGN UP</h5>
                                    <p>Whether you’re searching for houses, apartments, or condos, it's easy to find a place you'll love here with us at TAGS homes. Sign up today to get a home that feels like home.😁🏡</p>
                                </ul>
                                <div className="footer-input">
                                    <input type="email" placeholder="Email Address" />
                                    <button>SEND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-down">
                    <p>Copyright 2023. All rights reserved. Designed by TAGS🦋</p>
                </div>
            </footer>
            <div className="scroll-to-top">
                <button className="hover-button"><IoChevronUp/></button>
            </div>
        </div>
    );
}

export default TAGSFooter
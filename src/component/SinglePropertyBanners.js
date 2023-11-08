import { useState } from "react";
import logo from "./Imagess/real_estate_logo.png"
import PropertyBannerImg1 from "./Imagess/bg_4.jpeg";
import { IoCaretDownSharp, IoCaretUpSharp, IoLogoWhatsapp,IoHeartCircle, IoPersonCircle, IoSearchOutline } from "react-icons/io5";
import { TfiZoomIn } from "react-icons/tfi";
import { Link } from "react-router-dom";

function SinglePropertyBanners() {
    const [realEstateIsHovered, setRealEstateDropDown] = useState(false);
    const [PropertyIsHovered, setPropertyDropDown] = useState(false);

    const handleRealEstateDropDown = () => {
        setRealEstateDropDown(true);
        setPropertyDropDown(false);
    }
    const handleRealEstateDropdownClose = () => {
        setRealEstateDropDown(false);
    };
    const handlePropertyDropDown = () => {
        setPropertyDropDown(!PropertyIsHovered);
        setRealEstateDropDown(false);
    }
    const handlePropertyDropdownClose = () => {
        setPropertyDropDown(false);
    };
    // const handleUserDropDown = () => {
    //     setUserDropDown(!UserIsHovered);
    // }
    // const handleUserDropdownClose = () => {
    //     setUserDropDown(false);
    // };


    return (
        <div>
            <div className="header-banner props-banner" style={{ backgroundImage: 'linear-gradient(rgba(4, 135, 249, 0.717), rgba(19, 93, 196, 0.598)), url(' + PropertyBannerImg1 + ')', transition: "background-image 0.5s ease", backgroundPositionY: "top" }}>
                <nav className="transparent-navigation-bar">
                    <div className="navbar">
                        <div className="logo">
                            <img src={logo} alt="" />
                            <h1>TAGS <br /> HOMES</h1>
                        </div>
                        <div>
                            <ul className="nav-items">
                            <Link to="/" className="home" style={{color: "white", textDecoration: "none", padding: "10px 20px"}}>Home</Link>

                                <li onMouseLeave={handleRealEstateDropdownClose}><span className={realEstateIsHovered ? "dropdown-hovered" : ""} onMouseEnter={handleRealEstateDropDown}>Real Estate</span>
                                    {realEstateIsHovered && (
                                        <ul className="dropdown-menu">
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">Find An Agents</li>
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">Join TAGS HOMES as an Agent</li>
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">Properties Gallery</li>
                                        </ul>
                                    )}
                                </li>
                                <li className="nav-links">About Us</li>
                                <li onMouseLeave={handlePropertyDropdownClose}><span className={PropertyIsHovered ? "dropdown-hovered-property" : ""} onMouseEnter={handlePropertyDropDown}>Property</span>
                                    {PropertyIsHovered && (
                                        <ul className="dropdown-menu-property">
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">All Properties</li>
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">For Sale</li>
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">For Rent</li>
                                        </ul>
                                    )}
                                </li>
                                <li className="nav-links">Contact</li>
                                <Link to="/wishlist">
                                    <div className="wishlist-div">
                                    <li className="whatsapp"><p> <IoHeartCircle className="wishlist-icon"/></p></li>
                                       
                                    </div>

                                </Link>
                                <li><IoPersonCircle className="user" /></li>
                                <button className="nav-reg-link">Get Started</button>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="search-props" id="property-search">
                <div className="search-wrap">
                    <div className="search-types">
                        <div style={{ borderRight: "1px solid #d7d4d4", padding: "20px 0", paddingRight: "10px" }}>
                            <p style={{ fontSize: "smaller" }}>Location</p>
                            <div className="all-search">
                                <p>All Locations</p>
                                <p><IoCaretDownSharp /></p>
                            </div>
                        </div>
                        <div style={{ borderRight: "1px solid #d7d4d4", padding: "20px 0", paddingRight: "10px" }}>
                            <p style={{ fontSize: "smaller" }}>Property Status</p>
                            <div className="all-search">
                                <p>Any</p>
                                <p><IoCaretDownSharp /></p>
                            </div>
                        </div>
                        <div style={{ padding: "20px 0", paddingRight: "10px" }}>
                            <p style={{ fontSize: "smaller" }}>Property Types</p>
                            <div className="all-search">
                                <p>All Types</p>
                                <IoCaretUpSharp />
                            </div>
                        </div>
                    </div>
                    <div className="search-wraps">
                        <div className="zoom"><TfiZoomIn /></div>
                        <div className="search">
                            <p><IoSearchOutline /></p>
                            <p>Search</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SinglePropertyBanners;
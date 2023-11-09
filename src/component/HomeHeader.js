import { useEffect, useState } from "react";
import logo from "./Imagess/real_estate_logo.png"
import HomeBannerImg1 from "./Imagess/bg_1.jpg.webp";
import HomeBannerImg2 from "./Imagess/bg_2.jpg.webp";
import HomeBannerImg3 from "./Imagess/bg_3.webp";
import HomeBannerImg4 from "./Imagess/bg_4.jpeg";
import { IoArrowDown, IoBed, IoCaretDownSharp, IoCaretUpSharp, IoCheckmarkDoneOutline, IoChevronDown, IoChevronDownOutline, IoLogoWhatsapp, IoPersonCircle, IoReturnUpBackOutline, IoSearchOutline } from "react-icons/io5";
import { TfiZoomIn } from "react-icons/tfi";
import { FaShower } from "react-icons/fa";
import { BiShapeSquare } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Newlookcontext } from "./context/Context";
import {IoHeartCircle } from "react-icons/io5"
// import { useNavigate } from "react-router-dom";

function HomeHeader() {
    const [verified, setVerified] = useState([]);
    let getToken = localStorage.getItem("Merchant_Token")
    let LocalStorageUserInfo = JSON.parse(localStorage.getItem("signUpProfileInfo"))

    useEffect(() => {
        fetch('http://property.reworkstaging.name.ng/v1/properties?merchant=64b7cd2411d45559c8840b5a&verified=true', {
            headers: { 'authorization': `Bearer ${getToken}` }
        })
            .then((resp) => resp.json())
            .then((data) => {
                const firstThreeProducts = data.data.slice(0, 3);
                setVerified(firstThreeProducts);
                console.log(firstThreeProducts);
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [realEstateIsHovered, setRealEstateDropDown] = useState(false);
    const [PropertyIsHovered, setPropertyDropDown] = useState(false);
    const [SignupIsHovered, setSignupDropDown] = useState(false);
    // const [UserIsHovered, setUserDropDown] = useState(false);

    const images = verified.map(product => product.image);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

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

    const handleSignupDropDown = () => {
        setSignupDropDown(true)
        setSignupDropDown(false)
    }

    const handleSignupDropDownClose = () => {
        setSignupDropDown(false)

    }


    const writeUpContent = (
        <div>
            <div className="writeup">
                <h2>{verified[currentImageIndex]?.name}</h2>
                <p className="house-locations">{verified[currentImageIndex]?.address}, {verified[currentImageIndex]?.city}, {verified[currentImageIndex]?.state}, {verified[currentImageIndex]?.country}</p>
                <div className="house-features">
                    <div>
                        <p>Bedrooms</p>
                        <div>
                            <p> <IoBed /></p>
                            <p>{verified[currentImageIndex]?.bedroom}</p>
                        </div>
                    </div>
                    <div>
                        <p>Bathrooms</p>
                        <div>
                            <p><FaShower /></p>
                            <p>{verified[currentImageIndex]?.bathroom}</p>
                        </div>
                    </div>
                    <div>
                        <p>Area</p>
                        <div>
                            <p><BiShapeSquare /></p>
                            <p>{verified[currentImageIndex]?.total_area}</p>
                        </div>
                    </div>
                </div>
                <div className="price-tags">
                    <p>For {verified[currentImageIndex]?.type}</p>
                    <h2>${verified[currentImageIndex]?.price}</h2>
                </div>
            </div>
            <div className="house-label">
                <p>Featured</p><span className="arrow"></span>
            </div>
        </div>
    );


    const newContent = (
        <div className="writeup">
            <h2>{verified[currentImageIndex]?.name}</h2>
            <p className="house-locations">{verified[currentImageIndex]?.address}, {verified[currentImageIndex]?.city}, {verified[currentImageIndex]?.state}, {verified[currentImageIndex]?.country}</p>
            <div className="house-features">
                <div>
                    <p>Bedrooms</p>
                    <div>
                        <p> <IoBed /></p>
                        <p>{verified[currentImageIndex]?.bedroom}</p>
                    </div>
                </div>
                <div>
                    <p>Bathrooms</p>
                    <div>
                        <p><FaShower /></p>
                        <p>{verified[currentImageIndex]?.bathroom}</p>
                    </div>
                </div>
                <div>
                    <p>Area</p>
                    <div>
                        <p><BiShapeSquare /></p>
                        <p>{verified[currentImageIndex]?.total_area}</p>
                    </div>
                </div>
            </div>
            <div className="price-tags">
                <p>For {verified[currentImageIndex]?.type}</p>
                <h2>${verified[currentImageIndex]?.price}</h2>
            </div>
        </div>
    );

    let cardContent;
    if (currentImageIndex < 2) {
        cardContent = writeUpContent;
    } else {
        cardContent = newContent;
    }

 
    return (
        <div>
            <div className="header-banner" style={{ backgroundImage: `url(${images[currentImageIndex]?images[currentImageIndex] :  HomeBannerImg1})`, transition: "background-image 0.5s ease" }}>
                <nav className="transparent-navigation-bar">
                    <div className="navbar"  to="/">
                        <Link to="/" className="logo" style={{color: "white", textDecoration: "none"}}>
                            <img src={logo} alt="" />
                            <h1>TAGS <br /> HOMES</h1>
                        </Link>
                        <div>
                            <ul className="nav-items">
                                <Link to="/" className="home" style={{color: "white", textDecoration: "none", padding: "10px 20px"}}>Home</Link>
                                <li onMouseLeave={handleRealEstateDropdownClose}><span className={realEstateIsHovered ? "dropdown-hovered" : ""}>Real Estate</span>
                                    {realEstateIsHovered && (
                                        <ul className="dropdown-hovered">
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-hovered">Find An Agents</li>
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">Join TAGS HOMES as an Agent</li>
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">Properties Gallery</li>
                                        </ul>
                                    )}
                                </li>
                                <li className="nav-links">About Us</li>
                                <li onMouseLeave={handlePropertyDropdownClose}><span className={PropertyIsHovered ? "dropdown-hovered-property" : ""} onMouseEnter={handlePropertyDropDown}>Property</span>
                                    {PropertyIsHovered && (
                                        <ul className="dropdown-menu-property">
                                            <Link to="/property" className="property-div-underline">
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">All Properties</li>
                                            </Link>
  
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">For Sale</li>
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">For Rent</li>
                                        </ul>
                                    )}
                                </li>
                                <Link to="/appointment"  style={{textDecoration: "none"}}>
                                <li className="nav-links">My appointments</li>
                                </Link>
                               
                                <Link to="/wishlist">
                                    <div className="wishlist-div">
                                    <li className="whatsapp"><p> <IoHeartCircle className="wishlist-icon"/></p></li>
                                       
                                    </div>

                                </Link>

                                
                                <li onMouseLeave={handleSignupDropDownClose} >
                                     <div className= {SignupIsHovered ? "dropdown-hovered-property" : "" } onMouseEnter= {handleSignupDropDown}>

                                    </div>
                                {LocalStorageUserInfo ? <Link to="/profile"> <IoPersonCircle className="user"/></Link>:<Link to="/signup">
                                    <IoPersonCircle className="user"/>
                                    </Link> }  
                                     {SignupIsHovered && (
                                        <ul className="dropdown-menu-property">
                                            <Link to="/property">
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">All Properties</li>
                                            </Link>
  
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">For Sale</li>
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">For Rent</li>
                                        </ul>
                                    )} </li>
                               
                               
                                <button className="nav-reg-link">Get Started</button>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="slider-container">
                    <div className="white-card">
                        {cardContent}
                    </div>
                </div>
            </div>
            <div className="search-props">
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
export default HomeHeader;
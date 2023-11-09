
import prop1 from "../component/images/edb3b1f2-fa51-4ff1-a206-db071f42b396.jpg";
// import logo from "../img/logo.png"
// import IoBedOutline from "react-icons/io5";
// import  PiBathtubLight  from "react-icons/pi";
// import   PiBedThin from "react-icons/pi";
import { LuBed, LuBath } from "react-icons/lu";
import HomeHeader from "./HomeHeader";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { IoHeartSharp } from "react-icons/io5";



function Property() {

    const [verified, setVerified] = useState()
    let getToken = localStorage.getItem("Merchant_Token")

    useEffect(() => {
        fetch('http://property.reworkstaging.name.ng/v1/properties?merchant=64b7cd2411d45559c8840b5a&verified=true', {
            headers: { 'authorization': `Bearer ${getToken}` }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setVerified(data.data)
                console.log(data.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    const singleProductClick = () =>{

    }


    return (
        <div>
            <HomeHeader />
            {/* <div className="prp-banner"> */}
            {/* <div className="product-grid"> */}

            <div className="prop-detail">
                <div className="property-card">
                    
                        {verified ? verified.map((item) => (
                       
                            <div className="property-dsc">
                                {/* <div> */}
                                <div className="property_img">
                                     <img src={item.image? item.image : prop1 } alt="" />
                                     </div>
                                <div className="price-details">
                                    <button className="prop-price">${item.price}</button>
                                    <h6>{item.address}</h6>
                                    <h3 className="address-h3">{item.city + "," + item.country}</h3>
                                    <h6><LuBed className="shower" /> {item.bedroom}beds <LuBath className="shower" /> {item.badroom}baths</h6>
                                    <div className="link-heart">
                                    <Link  className="style-link" to={`/property/${item.id}`}>
                                    <button className="see-detail">See details</button>
                                    </Link>
                                    <Link>

                                    </Link>
                                    <IoHeartSharp className="wish-heart" />
                                    </div>

                                </div>
                                {/* </div> */}
                            </div>
                           
                        )) : <p>No Data</p>}

                   


                     {/* <div className="property-dsc">
                        <div className="property_img"> <img src={prop1} alt="" /></div>
                        <div className="price-details">
                            <button className="prop-price">$1,291,00</button>
                            <h6>52322 california Fake, Ave, 21BC</h6>
                            <h3>Califonia, USA</h3>
                            <h6><LuBed className="shower" /> 2 beds <LuBath className="shower" /> 2 baths</h6>

                            <button className="see-detail">See details</button>
                        </div>
                    </div>  */}

                     {/* <div className="property-dsc">
                        <div className="property_img"> <img src={prop1} alt="" /></div>
                        <div className="price-details">
                            <button className="prop-price">$1,291,00</button>
                            <h6>52322 california Fake, Ave, 21BC</h6>
                            <h3>Califonia, USA</h3>
                            <h6><LuBed className="shower" /> 2 beds <LuBath className="shower" /> 2 baths</h6>

                            <button className="see-detail">See details</button>
                        </div>
                    </div>  */}
{/* 
                    <div className="property-dsc">
                        <div className="property_img"> <img src={prop1} alt="" /></div>
                        <div className="price-details">
                            <button className="prop-price">$1,291,00</button>
                            <h6>52322 california Fake, Ave, 21BC</h6>
                            <h3>Califonia, USA</h3>
                            <h6><LuBed className="shower" /> 2 beds <LuBath className="shower" /> 2 baths</h6>

                            <button className="see-detail">See details</button>
                        </div>
                    </div>  */}

                     {/* <div className="property-dsc">
                        <div className="property_img"> <img src={prop1} alt="" /></div>
                        <div className="price-details">
                            <button className="prop-price">$1,291,00</button>
                            <h6>52322 california Fake, Ave, 21BC</h6>
                            <h3>Califonia, USA</h3>
                            <h6><LuBed className="shower" /> 2 beds <LuBath className="shower" /> 2 baths</h6>

                            <button className="see-detail">See details</button>
                        </div>
                    </div>  */}

                    {/* <div className="property-dsc">
                        <div className="property_img"> <img src={prop1} alt="" /></div>
                        <div className="price-details">
                            <button className="prop-price">$1,291,00</button>
                            <h6>52322 california Fake, Ave, 21BC</h6>
                            <h3>Califonia, USA</h3>
                            <h6><LuBed className="shower" /> 2 beds <LuBath className="shower" /> 2 baths</h6>

                            <button className="see-detail">See details</button>
                        </div>
                    </div> */}







                </div>

                <div className="Pagination">
                    <p>Pagination (1 of 10)</p>
                    <div>
                        <button className="pages">1</button>
                        <button className="pages">2</button>
                        <button className="pages">3</button>
                        <button className="pages">4</button>
                    </div>
                </div>
            </div>
        </div>
        //   </div>
        // </div>
    );
}
export default Property;

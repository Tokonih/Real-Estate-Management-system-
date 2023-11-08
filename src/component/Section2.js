import image01 from "./images/Property-1-488x326.jpg"
import image02 from "./images/Villa-in-Coral-Gables-488x326.jpg"
import image03 from "./images/zac-gudakov-0qir5hBOj18-unsplash-818x417.jpg"
import image04 from "./images/agent-female-7-1-150x150.jpg"
import image05 from "./images/agent-male-1-1-150x150.jpg"
import image06 from "./images/agent-male-1-1-150x150.jpg"
import image07 from "./images/Modern-House-488x326.jpg"
import image08 from "./images/House-Design-488x326.jpg"
import image09 from "./images/property-06-exterior-1-488x326.jpg"
import image10 from "./images/agent-male-1-1.jpg"
import image11 from "./images/agent-female-7-1.jpg"
import image12 from "./images/agent-female-6.jpg"
import image13 from "./images/agent-male-2.jpg"
import image14 from "./images/blog-image-1-2-488x326.jpg"
import image15 from "./images/blog-image-2-1-488x326.jpg"
import image16 from "./images/blog-image-2-1.jpg"
import { LiaBathSolid, LiaBedSolid, LiaExpandSolid } from "react-icons/lia";
import { FaHeart, FaMapMarkerAlt, FaCamera } from "react-icons/fa";
import { useState, useEffect } from "react";
import HomeHeader from "./HomeHeader"
import FeaturedProperty from "./FeaturedProperty"
import TalkToExpert from "./TalkToExpert"
import FindAgents from "./FindAgents"
import NeedHelp from "./NeedHelp"
import TAGSFooter from "./TAGSFooter"
import { Link } from "react-router-dom"




function Section2() {
  const [verified, setVerified] = useState()
  const [verified2, setVerified2] = useState()
  const [verified3, setVerified3] = useState()


  let getToken = localStorage.getItem("Merchant_Token")
  useEffect(() => {
    fetch('http://property.reworkstaging.name.ng/v1/properties?merchant=64b7cd2411d45559c8840b5a&verified=true', {
      headers: { 'authorization': `Bearer ${getToken}` }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setVerified(data.data.slice(0, 3))
        console.log(data.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  useEffect(() => {
    fetch(`http://property.reworkstaging.name.ng/v1/properties?merchant=64b7cd2411d45559c8840b5a&verified=true`, {
      headers: { 'authorization': `Bearer ${getToken}` }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setVerified2(data.data.slice(3, 6));
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

  }, [verified]);

  useEffect(() => {
    fetch(`http://property.reworkstaging.name.ng/v1/properties?merchant=64b7cd2411d45559c8840b5a&verified=true&type=RENT`, {
      headers: { 'authorization': `Bearer ${getToken}` }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setVerified3(data.data.slice(0, 3));
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // }
  }, [verified2]);



  return (


    <div>
      <HomeHeader />
      <div className="section02">
        <p className="recent-p">Recent</p>
        <p className="properties001">Properties</p>
        <p className="latest-props">Check out some of out latest properties.</p>
        <div className="coverage-image">
          {verified && verified.map((items) => (
            <Link to={`/property/${items.id}`} className="coverage-inner1-1">
              <div className="coverage-img1">
                <img src={items.image} alt="" />
                <FaHeart className="new-heart" />
              </div>
              <div className="coverage-inner2">
                <h3>{items.name}</h3>
                <p className="enhance-p">{items.description}</p>
                <div className="flexed-p">
                  <p>Bedroom</p>
                  <p>Bathroom</p>
                  <p>Area</p>
                </div>

                <div className="flexed-p-2">
                  <div className="p-1">
                    <LiaBedSolid className="bathroom-icon01" />
                    <p className="number-decs">{items.bedroom}</p>
                  </div>
                  <div className="p-1">
                    <LiaBathSolid className="bathroom-icon02" />
                    <p className="number-decs"> {items.bathroom}</p>
                  </div>
                  <div className="p-1">
                    <LiaExpandSolid className="bathroom-icon03" />
                    <p className="number-decs">4300 <span>sqft ft</span></p>
                  </div>
                </div>
                <div className="movement">
                  <p className="for-sale">For {items.type}</p>
                  <p className="cashway">${items.price}</p>
                </div>


              </div>

            </Link>
          ))}
        </div>

        <div className="next-cont">
          <Link style={{color: "#1db2ff", textDecoration: "none", fontSize: "20px"}} to={`/Property`}>View more</Link>

        </div>
      </div>
      <FeaturedProperty />

      <div className="section02">
        <p className="recent-p">properties</p>
        <p className="properties001">For Sale</p>
        <p className="latest-props">Check out some of out latest properties.</p>
        <div className="coverage-image">
          {verified2 && verified2.map((items) => (
            <Link to={`property/${items.id}`} className="coverage-inner1-02">
              <div className="coverage-img02">
                <img src={items.image} alt="" />


                {/* <FaHeart className ="new-heart02"/> */}
                {/* <p className="hot03">For sale</p> */}
              </div>
              <div className="coverage-inner02">
                <h3>{items.name}</h3>
                <div className="location-text">
                  <FaMapMarkerAlt className="location-icon" />
                  <p>{items.address}, {items.city}, {items.country}</p>
                </div>
                <p className="enhance-p02">Added: <span className="enhance-inner">{items.created_at}</span></p>
                <div className="flexed-p">
                  <p>Bedroom</p>
                  <p>Bathroom</p>
                  <p>Area</p>
                </div>

                <div className="flexed-p-2">
                  <div className="p-1">
                    <LiaBedSolid className="bathroom-icon01" />
                    <p className="number-decs">{items.bedroom}</p>
                  </div>
                  <div className="p-1">
                    <LiaBathSolid className="bathroom-icon02" />
                    <p className="number-decs"> {items.bathroom}</p>
                  </div>
                  <div className="p-1">
                    <LiaExpandSolid className="bathroom-icon03" />
                    <p className="number-decs">4300 <span>sqft ft</span></p>
                  </div>
                </div>
                <div className="movement">
                  <p className="for-sale02">For Sale</p>
                  <p className="cashway02">${items.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="next-cont">
        <Link style={{color: "#1db2ff", textDecoration: "none", fontSize: "20px"}} to={`/Property`}>View more</Link>
        </div>
      </div>

      <div className="section02">
        <p className="recent-p">Properties</p>
        <p className="properties001">For Rent</p>
        <p className="latest-props">Check out some of out latest properties.</p>
        <div className="coverage-image">
          {verified3 && verified3.map((items) => (
            <div className="coverage-inner1-1">
              <div className="coverage-img1">
                <img src={items.image} alt="" />
                <FaHeart className="new-heart" />
              </div>
              <div className="coverage-inner02">
                <h3>{items.name}</h3>
                <p className="enhance-p">We are an award winning and very unique <br /> concept unique</p>
                <div className="flexed-p">
                  <p>Area</p>

                </div>

                <div className="flexed-p-2">
                  <div className="p-1">
                    <LiaExpandSolid className="bathroom-icon01" />
                    <p className="number-decs">4300 <span>sq ft</span></p>
                  </div>
                </div>
                <div className="movement">
                  <p className="for-sale005">For rent</p>
                  <p className="cashway005">${items.price}</p>
                </div>


              </div>

            </div>
          ))}
        </div>

        <div className="next-cont">
        <Link style={{color: "#1db2ff", textDecoration: "none", fontSize: "20px"}} to={`/Property`}>View more</Link>



        </div>
      </div>

      <TalkToExpert />

      <div className="section03">
        <p className="recent-p">Meet Our</p>
        <p className="properties001">Agents</p>
        <p className="latest-props">Get in touch with our real estate expert</p>
        <div className="coverage-image02">
          <div className="section03-innerd">
            <div className="profile-div">
              <img src={image10} alt="" />
            </div>
            <div className="body-text02">

              <p className="body-text02-p1">Nathan James</p>
              <p className="body-text02-p2">1-234-456-7893</p>
              <p className="body-text02-p3">nathanjames@yahoo.com</p>
              <p className="body-text02-p4">4</p>
              <p className="body-text02-p5" >Listed properties</p>

            </div>
          </div>
          <div className="section03-innerd">
            <div className="profile-div">
              <img src={image11} alt="" />
            </div>
            <div className="body-text02">

              <p className="body-text02-p1">Mellissa William</p>
              <p className="body-text02-p2">1-244-679-9862</p>
              <p className="body-text02-p3">melissawilliam@yahoo.com</p>
              <p className="body-text02-p4">8</p>
              <p className="body-text02-p5" >Listed properties</p>

            </div>
          </div>
          <div className="section03-innerd">
            <div className="profile-div">
              <img src={image12} alt="" />
            </div>
            <div className="body-text02">

              <p className="body-text02-p1">Alice Brian</p>
              <p className="body-text02-p2">1-336-887-7893</p>
              <p className="body-text02-p3">alicebrain@yahoo.com</p>
              <p className="body-text02-p4">3</p>
              <p className="body-text02-p5" >Listed properties</p>

            </div>
          </div>
          <div className="section03-innerd">
            <div className="profile-div">
              <img src={image13} alt="" />
            </div>
            <div className="body-text02">

              <p className="body-text02-p1">John David</p>
              <p className="body-text02-p2">1-768-293-2343</p>
              <p className="body-text02-p3">johndavid@yahoo.com</p>
              <p className="body-text02-p4">9</p>
              <p className="body-text02-p5" >Listed properties</p>

            </div>
          </div>
        </div>
      </div>

      <FindAgents />

      <div className="section05">
        <p className="recent-p">check out recent</p>
        <p className="properties001">News & Updates</p>
        <p className="latest-props">From real estate industry and beyond</p>
        <div className="coverage-image-05">
          <div className="coverage-image-05-innerd">
            <div className="image-divhere">
              <img src={image14} alt="" />
            </div>
            <div className="body-divhere">
              <p className="june">June 16, 2020 in <span className="luxury">Luxury</span> </p>
              <p className="image">Image Post Format</p>
              <p className="enthusias">Enthusiastically disintermediate progressive <br /> innovation before high-payoff metrics. Intrinsicly <br /> generate sticky services without…</p>
              <p className="movepppp"><span className="kostas">By</span> Kostas</p>
            </div>

          </div>
          <div className="coverage-image-05-innerd">
            <div className="image-divhere">
              <img src={image15} alt="" />
            </div>
            <div className="body-divhere">
              <p className="june">June 15, 2020 in <span className="luxury">Luxury</span> </p>
              <p className="image">Gallery Post Format</p>
              <p className="enthusias">Competently harness enterprise vortals via <br /> revolutionary e-tailers. Monotonectally <br /> recaptiualize one-to-one relationships whereas…</p>
              <p className="movepppp"><span className="kostas">By</span> Kostas</p>
            </div>

          </div>
          <div className="coverage-image-05-innerd">
            <div className="image-divhere">
              <img src={image16} alt="" />
            </div>
            <div className="body-divhere">
              <p className="june">June 13, 2020 in <span className="luxury">Market Trends</span> </p>
              <p className="image">video Post Format</p>
              <p className="enthusias">Uniquely customize future-proof niche markets via <br /> worldwide users. Proactively negotiate user-centric schemas…</p>
              <p className="movepppp"><span className="kostas">By</span> Kostas</p>
            </div>

          </div>
        </div>
      </div>

      <div className="section04">
        <div className="section04-cont">
          <p className="buy-sell">Buy or Sell</p>
          <p className="decs-buy-sell">Looking to Buy a new property or Sell an existing one? <br /> RealHomes provides an awesome solution!</p>
          <div className="display-divss">
            <button className="display-divss-btn1">Meet Agent</button>
            <button className="display-divs-btn2">View properties</button>
          </div>
        </div>
      </div>

      <NeedHelp />

      <TAGSFooter />

      <div className="section06">
        <div className="">

        </div>
      </div>
    </div>
  )
}

export default Section2;
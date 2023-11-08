import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { FaShareAlt, FaHeart, FaCheck, FaWhatsapp, FaPhone, FaEnvelope, FaMinus } from "react-icons/fa";
import { ImPrinter } from "react-icons/im";
import "react-bootstrap"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css";
import { LiaBathSolid, LiaBedSolid, LiaExpandSolid, LiaBusAltSolid, LiaCalendarAlt } from "react-icons/lia";
import { GrPan } from "react-icons/gr";
// import image011 from "./images/House-Design-1240x720.jpg"
import image012 from "./images/agent-male-1-1.jpg"
import image013 from "./images/floor-plan-00.jpg"
import SinglePropertyBanners from "./SinglePropertyBanners";
import TAGSFooter from "./TAGSFooter";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoTennisball } from "react-icons/io5";
import { RiDeleteBin4Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";



function Productdetails() {
  const { id } = useParams()
  const [verified, setVerified] = useState()
  const [appointment, setAppointment] = useState([])
  let getToken = localStorage.getItem("Merchant_Token")

  useEffect(() => {
    fetch(`http://property.reworkstaging.name.ng/v1/properties/${id}`, {
      headers: { 'authorization': `Bearer ${getToken}` }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setVerified(data)
        console.log(data)
        let propertyId = data.id
        console.log(propertyId)
        let propertyIdStorage = localStorage.setItem("PropertyId", propertyId)

      })
      .catch((err) => {
        console.log(err.message)
      })

  }, [])

  useEffect(() => {
    fetch(
      `http://property.reworkstaging.name.ng/v1/reviews?property_id=${id}&limit=10&page=0`,
      {
        headers: { authorization: `Bearer ${getToken}` },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setReview(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  let userId = localStorage.getItem("merchant_Data_id")

  const postReview = (e) => {
    e.preventDefault()
    if (comments == "") {
      alert("Kindly leave a review");
      return;
    }

    let reviewDetails = {
        property_id: id,
        user_id: userId,
        text: comments
    }
    console.log(reviewDetails)

    fetch("http://property.reworkstaging.name.ng/v1/reviews",{
      method:"POST",
      headers:{ "Content-type": "Application/Json",
        "authorization": `Bearer ${getToken}` },
        body:JSON.stringify(reviewDetails)
    })
    .then((resp)=> resp.json())
    .then((data)=>{
      console.log(data)
      setReview((preComment)=> [...preComment, data.data])
    }).catch((err)=>{
      console.log(err.message)
    })
    setComments("")

  };

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [date, setDate] = useState("")
  const [time01, setTime01] = useState("")
  const [time02, setTime02] = useState("")
  const [error, setError] = useState(false)
  const [review, setReview] = useState();
  const [comments, setComments] = useState("");
  const [wish, setwish]= useState()

  const handleEvent = (e) => {
    e.preventDefault()
    const usersId = localStorage.getItem("merchant_Data_id")
    const newPropertyId = localStorage.getItem("PropertyId")
    console.log(newPropertyId)
    console.log(usersId)


    if (message === "" || date === "" || time01 === "" || time02 === "") {
      setError(true)
      return
    }
    let appointObj = {
      property_id: newPropertyId,
      user_id: usersId,
      date: date,
      msg: message,
      time: {
        from: time01,
        to: time02
      }
    }
    console.log(appointObj)

    let getTokens = localStorage.getItem('Merchant_Token')
    console.log(getTokens)

    fetch('http://property.reworkstaging.name.ng/v1/appointments', {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "authorization": `Bearer ${getTokens}`
      },
      body: JSON.stringify(appointObj)
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("appointment created")
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  
  }

   const wishlist = (house)=>{
    let getTokens = localStorage.getItem('Merchant_Token')
    let property_id = localStorage.getItem("PropertyId")
    let user_Id = localStorage.getItem("merchant_Data_id")
    let wishlistdata ={
      property_id,
      user_Id
    }

      fetch('http://property.reworkstaging.name.ng/v1/users/wishlist',{
        method: "POST",
        headers:{ "authorization": `Bearer ${getTokens}`},
        body: JSON.stringify(wishlistdata)
      })
      .then((resp)=> resp.json())
      .then((data)=>{
      
        console.log(data)
        alert("Added to wishlist")
      })
      .catch((err)=> console.log(err.message))
   }



  return (
    <div>
      <SinglePropertyBanners />
      <div className="cover-divv">
        <div className="first-divv">
          <div className="first-div-innerd">
            <div className="displayed-flexed">
              <p>Home</p>
              <FaAngleRight className="arrow-icon" />
              <p>{verified?.address}</p>
            </div>
            <p className="villagrand">{verified?.name}</p>
            <p className="cocowalk">{verified?.address}, {verified?.city}, {verified?.country}</p>
          </div>
          <div className="first-div-innerd02">
            <div className="lin-divv">
              <hr className="line-rotate" />
              <div className="gaup-div">
                <p className="for-renttt">For {verified?.type}</p>
                <p className="guap">${verified?.price} </p>
              </div>

            </div>

          </div>
        </div>

        <div className="second-div">
          <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
            <div class="carousel-inner">
              <div class="carousel-item">
                <img src={verified?.image} alt="" class="d-block w-100" width="800" height="600" />
              </div>
              {
                verified?.images.map((e, i) => {
                  let active = i === 0 ? "active" : "";
                  return (<div className={`carousel-item ${active}`}>
                    <img src={e} alt="" class="d-block w-100 " width="800" height="600" />
                  </div>);

                })
              }        
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="third-div">

          <div className="third-div-innerd1">

            {/* {verified && verified.map((item) => ( */}
            <div>
              <div className="upper-sec">
                <p className="upper-sec-p">Property ID <span className="span-blue">{verified?.id}</span></p>
                <div className="share-cont">
                  <FaShareAlt className="share-icon" />
                  <FaHeart onSubmit={wishlist } className="below-heart" />
                  <ImPrinter className="below-print" />
                </div>
              </div>

              <hr className="newest-lined" />
              <div className="cont-props">
                <div className="moving-div">
                  <p>Bedroom</p>
                  <div className="icon-divsss">
                    <LiaBedSolid className="icon01" />
                    <p className="icon01-p">{verified?.bedroom}</p>
                  </div>


                </div>
                <div className="moving-div">
                  <p>Bathroom</p>
                  <div className="icon-divsss">
                    <LiaBathSolid className="icon01" />
                    <p className="icon01-p">{verified?.bathroom}</p>
                  </div>


                </div>
                <div className="moving-div">
                  <p>Garage</p>
                  <div className="icon-divsss">
                    <LiaBusAltSolid className="icon01" />
                    <p className="icon01-p">2</p>
                  </div>


                </div>
                <div className="moving-div">
                  <p>Year Built</p>
                  <div className="icon-divsss">
                    <LiaCalendarAlt className="icon01" />
                    <p className="icon01-p">2018</p>
                  </div>


                </div>
                <div className="moving-div">
                  <p>Area</p>
                  <div className="icon-divsss">
                    <LiaExpandSolid className="icon01" />
                    <p className="icon01-p">9350 <span className="sq15">sq ft</span></p>
                  </div>


                </div>
                <div className="moving-div">
                  <p>Lot Size</p>
                  <div className="icon-divsss">
                    <GrPan className="icon01" />
                    <p className="icon01-p">9350 <span className="sq15">sq ft</span></p>
                  </div>


                </div>
              </div>
              <p className="descript001">Description</p>
              <p className="detailed-descript">{verified?.description}.</p>
              <p className="detailed-descript02">
                Open floor plan leads to the patio, pool and backyard for great entertainment or relaxation. Live in the city beautiful, enjoy the best shopping, restaurants, schools, and much more this home offers.
              </p>
              <p className="descript001">Features</p>
              <div className="before-floorplan">
                <div className="before-floorplan-innerd">
                  <div className="before-floorinners">
                    <FaCheck className="facheck" />
                    <p className="stories2">2 Stories</p>
                  </div>
                  <div className="before-floorinners">
                    <FaCheck className="facheck" />
                    <p className="stories2"> Electric Range</p>
                  </div>
                  <div className="before-floorinners">
                    <FaCheck className="facheck" />
                    <p className="stories2">Laundry Room</p>
                  </div>
                </div>
                <div className="before-floorplan-innerd02">
                  <div className="before-floorinners">
                    <FaCheck className="facheck" />
                    <p className="stories2">Central Cooling</p>
                  </div>
                  <div className="before-floorinners">
                    <FaCheck className="facheck" />
                    <p className="stories2"> Fire Price</p>
                  </div>
                  <div className="before-floorinners">
                    <FaCheck className="facheck" />
                    <p className="stories2">Marble Floor</p>
                  </div>
                </div>
                <div className="before-floorplan-innerd02">
                  <div className="before-floorinners">
                    <FaCheck className="facheck" />
                    <p className="stories2">Daul Sinks</p>
                  </div>
                  <div className="before-floorinners">
                    <FaCheck className="facheck" />
                    <p className="stories2"> Home Theater</p>
                  </div>
                  <div className="before-floorinners">
                    <FaCheck className="facheck" />
                    <p className="stories2">Swimming Pool</p>
                  </div>
                </div>


              </div>
              <p className="floor-plan-newp">Floor plan</p>
              <div className="floor-planofbelow">
                <button className="floor-belowbutton"></button>
                <div className="absolutebutton-display">
                  <FaMinus className="minus-iconfllorplan" />
                  <p className="floorplan-p">Sample Plan</p>


                </div>
                <div className="coverage-image013">
                  <img className="image013" src={image013} alt="" />
                </div>
              </div>
            </div>
            {/* ))} */}
          </div>



            
          <div className="third-div-innerd2">
            <div className="absolute-div">
              <img src={image012} alt="" />
            </div>
            <div className="agent-divv">
              {/* {console.log(verified.agent.full_name)} */}
                {/* {verified && verified.map((data)=>( */}
              <div>
              <h4 className="nathan-div">Agent: {verified?.agent.full_name}</h4>
              <p className="agent-div-p1">Office:  {verified?.agent.phones}</p>
              <p className="agent-div-p2" >Whatsapp: {verified?.agent.primary_phone}</p>
              
              <p className="agent-div-p2">Email: {verified?.agent.email}</p>
              {/* <button className="view-button" >View My Listing</button> */}
              </div>
                {/* ))} */}
              <form action="" className="form001" onSubmit={handleEvent}>
              
                <label htmlFor="">
                  <p className="name-p">Date</p>
                  <input className="input0001" type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Name" />
                  {error === true && date === "" ? <span className="span-red">please enter date</span> : null}
                </label>
                <div className="time-input-div">
                  <label className="from-label" htmlFor="">From
                    <input type="time" value={time01} onChange={(e) => setTime01(e.target.value)} />

                  </label>
                  <label htmlFor="">To
                    <input type="time" value={time02} onChange={(e) => setTime02(e.target.value)} />
                  </label> <br />
                  {error === true && time01 === "" ? <span className="span-red">Please choose time from.</span> : null} <br />
                  {error === true && time02 === "" ? <span className="span-red">Please choose time to.</span> : null}
                </div>
                <label htmlFor="">
                  <p className="name-p-m">Message</p>
                  <textarea name="" className="input00010" value={message} onChange={(e) => setMessage(e.target.value)} id="" cols="30" rows="10"></textarea> <br />
                  {error === true && message === "" ? <span className="span-red">please leave message</span> : null}
                </label>
                <p className="gdpr">GDPR Agreement*</p>
                
                <button className="message-button">Send Message</button>
                {/* <FaEnvelope className="message-icon" /> */}
              </form>
            </div>
          </div>
        </div>
        <div className="reviews">
          <div className="review-section">
            <h2>Reviews</h2>
            <form className="reviewform" onSubmit={postReview}>
              <textarea
                name=""
                id=""
                cols="50"
                rows="2"
                onChange={(e) => setComments(e.target.value)}
                value={comments}
                placeholder="Add a Review..."
              >
                {" "}
              </textarea>
              <button>Share Review</button>
            </form>
            {review &&
              review.map((comment) => (
                <div className="comments">
                  <div className="editReview">
                  <p>{comment.text}</p>
               

                  </div>
                </div>
              ))}
          </div>
        </div>

      </div>
      <TAGSFooter />
    </div>
  )
}

export default Productdetails
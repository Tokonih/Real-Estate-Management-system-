import { useState, useEffect } from "react"
import Sidebar from "./sidebar"

function CreateProp(){
    const [name, setName] = useState('')
    const [price, setprice] = useState('')
    const [country, setcountry] = useState('')
    const [state, setstate] = useState('')
    const [city, setcity] = useState('')
    const [lat, setlat] = useState('')
    const [lng, setlng] = useState('')
    const [address, setaddress] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')
    const [total_area, settotal_area] = useState('')
    const [property_use, setproperty_use] = useState('')
    const [payment_plan, setpayment_plan] = useState('')
    const [type, settype] = useState('')
    const [bedroom, setbedroom] = useState('')
    const [bathroom, setbathroom] = useState('')
    const [toilet, settoilet] = useState('')
    const [parking_space, setparking_space] = useState('')
    const [furnishing, setfurnishing] = useState('')
    const [disclaimer, setdisclaimer] = useState('')
    const [amenities, setamenities] = useState('')



  

    const [err, SetErr] = useState(false)


    const handleSubmit =(e)=>{
        e.preventDefault()
        if(name ==="" || price==="" || country==="" || state==="" || city==="" || lat===""  || lng===""  || address===""  || description===""  || category===""  || total_area===""  || property_use===""  || payment_plan===""  || type===""  || bedroom===""  || bathroom==="" || toilet==="" || parking_space==="" || furnishing==="" || disclaimer==="" || amenities==="" ){
            SetErr(true)
            return
        }

        const userDetails = {
            name: name,
            price:price,
            country:country,
            state: state,
            city:city,
            lat:lat,
            lng: lng,
            address:address,
            description:description,
            category:category,
            total_area:total_area,
            property_use:property_use,
            payment_plan:payment_plan,
            type:type,
            bedroom:bedroom,
            bathroom:bathroom,
            toilet:toilet,
            parking_space:parking_space,
            furnishing: furnishing,
            disclaimer:disclaimer,
            amenities:amenities,
           
        
        }
        // setName('')
        // setEmail('')
        // SetPhone('')
        // SetPassword('')
        console.table(userDetails)
        console.log(userDetails.length)
      
        let getToken = localStorage.getItem("Merchant_Token")

        fetch('http://property.reworkstaging.name.ng/v1/properties',{
            method: "POST",
            headers: {"Content-Type":"Application/json",
                    "authorization" : `Bearer ${getToken}`
        },
            body: JSON.stringify(userDetails)
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            alert('user created')
            console.log(data)
        })
        .catch((err)=> {
            console.log(err.message)
        })
    }
    // const creatAgent =()=>{
    // }
    
    // useEffect(()=>{
    //     creatAgent()
    // },[])



    return(
       <div className="side-main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="side-container">
                <div className="Dashboard">
                   <h1 className="sidebar-title">Create Property</h1>
                </div>
                  <div>
                <div className="prop-form">
                <form onSubmit={handleSubmit}>
                    <div className="row-one">
                    <div>
                        <label>Name</label>
                        <input type="text" onChange={(e)=> setName(e.target.value)} value={name}/>
                        {err=== true && name === "" ? <span>Name required</span> : name=== null}
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="text" onChange={(e)=> setprice(e.target.value)} value={price} />
                        {err=== true && price === ""  ? <span>Price required</span> : price=== null}

                    </div>
                    <div>
                        <label>Country</label>
                        <input type="text" onChange={(e)=> setcountry(e.target.value)} value={country} />
                        {err=== true && country === ""  ? <span>Country required</span> : country=== null}

                    </div>
                    <div>
                        <label>State</label>
                        <input type="text" onChange={(e)=> setstate(e.target.value)} value={state}/>
                        {err=== true && state === ""  ? <span>State required</span> : state=== null}

                    </div>

                    <div>
                        <label>City</label>
                        <input type="text" onChange={(e)=> setcity(e.target.value)} value={city}/>
                        {err=== true && city === "" ? <span>City required</span> : city=== null}
                    </div>
                    <div>
                        <label>Latitude</label>
                        <input type="number" onChange={(e)=> setlat(e.target.value)} value={lat} />
                        {err=== true && lat === ""  ? <span>Latitude required</span> : lat=== null}

                    </div>
                    <div>
                        <label>Longitude</label>
                        <input type="number" onChange={(e)=> setlng(e.target.value)} value={lng} />
                        {err=== true && lng === ""  ? <span>Longitude required</span> : lng=== null}

                    </div>
                    <div>
                        <label>Address</label>
                        <input type="text" onChange={(e)=> setaddress(e.target.value)} value={address}/>
                        {err=== true && address === ""  ? <span>Address required</span> : address=== null}

                    </div>

                    <div>
                        <label>Description</label>
                        <input type="text" onChange={(e)=> setdescription(e.target.value)} value={description}/>
                        {err=== true && description === "" ? <span>Description required</span> : description=== null}
                    </div>
                    <div>
                        <label>Category</label>
                        <select onChange={(e)=> setcategory(e.target.value)} value={category} >
                            <option value="">Select</option>
                            <option value="FLAT">FLAT</option>
                            <option value="APPARTMENT">APPARTMENT</option>
                            <option value="LAND">LAND</option>
                            <option value="DUPLEX">DUPLEX</option>
                            <option value="WAREHOUSE">WAREHOUSE</option>
                            <option value="SHOP">SHOP</option>
                        </select>
                        {err=== true && category === ""  ? <span>Category required</span> : category=== null}

                    </div>
                    <div>
                        <label>Total_area</label>
                        <input type="text" onChange={(e)=> settotal_area(e.target.value)} value={total_area} />
                        {err=== true && total_area === ""  ? <span>Total_area required</span> : total_area=== null}

                    </div>
                    <div>
                        <label>Property use</label>
                        <select onChange={(e)=> setproperty_use(e.target.value)} value={property_use}>
                            <option value=""></option>
                            <option value="RESIDENTIAL">RESIDENTIAL</option>
                            <option value="COMMERCIAL">COMMERCIAL</option>
                        </select>
                        {err=== true && property_use === ""  ? <span>Property use required</span> : property_use=== null}

                    </div>

                    <div>
                        <label>payment_plan</label>
                        <select onChange={(e)=> setpayment_plan(e.target.value)} value={payment_plan} >
                            <option value="">Select</option>
                            <option value="PER_ANNUM">PER_ANNUM</option>
                            <option value="MONTHLY">MONTHLY</option>
                            <option value="PER_PLOT">PER_PLOT</option>
                            <option value="PER_DAY">PER_DAY</option>
                        </select>
                        {err=== true && payment_plan === "" ? <span>payment_plan required</span> : payment_plan=== null}
                    </div>
                    <div>
                        <label>Type</label>
                        <select onChange={(e)=> settype(e.target.value)} value={type}>
                            <option value="">Select</option>
                            <option value="RENT">RENT</option>
                            <option value="LEASE">LEASE</option>
                            <option value="SALES">SALES</option>
                        </select>
                        {err=== true && type === ""  ? <span>Type required</span> : type=== null}

                    </div>
                    <div>
                        <label>Bedrooms</label>
                        <input type="number" onChange={(e)=> setbedroom(e.target.value)} value={bedroom} />
                        {err=== true && bedroom === ""  ? <span>bedroom required</span> : bedroom=== null}

                    </div>
                    <div>
                        <label>Bathrooms</label>
                        <input type="Number" onChange={(e)=> setbathroom(e.target.value)} value={bathroom}/>
                        {err=== true && setbathroom === ""  ? <span>Enter required</span> : setbathroom=== null}

                    </div>

                    <div>
                        <label>Toilet</label>
                        <input type="Number" onChange={(e)=> settoilet(e.target.value)} value={toilet}/>
                        {err=== true && toilet === "" ? <span>  Toilet required</span> : toilet=== null}
                    </div>
                    <div>
                        <label>parking_space</label>
                        <input type="Number" onChange={(e)=> setparking_space(e.target.value)} value={parking_space} />
                        {err=== true && parking_space === ""  ? <span>parking_space required</span> : parking_space=== null}

                    </div>
                    <div>
                        <label>Furnishing</label>
                        <select onChange={(e)=> setfurnishing(e.target.value)} value={furnishing}>
                            <option value="">Select</option>
                            <option value="FURNISHED">FURNISHED</option>
                            <option value="UNFURNISHED">UNFURNISHED</option>
                        </select>
                        {err=== true && furnishing === ""  ? <span>Furnishing required</span> : furnishing=== null}

                    </div>
                    

                    <div>
                        <label>Disclaimer</label>
                        <input type="text" onChange={(e)=> setdisclaimer(e.target.value)} value={disclaimer}/>
                        {err=== true && disclaimer === ""  ? <span>Disclaimer required</span> : disclaimer=== null}

                    </div>

                    <div>
                        <label>Amenities</label>
                        <input type="text" onChange={(e)=> setamenities(e.target.value)} value={amenities}/>
                        {err=== true && amenities === ""  ? <span>amenities required</span> : amenities=== null}

                    </div>

                   
                    </div>
                    <button>Create Property</button>
                </form>
                </div>
              </div>
            </div>

       </div>
    )
}

export default CreateProp;
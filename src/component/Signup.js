import { useState } from "react"
import image01 from "./Imagess/real_estate_logo.png"
import { useNavigate, Link } from "react-router-dom"




function Signup() {

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [emailchecked, setEmailchecked] = useState(false)
  const [apiaData, setApiData] = useState([])
  let Navigate = useNavigate()

  const handleEventCheque = (e) => {
    e.target.checked ? setEmailchecked(true) : setEmailchecked(false)
  }

  const handleEvent = (e) => {
    e.preventDefault()
    if (fname === "" || lname === "" || email === "" || phone === "" || password === "") {
      setError(true)
      return
    }
    let dataObject = {
      first_name: fname,
      last_name: lname,
      email: email,
      phone: phone,
      password: password
    }
    console.log(dataObject)

    fetch(`http://property.reworkstaging.name.ng/v1/users`, {
      method: "POST",
      headers: { "Content-type": "Application/Json" },
      body: JSON.stringify(dataObject)
    })
      .then((resp) => resp.json())
      .then((data) => {
        setApiData(data)
        alert("signup succesful")

        //  localStorage.setItem("signUpProfileInfo", JSON.stringify(dataObject))
        Navigate("/login")
        console.log(apiaData)
      })
      .catch((err) => {
        alert("error fetching data", err)
      })

  }

  




  return (
    <div>
      <div className="color-div">
        <div className="div-image001">
          <img className="colordiv-image001" src={image01} alt="" />
          <h1>TAGS HOMES</h1>
          <p className="create-acc-p">Create an account & experience the beauty of ownership</p>
        </div>
        <div className="center-form">
          <form action="" onSubmit={handleEvent} >
            <label htmlFor=""> <br /> <br />
              <input className="inpuut01" value={fname} onChange={(e) => setFname(e.target.value)} type="text" name="" id="" placeholder="First Name" /> <br />
              {error === true && fname === "" ? <span className="error-span01">please enter first name</span> : null}
            </label> <br /> <br />
            <label htmlFor=""> <br />
              <input className="inpuut01" type="text" name="" value={lname} onChange={(e) => setLname(e.target.value)} id="" placeholder="Last Name" /> <br />
              {error === true && lname === "" ? <span className="error-span01" >please enter last name</span> : null}
            </label> <br /> <br />
            <label htmlFor=""> <br />
              <input className="inpuut01" type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder="Email" /> <br />
              {error === true && email === "" ? <span className="error-span01" >please enter email</span> : null}
            </label> <br /> <br />
            <label htmlFor=""> <br />
              <input className="inpuut01" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} name="" id="" placeholder="Phone" /> <br />
              {error === true && phone === "" ? <span className="error-span01">please enter phone</span> : null}
            </label> <br /> <br />
            {/* <label htmlFor=""> <br /> 
      <input className="inpuut01" type="text" name="" id="" placeholder="First Name" />
    </label><br /> <br /> */}
            <label htmlFor=""> <br />
              <input className="inpuut01" type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="" id="" placeholder="Password" /> <br />
              {error === true && password === "" ? <span className="error-span01">please enter password</span> : null}
            </label>
            <div className="cheque-div">

              <input type="checkbox" value={emailchecked} onChange={handleEventCheque} />
              <p className="consent-p">I consent to having this website store  my submitted information so they can  respond to my inquiry.</p> <br />
            </div>
            {emailchecked === true ? <span className="error-span01">you have accepted</span> : null} <br />
            <p>Have an account? <Link to="/login" className="login-link-class">
              <span>Log in</span>
            </Link></p>
            <button className="signup-button">Sign Up</button>
          </form>
        </div>


        <div>

        </div>
      </div>
    </div>
  )

}

export default Signup 
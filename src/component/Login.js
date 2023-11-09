import image01 from "./Imagess/real_estate_logo.png"
import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"

function Login() {


const Navigate = useNavigate()

  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[error, setError] = useState(false)

  const handleEvent= (e) => {
    e.preventDefault()
    if (email === "" || password === "" ) {
      setError(true)
      return
    }
    const MerchantDetails = {
      email: email,
      password: password
    }

    fetch("http://property.reworkstaging.name.ng/v1/auth/login",{
      method:"POST",
      headers: {"content-type": "Application/Json"},
      body:JSON.stringify(MerchantDetails)
    })
    .then((resp) => resp.json())
    .then((data) =>{
      console.log(data)
      // localStorage.setItem("signUpProfileInfo", JSON.stringify(data))
      const getToken = data.data.token
      const merchantData = data.data.id
      console.log(merchantData)
      // localStorage.setItem("Merchant_Token", getToken)
      // localStorage.setItem("merchant_Data_id", merchantData)
      alert("login succesful")
      Navigate("/")

    })
    .catch((err) => {
      console.log(err.message)
    })


  }



  return(
<div>
<div className="color-div">
        <div className="div-image001">
          <img className="colordiv-image001" src={image01} alt="" />
          <h1>TAGS HOMES</h1>
          <p className="create-acc-p">Log in & experience the beauty of ownership</p>
        </div>
        <div className="center-form">
          <form action="" onSubmit={handleEvent} >
            <label htmlFor=""> <br /> <br />
              <input className="inpuut01" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="" id="" placeholder="Email" /> <br />
              {error === true && email === "" ? <span className="error-span01">please enter first name</span> : null}
            </label> <br /> <br />
            <label htmlFor=""> <br />
              <input className="inpuut01" type="password" name="" value={password} onChange={(e) => setPassword(e.target.value)} id="" placeholder="Password" /> <br />
              {error === true && password === "" ? <span className="error-span01" >please enter last name</span> : null}
            </label> <br /> <br />

            {/* <label htmlFor=""> <br /> 
      <input className="inpuut01" type="text" name="" id="" placeholder="First Name" />
    </label><br /> <br /> */}

            <p>Don't have an account? <Link to="/signup" className="login-link-class">
              <span>Sign up</span>
            </Link></p>
            <button className="signup-button">Log in</button>
          </form>
        </div>


        <div>

        </div>
      </div>
</div>
  )
}

export default Login
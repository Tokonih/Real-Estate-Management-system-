
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";


function Userprofile() {
let Navigate = useNavigate()
  let LocalStorageUserInfo = JSON.parse(localStorage.getItem("signUpProfileInfo"))
  let getToken = localStorage.getItem("Merchant_Token")
  let userId = localStorage.getItem("merchant_Data_id")
  const [verified, setVerified] = useState()
  const [Acompleted, setAcompleted] = useState()

  useEffect(() =>{
    fetch(`http://property.reworkstaging.name.ng/v1/users/${userId}`, {
      headers: { 'authorization': `Bearer ${getToken}` }
    })
    .then((resp) => resp.json())
    .then((data) => {
      setVerified(data)
      console.log(data)
      const userDataObject = data
      localStorage.setItem("userdata_object",JSON.stringify(userDataObject ))
      if (data.status ===  'TOKEN_EXPIRED'){
        Navigate("/signup")
      }
      
    })
  },[])



  

  return(
    <div>
      <div className="profilediv-wrapper">
        <div className="cover-wrapper">
            <div>
        <div className="userprofie-div">
        {/* {!localStorage.avatar? <IoPerson className="userprofile-icon"/>: <img src={verified.avatar} alt="" /> } */}
        <img src={verified?.avatar} alt="" />
     
      </div>
      <input type="file" className="image-file" />
      <div className="writeup-profilediv">
      <h1 className="profile-h1">{verified?.first_name
}</h1>
      <p className="profile-p1">Nickname</p>
      <p className="profile-p2">Email Adress</p>
      <h1 className="profile-h2"> {verified?.email}</h1>
      <p className="profile-p2">Phone</p>
      <h1 className="profile-h2">{verified?.phone}</h1>
      </div>
 </div>

        </div>

      </div>

    </div>
  )
}

export default Userprofile
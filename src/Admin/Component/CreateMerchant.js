import { useState, useEffect } from "react"
import Sidebar from "./sidebar"

function CreateMerchant(){
    const [name, setName] = useState('')
    const [email, setEmail]= useState('')
    const [phone, SetPhone] = useState('')
    const [password, SetPassword] = useState('')
    const [err, SetErr] = useState(false)


    const handleSubmit =(e)=>{
        e.preventDefault()
        if(name ==="" || email==="" || phone === "" || password === ""){
            SetErr(true)
            return
        }

        const userDetails = {
            full_name: name,
            email: email,
            phone: phone,
            password: password
        }
        // setName('')
        // setEmail('')
        // SetPhone('')
        // SetPassword('')
        console.log(userDetails)
        // let token =  
        // localStorage.setItem()

        fetch('http://property.reworkstaging.name.ng/v1/merchants',{
            method: "POST",
            headers: {"Content-Type":"Application/json",
                    "authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjZhMjJkMTFkNDU1NTljODg0MGIyYSIsImVtYWlsIjoidGtAZ21haWwuY29tIiwiZnVsbF9uYW1lIjoiVGsiLCJyb2xlIjoiTUVSQ0hBTlQiLCJpYXQiOjE2ODk2OTEwMjEsImV4cCI6MTY4OTY5MjgyMX0.kZjnXwPzp53C2I-0eJJs6KBoIetiB0wwIvKN7K-1jB0"
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
                   <h1 className="sidebar-title">Create Merchant</h1>
                </div>
                  <div>
                <div className="user-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input type="text" onChange={(e)=> setName(e.target.value)} value={name}/>
                        {err=== true && name === "" ? <span>Name required</span> : name=== null}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} />
                        {err=== true && email === ""  ? <span>Email required</span> : email=== null}

                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="number" onChange={(e)=> SetPhone(e.target.value)} value={phone} />
                        {err=== true && phone === ""  ? <span>Phone required</span> : phone=== null}

                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" onChange={(e)=> SetPassword(e.target.value)} value={password}/>
                        {err=== true && password === ""  ? <span>Enter required</span> : password=== null}

                    </div>
                    <button>Create Merchant</button>
                </form>
                </div>
              </div>
            </div>

       </div>
    )
}

export default CreateMerchant;
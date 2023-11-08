import { useState, useEffect } from "react"
import Sidebar from "./sidebar"

function CreateAgent(){
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail]= useState('')
    const [phone, SetPhone] = useState('')
    const [password, SetPassword] = useState('')
    const [err, SetErr] = useState(false)


    const handleSubmit =(e)=>{
        e.preventDefault()
        if(name ==="" || company=== "" || email==="" || phone === "" || password === ""){
            SetErr(true)
            return
        }

        const createAgents = {
            full_name: name,
            company: company,
            email: email,
            phone: phone,
            password: password
        }
        // setName('')
        // setEmail('')
        // SetPhone('')
        // SetPassword('')
        console.log(createAgents)
        let getToken = localStorage.getItem('Merchant_Token')

        fetch('http://property.reworkstaging.name.ng/v1/merchants/agents',{
            method: "POST",
            headers: {"Content-Type":"Application/json",
                    "authorization" : `Bearer ${getToken}` 
        },
            body: JSON.stringify(createAgents)
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
                   <h1 className="sidebar-title">Create Agent</h1>
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
                        <label>Company</label>
                        <input type="text" onChange={(e)=> setCompany(e.target.value)} value={company}/>
                        {err=== true && company === "" ? <span>Name required</span> : company === null}
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
                    <button>Create Agent</button>
                </form>
                </div>
              </div>
            </div>

       </div>
    )
}

export default CreateAgent
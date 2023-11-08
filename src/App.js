import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Section2 from "./component/Section2";
import Property from "./component/Property";
import Productdetails from "./component/Productdetails";
import AdminDashboard from "./Admin/Component/AdminDashboard"
import CreateAgent from "./Admin/Component/CreateAgent"
import CreateMerchant from "./Admin/Component/CreateMerchant"
import MerchantLogin from "./Admin/Component/MerchantLogin"
import Agents from "./Admin/Component/Agents"
import Signup from "./component/Signup";
import Login from "./component/Login";
import Wishlist from "./component/Wishlist";
import Userprofile from "./component/Userprofile";
import Appointment from "./component/Appointment";




function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Section2/>}/>
        <Route path="/property" element={<Property/>}/>
        <Route path="/property/:id" element={<Productdetails/>}/>
        <Route path="/dashboard" element={<AdminDashboard/>}/>
        <Route path="/createAgent" element={<CreateAgent/>}/>
        <Route path="/CreateMerchant" element={<CreateMerchant/>}/>
        <Route path="/MerchantLogin" element={<MerchantLogin/>}/>
        <Route path="/Agents" element={<Agents/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Userprofile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        

      </Routes>
      </BrowserRouter>



    </div>
  )
}


export default App;
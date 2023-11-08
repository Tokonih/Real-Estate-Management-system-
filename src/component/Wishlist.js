import { useState } from "react";
import { useContext } from "react";
import { IoBookmarksSharp,IoHeartCircle } from "react-icons/io5"
import { Link } from "react-router-dom";
import { Newlookcontext } from "./context/Context";
import  img from "./Imagess/Villa-in-Coral-Gables-1240x720.jpg"





function Wishlist(){

    // const contextData = useContext(Newlookcontext)
    // const {Wishlist, setWishlist} = contextData;
    // const [Wishlistitem, setWishlistitem] = useState();
    // const userData = JSON.parse(localStorage.getItem("merchant_Data_id"))


    // fetch("http://property.reworkstaging.name.ng/v1", {
    //     method: "POST",
    //     headers: {"Content-Type": "Application/Json"},
    //     body:
    // })
    

    return(
        <div>
            <div style={{display:"flex", gap:"30px"}}>
                <div className="firstdiv">
                    <div><h3>Tag Homes</h3></div>
                    <div style={{margin:'10px 0',padding:"10px"}}><IoBookmarksSharp/><Link>Wish List</Link></div>
                </div>
                <div className="seconddiv">
                    <table className="wishtable">
                        <tbody>
                    <tr>
                    <th>Photo</th>
                    <th>Property Info</th>
                    <th>Added On</th>
                    <th>Property Status</th>
                    <th>Status</th>
                    <th>Price & Actions</th>
                    </tr>
                        <tr>
                             <td><img src={img} alt="" /></td>
                            <td>
                                <div>
                                    <div><h4>coral villa</h4>
                                    <p>Enjoy serenity of deering Bay</p>
                                    </div>
                                    <div style={{display:"flex", justifyContent:"space-evenly"}}><p>one</p><p>two</p><p>three</p></div>
                                    </div>
                                    </td>
                                    <td>June 13, 2020</td>
                                    <td>For Sale</td>
                                    <td>
                                        <div className="wishbutton">
                                        <div><button>Featured</button></div>
                                        <div><button style={{backgroundColor:"#1ea69a", marginTop:"10px"}}>Published</button></div>
                                        </div>
                                    </td>
                                    <td>$740,000</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Wishlist;
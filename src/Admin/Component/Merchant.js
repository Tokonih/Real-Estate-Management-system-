import Sidebar from "./sidebar"

function Merchants(){
    return(
       <div className="side-main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="side-container">
                <div className="Dashboard">
                   <h1 className="sidebar-title">Merchants</h1>
                </div>
              
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Tokonih</td>
                        <td>tokonih@gmail.com</td>
                        <td>3456789</td>
                        <td>tk</td>
                        <td><button className="Detailsbtn">Details</button> <button className="editbtn">Edit</button> <button className="deletebtn">Delete</button></td>
                    </tr>
                </table>
            </div>
            </div>

       </div>
    )
}

export default Merchants;
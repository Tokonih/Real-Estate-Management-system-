import { useEffect } from "react";
import { useState } from "react";
import { IoCheckmarkSharp,IoTrash } from "react-icons/io5";

function Appointment() {

  const [appoint, setAppointment] = useState()
  const usersId = localStorage.getItem("merchant_Data_id")
  let getToken = localStorage.getItem("Merchant_Token")

  useEffect(() => {

    fetch(`http://property.reworkstaging.name.ng/v1/appointments?user=${usersId}`, {

      headers: { 'authorization': `Bearer ${getToken}` }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setAppointment(data.data)
        console.log(data.data)
        let appointmentId = data.data[0].id
        console.log(appointmentId)
         localStorage.setItem("appointment_id", appointmentId)

      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  let appointId = localStorage.getItem("appointment_id")

  const completeAppointment = () => {
    fetch(`http://property.reworkstaging.name.ng/v1appointments/${appointId}/set-user-appointment-completion`, {

      method:"PUT",
      headers:{ "Content-type": "Application/Json",
        "authorization": `Bearer ${getToken}` },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setAppointment(data)
      console.log(data)
    })
  }



  return (
    <div>
      <div className="parent-cover-div">
        <div className="parent-cover-innerd1">
          <div className="appointment-div1">
            <h1 className="appointment-p1">Appointment</h1>
          </div>

        </div>
        <div className="parent-cover-innerd2">
          <div className="flexed-innerd2">
            <div className="innerp-div01">
              <p>Manage</p>
            </div>
            <div className="innerp-div01">
              <p>Appointments</p>
            </div>
          </div>

          <div className="innerp-div01">
            <p>Appointments</p>
          </div>

          <div className="appointment-table">
            {/* <div className="appointment-row"> */}
            <table>
              <tr className="table-tr">
                
                <th>Property</th>
                <th>Appointment date</th>
                <th>Time-from</th>
                <th>Time-To</th>
                <th>Property type</th>
                <th>Status</th>

              </tr>
              {appoint && appoint.map((item) => (
              <tbody className="table-body">
 
              
                <td className="table-td">{item.property.name}</td>
                <td className="table-td">{item.date}</td>
                <td className="table-td">{item.time.from}</td>
                <td className="table-td">{item.time.to}</td>
                <td className="table-td">{item.property.type}</td>
                <div className="tr-flexed-div">
                <td className="status-td">{item.status}    </td>
                <IoCheckmarkSharp className="complete-icon" onClick={completeAppointment} /> <IoTrash className="trash-icon"/>
                </div>

                
             
              </tbody>
                ))}
            
            </table>
            {/* </div> */}
            <div className="appointment-div">

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Appointment
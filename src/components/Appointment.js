import React from 'react';



const Appointment = ({appointment, removeAppointment}) => {
    return (  
        <div className="cita">
        <p>Pet: <span>{appointment.pet}</span></p>
        <p>Owner: <span>{appointment.owner}</span></p>
        <p>Pet: <span>{appointment.date}</span></p>
        <p>Time <span>{appointment.time}</span></p>
        <p>Symptoms: <span>{appointment.Symptoms}</span></p>
        
        <button
            className="button eliminar u-full-width"
            onClick={()=>removeAppointment(appointment.id)}
        >Remove &times;</button>
        </div>

    );
}
 


export default Appointment;
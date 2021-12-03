import React, {Fragment, useState, useEffect } from 'react';
import Form from './components/Form'
import Appointment from './components/Appointment';

import propTypes from 'prop-types';

function App() {

// Local Storage

let appointmentsAtStart = JSON.parse(localStorage.getItem('appointments'));
if (!appointmentsAtStart) {
  appointmentsAtStart =[];
  
}


  // Appointments array 

  const[appointments, saveAppointments] =useState([])


  // Use Effect 
  useEffect(()=>{
    if (appointmentsAtStart) {
      localStorage.setItem('appointments', JSON.stringify(appointments))
      
    }else{
      localStorage.setItem('appointments', JSON.stringify([]))

    }
    console.log('We are ready')

  },[appointments, appointmentsAtStart])

  // appointments organizer
  const createApponintment = appointment =>{
   saveAppointments([

    ...appointments,
    appointment
   ])

  }

  // remove appointment by id 
  const removeAppointment = id =>{
    const newAppointments = appointments.filter(appointment => appointment.id !== id)
    saveAppointments(newAppointments)
  }

    //Conditional alert

    const title = appointments.length === 0?   "No appointments on file":"Manage your appointments"

  return (
    <Fragment>
      
      <h1>Patients management System</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
           
           <Form
           createApponintment={createApponintment}
           />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appointment=>(
              <Appointment
              key={appointment.id}
              appointment={appointment}
              removeAppointment={removeAppointment}
              />

            ))}
          </div>

        </div>

      </div>
    </Fragment>
  );
}

Form.propTypes={
  createApponintment: propTypes.func.isRequired


}

export default App;

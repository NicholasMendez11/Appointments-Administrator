import React,{Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4'


const Form = ({createApponintment}) => {

    // State for the appointments
    const[appointment, appUpdate] = useState({
        pet: '',
        owner: '',
        date: '',
        time:'',
        Symptoms:''
    });

    const [error, updateError] = useState(false)

    // State updater, this function catch all changes in each input
    const stateUpdate =(e) =>{
        appUpdate({

        ...appointment,
        [e.target.name]: e.target.value
        })
        
    }

    //Extracting values
    const {pet, owner, date, time, Symptoms } = appointment;

    // validating fields

    const submitApp = e =>{
        e.preventDefault();

        // Validate 
        if (pet.trim() === ''||owner.trim() === ''||date.trim() === ''||time.trim() === ''||Symptoms.trim() === '') {
         updateError(true)
         return;
            
        }

        // Deleting error alert
        updateError(false)


        // assigne iD
        appointment.id = uuid();
        

        // create the appointment
        createApponintment(appointment)

        // Reload form
        appUpdate({
        pet: '',
        owner: '',
        date: '',
        time:'',
        Symptoms:''

        })

    }


    return ( 
     <Fragment>
        <h2>Create Appointment</h2>  

        {error? <p className="alerta-error"> All fields are required</p>    : null}          

        <form
            onSubmit={submitApp}
        >
            <label>Pet Name</label>
            <input
            type="text"
            name="pet"
            className="u-full-width"
            placeholder="Pet Name"
            onChange={stateUpdate}
            value={pet}
            />
            <label>Pet Owner</label>
            <input
            type="text"
            name="owner"
            className="u-full-width"
            placeholder="Pet Owner"
            onChange={stateUpdate}
            value={owner}
            />
            <label>Date </label>
            <input
            type="date"
            name="date"
            className="u-full-width"
            onChange={stateUpdate}
            value={date}
            />
             <label>Time</label>
            <input
            type="time"
            name="time"
            className="u-full-width"
            onChange={stateUpdate}
            value={time}
            />
             <label>Symptoms</label>
            <textarea
                className="u-full-width"
                name="Symptoms"
                onChange={stateUpdate}
                value={Symptoms}
                

            />
            <button
            type="submit"
            className="u-full-width button-primary"
        
            >Add</button>
                
            
            
        </form>

    </Fragment>
        

     );
}
 
export default Form;
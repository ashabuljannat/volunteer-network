import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Events = () => {

    const [loggedInUser ,setLoggedInUser] = useContext(UserContext)
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/events')
          .then(res => res.json())
          .then(data => setEvents(data));
    }, [])

    const handleDltEvent = (id) => {
        console.log(id);
            fetch(`/cancelEvent/${id}`,{
                method:'DELETE'})
             .then(res => res.json())
             .then(result => {
                console.log(result);
             })
    }

    return (
        <div>
        <h3>Hi.., you have {events.length} Bookings</h3>
        {
            events.map(event => 
               
                <ul>
                <div className="row">
                <div className="col-sm-4">
               <div className="card border-0 shadow-lg p-3">
               <h4>Name: {event.name}</h4>
                <h4>Title: {event.title}</h4>
                <h4>Date: {event.date}</h4>
                <p>Description: {event.description}</p>
                <button className='btn btn-dark' onClick={() =>handleDltEvent(`${event._id}`)}>Cancel Event</button>
                </div>
               </div>
              </div>
                </ul> 
           
             )
        }
        </div>
    );
};

export default Events;
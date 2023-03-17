import { useState, useEffect } from "react";
import EventCard from "./event";
import CardGroup from 'react-bootstrap/CardGroup';
import AddEventForm from "./addeventform";



function Events() {
    const [events, setEvents] = useState([]);
    

    //GET Request
    const getRequest = () => {
      fetch("http://localhost:8085/api/events")
      .then((response) => response.json())
      .then(events => {
        setEvents(events); 
        console.log('Events fetched...', events);
        });
    }

    //when we do put request, also want to update UI
    useEffect(() => {getRequest()}, []);


    //POST Request
    const postRequest = (newEvent) =>{
      //console.log("From the parent", newEvent);
      return fetch("http://localhost:8085/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("From the front", data);
        setEvents((events) => [...events, data])
      })
    }



//DELETE request
//parent knows the id of each card,  events  is all the events because of how we  called get request
const deleteRequest = async (id) =>{
  try {
    const deleteRequest = await fetch(`http://localhost:8085/api/events/${id}`, {
        method: "DELETE"
    });

    setEvents(events.filter(events => events.id !== id))
    console.log(deleteRequest);
  } catch(err)  {
    console.error(err.message);
  }
}


//add method, headers
//PUT request
//setEvents("favorited");
//takes JSON, turns it into string, strignify makes object correct pattern for backend to use
//console.log(editFave);

const handleFaveId = async (id, isFavorite) =>{
  console.log(id);
  try {
    const editFave = await fetch(`http://localhost:8085/api/events/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({favorite: isFavorite}),
      
    })
    console.log(editFave);
    console.log("favorites button IS WORKING");
  } catch(err) {
    console.log("this is failing")
    console.error(err.message);
  }
}

  //Pass in ID of what you want to edit, we build API on backend, url linked to favorites

//PUT Request Pt.2
// const handleFaveId = (id, isFavorited) =>{
//   //console.log("From the parent", newEvent);
//   return fetch(`http://localhost:8085/api/events/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({favorite: isFavorited}),
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     //console.log("From the front", data);
//     setEvents(events.filter(events => events.id === id))
//   })
// }



  return (
    <div>
      <AddEventForm postRequest={postRequest} />
    <CardGroup className="Events">
            {events.map((event) =>(
            <EventCard 
            key={event.id} 
            id={event.id} 
            title={event.title}
            location={event.location} 
            time={event.eventtime} 
            deleteRequest={deleteRequest} 
            onFaveId={handleFaveId}
            isFavorite={event.favorites}
              
            />
            ))}
           
    </CardGroup>
    
    </div>
  );
}

export default Events;
import { useState, useEffect } from "react";
import EventCard from "./event";
import CardGroup from 'react-bootstrap/CardGroup';
import AddEventForm from "./addeventform";



function Events() {
    const [events, setEvents] = useState([]);
    //const [icon, setIcon] = useState([]);
   
    // useEffect(() => {
    //     fetch("http://localhost:8085/api/events")
    //       .then((response) => response.json())
    //       .then(events => {
    //         setEvents(events); 
    //         console.log('Events fetched...', events);
    //         });
    //       }, []);

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



//testing delete request
//parent knows the id of each card,  events  is all the events because of how we  called get request
//
const deleteRequest = async (id) =>{
  try {
    const deleteRequest = await fetch(`http://localhost:8085/api/events/${id}`, {
        method: "DELETE"
    });

    setEvents(events.filter(events => events.id !== id))

  } catch(err)  {
    console.error(err.message);
  }
}


//CREATE SEPARATE FETCH REQUEST, calling api for favorite
//App crashes without a catch statement, catching error to log the problem (break)
//use try/catch when you don't want an error to break your code.
//api executed asynchronously, so that
//asynchronous - send a bunch of requests
//have to use async for these types of external APIs, we are waiting for fetch to happen
//async queau and executes in right order, sync is one at a time 
//async allows for waiting for several requests at once, but each one executes at its own time 
//w. async we don't need to block the entire code execution to execute something
//id=${id}&isFavorited=${isFavorited}
//after function executes, rerender so that get gets the updated data to put on the screen
//all logic is set up c=for calling and showing data, now we have to make sure it rerenders
//make sure in html know how to display (button, heart) - get request is updating state of all events
//no need to store anything else if it is set up to rerender because current state will show based on database, which is grabbed by get request
const handleFaveId = async (id, isFavorited) =>{
  console.log(id);
  try {
    //add method, headers
    const editFave = await fetch(`http://localhost:8085/api/events/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      //body: JSON.stringify(newEvent),
    })
    //setEvents("favorited");
    console.log("favorites button IS WORKING");
  } catch(err) {
    console.error(err.message);
  }
  //Pass in ID of what you want to edit, we build API on backend, url linked to favorites
}
/*
-  
*/



  return (
    <div>
    <CardGroup className="Events">
            {events.map(event =>
            <EventCard 
            key={event.id} 
            title={event.title} location={event.location} time={event.eventtime} id={event.id} deleteRequest={deleteRequest}  handleFaveId={handleFaveId}  favoritesId={event.favorites}/>
            )}
           
    </CardGroup>
    <AddEventForm postRequest={postRequest} />
    </div>
  );
}

export default Events;
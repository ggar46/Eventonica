import { useState, useEffect } from "react";
import EventCard from "./event";
import CardGroup from 'react-bootstrap/CardGroup';
import AddEventForm from "./addeventform";



function Events() {
    const [events, setEvents] = useState([]);

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

    // const deleteRequest = (whichEvent) =>{
    //   return fetch("http://localhost:8085/api/events", {
    //     method: "DELETE",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(whichEvent),
    //   })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     //console.log("From the front", data);
    //     setEvents((events) => [...events, data])
    //   })
    // }
    // }

  return (
    <div>
    <CardGroup className="Events">
            {events.map(event =>
            <EventCard key={event.id} title={event.title} location={event.location} time={event.eventtime}/>
            )}
    </CardGroup>
    <AddEventForm postRequest={postRequest} />
    </div>
  );
}

export default Events;
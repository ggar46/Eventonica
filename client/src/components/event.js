import Card from 'react-bootstrap/Card';
import Moment from "react-moment";
import { useState } from 'react';


const EventCard = (props) =>{


    return(
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Date: {!props.time ? "TBD" : <Moment format={"DD/MM/YYYY"}>{props.time}</Moment>}</Card.Subtitle>
      <Card.Text>
        {props.location}
      </Card.Text>
      <button>delete</button>
    </Card.Body>
  </Card>
  )}

export default EventCard;


//need value of card to delete (title,  location, eventtime)
//get info from eventcard
//add to state
//pass state data to events.js
//make state equal to 
//remove whole card
//take title etc and push  data to function and delete
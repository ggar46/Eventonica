import Card from 'react-bootstrap/Card';
import Moment from "react-moment";
import { useEffect, useState } from 'react';



const EventCard = (props) =>{
  const [isFavorited, setIsFavorited] = useState(props.isFavorite); 

//need to useEffect
useEffect(() => {props.onFaveId(props.id, isFavorited)}, [isFavorited])

    //Was checking to see the difference between the two variables
    console.log("favoritesId is", props.favoritesId);

    return(
    <Card id="eachCard" style={{width:'18rem' }}>
    <Card.Body>
      <Card.Title class="card-title">{props.title}</Card.Title>
      <Card.Subtitle className="mb-2 .text-white">Date: {!props.time ? "TBD" : <Moment format={"DD/MM/YYYY"}>{props.time}</Moment>}</Card.Subtitle>
      <Card.Text>
        {props.location}
      </Card.Text>
      
      {/* <span>{isFavorited? <p>HEART</p> : <p>No heart</p>}</span> */}
      {/* <span>{isFavorited? <i class='fa fa-heart red-color'></i> : <i class='fa fa-heart'></i>}</span> */}

      <button id="deletebutton" onClick={() => props.deleteRequest(props.id)}>Delete</button> 
      <span>&nbsp;&nbsp;<button  id="heartbutton" onClick={() => setIsFavorited(!isFavorited)}>{isFavorited? <i class='fa fa-heart red-color'></i> : <i class='fa fa-heart'></i>}</button></span>

   

    </Card.Body>
  </Card>
  )}

export default EventCard;


/*
-we need an icon that can change color when it is clicked
-if boolean is true for each event (shown by state in event.js), 
then we will use the ternary operator on a 
*/
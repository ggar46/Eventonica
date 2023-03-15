import Card from 'react-bootstrap/Card';
import Moment from "react-moment";


const EventCard = (props) =>{

  const deleteFunc = () => {
    return props.deleteRequest;
  }
    return(
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Date: {!props.time ? "TBD" : <Moment format={"DD/MM/YYYY"}>{props.time}</Moment>}</Card.Subtitle>
      <Card.Text>
        {props.id}
        {props.location}
      </Card.Text>
      <button onClick={() => deleteFunc}>Delete</button>
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

/*
-  click button (don't need to specify which one, we are working one instance at a time
-  when delete button clicks, reference ID in events.js
*/
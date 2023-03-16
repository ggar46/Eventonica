import Card from 'react-bootstrap/Card';
import Moment from "react-moment";



const EventCard = (props) =>{
    //Was checking to see the difference between the two variables
    console.log("favoritesId is", props.favoritesId);
    console.log("id is", props.id);
    return(
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Date: {!props.time ? "TBD" : <Moment format={"DD/MM/YYYY"}>{props.time}</Moment>}</Card.Subtitle>
      <Card.Text>
        {props.location}
      </Card.Text>
      <p>Event Id: {props.id}</p>
      <button onClick={() => props.deleteRequest(props.id)}>Delete</button> 
      <span><button onClick={() => props.handleFaveId(props.id)}>Favorite</button></span>
       
    </Card.Body>
  </Card>
  )}

export default EventCard;

import { Card } from 'react-bootstrap';
import React from 'react';
import { CardDeck } from 'react-bootstrap';
import palces from '../../FakeData/PalceData';
import Header from '../Header/Header';
import './Home.css';
import { useHistory } from 'react-router-dom';

const Home = () => {

  const history=useHistory();
//routing booking component with place id.
    const handleBooking=(props)=>{
      history.push(`/Booking/${props}`);
    }
    
    return (
        <div className="container">
            <div>
   <Header></Header>
            </div>
            <div className="body-highligh">
            <CardDeck>
  <Card>
    <Card.Img variant="top" className="img-size" src={palces[0].imageUrl} />
    <Card.Body>
    <Card.Title>{palces[0].name}</Card.Title>
      <Card.Text>
       {palces[0].details}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <button onClick={()=>handleBooking(0)}  className="button-highlight" >Booking</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" className="img-size" src={palces[1].imageUrl}/>
    <Card.Body>
    <Card.Title>{palces[1].name}</Card.Title>
      <Card.Text>
       {palces[1].details}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button onClick={()=>handleBooking(1)} className="button-highlight">Booking</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" className="img-size" src={palces[2].imageUrl} />
    <Card.Body>
    <Card.Title>{palces[2].name}</Card.Title>
      <Card.Text>
      {palces[2].details}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button onClick={()=>handleBooking(2)}  className="button-highlight">Booking</button>
    </Card.Footer>
  </Card>
</CardDeck>
            </div>
        </div>
    );
};

export default Home;
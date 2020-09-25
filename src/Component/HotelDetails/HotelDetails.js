import React, { useContext } from 'react';
import { userContext } from '../../App';
import roomDetails from '../../FakeData/HotelDetailsData';
import './HotelDetails.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Header from '../Header/Header';

const HotelDetails = () => {
    //booking catch from booking component
    const {logIn,Booking}=useContext(userContext);
    const [bookingInfo,setBookingInfo]= Booking;

    //google maps style
    const mapStyles = {
        width: '100%',
        height: '100%',
      };

    return (
        <div>
            <Header></Header>
        <div className="details-highlight" > 
           <div className="room-highlight">
               {
                roomDetails.map(room=><div key={room.id} className="singleRoom">
                        <div className="img">
                         <img src={room.imageUrl} alt=""/>
                        </div>
                        <div className="details">
                <h5>{room.name}</h5>  <br/>
                <small>{room.detail}</small>
                <p>${room.price} &nbsp; <button className="btn-highlight">book</button></p>
                 <br/>
                        </div>
                    </div>)
               }
       </div>
           <div className="map-highlight">

               {/* google map compnent.it donot work due to google Api key. */}
           {/* <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        /> */}
        <h1>here, google map component .it donot work due to google api key.all code are in HotelDetails component</h1>
           </div>
   </div>
   </div>
    );
};

//updating this default due to google maps component.
export default GoogleApiWrapper({
    apiKey: 'TOKEN HERE'
  })(HotelDetails);
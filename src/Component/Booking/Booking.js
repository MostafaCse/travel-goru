import './Booking.css';
import React, { useContext, useRef, useState } from 'react';
import Header from '../Header/Header';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarLogo from '../../images/Icon/calender_icon.png';
import { useHistory, useParams } from 'react-router-dom';
import palces from '../../FakeData/PalceData';
import { userContext } from '../../App';


const Booking = () => {

   const {logIn,Booking}=useContext(userContext);
   const [bookingInfo,setBookingInfo]=Booking;
   const history=useHistory();
   const [FormTime ,setFormTime]=useState();
    const [toTime ,setToTime]=useState();

//catch palce id
    const {id}=useParams();

 //handle form input
   const handleForm=(event)=>{
      let orgin ,destination ,formTime ,toTime ;
      const fromData=new FormData(event.target);
      for(let [key,value] of fromData.entries())
      {
         if(key==='orgin') orgin=value;
         else if(key==='destination') destination=value;
         else if(key==='formTime') formTime=value;
         else if(key==='toTime') toTime=value;
            }
             const placeInfo={
                orginInfo:orgin,
                destinationInfo:destination,
               formTimeInfo:formTime,
               toTimeInfo:toTime
             }
             //set booking info for all component
            setBookingInfo(placeInfo);
            event.preventDefault();
    history.push(`/HotelDetails`);
     console.log(placeInfo);
      
   }
 
    return (
        <div>
           <div className="container">
             <div>
                <Header></Header>
             </div>
             <div className="body-style">
                 <div className="description">
                      <h1>{palces[id].name}</h1>
           <p> {palces[id].details}</p>
                 </div>
                 <div className="booking-highlight">
                    <form onSubmit={handleForm} className="form-highlight" >
                      <small>Orgin</small>
                      <br/>
                      <input type="text" name="orgin" required placeholder="Enter your Orgin"/>
                       <br/>
                       <small>Destination</small>
                      <br/>
                      <input type="text" name="destination" required placeholder="Enter your Destination"/>
                       <br/>
                       <small>Form</small> <br/>
                      <DatePicker  selected={FormTime} onChange={Date=>setFormTime(Date)}  required name="formTime"> </DatePicker>
                      <img src={calendarLogo} alt=""/>
                      <br/>
                      <small>To</small> <br/>
                      <DatePicker selected={toTime}  onChange={Date=>setToTime(Date)} required name="toTime"> </DatePicker>
                      <img src={calendarLogo} alt=""/>
                      <br/>
                      <button type='submit' id="submitButton-highlight">Start Booking</button>
                    </form>
                 </div>
             </div>
           </div>
        </div>
    );
};

export default Booking;
import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Booking from './Component/Booking/Booking';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import HotelDetails from './Component/HotelDetails/HotelDetails';


 export const userContext=createContext();
function App() {
  const [logginUser,setLogginUser]=useState({});
  const [bookingInfo,setBookingInfo]=useState({});
 
  return (
    <userContext.Provider value={{ logIn: [logginUser,setLogginUser], Booking: [bookingInfo,setBookingInfo] }}>
      <Router>
        <div>
       <Switch>
       <Route exact path="/">
         <Home></Home>
          </Route>
       <Route path="/Home">
         <Home></Home>
          </Route>
          <Route exact path="/Booking/:id">
        <Booking></Booking>
          </Route>
          <PrivateRoute path="/HotelDetails">
               <HotelDetails></HotelDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
         <NotFound></NotFound>
          </Route>
        </Switch>
        </div>
        </Router>
  </userContext.Provider>
  );
}

export default App;

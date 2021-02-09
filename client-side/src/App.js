import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Events from './Component/Events/Events';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import CreatForm from './Component/RegForm/CreatForm';
import PrivateRoute from './Component/RegForm/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser ,setLoggedInUser] = useState({});
 
  return ( 
   <div className='container'>
   <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
    <Router>
     <Header/>
      <Switch>     
        <Route exact path="/">
          <Home />
        </Route>
         <Route path="/login">
           <Login /> 
         </Route>
        <PrivateRoute path="/registration">
          <CreatForm /> 
        </PrivateRoute>
        <PrivateRoute path="/events">
           <Events /> 
         </PrivateRoute>
      </Switch>
   
   </Router>
   </UserContext.Provider>
  </div>
  );
}

export default App;

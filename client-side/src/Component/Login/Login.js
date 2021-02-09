import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './Config';
 

const Login = () => {

  const [loggedInUser ,setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();

  const  { from } = location.state || { from: { pathname: "/register" } };

  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
  }
     const handleGoogleSignIn = () => {

      var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then( result => {
          const {displayName, email,photoURL} = result.user;
        setLoggedInUser({name : displayName,email,photoURL})
        history.replace(from);
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          console.log(errorCode,errorMessage,email);
        });
     }  


    return (
        <div className='login'>
        <h2>Log In...</h2><hr/>
        <Form>
        <Form.Group controlId="formGroupEmail">
        <Form.Label> Email address</Form.Label>
       <Form.Control type="email" placeholder="Enter email"required/>
       </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
          </Form.Group>
          <Button variant="success" type="submit" >
          Log In
        </Button> 
        </Form>
                <p>Don't have account <Button variant="info" type="submit">
                Create New Account...
                </Button></p>
            <hr/>
          <Button variant='outline-danger' onClick={handleGoogleSignIn}>
          Google Sign In</Button><br/>
            </div> 
    );
};

export default Login;
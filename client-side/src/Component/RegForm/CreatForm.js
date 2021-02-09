
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


 

const CreatForm = () => {

  const [loggedInUser ,setLoggedInUser] = useContext(UserContext)

   const handleSubmit = () => {
    const description = document.getElementById('description').value;
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const newEvent = { ...loggedInUser, description,title,date}
   

    fetch('http://localhost:5000/addOwnEvent',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEvent)
    })
   

  
  };

    return (
        <div>
        <Container className='form'>
        <h2>Registration Form</h2><hr/>
        <Form onSubmit={handleSubmit}>
          Name: <input  className="input border-0 my-3" name='name'  type="text" value={loggedInUser.name}  /><br/>
          Email: <input  className="input border-0" name='email'  type="text" value={loggedInUser.email}  /><br/>
          Date: <input  className="input my-3" name='date'  type="date" placeholder="date" id='date' required/><br/>
          Title: <input  className="input" name='title'  type="text" placeholder="title" id="title" required /><br/>
          Description: <input  className="input my-3" name='description'  type="text" placeholder="description" id='description' required /><br/>
          <Button variant="dark" type="submit" onClick={handleSubmit}>
          <Link to="/events">Submit Your Event</Link>
          </Button>
        </Form>
      
        </Container>
        </div>
    );
};

export default CreatForm;
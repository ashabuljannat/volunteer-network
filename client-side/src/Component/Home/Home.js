import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import  img1 from '../../images/childSupport.png'
import  img2 from '../../images/animalShelter.png'
import  img3 from '../../images/babySit.png'
import  img4 from '../../images/birdHouse.png'
import  img5 from '../../images/cleanWater.png'
import  img6 from '../../images/clothSwap.png'
import  img7 from '../../images/driveSafety.png'
import  img9 from '../../images/foodCharity.png'
import  img10 from '../../images/goodEducation.png'
import  img11 from '../../images/clearnPark.png'
import  img12 from '../../images/ITHelp.png'
import  img13 from '../../images/libraryBooks.png'
import  img14 from '../../images/musicLessons.png'
import  img15 from '../../images/newBooks.png'
import  img16 from '../../images/refuseShelter.png'
import  img17 from '../../images/riverClean.png'
import  img18 from '../../images/schoolSuffiles.png'
import  img19 from '../../images/studyGroup.png'
import  img20 from '../../images/stuffedAnimals.png'
import  img21 from '../../images/voteRegister.png'
import { Link } from 'react-router-dom';
import './Home.css';

 
const Home = () => {

    const [events, setEvents] = useState()

    const addHandleEvent = (addEvent) => {
       console.log(addEvent);
    }
  


    return (
        <div className="container">
            <h4 style={{marginLeft: '35%',marginTop:'20px' }}>I GROW BY HELPING PEOPLE IN NEED</h4>
            <Form inline style={{marginLeft: '40%',marginBottom:'20px' }}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>

            <div className="row mb-2 ">
                <div className="col ">
                    <div className="card ui-card border-0" >
                    <img src={img1} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>Child Support</h3>
                    <button className='btn btn-dark' onClick={() => addHandleEvent('child')}><Link to="/registration">Go Register</Link></button>
                    </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card ui-card border-0 ">
                   <img src={img2} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description ">
                    <h3>Animal Shied</h3>
                    <button className='btn btn-dark'><Link to="/registration">Go Register</Link></button>
                   
                    </div>      
                    </div>
                 </div>
                <div className="col">
                    <div className="card ui-card border-0" >
                   <img src={img3} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>Baby Sit</h3>
                    <button className='btn btn-dark'><Link to="/registration">Go Register</Link></button>
                  
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ui-card border-0" >
                    <img src={img4} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>Bird House</h3>
                    <button className='btn btn-dark'><Link to="/registration">Go Register</Link></button>
                   
                    </div>
                    </div>
                </div>
          </div>
          <div className="row mb-2">
                <div className="col ">
                    <div className="card ui-card border-0"  >
                    <img src={img5} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>Clean Water</h3>
                    <button className='btn btn-dark'><Link to="/registration">Go Register</Link></button>
                   
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ui-card border-0"  >
                   <img src={img6} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>Cloth Swap</h3>
                    <button className='btn btn-dark'><Link to="/registration">Go Register</Link></button>
                
                    </div>      
                    </div>
                 </div>
                <div className="col">
                    <div className="card ui-card border-0"  >
                   <img src={img7} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>Drive Safety</h3>
                    <button className='btn btn-dark'><Link to="/registration"> Go Register</Link></button>
                   
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ui-card border-0"  >
                    <img src={img20} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>Stuffed Animal </h3>
                    <button className='btn btn-dark'><Link to="/registration"> Go Register</Link></button>
                
                    </div>
                    </div>
                </div>
          </div>
          <div className="row mb-2">
                <div className="col">
                    <div className="card ui-card border-0"  >
                    <img src={img9} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>Food Charity</h3>
                    <button className='btn btn-dark'><Link to="/registration"> Go Register</Link></button>
                   
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ui-card border-0"  >
                   <img src={img10} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>Good Education</h3>
                    <button className='btn btn-dark'><Link to="/registration"> Go Register</Link></button>
                   
                    </div>      
                    </div>
                 </div>
                <div className="col">
                    <div className="card ui-card border-0"  >
                   <img src={img11} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>Clean Park</h3>
                    <button className='btn btn-dark'><Link to="/registration"> Go Register</Link></button>
                   
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ui-card border-0"  >
                    <img src={img12} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>IT Help</h3>
                    <button className='btn btn-dark'><Link to="/registration"> Go Register</Link></button>
                   
                    </div>
                    </div>
                </div>
          </div>
          <div className="row mb-2">
                <div className="col ">
                    <div className="card ui-card border-0"  >
                    <img src={img13} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>Library</h3>
                    <button className='btn btn-dark'><Link to="/registration"> Go Register</Link></button>
                  
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ui-card border-0"  >
                   <img src={img14} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>Music</h3>
                    <button className='btn btn-dark'><Link to="/registration"> Go Register</Link></button>
                   
                    </div>      
                    </div>
                 </div>
                <div className="col">
                    <div className="card ui-card border-0"  >
                   <img src={img15} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>New Books</h3>
                    <button className='btn btn-dark'><Link to="/registration"> Go Register</Link></button>
                  
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ui-card border-0"  >
                    <img src={img16} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>Refuse Shelter</h3>
                    <button className='btn btn-dark'><Link to="/registration"> Go Register</Link></button>
                   
                    </div>
                    </div>
                </div>
          </div>
          <div className="row mb-2">
                <div className="col ">
                    <div className="card ui-card border-0"  >
                    <img src={img17} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>Clean River</h3>
                    <button className='btn btn-dark'><Link to="/registration"> Go Register</Link></button>
                 
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ui-card border-0"  >
                   <img src={img18} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>School Suffice</h3>
                    <button className='btn btn-dark'><Link to="/registration"> Go Register</Link></button>
                    
                    </div>      
                    </div>
                 </div>
                <div className="col">
                    <div className="card ui-card border-0"  >
                   <img src={img19} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description">
                    <h3>Group Study</h3>
                    <button className='btn btn-dark'><Link to="/registration"> Go Register</Link></button>
                   
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ui-card border-0"  >
                    <img src={img21} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay description ">
                    <h3>Vote Register</h3>
                    <button className='btn btn-dark'><Link to="/registration"> Go Register</Link></button>
                    
                    </div>
                    </div>
                </div>
          </div>
        </div>
    );
};

export default Home;
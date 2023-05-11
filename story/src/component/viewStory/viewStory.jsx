import React  from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function ViewStory() {

 
    return (
      <>
        <div className='container pt-3'>
          <h2 className='text-center m-4 '>View Story</h2>
                    <Card className='mb-5'>
                      <Card.Header className='bg-dark text-white'>1 - story</Card.Header>
                      <Card.Body>
                        <blockquote className="blockquote mb-0">
                          <h3 className='pb-3 text-primary'>The Line</h3>
                          <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt incidunt tempora numquam, fugit maxime atque necessitatibus non. Voluptas laborum eligendi sed quia architecto non dicta porro, harum earum, amet sunt, repellendus libero quidem dolor vitae minima nobis? Quod beatae nulla ullam provident voluptate, voluptatem aut blanditiis ipsum numquam exercitationem sint.</h6>
                          <button className='btn btn-primary'>update</button>
                          <button className='btn btn-danger ms-3'>Delete</button>
                        </blockquote>
                      </Card.Body>
                    </Card>      
                    <Card className='mb-5'>
                      <Card.Header className='bg-dark text-white'>2 - story</Card.Header>
                      <Card.Body>
                        <blockquote className="blockquote mb-0">
                          <h3 className='pb-3 text-primary'>The Cow</h3>
                          <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt incidunt tempora numquam, fugit maxime atque necessitatibus non. Voluptas laborum eligendi sed quia architecto non dicta porro, harum earum, amet sunt, repellendus libero quidem dolor vitae minima nobis? Quod beatae nulla ullam provident voluptate, voluptatem aut blanditiis ipsum numquam exercitationem sint.</h6>
                          <button className='btn btn-primary'>update</button>
                          <button className='btn btn-danger ms-3'>Delete</button>
                        </blockquote>
                      </Card.Body>
                    </Card>               
        </div>
      </>
    )
  }

export default ViewStory;
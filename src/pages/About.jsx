import React from 'react'
import Navbar from '../components/Navbar'
import Container from 'react-bootstrap/Container';

const About = () => {
  return (
    <>
    <Navbar/>
    <>
    <div className='title-about'>
    <h2>About Us</h2>
    </div>

    <Container fluid>
      <div className='about-image'>
        <img src="https://images.unsplash.com/photo-1543069190-9d380c458bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYyfHxwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=''/>
        <h5>NSP created the new develpoment of application over all the large world, also build several smartphones like a brand as Iphone, Honor, Samsung, Vivo and etc.  </h5>
        </div>
    </Container>
    </>
    </>
  )
}

export default About

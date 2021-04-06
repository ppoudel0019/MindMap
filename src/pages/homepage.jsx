import React from 'react'

import background from '../images/file.jpeg'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './homepage.css'
import Container from 'react-bootstrap/Container'

const handleClick=(e)=>
{
    e.preventDefault();
    console.log("what")
    window.location.href="/Map";
    
}

const Homepage = () => {
    return (
  
<Container fluid='md'>
        <Row md= {{ span: 3, offset: 3 }}className='row-center'>
            <Col className=" pt-5 col-center">
                <Row className= "justify-content-md-center pt-5 title">
                    Clear Mind
                </Row>
                <Row className="justify-content-md-center text">
                    Visualize your ideas with our mind mapping tool. <br /><br />
                    </Row>
                    <Row className="justify-content-md-center">
                <Button size="lg"
                type="button"
                onClick={handleClick}
                 variant="outline-dark">GET STARTED</Button>
                </Row>
            </Col>
            <Col className='pt-5'>
                <img src={background} className="img-fluid"></img>
            </Col>
        </Row>
</Container>
            

    )
}

export default Homepage

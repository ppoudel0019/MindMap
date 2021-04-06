import React from 'react'
import PDF from '../components/savePDF'
import background from '../images/file.jpeg'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './homepage.css'
import Container from 'react-bootstrap/Container'



const Homepage = () => {
    return (
     <div>
<Container fluid>
        <Row className='row-center'>
            <Col className="pt-5 col-center">
                <Row className= "pt-5 title">
                    Clear Mind
                </Row>
                <Row>
                    Visualize your ideas with our mind mapping tool. <br /><br />
                <Button variant="outline-dark" >GET STARTED</Button>
                </Row>

            </Col>
            <Col className='pt-5'>
                <img src={background} className="img-fluid"></img>
            </Col>
        </Row>
</Container>
            
        </div>
    )
}

export default Homepage

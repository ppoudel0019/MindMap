import React, {useState} from 'react';
import ReactFlow, {removeElements,addEdge, Background, Controls, MiniMap} from 'react-flow-renderer';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Pdf from "react-to-pdf";
import Container from 'react-bootstrap/Container'
import  './map.css'

import Toast from 'react-bootstrap/Toast'


const ref = React.createRef();


const initialElements = []
const onLoad = (reactFlowInstance) =>  {
    reactFlowInstance.fitView();
}

const Node = () => {
    const [show, setShow] = useState(true);
    const [elements, setElements] = useState(initialElements);
    const [name, setName] = useState("")
    
    const addNode = () => {
        setElements(e => e.concat({
            id: (e.length+1).toString(),
            data: {label: `${name}`},
            position: {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight}
        }));
    };

        const onElementsRemove = (elementsToRemove) =>
          setElements((els) => removeElements(elementsToRemove, els));
        const onConnect = (params) => setElements((els) => addEdge(params, els));
      
   
            
   {/* const onConnect = (params) => setElements(e => addEdge(params,e)); */}
    
    return(
        <>
        <Form>
            <Container fluid>
               
                <Row  noGutters>
                    <Col xs={4} lg={3} md={4}>

                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                        <strong className="mr-auto">Clear Mind Assistant</strong>
                        <small>Just Now</small>
                    </Toast.Header>
                    <Toast.Body>
                        Hello, Start Here   
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                        </svg>
                    </Toast.Body>
                    </Toast>
                    </Col>
                    <Col xs={3} lg={3} md={4}className="pt-5">
                    
                        <Form.Control
                        id="inlineFormInput"
                        onChange={e => setName(e.target.value)}
                        />  
                    </Col>

                    <Col xs={3} lg={3} md={4}className="pt-5">
                    <Button className="btn-primary" variant="dark" onClick={addNode}>Add Item</Button>
                    </Col>
                    <Col>
                    </Col>    
               
                </Row>
                </Container>
            </Form> 
            
          

           <div ref={ref}>
            <ReactFlow
            elements={elements}
            onLoad={onLoad}
            style={{width:'100%',height: '80vh'}}
            onConnect = {onConnect}
            onElementsRemove={onElementsRemove}
            connectionLineStyle={{stroke: "#ddd", strokeWidth: 4}}
            connectionLineType = "bezier"
            snapToGrid = {true}
            snapGrid={[14,14]}
            >
               
        
                  <MiniMap 
                nodeColor={'yellow'}/>
                <Background
                color="#8889"
                gap={10}
                />

                <Controls />
               




                </ReactFlow>
                <div className="download-style" >
   
                <Pdf targetRef={ref} filename="Mind Map.pdf">
                {({ toPdf }) => 
               
                <Button variant="dark" onClick={toPdf} >Download</Button>}
              
                </Pdf>
               
                </div>
                </div>

                
        
        </>
    );
};

export default Node;
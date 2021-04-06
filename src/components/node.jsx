import React, {useState} from 'react';
import ReactFlow, {removeElements,addEdge, Background, Controls, MiniMap} from 'react-flow-renderer';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



const ref = React.createRef();


const initialElements = []
const onLoad = (reactFlowInstance) =>  {
    reactFlowInstance.fitView();
}

const Node = () => {

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
                <Row>
                    <Col>
                    </Col>
                    <Col xs={3} md={4}>
                        <Form.Control
                        id="inlineFormInput"
                        onChange={e => setName(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Button className="btn-primary" variant="dark" onClick={addNode}>Add Item</Button>
                    </Col>
                    <Col>
                    </Col>    
                </Row>
            </Form> 

           <div className="Post" ref={ref}>
            <ReactFlow
            elements={elements}
            onLoad={onLoad}
            style={{width:'100%',height: '100vh'}}
            onConnect = {onConnect}
            onElementsRemove={onElementsRemove}
            connectionLineStyle={{stroke: "#ddd", strokeWidth: 4}}
            connectionLineType = "bezier"
            snapToGrid = {true}
            snapGrid={[15,15]}
            >
                  <MiniMap 
                nodeColor={'yellow'}/>
                <Background
                color="#8889"
                gap={10}
                />
                <Controls />
                </ReactFlow>
                </div>

            
        
        </>
    );
};

export default Node;
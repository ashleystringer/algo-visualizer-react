import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useRef } from 'react'
import { Form, Stack, Button } from 'react-bootstrap';
import Input from './components/Input';
import AStar from './algorithms/AStar';
import Dijkstra from './algorithms/Dijkstra';
import Graph from './components/Graph';

function App() {

  const widthRef = useRef(0);
  const heightRef = useRef(0);
  const [astar, setAstar] = useState(null);
  const [dijkstra, setDijkstra] = useState(null);

  useEffect(() => {
    setDijkstra(new Dijkstra());
  }, []);

  function handleSubmit(e){
    e.preventDefault();

    //dijkstra.play();
  }

  /*
  <Graph width={width} height={height} algo={algoType}/>
  */

  /*
  ISSUE - 
    1. I need to find out how to be able to change width and height here to be used in the Graph
    //and selected algorithm.
    2. I need to able to select the algorithm to be used.
    3. I need to be able to allow the output of the selected algorithm instance to be
    //rendered in the Graph component.
    4. I need to make sure the selected algorithm instance produces an output
    //with a consistent cycle of time. 
  */

  return (
    <div className="App">
      App
      <Form onSubmit={handleSubmit}>
        <Stack gap={3}>
          <Form.Group>
            <Form.Label>Width</Form.Label>
            <Form.Control required type='number' ref={widthRef}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Height</Form.Label>
            <Form.Control required type='number' ref={heightRef}/>
          </Form.Group>
          <Button>Start</Button>
        </Stack>
      </Form>
      <br/>
      <Graph width={widthRef.current.value} height={heightRef.current.value}/>
    </div>
  )
}

export default App

import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react'
import Input from './components/Input';
import AStar from './algorithms/AStar';
import Dijkstra from './algorithms/Dijkstra';

function App() {

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const astar = new AStar();
    const dijstra = new Dijkstra(); 
  }, []);

  return (
    <div className="App">
      App
      <Input/>
    </div>
  )
}

export default App

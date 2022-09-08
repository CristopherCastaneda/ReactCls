import './App.css';
import Abuelo from './Components/Abuelo'
import { useState } from 'react';

function App() {
  const fruta = "manzana"
  const [nombre, setNombre] = useState = ("angel")
  return (
    <div className="App">
      hola koders: {nombre}
      <Abuelo fruta={fruta} setNombre={setNombre} nombre={nombre}></Abuelo>
    </div>
  );
}

export default App;

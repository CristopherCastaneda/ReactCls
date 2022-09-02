import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Hello from './card';
import Catalogo from './catalogoCards'


const idRoot= document.getElementById('root');
const root = ReactDOM.createRoot(idRoot);
root.render(<Catalogo />);
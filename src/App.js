import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Curriculum from "./components/pages/Curriculum";
import ObraDisponible from "./components/pages/ObraDisponible";
import Contacto from "./components/pages/Contacto";
import CopiaImpresa from "./components/pages/CopiaImpresa";
import Exposiciones from "./components/pages/Exposiciones";
import Exposicion1 from "./components/pages/Exposicion1";
import Esposicion2 from "./components/pages/Esposicion2";
import GaleriaVirtual from "./components/pages/GaleriaVirtual";
import logo from './logo.png';



function App() {
  return (
    <Router>
      <div className='logo-chido'>
      <img src={logo} width='230px' height='145px'></img>
      </div>
      <Footer/>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/curriculum' component={Curriculum} />
        <Route path='/obra-disponible' component={ObraDisponible} />
        <Route path='/contacto' component={Contacto} />
        <Route path='/copia-impresa' component={CopiaImpresa} />
        <Route path='/exposiciones' component={Exposiciones} />
        <Route path='/exposicion1' component={Exposicion1} />
        <Route path='/exposicion2' component={Esposicion2} />
        <Route path='/galeria-virtual' component={GaleriaVirtual} />
      </Switch>
      <Header></Header>
    </Router>
  );
}

export default App;

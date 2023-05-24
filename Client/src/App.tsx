import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AnimatedRoutes />
        <Navbar />
        <ParticlesBackground />
      </BrowserRouter>
    );
  }
}

export default App;
import React from 'react';
import './App.css'
import Routes from './Routes.js'
import NavBarComponent from './Components/NavBarComponent.js'


function App() {

  return (
    <div className="animated" style={{maxWidth:"756px", margin:"auto"}}>
      <NavBarComponent/>
      <Routes/>
    </div>
  );
}

export default App;

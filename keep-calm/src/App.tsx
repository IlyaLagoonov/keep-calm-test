import React from 'react';
import './global.css';
import {Header} from "./Components";
import {Footer} from "./Components/Footer/Footer";
import {Main} from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;

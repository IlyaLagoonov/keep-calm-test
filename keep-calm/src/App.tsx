import React from 'react';
import './global.css';
import {Header} from "./components";
import {Footer} from "./components/Footer/Footer";
import {Main} from "./components/Main/Main";

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

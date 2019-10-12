import React from 'react';
import './App.css';
import ShortDescription from "./ShortDescription";
import Resume from "./Resume";

function App() {
    let name = "Aishwarya Manjunatha";
  return (
    <div className="App">
        <header className="App-header">
            { name }
        </header>
        <Resume/>
        <ShortDescription />
    </div>
  );
}

export default App;

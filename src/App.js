import React from 'react';
import './App.css';
import Dinner from './dinner.js';
function App() {
  return (
    <div className="App">

      {/*<Dinner></Dinner>*/}
     <Dinner dishname='chicken biryani' sweetdish="Kheer" />
     <br />
     <hr />
     <Dinner dishname='nihari' sweetdish="custard" />
     <hr />  
     
    </div>
  );
}

export default App;

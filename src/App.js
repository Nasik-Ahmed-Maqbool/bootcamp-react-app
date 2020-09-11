import React from 'react';
import './App.css';
import Dinner from './dinner'
function App() {
  return (
    <div className="App">

      {/*<Dinner></Dinner>*/}
     <Dinner dishname='chicken biryani' sweetdish="Kheer" />
     <br />
     <Dinner dishname='chicken biryani' sweetdish="Kheer" />
     <br /> 
     <Dinner dishname='chicken biryani' sweetdish="Kheer" />  
     
    </div>
  );
}

export default App;

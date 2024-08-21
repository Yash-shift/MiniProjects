import React from "react";
import data from "./data";
import Tours from "./Components/Tours";
import { useState } from "react";

const App= () => {
  
  const[tours,setTours]= useState(data)

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id)
  }


  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
   
};

export default App;
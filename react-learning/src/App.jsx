import React from "react";
import Home from "./components/Homepage";
import About from "./components/About";
import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg"
import image3 from "./images/image3.jpg"
import image4 from "./images/image4.jpg"
import Study from "./components/Study";
import "./App.css"

function App(){
  return(
    <div className="container">
      <h1>Hello world</h1>

      <About/>
      <Study name="Michael" age = {40} course="Maths"/>
      
      <Home 
      name1="Front end development"
      name="React"
      duration="2 months"
      image={image1}

      />

      <Home 
      name1="Back end development"
      name="MongoDb"
      duration="4 months"
      image={image2}
      
      />
      
       <Home 
      name1="Full stack development"
      name="Website design and Backend"
      duration="6 months"
      image={image3}
      
      />

       <Home 
      name1="Software engineer"
      name="fullstack and Backend/Debugging"
      duration="8 months"
      image={image4}
      
      />
       

    </div>
    
  );
}

export default App;
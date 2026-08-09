import React from "react";


function Home(props){
    return (
        <div>
            <h1>This is React coding Course</h1>
            <h2>My hompage is about {props.name1}</h2>
            <p>I am learning {props.name}</p>
            <p>This course will take up to {props.duration}</p>
            <p>I hope to master this {props.name} course to Advance level</p>
            <img src={props.image} alt="images" />
        </div>
    );
}

export default Home;
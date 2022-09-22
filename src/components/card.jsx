import React from "react";
import Contact from "./contact";

function Card(){
    return(
        <div>
            <h1 className="heading">Contact App</h1>
      <Contact 

      name ="Jose Mourinho"
      img = "https://img.a.transfermarkt.technology/portrait/header/781-1488880368.jpg?lm=1"
      tel = "+24667732684"
      email = "josemourinho@gmail.com"
      alt ="Jose Mourinho"
      />

      <Contact

      name = "Denzel Washington"
      img ="https://st.depositphotos.com/1814084/1709/i/450/depositphotos_17095517-stock-photo-denzel-washington.jpg"
      tel = "+13323444334"
      email = "denzelwashington@gmail.com"
      alt = "Denzel Washington"
      
      />

      <Contact
      name = "Chris Oyakilome"
      img = "https://christembassynungua.org/wp-content/uploads/2016/06/pastor-chris-oyakhilome-christ-embassy-church.jpg"
      tel = "tel: +23486788999"
      email ="chrisoyakilome@gmail.com"
      alt ="Chris Oyakilome"
      />
    </div>
    
    )
}

export default Card;
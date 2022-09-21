import React from "react";

function Contact(props){
    return(
        <div>
            <img src= {props.img} alt="jose mourinho" />
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default Contact;
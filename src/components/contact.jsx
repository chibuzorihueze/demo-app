import React from "react";

function Contact(props){
    return(
        <div>
            <div className="card">
                <div className="top">
                    <h2 className="name">{props.name}</h2>
                    <img className="circle-img" src= {props.img} alt={props.alt} />
                </div>
                <div className="bottom">
                    <p className="info">{props.tel}</p>
                    <p className="">{props.email}</p>
                </div>
            </div>

        </div>
    )
}

export default Contact;
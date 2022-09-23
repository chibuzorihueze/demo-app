import React from "react";
import Contact from "./contact";
import details from "./fetch";

function contactsLoop(contacts){
    return( <Contact
        key = {contacts.id}
       name ={contacts.name}
        img = {contacts.img}
        tel = {contacts.tel}
        email = {contacts.email}
        alt = {contacts.alt}
        />
    )
}

function Card(){
    return(
        <div>
            <h1 className="heading">Contact App</h1>

            {details.map(contactsLoop)}

      {/*<Contact 

        name ={details[0].name}
        img = {details[0].img}
        tel = {details[0].tel}
        email = {details[0].email}
        alt = {details[0].alt}
      />

    <Contact

        name ={details[1].name}
        img = {details[1].img}
        tel = {details[1].tel}
        email = {details[1].email}
        alt = {details[1].alt}
    />
    

    <Contact

        name ={details[2].name}
        img = {details[2].img}
        tel = {details[2].tel}
        email = {details[2].email}
        alt = {details[2].alt}
    />*/}
    </div>
    
    )
}

export default Card;
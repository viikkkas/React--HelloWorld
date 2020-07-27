import React from "react"

function ContactCard(props) {
    return(
        <div>
            Name : {props.contact.name} <br/>
            Phone: {props.contact.phone}
        </div>
    )
}

export default ContactCard;
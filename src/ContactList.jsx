import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ Contacts }){
    return (
        <div className="contact-list">
            {
                Contacts.map((contact) => (
                    <ContactItem key={contact.id} {...contact} />
                ))
            }
        </div>
    );
}

export default ContactList;
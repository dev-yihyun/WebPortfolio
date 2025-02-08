import React from "react";
import Email from "../Contact/Email";
import "../Contact/css/contact.css";

function Contact() {
    return (
        <>
            <div className="Area8">
                <div className="ContactLeft font1">
                    <h1>Contact Me!</h1>
                </div>
                <div className="ContactRight ">
                    <Email />
                </div>
            </div>
        </>
    );
}

export default Contact;

import React from "react";
import Email from "../ui/Email";
import { ContactMeText } from "../ui/Text";

function ContactBlock() {
    return (<>
        <div className="Area8">
            <div className="ContactLeft font1">
               <ContactMeText/>
            </div>
            <div className="ContactRight ">
                <Email />
            </div>
        </div>
    </>)
}

export default ContactBlock;
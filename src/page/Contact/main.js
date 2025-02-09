import React from "react";
import Email from "../Contact/Email";
import "../Contact/css/contact.css";

function Contact() {
    return (
        <>
            <div className="Area8">
                <div className="ContactLeft font1">
                    <div className="ContactTitle">
                        <h1>Thank you</h1>
                    </div>
                    <div className="ContactMessage">
                        <p>
                            사용자 중심사고로 생각하며
                            <br /> 사용자에게 좋은 서비스를 제공하고싶습니다.
                        </p>
                    </div>
                </div>
                <div className="ContactRight">
                    <Email />
                </div>
            </div>
        </>
    );
}

export default Contact;

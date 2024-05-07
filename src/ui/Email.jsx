import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';

function EmailBlock() {
    const form = useRef();
    const [text,setText] = useState();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('', '', form.current, {
                publicKey: '',
            })
            .then(
                () => {
                    setText('');
                    alert('메일이 성공적으로 전송되었습니다.');
                    console.log('SUCCESS!');
                    
                },
                (error) => {
                    setText('');
                    alert('메일 전송에 실패하였습니다.\n메일을 직접 전송해주시길 바랍니다.', error.text);
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form className="font4" ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Email" name="from_name" value={text}/>
            <input type="text" placeholder="Title" name="Input_Title" value={text}/>
            <textarea rows="4" cols="50" placeholder="Message" name="message" value={text}></textarea>
            <div className="submintbtn">
                <input type="submit" value="submit" className="font5"/>
            </div>
        </form>
    );
};

export default EmailBlock;
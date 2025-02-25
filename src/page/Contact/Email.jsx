import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

function EmailBlock() {
    const form = useRef();

    // 개별 입력 필드 상태 관리
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        // 입력값 검증
        if (!email.trim() || !title.trim() || !message.trim()) {
            alert("양식을 정확히 입력해주세요.");
            return;
        }
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    // 성공 시 입력값 초기화
                    setEmail("");
                    setTitle("");
                    setMessage("");

                    alert("메일이 성공적으로 전송되었습니다.");
                    console.log("SUCCESS!");
                },
                (error) => {
                    alert("메일 전송에 실패하였습니다.\n메일을 직접 전송해주시길 바랍니다.");
                    console.error("FAILED...", error.text);
                    console.error("FAILED...", error);
                }
            );
    };

    return (
        <form className="font4" ref={form} onSubmit={sendEmail}>
            {/* 입력 값 변경을 감지하여 상태 업데이트 */}
            <input
                type="text"
                placeholder="Email"
                name="from_name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Title"
                name="Input_Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                rows="4"
                cols="50"
                placeholder="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="submintbtn">
                <input type="submit" value="submit" className="font5" />
            </div>
        </form>
    );
}

export default EmailBlock;

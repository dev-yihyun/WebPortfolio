import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function EmailBlock() {
    const form = useRef();

    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        if (!email.trim() || !title.trim() || !message.trim()) {
            alert("모든 필드를 입력해주세요.");
            return;
        }
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
                },
            )
            .then(
                () => {
                    setEmail("");
                    setTitle("");
                    setMessage("");

                    alert("메일이 잘 전달됐어요 😊\n확인 후 빠르게 답변드릴게요!");
                    console.log("SUCCESS!");
                },
                (error) => {
                    alert(
                        "메일 전송이 원활하지 않아요 😥\n깃허브나 다른 방법으로 연락 주셔도 좋아요!",
                    );
                    console.error("FAILED...", error.text);
                    console.error("FAILED...", error);
                },
            );
    };

    return (
        <form className="font4" ref={form} onSubmit={sendEmail}>
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

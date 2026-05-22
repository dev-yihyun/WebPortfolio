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
                            기능 구현을 넘어
                            <br />
                            비즈니스의 성공을 고민하는 동료를 찾으신다면
                            <br />그 여정에 함께하고 싶습니다.
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

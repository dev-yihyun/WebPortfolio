import React from "react";
import "../Footer/css/footer.css";
import GitHub from "../Footer/img/Icon_github.png";

function Footer() {
    return (
        <>
            <section className="footer">
                <div className="footer_content">
                    <div className="footer1">
                        <p>해당 사이트는 상업적 목적이 없는 개인 포트폴리오 사이트 입니다.</p>
                    </div>
                    <div className="footer2">
                        <span>
                            © <a href="">YiHyun Kim</a> 2024, All rights reserved.
                        </span>
                    </div>
                    <div className="footer3">
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/dev-yihyun/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <img src={GitHub} alt="Github" />
                                    Git Hub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://devyihyun.tistory.com/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    id="resume"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;

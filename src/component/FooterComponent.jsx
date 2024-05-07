import React from "react";
import { GitHubIcon } from "../ui/Image";

function FooterBlock() {
    return (<>
        <section className="footer">
            <div className="footer_content">
                <div className="footer1">
                    <p>
                        해당 사이트는
                        상업적 목적이 없는
                        개인 포트폴리오 사이트 입니다.
                    </p>
                </div>
                <div className="footer2">
                    <span>© <a href="">YiHyun Kim</a> 2024, All rights reserved.</span>
                </div>
                <div className="footer3">
                    <ul>
                        <li><a href="" target="blank"><GitHubIcon />Git Hub</a></li>
                        <li><a id="resume" href="">Resume</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </>)
}

export default FooterBlock;
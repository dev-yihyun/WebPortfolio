import React from "react";
import ScrollFadeBlock from "../../component/event/ScrollFade";
import "../AboutMe/css/aboutme.css";
import Rocket from "../AboutMe/img/About_rocket.png";

function AboutMe() {
    return (
        <>
            <div className="Area6">
                <ScrollFadeBlock scrollfade="AboutLeftFade">
                    <div className="AboutLeft ">
                        <div className="AboutTitle font1">
                            <h1>About Me</h1>
                        </div>
                        <div className="AboutImg">
                            <img src={Rocket} alt="RocketImg" />
                        </div>
                    </div>
                </ScrollFadeBlock>
                <ScrollFadeBlock scrollfade="AboutRightFade">
                    <div className="AboutRight font4">
                        <li>
                            <strong>사용자의 중심 사고</strong>로 생각하며 일의 즐거움을 느낍니다.
                            <br />
                        </li>
                        <li>
                            <strong>크고 작은 한계를 넘는것</strong>을 좋아합니다.
                            <br />
                        </li>
                        <li>
                            많은것을 <strong>배우고 성장하는 것</strong>을 좋아합니다.
                            <br />
                        </li>
                        <li>
                            <strong>다양한 생각을 자유롭게</strong>나누는 것을 좋아합니다.
                            <br />
                        </li>
                        <li>
                            <strong>문제를 분석</strong>하고 <strong>해결법을 찾는것</strong>에
                            즐거움을 느낍니다.
                            <br />
                        </li>
                        <li>
                            <strong>익숙한 것을 새롭게, 가치있게</strong>만드는 것을 좋아합니다.
                            <br />
                        </li>
                    </div>
                </ScrollFadeBlock>
            </div>
        </>
    );
}

export default AboutMe;

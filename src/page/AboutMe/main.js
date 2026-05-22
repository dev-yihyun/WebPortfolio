import ScrollFadeBlock from "../../component/event/ScrollFade";
import "../AboutMe/css/aboutme.css";
import Rocket from "./img/About_rocket.png";
function AboutMe() {
    return (
        <>
            <div className="aboutme-container">
                <ScrollFadeBlock scrollfade="AboutLeftFade">
                    <div className="aboutme-left">
                        <div className="aboutme-title font1">
                            <h1>About Me</h1>
                        </div>
                        <div className="aboutme-img">
                            <img src={Rocket} alt="img" />
                        </div>
                    </div>
                </ScrollFadeBlock>
                <ScrollFadeBlock scrollfade="AboutRightFade">
                    <div className="aboutme-right">
                        <li>
                            <strong>사용자의 중심 사고</strong>로 생각하며 일의 즐거움을 느낍니다.
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
                        <li>
                            <strong>코드의 재사용성</strong>을 높이는 것을 좋아합니다.
                        </li>
                        <li>
                            개발은 혼자가 아닌
                            <strong> 함께 만드는 과정</strong>이라고 생각합니다.
                        </li>
                        <li>
                            <strong>사용하기 쉬운 UI</strong>와 <strong>기억에 남는 UX</strong>를
                            만드는 프론트엔드 개발자 입니다.
                        </li>
                    </div>
                </ScrollFadeBlock>
            </div>
        </>
    );
}

export default AboutMe;

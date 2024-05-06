import React from "react";
import Rocket from '../img/About_rocket.png'

function AboutMeBlock() {
    return (<>
        <div className="Area6">
            <div className="AboutLeft ">
                <div className="AboutTitle font1">
                    <h1>About Me</h1>
                </div>
                <div className="AboutImg">
                    <img src={Rocket} alt='RocketImg' />
                </div>
            </div>
            <div className="AboutRight font4">
                <li>
                    <strong>사용자의 중심 사고</strong>로 생각하며 일의 즐거움을 느낍니다.<br />
                </li>
                <li>
                    <strong>크고 작은 한계를 넘는것</strong>을 좋아합니다.<br />
                </li>
                <li>
                    많은것을 <strong>배우고 성장하는 것</strong>을 좋아합니다.<br />
                </li>
                <li>
                    <strong>다양한 생각을 자유롭게</strong>나누는 것을 좋아합니다.<br />
                </li>
                <li>
                    <strong>문제를 분석</strong>하고 <strong>해결법을 찾는것</strong>에 즐거움을 느낍니다.<br />
                </li>
                <li>
                    <strong>익숙한 것을 새롭게, 가치있게</strong>만드는 것을 좋아합니다.<br />
                </li>
                {/* <li>
                    <strong>혼자 가면 빨리 갈 수 있지만, 함께 가면 멀리 갈 수 있습니다.</strong><br />
                </li>
                <li>
                    <strong>최고의 동료들</strong>과 <strong>도전을 향한 성공</strong>을 경험하고싶습니다.<br />
                </li> */}
            </div>
        </div>
    </>)
}

export default AboutMeBlock;
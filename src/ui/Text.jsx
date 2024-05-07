import React from "react";

export const IndexTitle = () => (
    <>
        <h1 className="IndexTitle1 font1">FRONTEND</h1>
        <h1 className="IndexTitle2 font1">YI-HYUN</h1>
    </>
);

export const IndexText = () => (
    <>
        <div className="IndexText font2">
            <div><strong>배우고 성장</strong> 하는 것을 좋아합니다.<br /></div>
            <div><strong>다양한 시각</strong> 으로 <strong>문제를 해결</strong> 하는 것에 즐거움을 느낍니다.<br /></div>
        </div>
    </>
);

export const SkillText = ({ text }) => (
    <>
        <div className="SkillTop1">
            저는 <span>{text}</span>을(를)
        </div>
        <div className="SkillTop2">
            다뤄본 경험이 있어요!
        </div>
    </>
)

export const MainProjectTitle = () => (
    <>
        <div className="MainProjectTitle font1">
            <h1> MAIN PROJECT </h1>
        </div>
    </>
)

export const ClickProjectText = () => (
    <>
        <div className="ClickProject bouncy font3">
            클릭하면 프로젝트 설명을 볼 수 있어요!
        </div>
    </>
)

export const ToyProjectTitle = () => (
    <>
        <div className="ToyProjectTitle font1">
            <h1>
                TOY PROJECT
            </h1>
        </div>
    </>
)

export const AboutMeText = () => (<>
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
    {/* 
        <li>
            <strong>혼자 가면 빨리 갈 수 있지만, 함께 가면 멀리 갈 수 있습니다.</strong><br />
        </li>
        <li>
            <strong>최고의 동료들</strong>과 <strong>도전을 향한 성공</strong>을 경험하고싶습니다.<br />
        </li> 
    */}
</>)

export const IntroduceText = () => (
    <>
        <div className="Introduce">
            <p className="IntroduceItem"><strong>프론트엔드</strong>개발자</p>
            <p className="IntroduceItem"><strong></strong>입니다.</p>
        </div>
    </>
)

export const ProfileText = () => (
    <>
        <div>
            <h1>학력</h1>
            <p>대학교</p>
            <p>컴퓨터 공학과</p>
        </div>
        <div>
            <h1>이메일</h1>
            <p>XXXXX@GAMIL.COM</p>
            <p>XXXXX@NAVER.COM</p>
        </div>
        <div>
            <h1>생년월일</h1>
            <p>1999.XX.XX</p>
        </div>
    </>
)
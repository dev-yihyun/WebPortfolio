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

export const SkillText = ({text}) => (
    <>
        <div className="SkillTop1">
            저는 <span>{text}</span>을(를)
        </div>
        <div className="SkillTop2">
            다뤄본 경험이 있어요!
        </div>
    </>
)
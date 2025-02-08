import React, { useState } from "react";
import "../Skill/css/skill.css";
import image8 from "../Skill/img/Skill_android.png";
import image2 from "../Skill/img/Skill_java.png";
import image1 from "../Skill/img/Skill_javascript.png";
import image6 from "../Skill/img/Skill_kotlin.png";
import image5 from "../Skill/img/Skill_mysql.png";
import image4 from "../Skill/img/Skill_nodejs.png";
import image9 from "../Skill/img/Skill_oracle.png";
import image7 from "../Skill/img/Skill_python.png";
import image3 from "../Skill/img/Skill_react.png";
import image11 from "../Skill/img/Skill_socketio.png";
import image10 from "../Skill/img/Skill_webrtc.png";

function Skill() {
    const imgList = [
        /* {id:0,name:'이것',path:'이것'}, */
        { id: 1, name: "자바스크립트", path: image1 },
        { id: 2, name: "자바", path: image2 },
        { id: 3, name: "리액트", path: image3 },
        { id: 4, name: "Node.js", path: image4 },
        { id: 5, name: "Mysql", path: image5 },
        { id: 6, name: "Kotlin", path: image6 },
        { id: 7, name: "파이썬", path: image7 },
        { id: 8, name: "안드로이드", path: image8 },
        { id: 9, name: "오라클", path: image9 },
        { id: 10, name: "WebRTC", path: image10 },
        { id: 11, name: "Socket.io", path: image11 },
    ];

    const [text, setText] = useState("이것들");

    const hadleMouseEnter = (newText) => {
        setText(newText);
    };
    const hadleMouseLeave = () => {
        setText("이것들");
    };
    const SkillText = ({ text }) => (
        <>
            <div className="SkillTop1">
                저는 <span>{text}</span>을(를)
            </div>
            <div className="SkillTop2">다뤄본 경험이 있어요!</div>
        </>
    );
    return (
        <>
            <div className="Area2">
                <div className="SkillTop font3">
                    <SkillText text={text} />
                </div>
                <div className="SkillDown">
                    {imgList.map((img, index) => (
                        <div key={index}>
                            <img
                                src={img.path}
                                alt={`이미지 ${index + 1}`}
                                onMouseEnter={() => hadleMouseEnter(img.name)}
                                onMouseLeave={hadleMouseLeave}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Skill;

import "../Skill/css/skill.css";

const skills = {
    Language: ["JavaScript", "Python", "Kotlin", "Java"],
    Frontend: ["React", "React-Query", "Recoil", "Styled Components", "WebRTC"],
    Backend: ["JSP", "Node.js", "Socket.io"],
    DataBase: ["MySQL", "Oracle"],
    Tool: ["Git"],
};

const skillColors = {
    JavaScript: "#F7DF1E ",
    Python: "#306998",
    Kotlin: "#7F52FF",
    Java: "#6A89CC ",
    React: "#61DAFB",
    "React-Query": "#A29BFE  ",
    Recoil: "#60A3D9",
    "Styled Components": "#E8A0BF",
    JSP: "#82CCDD",
    "Node.js": "#8CC84B",
    MySQL: "#00758F",
    Oracle: "#F80000",
    Git: "#B8BFC6",
};

const getTextColor = (bgColor) => {
    const hex = bgColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return brightness < 128 ? "#FFFFFF" : "#2C3E50";
};

const SkillTag = ({ title, items }) => (
    <div className="skill-category">
        <span>{title}</span>
        <div className="skill-tags">
            {items.map((item, index) => {
                const bgColor = skillColors[item] || "#D6E4F0";
                const textColor = getTextColor(bgColor);
                return (
                    <div
                        key={index}
                        className="tag"
                        style={{
                            backgroundColor: bgColor,
                            color: textColor,
                        }}
                    >
                        {item}
                    </div>
                );
            })}
        </div>
    </div>
);

const SkillList = () => {
    return (
        <div>
            {Object.entries(skills).map(([category, items]) => (
                <SkillTag key={category} title={category} items={items} />
            ))}
        </div>
    );
};

function Skill() {
    return (
        <>
            <div className="skill-container">
                <div className="skill-top">
                    <h1 className="skill-title">SKILL</h1>
                    <div className="divider"></div>
                </div>
                <div className="skill-bottom">
                    <SkillList />
                </div>
            </div>
        </>
    );
}

export default Skill;

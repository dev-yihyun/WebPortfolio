import "../Skill/css/skill.css";

const skills = {
    Language: ["JavaScript", "Python", "Kotlin", "Java"],
    Frontend: ["React", "React-Query", "Recoil", "Styled Components"],
    Backend: ["JSP", "Restful API", "Node.js"],
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
    "Restful API": "#6C757D  ",
    // "Node.js": "#A3C293",
    "Node.js": "#8CC84B",
    MySQL: "#00758F",
    Oracle: "#F80000",
    Git: "#B8BFC6",
};
const getTextColor = (bgColor) => {
    // HEX 색상을 RGB로 변환
    const hex = bgColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // 밝기 계산
    const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // 밝기 값에 따라 텍스트 색을 결정
    return brightness < 128 ? "#FFFFFF" : "#2C3E50"; // 어두운 배경일 경우 화이트, 밝은 배경일 경우 짙은 네이비
};

const SkillTag = ({ title, items }) => (
    // <div className="skill-category">
    <div className="skill-category">
        <span className="font2">{title}</span>
        <div className="skill-tags">
            {items.map((item, index) => {
                const bgColor = skillColors[item] || "#D6E4F0";
                const textColor = getTextColor(bgColor);
                return (
                    <div
                        key={index}
                        className="tag font4"
                        // style={{
                        //     backgroundColor: skillColors[item] || "#D6E4F0", // 기본 연한 블루
                        //     color: "#2C3E50", // 짙은 네이비 (눈에 잘 보이도록)
                        // }}
                        style={{
                            backgroundColor: bgColor,
                            color: textColor, // 배경에 맞는 텍스트 색 적용
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
        // <div className="skill-grid">
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
                    <h1 className="skill-title font1">SKILL</h1>
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
/*

const skillColors = {
    JavaScript: "#FAD390", // 부드러운 오렌지
    Python: "#78C2AD", // 소프트 민트
    Kotlin: "#E8A0BF", // 로즈 핑크
    Java: "#F3A683", // 살구 오렌지
    React: "#6A89CC", // 차분한 블루
    "React-Query": "#E77F67", // 코랄 핑크
    Recoil: "#A29BFE", // 라이트 퍼플
    "Styled Components": "#F8C291", // 크림 오렌지
    JSP: "#82CCDD", // 연한 블루그린
    "Restful API": "#B8BFC6", // 뉴트럴 그레이
    "Node.js": "#A3C293", // 라이트 올리브
    MySQL: "#60A3D9", // 스카이 블루
    Oracle: "#F5B7B1", // 부드러운 핑크
    Git: "#EAB543", // 골드 옐로우
};

*/

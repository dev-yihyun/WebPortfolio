import ProjectM1 from "./img/projectM1.png";
import ProjectM2 from "./img/projectM2.png";
import ProjectM3 from "./img/projectM3.png";
import ProjectM4 from "./img/projectM4.png";

const projectList = [
    /*     {
        id: 5,
        projectName: "ing...",
        projectImg: ProjectIng,
        projectGit: "Ready",
        projectStack: ["React", "Database", "LoginToken","RESTful API"],
        projectFunction: (<>
            프로젝트 구상 중입니다.
        </>),
        projectIntro: (<>
        RESTful API와 LoginToken, 데이터베이스를 사용하기 위한 프로젝트를 진행하고있습니다.
        </>),
        projectReview: (<>
        </>),
    }, */

    {
        id: 1,
        projectName: "Web Portfolio",
        projectImg: ProjectM1,
        projectGit: "https://github.com/dev-yihyun/WebPortfolio",
        projectStack: ["React"],
        projectFunction: (
            <>
                <li>미디어 쿼리 반응형 웹</li>
                <li>배경 이미지 회전</li>
                <li>스크롤 fade 기능</li>
                <li>마우스 hover 이미지 확대 및 텍스트 변경</li>
                <li>텍스트 애니메이션 효과</li>
                <li>카드 클릭 기능</li>
                <li>EmailJS</li>
            </>
        ),
        projectIntro: (
            <>
                '어떻게 하면 나를 소개하고 내 역량을 잘 보여줄 수 있을까?' 고민하며 진행한
                프로젝트입니다. 프론트엔드 개발자의 역량을 보여드리기 위해 제 역량을 정확히 이해하고
                뒷 받침 할 수 있는 다양한 경험을 보여드리기 위해 노력했습니다. 이전의 프로젝트나
                경험들을 되짚어가며 그 결과물과 성과를 UI를 통해 강조하는 방향으로 준비한 프로젝트
                입니다. 어떤 역량이 중요한지, 어떤 경험이 나를 대표할 수 있는지를 고려하며 프로필을
                작성하는 과정이 새로운 경험이었습니다.
                <br />
                미디어 쿼리를 사용하여 화면 크기에 맞게 레이아웃을 생성하였습니다. 스크롤을 내리면
                컴포넌트가 등장하는 fade 효과를 구현하였습니다. 이미지에 마우스를 올리면 텍스트가
                변경되도록 구현하였습니다. 프로젝트 소개를 볼 수 있도록 프로젝트 클릭 시 설명이
                바뀌도록 구현하였습니다. EMailJS를 사용하여 메일 전송 폼을 구현하였습니다.
            </>
        ),
        projectReview: (
            <>
                해당 프로젝트를 진행하면서 나의 장단점을 객관적으로 파악하고 있어야 한다는 것을
                깨달았습니다. UI를 그리며 결과물을 바로 확인할 수 있는 프론트엔드 개발이 섬세하고
                꼼꼼한 성격을 가진 저와 잘 맞고 시너지가 크다는 것을 알게 되었습니다.
            </>
        ),
    },
    {
        id: 2,
        projectName: "ToDo List",
        projectImg: ProjectM2,
        projectGit: "https://github.com/dev-yihyun/React_ToDoList",
        projectStack: ["React", "useReducer", "createContext"],
        projectFunction: (
            <>
                <li>일정 추가</li>
                <li>일정 삭제</li>
                <li>일정 완료</li>
                <li>현재 날짜</li>
                <li>전역 상태 관리</li>
            </>
        ),
        projectIntro: (
            <>
                일정 관리를 위한 웹 애플리케이션입니다.
                <br />
                리액트를 배우면서 제가 정말 리액트에 대해 이해를 하고 있는지 궁금하여 시작하게 된
                프로젝트입니다.
                <br />
                일정 추가 버튼, 일정 목록에 마우스를 올리면 색이 변하도록 hover 기능을 만들었습니다.
                <br />
                투두리스트의 최상단에 현재의 날짜와 요일이 보이도록 했습니다.
                <br />
                일정 추가 버튼을 클릭하면 텍스트를 입력할 수 있도록 구현하였습니다. <br />
                이때 텍스트는 입력 후 엔터키를 누르면 일정 목록에 추가하도록 하였습니다.
                <br />
                일정을 삭제할 수 있도록 마우스가 hover 되면 삭제 버튼이 나타나 삭제할 수 있도록
                하였습니다.
                <br />
                일정 완료 여부를 표시할 수 있도록 원을 클릭하여 체크할 수 있도록 toggle 기능을
                구현하였습니다.
                <br />
                ContextAPI를 사용하여 전역 상태 관리로 일정을 관리할 수 있도록 하였습니다.
            </>
        ),
        projectReview: (
            <>
                프로젝트를 진행하면서 리액트에 대한 이해도를 높일 수 있었습니다. 이해도가 없는
                상태에서는 코드에 대한 응용 또한 어렵다는 것을 알게 되었습니다. 기초를 다지며, 코드
                응용과 문제를 해결하는 연습을 했습니다. 이로 인해 개념을 정확하게 익히고
                문제해결능력을 기를 수 있었습니다. 프레임워크 및 라이브러리에 대한 이해력이 있어야
                응용 또한 잘 한다는 것을 알게 되었습니다. 해당 프로젝트를 통해 리액트에 대한
                전반적인 이해를 할 수 있었습니다.
            </>
        ),
    },
    {
        id: 3,
        projectName: "온라인 스터디 플랫폼",
        projectImg: ProjectM3,
        projectGit: "https://github.com/dev-yihyun/Online-Study-Platform",
        projectStack: ["Node.js", "WebRTC", "JSP", "Oracle"],
        projectFunction: (
            <>
                <li>회원가입,로그인,정보수정</li>
                <li>ID/PW 찾기</li>
                <li>스터디 게시글 작성, 수정, 삭제</li>
                <li>스터디 신청, 마감디데이</li>
                <li>최신 등록스터디 및 추천 스터디</li>
                <li>신청한 스터디 목록</li>
                <li>작성한 게시글 목록</li>
                <li>댓글 작성, 작성한 댓글 목록</li>
                <li>스터디 공지사항 작성</li>
                <li>스터디원 목록</li>
                <li>실시간 채팅, 영상, 화면 공유 기능</li>
            </>
        ),
        projectIntro: (
            <>
                장소와 시간에 제약받지 않는 원하는 스터디를 구하고 싶었습니다. 또한 스터디원을
                어떻게 구하고 참여해야 할지 몰라 어려움을 겪었던 적이 있습니다. 이러한 불편함을
                해소하기 위해 시간과 공간에 제약받지 않고 원하는 스터디를 찾는 플랫폼을
                구현하였습니다. JSP로 회원가입 기능과 스터디 정보 게시글 작성 및 스터디 참여 기능을
                구현하였습니다. Node.js와 WebRTC를 사용하여 실시간 영상과 화면 공유 기능,채팅
                기능으로 온라인 스터디를 진행할 수 있도록 구현하였습니다.
            </>
        ),
        projectReview: (
            <>
                일상생활에 느꼈던 불편함을 분석하여 사용자 친화적인 프로젝트를 구상하였습니다. 팀
                프로젝트를 진행하면서 Node.js를 사용하여 실시간 영상, 화면공유 기능,채팅 기능 구현과
                프론트 엔드 역할을 맡았습니다. 프로젝트를 진행하면서 혼자서는 문제 해결이 어려웠던
                적이 종종 있었습니다. 문제를 해결하기 위해 팀원들과 소통하여 문제를 해결하고자
                하였고, 이 과정에서 팀원분들과 커뮤니케이션을 하며 의사결정을 하여 문제를 해결해
                나갔습니다. 팀원들과의 커뮤니케이션이 중요하다는 것을 느끼게 해준 프로젝트였습니다.
            </>
        ),
    },
    {
        id: 4,
        projectName: "T-카풀",
        projectImg: ProjectM4,
        projectGit: "https://github.com/dev-yihyun/T-Carpool/",
        projectStack: ["Kotiln", "SQLite", "Android"],
        projectFunction: (
            <>
                <li>로그인 기능</li>
                <li>회원가입</li>
                <li>게시글 작성 기능</li>
                <li>게시글 목록</li>
                <li>게시글 화면</li>
            </>
        ),
        projectIntro: (
            <>
                택시를 이용할 때 비용이 부담스러웠던 적이 있었습니다. 여러 사람과 함께 택시 비용을 n
                분할하여 부담을 줄이기 위해 해당 프로젝트를 구상하게 되었습니다. 애플리케이션을 통해
                출발지와 목적지가 같은 이용자들을 매칭할 수 있도록 구현하였습니다.
                <br />
                SQLite를 사용하여 회원가입 기능을 구현하였습니다. 또한 출발지와 목적지를 입력할 수
                있는 게시글을 통해 다른 이용자들과 매칭할 수 있도록 구현하였습니다.
            </>
        ),
        projectReview: (
            <>
                해당 프로젝트를 통해 커뮤니케이션 기술을 많이 향상시킬 수 있었습니다. 프론트엔드를
                맡으며 UX를 많이 고민해 보았고, 프로젝트 방향성을 위해서 팀원과의 커뮤니케이션도
                많이 하였습니다. 고민했던 UX를 통해 사용자가 쉽고 빠르게 이용할 수 있는 UI를
                그렸습니다. 팀원과의 커뮤니케이션을 통해 프로젝트의 방향성은 명확해 졌고 효율적인
                의사결정을 내릴 수 있었습니다.
            </>
        ),
    },
];

export default projectList;

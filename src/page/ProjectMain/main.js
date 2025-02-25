import React, { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import ScrollFadeBlock from "../../component/event/ScrollFade";
import "./css/projectmain.css";
import projectList from "./projectList";
import Description from "./ui/Description";
const ProjectCard = ({ projectName, projectStack, projectImg, projectGit }) => {
    const handleClick = (e) => {
        if (projectGit === "Ready") {
            e.preventDefault();
            alert("준비중 입니다.");
        }

        if (!projectGit || projectGit === "") {
            e.preventDefault();
            alert("비공개 입니다.");
        }
    };
    return (
        <>
            <div className="projectcard-container">
                <div className="projectcard-top">
                    <div className="projectcard-link">
                        <FaLink />
                    </div>
                    <div className="projectcard-img">
                        <img src={projectImg} alt="projectImg" />
                    </div>
                    <div className="projectcard-git">
                        {projectGit === "" ? (
                            <></>
                        ) : (
                            <>
                                <a
                                    href={projectGit}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    onClick={handleClick}
                                >
                                    <FaGithub />
                                </a>
                            </>
                        )}
                    </div>
                </div>
                <div className="projectcard-bottom">
                    <div className="projectcard-cardname font5">
                        <h2>{projectName}</h2>
                    </div>
                    <div className="projectcard-stack font6">
                        {projectStack.map((item, index) => {
                            return (
                                <div className="projectcard-Item" key={index}>
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
function ProjectMain() {
    const [init, setInit] = useState(projectList.find((item) => item.id === projectList.length));
    const [showDescript, setShowDescript] = useState(false);

    const onChange = (id) => {
        setInit(projectList.find((item) => item.id === id));
        /* 클릭 descript */
        setShowDescript(!showDescript);
        if (!showDescript) {
            const descript = document.querySelector(".description-container");
            descript.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };
    return (
        <>
            <div className="projectmain-container">
                <ScrollFadeBlock scrollfade="ProjectFade">
                    <h1 className="projectmain-title font1">MAIN PROJECT</h1>
                    <span className="projectmain-click bouncy font3">
                        클릭하면 프로젝트 설명을 볼 수 있어요!
                    </span>
                    <div className="projectmain-cardlist">
                        {projectList.map((project) => {
                            return (
                                <div onClick={() => onChange(project.id)} key={project.id}>
                                    <ProjectCard
                                        projectName={project.projectName}
                                        projectStack={project.projectStack}
                                        projectImg={project.projectImg}
                                        projectGit={project.projectGit}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <Description ProjectInfo={init} />
                </ScrollFadeBlock>
            </div>
        </>
    );
}

export default ProjectMain;

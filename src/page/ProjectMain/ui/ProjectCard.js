import React from "react";
import { FaLink } from "react-icons/fa";
import GitHub from "../../../assets/img/Icon_github.png";

function ProjectCardBlock({ projectName, projectStack, projectImg, projectGit }) {
    const handleClick = (e) => {
        if (projectGit === "Ready") {
            e.preventDefault();
            alert("준비중 입니다.");
        }

        if (!projectGit) {
            e.preventDefault();
            alert("비공개 입니다.");
        }
    };

    return (
        <>
            <div className="ProjectCard">
                <div className="CardTop">
                    <div className="cardLink">
                        <FaLink />
                    </div>
                    <div className="cardProject">
                        <img src={projectImg} alt="projectImg" />
                    </div>
                    <div className="cardGit">
                        <a
                            href={projectGit}
                            target="_blank"
                            rel="noreferrer noopener"
                            onClick={handleClick}
                        >
                            <img src={GitHub} alt="Github" />
                        </a>
                    </div>
                </div>
                <div className="CardBottom">
                    <div className="CardName font5">
                        <h2>{projectName}</h2>
                    </div>
                    <div className="CardStack font6">
                        {projectStack.map((item, index) => {
                            return (
                                <div className="StackItem" key={index}>
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCardBlock;

import React from "react";
import { GitHubIcon, LinkIcon } from "./Image";

function ProjectCardBlock({ projectName, projectStack, projectImg, projectGit }) {
    const handleClick = (e) => {
        if (!projectGit) {
            e.preventDefault();
            alert('비공개 입니다.');
        }
    };

    return (<>
        <div className="ProjectCard">
            <div className="CardTop">
                <div className="cardLink">
                    <LinkIcon />
                </div>
                <div className="cardProject">
                    <img src={projectImg} alt="projectImg" />
                </div>
                <div className="cardGit">
                    <a href={projectGit} target="blank" onClick={handleClick}>
                        <GitHubIcon />
                    </a>
                    {/*  {
                        projectGit === ""
                            ?
                            null
                            : <a href={projectGit} target="blank">
                                <GitHubIcon />
                            </a>
                    } */}

                </div>
            </div>
            <div className="CardBottom">
                <div className="CardName font5">
                    <h2>{projectName}</h2>
                </div>
                <div className="CardStack font6">
                    {
                        projectStack.map((item, index) => {
                            return (<div className="StackItem" key={index}>{item}</div>)
                        })
                    }
                </div>
            </div>
        </div>
    </>)
}

export default ProjectCardBlock;
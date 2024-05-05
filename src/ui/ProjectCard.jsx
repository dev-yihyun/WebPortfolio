import React from "react";
import ProjectM1 from '../img_project/projectM1.png';
import { GitHubIcon, LinkIcon } from "./Image";

function ProjectCardBlock({projectName,projectStack}) {
    return (<>
        <div className="ProjectCard">
            <div className="CardTop">
                <div className="cardLink">
                    <LinkIcon />
                </div>
                <div className="cardProject">
                    <img src={ProjectM1} alt="projectImg" />
                </div>
                <div className="cardGit">
                    <a href="" target="blank">
                        <GitHubIcon/>
                    </a>
                </div>
            </div>
            <div className="CardBottom">
                <div className="CardName font5">
                    <h2>{projectName}</h2>
                </div>
                <div className="CardStack font6">
                    {
                        projectStack.map((item,index)=>{
                            return(<div className="StackItem" key={index}>{item}</div>)
                        })
                    }
                </div>
            </div>
        </div>
    </>)
}

export default ProjectCardBlock;
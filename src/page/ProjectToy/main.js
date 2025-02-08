import React from "react";
import "./css/projecttoy.css";
import projectList from "./projectList";
import ProjectBox from "./ui/ProjectBox";
/*
//projectList.js
{
    id: 0,
    projectName: "ProjectName",
    projectImg: "",
    projectDate: "2020.09.19~2020.09.20",
    projectStack: ["Javascript"],
    projectGit: "https://github.com/",
    projectLink: ""
}
*/

function ProjectToy() {
    return (
        <>
            <div className="Area5">
                <div className="ToyProjectArea">
                    <div className="ToyProjectTitle font1">
                        <h1>TOY PROJECT</h1>
                    </div>
                    <div className="ToyProject">
                        {projectList.map((project) => {
                            return (
                                <ProjectBox
                                    key={project.id}
                                    projectName={project.projectName}
                                    projectDate={project.projectDate}
                                    projectStack={project.projectStack}
                                    projectGit={project.projectGit}
                                    projectImg={project.projectImg}
                                    projectLink={project.projectLink}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectToy;

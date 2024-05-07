import React from "react";
import ProjectT1 from '../img_project/projectT1.png';
import ProjectT2 from '../img_project/projectT2.png';
import ProjectT3 from '../img_project/projectT3.png';
import { ToyProjectTitle } from "../ui/Text";
import ProjectBox from "../ui/ProjectBox";


const projectList = [
    /*     {
            id: 0,
            projectName: "ProjectName",
            projectImg: "",
            projectDate: "2020.09.19~2020.09.20",
            projectStack: ["Javascript"],
            projectGit: "https://github.com/",
            projectLink: ""
        }, */
    {
        id: 1,
        projectName: "HangMan",
        projectImg: ProjectT1,
        projectDate: "2020.09.19~2020.09.20",
        projectStack: ["Javascript"],
        projectGit: "",
        projectLink: ""
    },
    {
        id: 2,
        projectName: "Number Baseball",
        projectImg: ProjectT2,
        projectDate: "2020.09.27~2020.09.29",
        projectStack: ["Javascript"],
        projectGit: "",
        projectLink: ""
    },
    {
        id: 3,
        projectName: "Python Calculator",
        projectImg: ProjectT3,
        projectDate: "2024.03.07~2024.03.14",
        projectStack: ["Python"],
        projectGit: "",
        projectLink: ""
    }
];

function ProjectToyBlock() {

    return (<>
        <div className="Area5">
            <div className="ToyProjectArea">
                <ToyProjectTitle />
                <div className="ToyProject">
                    {
                        projectList.map((project) => {
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
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>)
}

export default ProjectToyBlock;
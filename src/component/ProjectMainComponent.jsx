import React from "react";
import ProjectCard from "../ui/ProjectCard";
import { ClickProjectText, MainProjectTitle } from "../ui/Text";


const projectList=[
    {
        id:1,
        projectName:"Project Name",
        projectStack:["Item"],
    },
    {
            id:2,
            projectName:"Project Name",
            projectStack:["Item","Item","Item"],
    },
    {
        id:3,
        projectName:"Project Name",
        projectStack:["Item","Item","Item","Item"],
    },
    {
        id:4,
        projectName:"Project Name",
        projectStack:["Item","Item","Item"],
    }
]



function ProjectMainBlock() {
    return (<>
        <div className="Area3">
            <div className="MainProjectArea">
                <MainProjectTitle/>
                <ClickProjectText/>
                <div className="MainProject">
                    {
                        projectList.map((project)=>{
                            return(
                                <div key={project.id}>
                                    <ProjectCard
                                        projectName={project.projectName}
                                        projectStack={project.projectStack}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>)
}

export default ProjectMainBlock;
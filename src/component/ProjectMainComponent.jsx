import React, { useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import { ClickProjectText, MainProjectTitle } from "../ui/Text";
import Descript from "./DescriptComponent";

import ProjectM1 from '../img_project/projectM1.png';
import ProjectM2 from '../img_project/projectM2.png';
import ProjectM3 from '../img_project/projectM3.png';
import ProjectM4 from '../img_project/projectM4.png';

const projectList = [
    {
        id: 1,
        projectName: "ProjectName",
        projectImg: ProjectM1,
        projectGit: "",
        projectStack: ["Item"],
        projectFunction: (<>
            
        </>),
        projectIntro: (<>
        </>),
        projectReview: (<>
        </>),
    },
    {
        id: 2,
        projectName: "ProjectName",
        projectImg: ProjectM2,
        projectGit: "",
        projectStack: ["Item", "Item", "Item"],
        projectFunction: (<>
        </>),
        projectIntro: (<>
        </>),
        projectReview: (<>
        </>),
    },
    {
        id: 3,
        projectName: "ProjectName",
        projectImg: ProjectM3,
        projectGit: "",
        projectStack: ["Item", "Item", "Item", "Item"],
        projectFunction: (<>
        </>),
        projectIntro: (<>
        </>),
        projectReview: (<>
        </>),
    },
    {
        id: 4,
        projectName: "ProjectName",
        projectImg: ProjectM4,
        projectGit: "",
        projectStack: ["Item", "Item", "Item"],
        projectFunction: (<>
        </>),
        projectIntro: (<>

        </>),
        projectReview: (<>

        </>),
    },

]



function ProjectMainBlock() {

    const [init,setInit] = useState(projectList.find(item => item.id === 1))
    const [showDescript,setShowDescript] = useState(false);

    const onChange = (id)=>{
        setInit(projectList.find(item => item.id === id))

        /* 클릭 descript */
        setShowDescript(!showDescript);
        if(!showDescript){
            const descript = document.querySelector('.Area4');
            descript.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }


    return (<>
        <div className="Area3">
            <div className="MainProjectArea">
                <MainProjectTitle />
                <ClickProjectText />
                <div className="MainProject">
                    {
                        projectList.map((project) => {
                            return (
                                <div 
                                onClick={()=>onChange(project.id)}
                                key={project.id}>
                                    <ProjectCard
                                        projectName={project.projectName}
                                        projectStack={project.projectStack}
                                        projectImg={project.projectImg}
                                        projectGit={project.projectGit}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Descript ProjectInfo={init}/>
        </div>
    </>)
}

export default ProjectMainBlock;
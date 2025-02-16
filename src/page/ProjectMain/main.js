import React, { useState } from "react";
import Descript from "./ui/Description";
import ProjectCard from "./ui/ProjectCard";

import ScrollFade from "../../component/event/ScrollFade";
import "./css/projectmain.css";

import projectList from "./projectList";

/* const projectList = [
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
    }
] */

function ProjectMain() {
    const [init, setInit] = useState(projectList.find((item) => item.id === projectList.length));
    const [showDescript, setShowDescript] = useState(false);

    const onChange = (id) => {
        setInit(projectList.find((item) => item.id === id));

        /* 클릭 descript */
        setShowDescript(!showDescript);
        if (!showDescript) {
            const descript = document.querySelector(".Area4");
            descript.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <>
            <div className="Area3">
                <ScrollFade scrollfade="ProjectFade">
                    <div className="MainProjectArea">
                        <div className="MainProjectTitle font1">
                            <h1> MAIN PROJECT </h1>
                        </div>
                        <div className="ClickProject bouncy font3">
                            클릭하면 프로젝트 설명을 볼 수 있어요!
                        </div>
                        <div className="MainProject">
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
                    </div>
                    <Descript ProjectInfo={init} />
                </ScrollFade>
            </div>
        </>
    );
}

export default ProjectMain;

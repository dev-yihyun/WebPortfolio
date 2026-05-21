import GitHub from "../../../assets/img/Icon_github.png";

function ProjectBoxBlock({ projectImg, projectName, projectDate, projectStack, projectGit }) {
    return (
        <>
            <div className="ProjectBox font4">
                <div
                    className="BoxTop"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),url(${projectImg})`,
                    }}
                >
                    <div className="Boxname">
                        <h3>{projectName}</h3>
                    </div>
                    <div className="BoxDate">
                        <p>{projectDate}</p>
                    </div>
                    <div className="BoxStack">
                        {projectStack.map((item, index) => {
                            return <p key={index}>{item}</p>;
                        })}
                    </div>
                </div>

                <div className="BoxBottom">
                    <div className="BoxLink">
                        <a href={projectGit} target="_blank" rel="noreferrer noopener">
                            <img src={GitHub} alt="Github" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectBoxBlock;

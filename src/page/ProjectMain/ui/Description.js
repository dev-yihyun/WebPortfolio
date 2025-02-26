import { FaGithub } from "react-icons/fa";
import "../css/descript.css";

function Description({ ProjectInfo }) {
    const handleClick = (e) => {
        if (!ProjectInfo.projectGit || ProjectInfo.projectGit === "") {
            e.preventDefault();
            alert("접근할 수 없습니다.");
        }
    };
    return (
        <>
            <div className="description-container">
                <div className="description-left">
                    <div className="description-box">
                        <div className="description-top">
                            <h1 className="description-title font3">{ProjectInfo.projectName}</h1>
                            {ProjectInfo.projectGit === "" ? (
                                <></>
                            ) : (
                                <>
                                    <a
                                        href={ProjectInfo.projectGit}
                                        onClick={handleClick}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FaGithub />
                                    </a>
                                </>
                            )}
                        </div>
                        <img src={ProjectInfo.projectImg} alt="img" />
                    </div>
                    <div className="description-box">
                        <h1 className="description-title font3">Technical Stack</h1>
                        <div className="description-content font4">
                            {ProjectInfo.projectStack.map((Item, index) => {
                                return <p key={index}>{Item}</p>;
                            })}
                        </div>
                    </div>
                    <div className="description-box">
                        <h1 className="description-title font3">Function</h1>
                        <div className="description-content font4">
                            {ProjectInfo.projectFunction}
                        </div>
                    </div>
                </div>
                <div className="description-right">
                    <div className="description-box">
                        <h1 className="description-title font3">Project Introduction</h1>

                        <div className="description-content font4">{ProjectInfo.projectIntro}</div>
                    </div>
                    <div className="description-box">
                        <h1 className="description-title font3">Review</h1>
                        <div className="description-content font4">{ProjectInfo.projectReview}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Description;

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
                        <img src={ProjectInfo.projectImg} alt="ProjectImg" />
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

            {/* <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    height: "100vh",
                }}
            >
                <div
                    style={{
                        flex: "1 1 50%",
                        backgroundColor: "lightblue",
                        height: "50vh",
                    }}
                >
                    Left
                </div>

                <div
                    style={{
                        flex: "1 1 50%",
                        backgroundColor: "lightcoral",
                        height: "50vh",
                    }}
                >
                    Right
                </div>
            </div> */}

            {/* <div className="Area4">
                <div className="DescriptLeft">
                    <div className="DescriptTop">
                        <div className="DescriptTitle font3">
                            <h1>projectName</h1>
                        </div>
                        <div className="DescriptLink">
                            <a href="" target="_blank" rel="noreferrer noopener">
                                <img alt="Github" />
                            </a>
                        </div>
                    </div>
                    <div className="DescriptMiddle">
                        <div className="Descriptimg">
                            <img alt="ProjectImg" />
                        </div>
                    </div>
                    <div className="DescriptBottom">
                        <div className="DescriptStack">
                            <h1 className="font3">Technical Stack</h1>
                            <div className="font4">
                                <p>Item</p>;
                            </div>
                        </div>

                        <div className="DescriptFunction">
                            <h1 className="font3">Function</h1>
                            <div className="font4">projectFunction</div>
                        </div>
                    </div>
                </div>
                <div className="DescriptRight">
                    <div className="DescriptRItem">
                        <h1 className="font3">Project Introduction</h1>
                        <div className="font4">projectIntro</div>
                    </div>
                    <div className="DescriptRItem">
                        <h1 className="font3">Review</h1>
                        <div className="font4">projectReview</div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Description;

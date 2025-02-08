import GitHub from "../../../assets/img/Icon_github.png";
import "../css/descript.css";

function Description({ ProjectInfo }) {
    const handleClick = (e) => {
        if (!ProjectInfo.projectGit) {
            e.preventDefault();
            alert("비공개 입니다.");
        }
    };
    return (
        <>
            <div className="Area4">
                <div className="DescriptLeft">
                    <div className="DescriptTop">
                        <div className="DescriptTitle font3">
                            <h1>{ProjectInfo.projectName}</h1>
                        </div>
                        <div className="DescriptLink">
                            <a
                                href={ProjectInfo.projectGit}
                                onClick={handleClick}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <img src={GitHub} alt="Github" />
                            </a>
                            {/* 고민중 */}
                            {/* <img src={linkpng} class=""/> */}
                        </div>
                    </div>
                    <div className="DescriptMiddle">
                        <div className="Descriptimg">
                            <img src={ProjectInfo.projectImg} alt="ProjectImg" />
                        </div>
                    </div>
                    <div className="DescriptBottom">
                        <div className="DescriptStack">
                            <h1 className="font3">Technical Stack</h1>
                            <div className="font4">
                                {ProjectInfo.projectStack.map((Item, index) => {
                                    return <p key={index}>{Item}</p>;
                                })}
                                {/* ProjectInfo.projectStack+"\n" */}
                            </div>
                        </div>

                        <div className="DescriptFunction">
                            <h1 className="font3">Function</h1>
                            <div className="font4">{ProjectInfo.projectFunction}</div>
                        </div>
                    </div>
                </div>
                <div className="DescriptRight">
                    <div className="DescriptRItem">
                        <h1 className="font3">Project Introduction</h1>
                        <div className="font4">{ProjectInfo.projectIntro}</div>
                    </div>
                    <div className="DescriptRItem">
                        <h1 className="font3">Review</h1>
                        <div className="font4">{ProjectInfo.projectReview}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Description;

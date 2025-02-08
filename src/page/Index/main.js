import "./css/index.css";
import Emoji from "./img/Index_emoji.png";
function Index() {
    return (
        <>
            <div className="Area">
                <div className="IndexLeft">
                    <img src={Emoji} alt="emoji.png" className="Emoji" />
                </div>
                <div className="IndexRight IndexAni">
                    <h1 className="IndexTitle1 font1">FRONTEND</h1>
                    <h1 className="IndexTitle2 font1">YI-HYUN</h1>
                    <div className="IndexText font2">
                        <div>
                            <strong>배우고 성장</strong> 하는 것을 좋아합니다.
                            <br />
                        </div>
                        <div>
                            <strong>다양한 시각</strong> 으로 <strong>문제를 해결</strong> 하는 것에
                            즐거움을 느낍니다.
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

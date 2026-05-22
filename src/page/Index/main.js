import "./css/index.css";
import Emoji from "./img/Index_emoji.png";
function Index() {
    return (
        <>
            <div className="Area">
                <div className="IndexLeft">
                    <img src={Emoji} alt="emoji.png" className="Emoji" />
                </div>
                <div className="background-blur "></div>
                <div className="IndexRight">
                    <p className="IndexTitle1 font1">FRONTEND</p>
                    <p className="IndexTitle2 font1">YI-HYUN</p>
                    <div className="IndexText font2">
                        <div>
                            <strong>기술과 경험</strong>을<strong>기록</strong>하며
                        </div>
                        <div>
                            <strong>더 나은 개발자</strong>가 되기 위해 성장하고 있습니다.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

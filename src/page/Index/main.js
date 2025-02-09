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
                            끊임없이 <strong>성장하기 위해 노력</strong>합니다.
                        </div>
                        <div>
                            <strong>소통을 중요시하는 </strong> 개발자 입니다.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

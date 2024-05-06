import Emoji from '../img/Index_emoji.png';
import GitHub from '../img/Icon_github.png'
import { FaLink } from "react-icons/fa";
import Rocket from '../img/About_rocket.png'

export function EmojiBlock() {
    return (<>
        <img src={Emoji} alt="emoji.png" className="Emoji" />
    </>)
}

export const LinkIcon = ()=>{
    return(<>
        <FaLink />
    </>)
}

export const GitHubIcon = () => {
    return(<>
        <img src={GitHub} alt="Github"/>
    </>)
}
export const RocketImg = ()=>{
    return(<>
        <img src={Rocket} alt='RocketImg'/>
    </>);
}
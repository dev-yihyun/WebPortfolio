import React from "react";
import { GitHubIcon, ProfileImg, TstoryIcon } from "../ui/Image";
import { IntroduceText, ProfileText } from "../ui/Text";

function ProfileBlock() {
    return (<>
        <div className="Area7">

            <div className="ProfileLeft">
                <div className="ProfileTop ">
                    <ProfileImg />
                </div>
                <div className="ProfileBottom">
                    <a href="" target="_blank" rel="noreferrer noopener"><TstoryIcon /></a>
                    <a href="" target="_blank" rel="noreferrer noopener"><GitHubIcon/></a>
                </div>
            </div>

            <div className="ProfileRight">
                <div className="ProfileTitle font1">
                    <h1>PROFILE</h1>
                </div>
                <div className="IntroArea font4">
                    <IntroduceText/>
                    <ProfileText/>
                </div>
            </div>
        </div>

    </>)
}

export default ProfileBlock;
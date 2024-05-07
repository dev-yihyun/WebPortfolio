import React from "react";
import { GitHubIcon, ProfileImg, TstoryIcon } from "../ui/Image";
import { IntroduceText, ProfileText } from "../ui/Text";
import ScrollFadeBlock from "../ui/ScrollFade";

function ProfileBlock() {
    return (<>
        <div className="Area7">
            <ScrollFadeBlock scrollfade="ProfileRightFade">
                <div className="ProfileLeft">
                    <div className="ProfileTop ">
                        <ProfileImg />
                    </div>
                    <div className="ProfileBottom">
                        <a href="" target="_blank" rel="noreferrer noopener"><TstoryIcon /></a>
                        <a href="" target="_blank" rel="noreferrer noopener"><GitHubIcon /></a>
                    </div>
                </div>
            </ScrollFadeBlock>
            <ScrollFadeBlock scrollfade="ProfileLeftFade">
                <div className="ProfileRight">
                    <div className="ProfileTitle font1">
                        <h1>PROFILE</h1>
                    </div>
                    <div className="IntroArea font4">
                        <IntroduceText />
                        <ProfileText />
                    </div>
                </div>
            </ScrollFadeBlock>
        </div>

    </>)
}

export default ProfileBlock;
import React from "react";
import { RocketImg } from "../ui/Image";
import { AboutMeText } from "../ui/Text";
import ScrollFadeBlock from "../ui/ScrollFade";

function AboutMeBlock() {
    return (<>
        <div className="Area6">
            <ScrollFadeBlock scrollfade="AboutLeftFade">
                <div className="AboutLeft ">
                    <div className="AboutTitle font1">
                        <h1>About Me</h1>
                    </div>
                    <div className="AboutImg">
                        <RocketImg />
                    </div>
                </div>
            </ScrollFadeBlock>
            <ScrollFadeBlock scrollfade="AboutRightFade">
                <div className="AboutRight font4">
                    <AboutMeText />
                </div>
            </ScrollFadeBlock>

        </div>
    </>)
}

export default AboutMeBlock;
import React from "react";
import { RocketImg } from "../ui/Image";
import { AboutMeText } from "../ui/Text";

function AboutMeBlock() {
    return (<>
        <div className="Area6">
            <div className="AboutLeft ">
                <div className="AboutTitle font1">
                    <h1>About Me</h1>
                </div>
                <div className="AboutImg">
                    <RocketImg/>
                </div>
            </div>
            <div className="AboutRight font4">
                <AboutMeText/>
            </div>
        </div>
    </>)
}

export default AboutMeBlock;
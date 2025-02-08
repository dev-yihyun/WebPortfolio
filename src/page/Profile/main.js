import React from "react";
import ScrollFadeBlock from "../../component/event/ScrollFade";
import "../Profile/css/profile.css";
import GitHub from "../Profile/img/Icon_github.png";
import Tstory from "../Profile/img/Icon_tstory.png";
import ProfileImg from "../Profile/img/Profile.png";

import profileData from "./profileData";

function Profile() {
    return (
        <>
            <div className="Area7">
                <ScrollFadeBlock scrollfade="ProfileRightFade">
                    <div className="ProfileLeft">
                        <div className="ProfileTop ">
                            <img src={ProfileImg} alt="ProfileImg" />
                        </div>
                        <div className="ProfileBottom">
                            <a href={profileData.blogUrl} target="_blank" rel="noreferrer noopener">
                                <img src={Tstory} alt="Tstroy" />
                            </a>
                            <a
                                href={profileData.githubUrl}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <img src={GitHub} alt="Github" />
                            </a>
                        </div>
                    </div>
                </ScrollFadeBlock>

                <ScrollFadeBlock scrollfade="ProfileLeftFade">
                    <div className="ProfileRight">
                        <div className="ProfileTitle font1">
                            <h1>PROFILE</h1>
                        </div>
                        <div className="IntroArea font4">
                            <div className="Introduce">
                                <p className="IntroduceItem">
                                    <strong>프론트엔드</strong>개발자
                                </p>
                                <p className="IntroduceItem">
                                    <strong>김이현</strong>입니다.
                                </p>
                            </div>
                            <div>
                                <h1>학력</h1>
                                <p>{profileData.university}</p>
                                <p>{profileData.major}</p>
                            </div>
                            <div>
                                <h1>이메일</h1>
                                {profileData.emails.map((email, index) => (
                                    <p key={index}>
                                        <a href={`mailto:${email}`}>{email}</a>
                                    </p>
                                ))}
                            </div>
                            <div>
                                <h1>생년월일</h1>
                                <p>{profileData.birthday}</p>
                            </div>
                        </div>
                    </div>
                </ScrollFadeBlock>
            </div>
        </>
    );
}

export default Profile;

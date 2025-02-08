import ScrollFade from "../component/event/ScrollFade";
import AboutMe from "./AboutMe/main";
import Contact from "./Contact/main";
import Footer from "./Footer/main";
import Index from "./Index/main";
import Profile from "./Profile/main";
import ProjectMain from "./ProjectMain/main";
import ProjectToy from "./ProjectToy/main";
import Skill from "./Skill/main";

function Home() {
    return (
        <>
            <Index />
            <ScrollFade scrollfade="SkillFade">
                <Skill />
            </ScrollFade>
            <ProjectMain />
            <ScrollFade scrollfade="ToyFade">
                <ProjectToy />
            </ScrollFade>
            <AboutMe />
            <Profile />
            <ScrollFade scrollfade="ContactFade">
                <Contact />
            </ScrollFade>
            <Footer />
        </>
    );
}

export default Home;

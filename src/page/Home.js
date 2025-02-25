import ScrollFadeBlock from "../component/event/ScrollFade";
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
            <ScrollFadeBlock scrollfade="SkillFade">
                <Skill />
            </ScrollFadeBlock>
            <ProjectMain />
            <ScrollFadeBlock scrollfade="ToyFade">
                <ProjectToy />
            </ScrollFadeBlock>
            <AboutMe />
            <Profile />
            <ScrollFadeBlock scrollfade="ContactFade">
                <Contact />
            </ScrollFadeBlock>
            <Footer />
        </>
    );
}

export default Home;

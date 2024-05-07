import AboutMe from "./component/AboutMeComponent";
import Contact from "./component/ContactComponent";
import Footer from "./component/FooterComponent";
import Index from "./component/IndexComponent";
import Profile from "./component/ProfileComponent";
import ProjectMain from "./component/ProjectMainComponent";
import ProjectToy from "./component/ProjectToyComponent";
import Root from "./component/Root";
import Skill from "./component/SkillComponent";
import ScrollFadeBlock from "./ui/ScrollFade";

function App() {
  return (
    <>
      <Root/>
      <Index/>
      <ScrollFadeBlock scrollfade="SkillFade">
        <Skill/>
      </ScrollFadeBlock>
      <ProjectMain/>
      <ScrollFadeBlock scrollfade="ToyFade">
        <ProjectToy/>
      </ScrollFadeBlock>
      <AboutMe/>
      <Profile/>
      <ScrollFadeBlock scrollfade="ContactFade">
        <Contact/>
      </ScrollFadeBlock>
      <Footer/>
    </>
  );
}

export default App;

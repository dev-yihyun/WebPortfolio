import AboutMe from "./component/AboutMeComponent";
import Index from "./component/IndexComponent";
import Profile from "./component/ProfileComponent";
import ProjectMain from "./component/ProjectMainComponent";
import ProjectToy from "./component/ProjectToyComponent";
import Root from "./component/Root";
import Skill from "./component/SkillComponent";

function App() {
  return (
    <>
      <Root/>
      <Index/>
      <Skill/>
      <ProjectMain/>
      <ProjectToy/>
      <AboutMe/>
      <Profile/>
    </>
  );
}

export default App;

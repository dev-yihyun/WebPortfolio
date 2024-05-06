import AboutMe from "./component/AboutMeComponent";
import Index from "./component/IndexComponent";
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
    </>
  );
}

export default App;

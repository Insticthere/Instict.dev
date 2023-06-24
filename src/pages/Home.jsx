import Top from "../components/Top";
import Activity from "../components/Activity"
import Socials from "../components/Socials"
import Projects from "../components/Projects";

function Home() {
  return (
      <>
        <div>
          <Top />
          <Socials />
        </div>
        <div className="mt-3">
            <Activity visible="false"/>
            <Projects />
        </div>
      </>
  );
}

export default Home;
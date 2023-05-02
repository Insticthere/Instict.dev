import Top from "../components/Top";
import Activity from "../components/Activity"
import Socials from "../components/Socials"


function Home() {


  return (
      <>
        <div >
          <Top />
          <Socials />
        </div>
        <div className="mt-3 pb-[5%]">
          <div>
            <Activity visible="false"/>
          </div>
        </div>
      </>
  );
}

export default Home;
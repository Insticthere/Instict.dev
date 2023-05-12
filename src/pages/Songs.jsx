import Toptracks from "../components/TopTracks";
import Activity from "../components/Activity";

function Songs() {
  return (
    <div className="mt-[10%]">
      <h1 className="[font-family: 'Inter', sans-serif;] text-5xl">Music</h1>
      <h1 className="mb-7">My top tracks on Spotify</h1>
        <Activity visible="true"/>
      <div>
        <Toptracks term="short_term" name="Past Month"/>
        <Toptracks term="medium_term" name="Past 6 Months"/>
        <Toptracks term="long_term" name="All Time"/>
      </div>

    </div>
  );
}

export default Songs;
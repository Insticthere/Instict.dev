import Navbar from "../components/Navbar";
import Home from "./Home";
import Songs from "./Songs";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="bg-[var(--bgcolor)] parallax min-w-[100vw] min-h-[100vh] dark:text-black dark:bg-white dark:font-bold h-full w-full pb-9 text-white absolute z-10">
        <div className="App"></div>
        <Navbar />
        <div className="mx-auto max-w-[var(--pgwidth)] w-[90%] transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Songs />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
import { React } from "react";
import MainAlbums from "./components/albums/main.albums";
import MainLayouts from "./components/layouts/main.layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <MainLayouts>
            <Router>
                <Routes>
                    <Route path="/" element={<h1>HOMEPAGES</h1>}/>
                    <Route path="/albums" element={<MainAlbums/>}/>
                    <Route path="/posts" element={<h1>POSTING</h1>}/>
                    <Route path="*" element={<h1>404 Not Found</h1>}/>
                </Routes>
            </Router>
        {/* <MainAlbums title="Ini Images" description="we fetch random images API from a third party"/> */}
      </MainLayouts>
    </>
  );
};

export default App;

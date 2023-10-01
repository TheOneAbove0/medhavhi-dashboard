
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";

import Video from "./Components/Video/Video";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/dashboard" element={<Home />} />

          <Route path="/videos" element={<Video />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

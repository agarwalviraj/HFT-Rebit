import "./App.css";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Explore from "./Pages/Explore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

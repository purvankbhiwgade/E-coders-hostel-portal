import "./App.css";
import LandingPage from "./screens/LandingPage";
import { Route, Routes } from "react-router-dom";
import FYApplicationForm from "./screens/FYApplicationForm";
import GrievancePage from "./screens/GrievancePage"
import InfoCollectPage from "./screens/InfoCollectPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/apply" element={<FYApplicationForm />} />
      <Route exact path="/query" element={<GrievancePage />} />
      <Route exact path="/info" element={<InfoCollectPage />} />
    </Routes>
  );
}

export default App;

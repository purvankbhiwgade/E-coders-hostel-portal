import "./App.css";
import Landing_page from "./screens/landing_page";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import FYApplicationForm from "./screens/FYApplicationForm";
import GrievancePage from "./screens/GrievancePage"
import InfoCollectPage from "./screens/InfoCollectPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing_page />} />
      <Route exact path="/apply" element={<FYApplicationForm />} />
      <Route exact path="/query" element={<GrievancePage />} />
      <Route exact path="/info" element={<InfoCollectPage />} />
    </Routes>
  );
}

export default App;

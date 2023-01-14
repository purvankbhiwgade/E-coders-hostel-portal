import ApplicationForm from "./components/ApplicationForm";
import "./App.css";
import InfoCollectForm from "./components/InfoCollectForm";
import GrievanceForm from "./components/GrievanceForm";
import Table from "./components/Table";
import Landing_page from "./screens/landing_page";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing_page />} />
    </Routes>
  );
}

export default App;

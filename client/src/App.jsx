import ApplicationForm from "./components/ApplicationForm";
import "./App.css";
import Landing_page from "./screens/landing_page";
import {
  Route, Routes, BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    // <Router>
    <Routes>
      <Route exact path="/" element={<Landing_page/>}/>
    </Routes>
  //  </Router>
  );
}

export default App;

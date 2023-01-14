import Header from "../components/Header";
import Body from "../components/Body"
import Footer from "../components/Footer";
import "../App.css";

function LandingPage() {
  return (
    <div
      style={{ height: "100%", display: "flex", "flex-direction": "column" }}
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default LandingPage;

import Header from "../components/Header.jsx";
import Body from "../components/Body.jsx";
import Footer from "../components/Footer.jsx";
import "../App.css";

function Landing_page() {
  return (
    <div style={{'height': '100%',
      'display': 'flex',
      'flex-direction': 'column'}}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Landing_page;

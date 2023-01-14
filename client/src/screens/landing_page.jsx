import Header from "../Components/Header.jsx";
import Body from "../Components/Body.jsx";
import Footer from "../Components/Footer.jsx";
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

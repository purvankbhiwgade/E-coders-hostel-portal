import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
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

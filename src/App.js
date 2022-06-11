import "./App.css";
import Banner from "src/Components/Banner";
import Highlight from "src/Components/Highlight";
import News from "src/Components/News";
import Footer from "src/Components/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <Highlight />
      <News />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import DirectionsMap from "./components/DirectionsMap/DirectionsMap";
import Navbar from "./components/NavBar/Navbar";
import DistanceDisplay from "./components/DistanceDisplay";
// import Footer from "../src/components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <DirectionsMap />
      <DistanceDisplay />
      {/* <Footer/> */}
    </div>
  );
}

export default App;

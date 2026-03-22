import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import DigitalCard from "./pages/Profile/Digitalprofile.jsx";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <>
            <Navbar />
            <LandingPage />
          </>
        }
      />

      <Route path="/adaeze" element={<DigitalCard />} />

    </Routes>
  );
}

export default App;
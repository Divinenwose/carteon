import { Routes, Route, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardDetails from "./pages/CardDetails/CardDetails.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import DigitalCard from "./pages/Profile/Digitalprofile.jsx";
import Checkout from "./pages/Order/Order.jsx";
import Success from "./pages/Success/Success.jsx";
import ProfileSetup from "./pages/ProfileDetails/ProfileSetup.jsx";
import CardSetup from "./pages/CardSetup/CardSetup.jsx";
import ProfileLive from "./pages/ProfileSuccess/ProfileSuccess.jsx";
import Customer from "./pages/Customer/Customer.jsx";
import Shipping from "./pages/Shipping/Shipping.jsx";
import Help from "./pages/Help/Help.jsx";
import Terms from "./pages/Terms/Terms.jsx";
import Privacy from "./pages/Privacy/Privacy.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import VerifyOtp from "./pages/VerifyEmail/VerifyEmail.jsx";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <>
      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
      />

      <Routes>

        {/* Routes WITH Navbar */}
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cards/:slug" element={<CardDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/customer-support" element={<Customer />} />
          <Route path="/shipping-policy" element={<Shipping />} />
          <Route path="/help-center" element={<Help />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Route>

        {/* Routes WITHOUT Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/:identifier" element={<DigitalCard />} />
        <Route path="/profiledetails" element={<ProfileSetup />} />
        <Route path="/profile-success" element={<ProfileLive />} />
        <Route path="/success" element={<Success />} />
        <Route path="/card-setup" element={<CardSetup />} />
      </Routes>
    </>
  );
}

export default App;
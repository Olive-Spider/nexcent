import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Clients from "./components/Clients/Clients"
import Community from "./components/Community/Community";
import Unlock from "./components/Unlock/Unlock";
import Achievements from "./components/Achievements/Achievements";
import Calender from "./components/Calender/Calender";
import Customers from "./components/Customers/Customers";
import CommunityUpdates from "./components/CommunityUpdates/CommunityUpdates";
import CallToAction from "./components/CTA/CallToAction.jsx";
import Footer from "./components/Footer/Footer";
const Home = () => <div>
  <Nav />
  <Hero />
  <Clients />
  <Community />
  <Unlock />
  <Achievements />
  <Calender />
  <Customers />
  <CommunityUpdates />
  <CallToAction />
  <Footer />
</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

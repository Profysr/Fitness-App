import "./App.css";
import Hero from "./Components/Hero/Hero";
import FeatureCards from "./Components/FeatureCard/FeatureCards";
import Reason from "./Components/ReasonSection/Reason";
import PlansSection from "./Components/Plans/PlansSection";
import Testimonials from "./Components/Testimonials/Testimonials";
import EmailUs from "./Components/GetStarted/EmailUs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <FeatureCards />
      <Reason />
      <PlansSection />
      <Testimonials />
      <EmailUs />
      <Footer />
    </div>
  );
}

export default App;

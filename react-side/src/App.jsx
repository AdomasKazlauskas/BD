import "./App.scss";
import Footer from "./components/Footer";
import FundraiseFor from "./components/FundraiseFor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import LearnMore from "./components/LearnMore";
import UrgentHelp from "./components/UrgentHelp";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <UrgentHelp />
      <FundraiseFor />
      <section>story list</section>
      <LearnMore />
      <Footer />
    </div>
  );
}

export default App;

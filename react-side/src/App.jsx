import "./App.scss";
import FundraiseFor from "./components/FundraiseFor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import LearnMore from "./components/LearnMore";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <FundraiseFor />
      <section>story list</section>
      <LearnMore />
      <footer>footer</footer>
    </div>
  );
}

export default App;

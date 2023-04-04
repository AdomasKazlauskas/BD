import "./App.scss";
import FundraiseFor from "./components/FundraiseFor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <FundraiseFor />
      <section>story list</section>
      <section>learn more</section>
      <footer>footer</footer>
    </div>
  );
}

export default App;

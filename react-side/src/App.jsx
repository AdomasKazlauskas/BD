import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <section>add a new story</section>
      <section>story list</section>
      <section>learn more</section>
      <footer>footer</footer>
    </div>
  );
}

export default App;

import "./App.scss";
import Footer from "./components/Footer";
import FundraiseFor from "./components/FundraiseFor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import LearnMore from "./components/LearnMore";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import StoryList from "./components/StoryList";
import UrgentHelp from "./components/UrgentHelp";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <UrgentHelp />
      <FundraiseFor />
      <StoryList />
      <LearnMore />
      <Footer />
      {/* <SignUp />
      <SignIn />*/}
    </div>
  );
}

export default App;

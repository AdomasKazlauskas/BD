import Footer from "./Footer";
import FundraiseFor from "./FundraiseFor";
import Header from "./Header";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import LearnMore from "./LearnMore";
import StoryList from "./StoryList";
import UrgentHelp from "./UrgentHelp";

function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <UrgentHelp />
      <FundraiseFor />
      <StoryList />
      <LearnMore />
      <Footer />
    </>
  );
}

export default Homepage;

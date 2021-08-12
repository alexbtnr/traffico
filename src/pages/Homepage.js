import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import GoToTopButton from "../components/GoToTopButton";

const Homepage = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <GoToTopButton showBelow={400} />
    </div>
  );
};

export default Homepage;

import React from "react";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import Footer from "./../components/Footer";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <ShopSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;

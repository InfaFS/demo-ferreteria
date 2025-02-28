import React from 'react';
import Hero from './hero/Hero';
import WhyChoose from './whychoose/WhyChoose';
import AnalyticsFeature from './analyticsFeature/AnalyticsFeature';
import Products from './products/Products';
import WhoWeAre from './whoweare/WhoWeAre';
import Contact from './contact/Contact';
import CompanySlider from './company-slider/CompanySliser';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <WhoWeAre />
      <Products />
      <WhyChoose />
      <CompanySlider />
      <AnalyticsFeature />
      <Contact />
    </div>
  );
};

export default Home;

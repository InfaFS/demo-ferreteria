import React from 'react';
import Hero from './hero/Hero';
import WhyChoose from './whychoose/WhyChoose';
import AnalyticsFeature from './analyticsFeature/AnalyticsFeature';
import Products from './products/Products';
import WhoWeAre from './whoweare/WhoWeAre';
import Contact from './contact/Contact';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <WhoWeAre />
      <Products />
      <WhyChoose />
      <AnalyticsFeature />
      <Contact />
    </div>
  );
};

export default Home;

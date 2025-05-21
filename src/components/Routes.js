import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Pricing from './Pricing';
import Purchase from './Purchase';
import Benefits from './Benefits';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';

const RoutesComponent = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planos" element={<Pricing />} />
        <Route path="/compra" element={<Purchase />} />
        <Route path="/beneficios" element={<Benefits />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <WhyChooseUs />
      <Testimonials />
    </React.Fragment>
  );
};

export default RoutesComponent;

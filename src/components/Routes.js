import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PricingCard from './PricingCard';
import Benefits from './Benefits';
import PurchaseProcess from './PurchaseProcess';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PricingCard />} />
      <Route path="/planos" element={<PricingCard />} />
      <Route path="/beneficios" element={<Benefits />} />
      <Route path="/compra" element={<PurchaseProcess />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;

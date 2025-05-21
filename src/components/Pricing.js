import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import PricingCard from './PricingCard';

const Pricing = () => {
  return (
    <Box sx={{ bgcolor: '#1a1a1a', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ 
          color: '#ffd700',
          fontWeight: 700,
          textAlign: 'center',
          mb: 4
        }}>
          Planos e Preços
        </Typography>
        <Typography variant="h6" sx={{ 
          color: '#ffffff',
          textAlign: 'center',
          opacity: 0.9,
          mb: 8
        }}>
          Escolha o plano que melhor se adequa às suas necessidades
        </Typography>
        <PricingCard />
      </Container>
    </Box>
  );
};

export default Pricing;

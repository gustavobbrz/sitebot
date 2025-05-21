import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DemoVideo from './DemoVideo';

const pricingPlans = [
  {
    id: 'bronze',
    title: 'Bronze',
    price: 'R$ 30,00',
    duration: '1 Mês',
    features: ['Sala dedicada 24/7', 'Performance superior', 'Suporte VIP'],
    button: 'Comprar',
    highlight: false,
  },
  {
    id: 'silver',
    title: 'Prata',
    price: 'R$ 50,00',
    duration: '2 Meses',
    features: ['Sala dedicada 24/7', 'Performance superior', 'Suporte VIP', 'Economize R$10!'],
    button: 'Comprar',
    highlight: false,
  },
  {
    id: 'gold',
    title: 'Ouro',
    price: 'R$ 75,00',
    duration: '3 Meses',
    features: ['Sala dedicada 24/7', 'Performance superior', 'Suporte VIP', 'Scripts exclusivos', 'Economize R$15!'],
    button: 'Comprar',
    highlight: true,
  },
  {
    id: 'diamond',
    title: 'Diamante',
    price: 'R$ 200,00',
    duration: 'Lifetime/Vitalício',
    features: ['Sala dedicada 24/7', 'Performance superior', 'Suporte VIP', 'Scripts exclusivos', 'Pagamento único!'],
    button: 'Comprar',
    highlight: false,
  },
];

const PricingCard = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: 4,
      px: { xs: 1, sm: 2 },
      width: '100%',
      maxWidth: '1400px',
      mx: 'auto'
    }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * pricingPlans.indexOf(plan) }}
          >
            <Card
              sx={{
                maxWidth: 360,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'visible',
                bgcolor: plan.highlight ? '#2d2d2d' : '#1a1a1a',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease',
                },
                boxShadow: plan.highlight ? '0 8px 24px rgba(0,0,0,0.2)' : '0 4px 12px rgba(0,0,0,0.15)',
              }}
            >
              {plan.highlight && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    px: 2,
                    py: 1,
                    bgcolor: '#ffd700',
                    color: '#000',
                    fontWeight: 600,
                    borderRadius: '0 0 0 8px',
                    transform: 'rotate(5deg)',
                    fontSize: '0.875rem',
                  }}
                >
                  RECOMENDADO
                </Box>
              )}
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Typography 
                  variant="h4" 
                  component="h2" 
                  sx={{ 
                    textAlign: 'center',
                    mb: 2,
                    color: plan.highlight ? '#ffffff' : '#e0e0e0',
                    fontWeight: 600,
                  }}
                >
                  {plan.title}
                </Typography>
                <Typography 
                  variant="h3" 
                  component="h3" 
                  sx={{ 
                    textAlign: 'center',
                    mb: 2,
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '2.5rem',
                  }}
                >
                  {plan.price}
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  component="p" 
                  sx={{ 
                    textAlign: 'center',
                    mb: 4,
                    color: '#e0e0e0',
                    fontWeight: 500,
                  }}
                >
                  {plan.duration}
                </Typography>
                <Box sx={{ mb: 4 }}>
                  {plan.features.map((feature, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5,
                        color: '#e0e0e0',
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          mr: 1,
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          bgcolor: '#ffd700',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Typography variant="body1">
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate('/compra')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    bgcolor: '#ffd700',
                    color: '#000',
                    '&:hover': {
                      bgcolor: '#ffd700',
                      opacity: 0.9,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {plan.button}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
      <DemoVideo />
    </Box>
  );
};

export default PricingCard;

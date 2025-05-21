import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { HowToReg, Security, SupportAgent, EmojiEvents, GroupAdd } from '@mui/icons-material';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <HowToReg sx={{ fontSize: 40, color: '#ffd700' }} />,
      title: 'Registro Fácil',
      description: 'Crie sua sala em poucos minutos com nosso painel intuitivo e fácil de usar.',
    },
    {
      icon: <Security sx={{ fontSize: 40, color: '#ffd700' }} />,
      title: 'Segurança',
      description: 'Sistema de proteção avançado contra hackers e cheaters.',
    },
    {
      icon: <SupportAgent sx={{ fontSize: 40, color: '#ffd700' }} />,
      title: 'Suporte 24/7',
      description: 'Equipe dedicada disponível para ajudar você em qualquer horário.',
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 40, color: '#ffd700' }} />,
      title: 'Performance',
      description: 'Servidores de alta performance garantem jogos sem lag.',
    },
    {
      icon: <GroupAdd sx={{ fontSize: 40, color: '#ffd700' }} />,
      title: 'Comunidade',
      description: 'Junte-se à nossa comunidade ativa e participe de eventos exclusivos.',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#1a1a1a', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ 
            color: '#ffd700',
            fontWeight: 700,
            mb: 2
          }}>
            Por que Escolher Nós
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#ffffff',
            opacity: 0.9,
            mb: 4
          }}>
            Descubra os diferenciais que tornam o CreateRoom_BOT a melhor escolha para você
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  bgcolor: '#2d2d2d',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 24px rgba(255,215,0,0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" sx={{ 
                    color: '#ffd700',
                    fontWeight: 600,
                    mb: 2
                  }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#ffffff',
                    opacity: 0.9
                  }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;

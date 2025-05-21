import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Avatar } from '@mui/material';
import { Star } from '@mui/icons-material';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'João Silva',
      role: 'Jogador Profissional',
      avatar: '/images/testimonials/joao.jpg',
      testimonial: 'O CreateRoom_BOT transformou minha experiência em Haxball. Os servidores são estáveis e o suporte é incrível!',
      rating: 5,
    },
    {
      name: 'Maria Santos',
      role: 'Organizadora de Torneios',
      avatar: '/images/testimonials/maria.jpg',
      testimonial: 'Organizar torneios nunca foi tão fácil. O sistema de registro e gerenciamento é simples e eficiente.',
      rating: 5,
    },
    {
      name: 'Pedro Oliveira',
      role: 'Streamer',
      avatar: '/images/testimonials/pedro.jpg',
      testimonial: 'Minha comunidade adora jogar nos servidores do CreateRoom_BOT. A performance é excelente e nunca tivemos problemas.',
      rating: 5,
    },
  ];

  return (
    <Box sx={{ bgcolor: '#2d2d2d', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ 
            color: '#ffd700',
            fontWeight: 700,
            mb: 2
          }}>
            Depoimentos
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#ffffff',
            opacity: 0.9,
            mb: 4
          }}>
            O que nossos usuários estão dizendo sobre nós
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  bgcolor: '#1a1a1a',
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
                  <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={testimonial.avatar} sx={{ width: 64, height: 64 }} />
                    <Box>
                      <Typography variant="h6" sx={{ color: '#ffffff' }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#ffffff', opacity: 0.7 }}>
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" sx={{ 
                    color: '#ffffff',
                    opacity: 0.9,
                    mb: 3
                  }}>
                    {testimonial.testimonial}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} sx={{ color: '#ffd700' }} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;

import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const Benefits = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8, bgcolor: '#1a1a1a', borderRadius: 2, boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
      <Box sx={{ 
        bgcolor: '#2d2d2d', 
        borderRadius: 2, 
        p: 4,
        mb: 4
      }}>
        <Typography variant="h4" component="h1" align="center" sx={{ 
          mb: 4, 
          color: '#ffd700',
          fontWeight: 700,
          textTransform: 'uppercase'
        }}>
          Benefícios do CreateRoom_BOT
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, color: '#ffffff' }}>
          Na CreateRoom_BOT, nossa paixão é HaxBall, e nosso compromisso é oferecer a você a melhor experiência de jogo possível. Ao escolher nossos serviços, você não adquire apenas uma sala, mas um pacote completo de vantagens que farão toda a diferença.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 4, bgcolor: '#1a1a1a', borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            <Typography variant="h6" sx={{ 
              mb: 2, 
              color: '#ffd700',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <Box component="span" sx={{ fontSize: '2rem' }}>🚀</Box>
              Performance Imbatível e Estabilidade Garantida
            </Typography>
            <Typography variant="body1" sx={{ color: '#ffffff', mb: 4 }}>
              Diga adeus ao lag e às quedas inesperadas! Nossas salas são hospedadas em infraestrutura robusta e otimizada para HaxBall, garantindo partidas fluidas, com baixo ping e a estabilidade que você e seus amigos merecem para focar apenas na diversão e na competição.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 4, bgcolor: '#1a1a1a', borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            <Typography variant="h6" sx={{ 
              mb: 2, 
              color: '#ffd700',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <Box component="span" sx={{ fontSize: '2rem' }}>⏳</Box>
              Disponibilidade Total: Sua Sala HaxBall 24/7!
            </Typography>
            <Typography variant="body1" sx={{ color: '#ffffff', mb: 4 }}>
              Com nossos planos de salas premium, sua arena HaxBall fica online 24 horas por dia, 7 dias por semana. Não importa a hora, sua sala estará sempre pronta esperando por você e pela sua comunidade, sem interrupções ou necessidade de recriá-la constantemente.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 4, bgcolor: '#1a1a1a', borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            <Typography variant="h6" sx={{ 
              mb: 2, 
              color: '#ffd700',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <Box component="span" sx={{ fontSize: '2rem' }}>🔧</Box>
              Recursos Exclusivos e Personalização Avançada
            </Typography>
            <Typography variant="body1" sx={{ color: '#ffffff', mb: 4 }}>
              Vá além do básico! Oferecemos acesso a scripts exclusivos, comandos personalizados e configurações avançadas que podem transformar sua sala em um ambiente único e adaptado ao seu estilo de jogo ou da sua comunidade.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 4, bgcolor: '#1a1a1a', borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            <Typography variant="h6" sx={{ 
              mb: 2, 
              color: '#ffd700',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <Box component="span" sx={{ fontSize: '2rem' }}>⚙️</Box>
              Gerenciamento Simplificado e Suporte Ágil
            </Typography>
            <Typography variant="body1" sx={{ color: '#ffffff', mb: 4 }}>
              Configurar e gerenciar sua sala nunca foi tão fácil. Oferecemos painéis intuitivos e um suporte dedicado e atencioso para te ajudar com qualquer dúvida ou necessidade técnica.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 4, bgcolor: '#1a1a1a', borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            <Typography variant="h6" sx={{ 
              mb: 2, 
              color: '#ffd700',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <Box component="span" sx={{ fontSize: '2rem' }}>🤝</Box>
              Fortaleça sua Comunidade
            </Typography>
            <Typography variant="body1" sx={{ color: '#ffffff', mb: 4 }}>
              Uma sala HaxBall de qualidade, sempre online e com recursos interessantes, é o ponto de encontro perfeito para sua comunidade. Facilite a organização de campeonatos, partidas amistosas e mantenha seus membros engajados e satisfeitos.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 4, bgcolor: '#1a1a1a', borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            <Typography variant="h6" sx={{ 
              mb: 2, 
              color: '#ffd700',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <Box component="span" sx={{ fontSize: '2rem' }}>✨</Box>
              Experiência Premium, Sem Complicações
            </Typography>
            <Typography variant="body1" sx={{ color: '#ffffff', mb: 4 }}>
              Deixe a parte técnica conosco! Nós cuidamos da infraestrutura, das atualizações e da manutenção para que você possa desfrutar de uma experiência HaxBall de alta qualidade sem dores de cabeça.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ 
        bgcolor: '#2d2d2d', 
        borderRadius: 2, 
        p: 4,
        mt: 4
      }}>
        <Typography variant="h5" align="center" sx={{ 
          mb: 2, 
          color: '#ffd700',
          fontWeight: 700,
          textTransform: 'uppercase'
        }}>
          Invista na sua diversão e na sua comunidade
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: '#ffffff' }}>
          Escolha CreateRoom_BOT e sinta a diferença!
        </Typography>
      </Box>
    </Container>
  );
};

export default Benefits;

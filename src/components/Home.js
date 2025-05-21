import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Button 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DiscordIcon from './DiscordIcon';
import { themeStyles } from '../theme/styles';

const Home = () => {
  const navigate = useNavigate();

  const handleStartNow = () => {
    navigate('/planos');
  };

  return (
    <Box sx={{ 
      bgcolor: themeStyles.backgroundColor, 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center'
    }}>
      <Container sx={{ 
        ...themeStyles.container,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Grid 
          container 
          spacing={4} 
          sx={{ 
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Grid 
            item 
            xs={12} 
            md={6}
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              width: '100%',
              maxWidth: '600px'
            }}>
              <Typography 
                variant="h1" 
                sx={themeStyles.heading}
              >
                CreateRoom_BOT
              </Typography>
              
              <Typography 
                variant="h3" 
                sx={themeStyles.subheading}
              >
                O melhor sistema de criação de salas para Haxball
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={themeStyles.body}
              >
                Crie, gerencie e compartilhe suas salas de Haxball com facilidade e segurança. 
                Servidores dedicados e suporte 24/7 garantem a melhor experiência para você e sua comunidade.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 4, alignItems: 'center' }}>
                <DiscordIcon />
                <Typography variant="body1" sx={themeStyles.link}>
                  Entre em nosso servidor Discord para mais informações
                </Typography>
              </Box>
              
              <Button
                variant="contained"
                size="large"
                sx={themeStyles.primaryButton}
                onClick={handleStartNow}
              >
                Começar Agora
              </Button>
            </Box>
          </Grid>
          
          <Grid 
            item 
            xs={12} 
            md={6}
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                bgcolor: 'rgba(45,45,45,0.9)',
                p: 4,
                borderRadius: 2,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url(/images/haxball-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <Typography variant="h4" sx={{ 
                color: themeStyles.primaryColor,
                textAlign: 'center',
                fontWeight: 600
              }}>
                Junte-se à nossa comunidade
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;

import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { Discord as DiscordIcon } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1a1a1a',
        color: '#ffffff',
        py: 4,
        mt: 8,
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="column" alignItems="center" spacing={2}>
          <Typography variant="h6" sx={{ 
            color: '#ffd700',
            fontWeight: 700,
            mb: 2
          }}>
            Desenvolvido por
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body1" sx={{ 
              color: '#ffffff',
              fontWeight: 600
            }}>
              Billy
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#ffffff',
              fontWeight: 400
            }}>
              e equipe da
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#ffd700',
              fontWeight: 600
            }}>
              @HS HaxHost
            </Typography>
          </Stack>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ 
              color: '#ffffff',
              opacity: 0.7
            }}>
              Entre em contato conosco no Discord
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

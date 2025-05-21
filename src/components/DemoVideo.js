import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const DemoVideo = () => {
  return (
    <Box sx={{ mt: 8, mb: 4, bgcolor: '#1a1a1a', p: 4 }}>
      <Typography variant="h4" component="h2" sx={{ 
        mb: 4, 
        color: '#ffd700',
        fontWeight: 700,
        textAlign: 'center'
      }}>
        Demonstração do Serviço
      </Typography>
      <Paper 
        elevation={3} 
        sx={{ 
          bgcolor: '#2d2d2d',
          p: 2,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/Z8naikC4ZPI"
          title="Demonstração CreateRoom_BOT"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '8px', border: 'none' }}
        />
        <Typography variant="body1" sx={{ 
          mt: 2,
          color: '#ffffff',
          textAlign: 'center',
          maxWidth: '800px'
        }}>
          Veja como o CreateRoom_BOT funciona na prática! Este vídeo mostra todas as funcionalidades disponíveis em nossos planos.
        </Typography>
      </Paper>
    </Box>
  );
};

export default DemoVideo;

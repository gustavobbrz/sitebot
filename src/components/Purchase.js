import React from 'react';
import { Box, Typography, Container, Grid, TextField, Button } from '@mui/material';

const Purchase = () => {
  return (
    <Box sx={{ bgcolor: '#1a1a1a', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ 
          color: '#ffd700',
          fontWeight: 700,
          textAlign: 'center',
          mb: 4
        }}>
          Compra
        </Typography>
        <Typography variant="h6" sx={{ 
          color: '#ffffff',
          textAlign: 'center',
          opacity: 0.9,
          mb: 8
        }}>
          Complete seu pagamento aqui
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ 
              color: '#ffffff',
              mb: 4
            }}>
              Informações de Pagamento
            </Typography>
            <TextField
              fullWidth
              label="Nome"
              variant="outlined"
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Discord (opcional)"
              variant="outlined"
              sx={{ mb: 3 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ 
              color: '#ffffff',
              mb: 4
            }}>
              Método de Pagamento
            </Typography>
            {/* Aqui você pode adicionar os métodos de pagamento */}
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              bgcolor: '#ffd700',
              color: '#000',
              '&:hover': {
                bgcolor: '#fff200',
              },
            }}
          >
            Finalizar Compra
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Purchase;

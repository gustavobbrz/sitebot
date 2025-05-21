import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ 
      backgroundColor: '#1a1a1a', 
      boxShadow: '0 4px 6px rgba(0,0,0,0.2)', 
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      bgcolor: 'rgba(26, 26, 26, 0.98)',
      color: '#ffffff',
    }}>
      <Toolbar sx={{ 
        px: { xs: 1, sm: 2 }, 
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ 
                mr: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              <MenuIcon sx={{ fontSize: '1.5rem', color: '#ffd700' }} />
            </IconButton>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: '#ffd700',
                fontWeight: 700,
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
                '&:hover': {
                  color: '#ffffff',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img src="/images/create-room-bot-icon.png" alt="CreateRoom_BOT" style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'contain'
                }} />
                <span>CreateRoom_BOT</span>
              </Box>
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              color="inherit"
              component={Link}
              to="/planos"
              sx={{
                textTransform: 'none',
                fontSize: '0.9rem',
                px: 2,
                borderRadius: 8,
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.3s ease',
                minWidth: '100px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="span" sx={{ fontSize: '0.75rem', color: '#ffd700' }}>⚡</Box>
                <span>Planos</span>
              </Box>
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/beneficios"
              sx={{
                textTransform: 'none',
                fontSize: '0.9rem',
                px: 2,
                borderRadius: 8,
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.3s ease',
                minWidth: '100px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="span" sx={{ fontSize: '0.75rem', color: '#ffd700' }}>✨</Box>
                <span>Benefícios</span>
              </Box>
            </Button>
            <Button
              variant="contained"
              color="primary"
              component="a"
              href="https://discord.gg/TAqN7Xxu"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 3,
                py: 1,
                borderRadius: 8,
                backgroundColor: '#ffd700',
                color: '#000',
                fontWeight: 600,
                fontSize: '0.9rem',
                '&:hover': {
                  backgroundColor: '#ffd700',
                  opacity: 0.9,
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                '&:active': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                },
                minWidth: '120px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="span" sx={{ fontSize: '0.75rem', color: '#000' }}>🎮</Box>
                <span>Discord</span>
              </Box>
            </Button>
            <Button
              variant="contained"
              color="primary"
              component="a"
              href="https://wa.me/5541999402857"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 3,
                py: 1,
                borderRadius: 8,
                backgroundColor: '#ffd700',
                color: '#000',
                fontWeight: 600,
                fontSize: '0.9rem',
                '&:hover': {
                  backgroundColor: '#ffd700',
                  opacity: 0.9,
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                '&:active': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                },
                minWidth: '120px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="span" sx={{ fontSize: '0.75rem', color: '#000' }}>📞</Box>
                <span>Contato</span>
              </Box>
            </Button>
          </Box>
        </motion.div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

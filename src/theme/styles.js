export const themeStyles = {
  // Cores
  primaryColor: '#ffd700',
  secondaryColor: '#ffffff',
  backgroundColor: '#1a1a1a',
  darkBackgroundColor: '#2d2d2d',
  textColor: '#ffffff',
  textSecondaryColor: 'rgba(255, 255, 255, 0.9)',
  hoverColor: '#fff200',

  // Tipografia
  heading: {
    fontWeight: 700,
    color: '#ffd700',
    mb: 2
  },
  subheading: {
    color: '#ffffff',
    mb: 4,
    fontWeight: 500
  },
  body: {
    color: '#ffffff',
    opacity: 0.9,
    mb: 4,
    maxWidth: '600px',
    textAlign: 'center'
  },
  link: {
    color: '#ffffff',
    fontWeight: 500
  },

  // Botões
  primaryButton: {
    bgcolor: '#ffd700',
    color: '#000',
    '&:hover': {
      bgcolor: '#fff200',
    },
    px: 4,
    py: 2,
    borderRadius: 2,
    fontWeight: 600,
    textTransform: 'none',
    mb: 4
  },

  // Layout
  container: {
    maxWidth: 'lg',
    py: 8
  },
  grid: {
    container: { spacing: 4 },
    item: { xs: 12, md: 6 }
  }
};

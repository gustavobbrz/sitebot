import React from 'react';
import { Container, Typography, Box, Grid, Button, Paper } from '@mui/material';
import { Discord as DiscordIcon } from '@mui/icons-material';

const Discord = () => {
  const discordInviteUrl = 'https://discord.gg/TAqN7Xxu';
  const discordBotUrl = 'https://media.discordapp.net/attachments/1354964438809317496/1374587556959621162/A_Discord_bot_logo_for_the_RoomCreate_soccer_game_rendered_in_vibrant_complementary_colors_with_contrasting_chiaroscuro_lighting_showcasing_strong_contrasts_and_balanced_tones._The_logo_features_deep_shadows_and_a_modern_sleek_design.jpg?ex=682e97ec&is=682d466c&hm=764766477b1b9cd7dffc9867eff45fdc3707735d9acf034780cc8547219197c1&=&format=webp&width=748&height=748';

  return (
    <Container maxWidth="lg" sx={{ py: 8, bgcolor: '#1a1a1a', borderRadius: 2, boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
      <Box sx={{ 
        bgcolor: '#2d2d2d', 
        borderRadius: 2, 
        p: 4,
        mb: 4,
        textAlign: 'center'
      }}>
        <img src={discordBotUrl} alt="CreateRoom_BOT" style={{ 
          width: '100px', 
          height: '100px', 
          objectFit: 'contain',
          marginBottom: '1rem'
        }} />
        <Typography variant="h4" component="h1" sx={{ 
          mb: 2, 
          color: '#ffd700',
          fontWeight: 700,
          textTransform: 'uppercase'
        }}>
          Discord CreateRoom_BOT
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={discordInviteUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: '#7289da',
            color: '#ffffff',
            '&:hover': {
              bgcolor: '#5865f2',
              transform: 'translateY(-1px)',
            },
            px: 4,
            py: 1,
            borderRadius: 2,
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mt: 2
          }}
        >
          <DiscordIcon sx={{ fontSize: '1.25rem' }} />
          Entrar no Discord
        </Button>
      </Box>

      <Paper 
        elevation={3} 
        sx={{ 
          bgcolor: '#1a1a1a',
          p: 4,
          borderRadius: 2,
          mb: 4
        }}
      >
        <Typography variant="h5" sx={{ 
          mb: 4, 
          color: '#ffd700',
          textAlign: 'center'
        }}>
          Como Finalizar sua Compra
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ color: '#ffffff' }}>
              🎉 Quase lá! Veja como finalizar seu pedido e ativar seu serviço HaxBall: 🎉
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" sx={{ 
              color: '#ffffff', 
              mb: 4,
              fontWeight: 600
            }}>
              Obrigado pelo seu interesse em nossos serviços! Para concluir sua compra, siga os passos abaixo:
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ 
              mb: 2,
              color: '#ffd700'
            }}>
              PASSO 1: Entre em Contato e Confirme seu Pedido 💬
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#ffffff',
              mb: 4
            }}>
              Antes de realizar o pagamento, por favor, entre em contato conosco para confirmarmos os detalhes do seu pedido e tirarmos qualquer dúvida que você possa ter. Escolha seu canal preferido:
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#ffffff',
              mb: 4
            }}>
              Discord: Adicione e mande uma mensagem para: backsidekickflip<br/>
              WhatsApp: Envie uma mensagem para: +55 41 99940-2857
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#ffffff',
              mb: 4
            }}>
              Ao entrar em contato, informe qual plano/serviço você deseja adquirir.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ 
              mb: 2,
              color: '#ffd700'
            }}>
              PASSO 2: Realize o Pagamento via PIX 💳
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#ffffff',
              mb: 4
            }}>
              Após confirmar conosco, você pode realizar o pagamento utilizando os dados abaixo:
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#ffffff',
              mb: 4
            }}>
              Tipo de Chave PIX: E-mail<br/>
              Chave PIX: helpsamp1@gmail.com<br/>
              Valor: [Valor Total do seu Pedido aqui - ex: R$ 30,00] (Este valor será confirmado no Passo 1)
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ 
              mb: 2,
              color: '#ffd700'
            }}>
              PASSO 3: Envie o Comprovante de Pagamento 🧾
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#ffffff',
              mb: 4
            }}>
              Assim que o pagamento for efetuado, por favor, envie uma foto ou o PDF do comprovante para o nosso Discord:
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#ffffff',
              mb: 4
            }}>
              Discord para Envio do Comprovante (DM): backsidekickflip
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#ffffff',
              mb: 4
            }}>
              Junte com o comprovante, por favor, reforce qual foi o plano/serviço adquirido para agilizarmos a ativação!
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ 
              mb: 2,
              color: '#ffd700'
            }}>
              PASSO 4: Ativação do seu Serviço! 🚀
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#ffffff',
              mb: 4
            }}>
              Após o recebimento e confirmação do seu comprovante de pagamento, seu serviço HaxBall (seja a sala 24h, tempo estendido, etc.) será configurado e ativado o mais rápido possível! Manteremos você informado sobre o processo.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" sx={{ 
              color: '#ffffff',
              textAlign: 'center',
              mb: 4
            }}>
              Obrigado pela preferência e confiança!<br/>
              Qualquer dúvida durante estas etapas, é só chamar em um dos contatos acima. Estamos aqui para ajudar!
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Discord;

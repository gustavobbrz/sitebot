import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const PurchaseProcess = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8, bgcolor: '#1a1a1a' }}>
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
          Como Finalizar sua Compra
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, color: '#ffffff' }}>
          🎉 Quase lá! Veja como finalizar seu pedido e ativar seu serviço HaxBall: 🎉
        </Typography>
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
        <Typography variant="body1" sx={{ 
          color: '#ffffff', 
          mb: 4,
          fontWeight: 600,
          textAlign: 'center'
        }}>
          Obrigado pelo seu interesse em nossos serviços! Para concluir sua compra, siga os passos abaixo:
        </Typography>

        <Grid container spacing={4}>
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

export default PurchaseProcess;

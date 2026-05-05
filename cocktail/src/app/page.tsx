"use client";

import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyleButton = styled(Button)`
  background-color: linear-gradient(90deg, #f59e0b, #fb923c);
  box-shadow: 0 8px 20px rgba(245,158,11,0.4);
  color: "#fff";
  padding: 12px 32px;
  border-radius: 40px;
  font-weight: bold;
  font-size: 12px;
  text-decoration: none;
  transition: 0.3s;
`;

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: { md: "100%", xs: "80%" },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          backgroundImage: "url('/bgc.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          content: '""',
          inset: 0,
          position: "absolute",
          zIndex: -2,
        },
        "&::after": {
          background: "rgba(0,0,0,0.45)",
          content: '""',
          inset: 0,
          position: "absolute",
          zIndex: -1,
        },
      }}
    >
      <Box sx={{}}>
        <Typography
          align="center"
          sx={{
            fontSize: {
              xs: "1.7rem",
              md: "3.5rem",
            },
            color: "#FFB347",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "bold",
            padding: 6,
            textShadow: "0 0 8px rgba(0,0,0,0.5)",
          }}
          variant="h1"
        >
          Order Your Perfect Cocktail
        </Typography>
        <Typography
          align="center"
          sx={{
            fontSize: {
              xs: "1.7rem",
              md: "3.5rem",
            },
          }}
        >
          🔥 🍹 🔥
        </Typography>
        <Box
          sx={{
            m: {
              xs: 8,
              sm: 16,
              md: -6,
            },
            p: {
              sm: 3,
              md: 6,
            },
            textAlign: "center",
          }}
        >
          <StyleButton
            href="/cocktail"
            size="large"
            sx={{ mt: 4 }}
            variant="outlined"
          >
            Light My Drink
          </StyleButton>
        </Box>
      </Box>
    </Container>
  );
}

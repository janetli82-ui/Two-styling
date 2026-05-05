import { Box, Container, Link, Typography } from "@mui/material";
import { Instagram, Twitter, YouTube } from "@deemlol/next-icons"



function Footer () {
  return (
    <Box
      sx={{
        mt: "auto",
        bgcolor: "#0B1B3D",
        color: "#D1B899",
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
          &copy; 2026 Cocktail Bar • Drink responsibly 🍹
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            gap: 6,
            p: 2,
          }}
        >
          <Instagram size={20} strokeWidth={1.5} />
          <YouTube size={20}  strokeWidth={1.5} />
          <Twitter size={20} strokeWidth={1.5} />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

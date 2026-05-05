import { Box, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ minHeight: { md: "100%", xs: "80%" }, py: 6 }}>
      <Typography
        variant="h2"
        sx={{
          background: "linear-gradient(125deg, #ffd7a5, #ff9542)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Cocktail Bar isn't just a drink — it's a show.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#e2cbb2",
          fontSize: "1.1rem",
          lineHeight: 1.5,
          maxWidth: "90%",
        }}
      >
        We mix amaretto,Bacardi, vodka, beer. Then we light it up. Come for the
        flames. Stay for the flavor. — Shaken, stirred, or set on fire.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          margin: "32px 0",
        }}
      >
        {["⚡ SHAKEN", "🌀 STIRRED", "🔥 SET ON FIRE"].map((text, index) => (
          <Box
            key={index}
            sx={{
              background: "#1e1a16",
              borderRadius: "60px",
              borderLeft: `4px solid #ff7b24`,
              color: "#ffcf9a",
              fontWeight: 600,
              letterSpacing: "0.3px",
              padding: "8px 20px",
              transition: "0.2s",
            }}
          >
            {text}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          alignItems: "center",
          borderTop: "1px solid rgba(255, 123, 36, 0.3)",
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          mt: 4,
          pt: 3,
        }}
      >
        <Typography
          sx={{
            alignItems: "center", 
            color: "#ffcf9a",
            display: "flex",
            fontSize: "0.9rem",
            gap: 1,
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>📞</span> +1 (555) 123-4567
        </Typography>
        <Typography
          sx={{
            alignItems: "center",
            color: "#ffcf9a",
            display: "flex",
            fontSize: "0.9rem",
            gap: 1,
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>✉️</span> hello@cocktail.com
        </Typography>
        <Typography
          sx={{
            alignItems: "center",
            color: "#ffcf9a",
            display: "flex",
            fontSize: "0.9rem",
            gap: 1,
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>📍</span> 123 Hot Lane, SWEDEN
        </Typography>
      </Box>
    </Container>
  );
};

export default About;

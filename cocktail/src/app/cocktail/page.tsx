"use client";

import DrinkingCard from "../../component/Card";
import { Box, Container, Paper, Typography } from "@mui/material";
import type { CocktailProps } from "@/types/types";
import Input from "@/component/Input";
import { useState } from "react";

const Cocktail = () => {
  const [selectedCockTail, setSelectedCockTail] = useState<CocktailProps | null>(null);
  const handleSearch = async (searchValue: string) => {
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`,
      );
      const data = await res.json();
      const drinkData = data.drinks[0];
      if(!drinkData){
        console.log("No found this cocktail")
      }
      setSelectedCockTail({
        name: drinkData.strDrink,
        category: drinkData.strCategory,
        alcoholic: drinkData.strAlcoholic,
        instructions: drinkData.strInstructions,
        image: drinkData.strDrinkThumb,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: { md: "100%", xs: "80%" },
      }}
    >
        <Paper
          elevation={12}
          sx={{
            alignItems:'center',
            border: 1,
            borderColor: "secondary.main",
            borderRadius: "20px",
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            margin: 2,
          }}
        >
          <Input onSearch={handleSearch} />
          <Box
            sx={{
              m: {
                xs: 1,
                md: 5,
              },
              p: {
                xs: 1,
                md: 4,
              },
              textAlign: "center",
            }}
          >
            {selectedCockTail ? (
              <DrinkingCard {...selectedCockTail} />
            ) : (
              <Typography variant="h2">Search for a cocktail</Typography>
            )}
          </Box>
        </Paper>
    </Container>
  );
};
export default Cocktail;

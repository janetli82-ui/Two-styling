'use client'

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

type inputProps = {
  onSearch: (value: string) => void;
}

export default function Input({onSearch}:inputProps) {
  const [input, setInput] = useState<string>("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
 const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    e.preventDefault();
    onSearch(input);
  }
};

const handleClick = () => {
  onSearch(input);
};
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', marginTop:2, maxWidth:240}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="cocktail's name"
        inputProps={{ 'aria-label': "cocktail's name" }}
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleClick}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

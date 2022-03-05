import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Search = ({ search }) => {
    const [value, setValue] = useState("");

    const handleChanges = e => {
        setValue(e.target.value);
    }

    const reset = () => {
        setValue("")
    }

    const callSearch = e => {
        e.preventDefault();
        search(value);
        reset();
    }

    return (
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
        noValidate
        autoComplete="off"
        data-testid="search"
        >
            
            <TextField id="standard-basic" label="Search for news" variant="standard" value={value} onChange={handleChanges}/>
            <Button variant="outlined" onClick={callSearch} margin="none">Search</Button>
        </Box>
    )

};

export default Search;
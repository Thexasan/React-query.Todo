import { Box, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <>
      <Box component={'div'} className="p-4 glass w-[95%] m-auto ">
        <div className="text-center">
          <h1 className="text-[18px] font-[700]">
            Search cars with Vin or Lot
          </h1>
        </div>
        <Box
          component={"div"}
          className="border-2 rounded-xl my-2"
          sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="VIN or Lot"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default SearchBar;

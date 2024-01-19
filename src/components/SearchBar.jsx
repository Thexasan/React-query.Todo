import { Box, IconButton, InputBase, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { axiosRequest } from "../utils/axiosRequest";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  async function searchCar() {
    try {
      const { data } = await axiosRequest.get(
        `api/Car/GetCarByVIN?carVin=${value}`
      );
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    value.length != 0 ? searchCar() : "";
  }, [value]);

  return (
    <>
      <Box component={"div"} className="p-4 glass w-[95%] m-auto ">
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
            value={value}
            onChange={(e) => {
              console.log(e.target.value);
              setValue(e.target.value);
            }}
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            onClick={() => {
              value.length != 0
                ? navigate(`carsDetail/vin/${value}`)
                : console.log("nothing to search");
            }}
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default SearchBar;

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import STREETS from "store/streets";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";

export default function StreetsSelector({ width }) {
  const navigate = useNavigate();

  const handleOnStreetClick = (event, value) =>
    navigate(`/streets/${value.id}`);

  const sorted = STREETS.sort((a, b) => {
    const first = a.neighborhood.toUpperCase();
    const second = b.neighborhood.toUpperCase();
    if (first < second) return -1;
    if (first > second) return 1;
    return 0;
  });

  return (
    <Autocomplete
      id="grouped-demo"
      options={sorted}
      groupBy={(option) => option.neighborhood}
      getOptionLabel={(option) => option.name.english}
      sx={{ width }}
      clearIcon={<ClearIcon fontSize="big" />}
      onChange={handleOnStreetClick}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="filled"
          label="Select street here"
          style={{ height: "100%" }}
        />
      )}
    />
  );
}

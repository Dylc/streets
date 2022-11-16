import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import STREETS from "store/streets";
import ClearIcon from "@mui/icons-material/Clear";

export default function StreetsSelector({ width, height }) {
  return (
    <Autocomplete
      id="grouped-demo"
      options={STREETS.sort((a, b) => a.neighborhood - b.neighborhood)}
      groupBy={(option) => option.neighborhood}
      getOptionLabel={(option) => option.title.english}
      sx={{ width }}
      clearIcon={<ClearIcon fontSize="big" />}
      renderInput={(params) => <TextField {...params} label="Street" />}
    />
  );
}

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import STREETS from "store/streets";
import ClearIcon from "@mui/icons-material/Clear";

import { styled, lighten, darken } from "@mui/system";

const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  // color: theme.palette.primary.main,
  // backgroundColor:
  //   theme.palette.mode === "light"
  //     ? lighten(theme.palette.primary.light, 0.85)
  //     : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled("ul")({
  padding: 0,
});

export default function StreetsSelector({ width, height }) {
  return (
    <Autocomplete
      id="grouped-demo"
      options={STREETS.sort((a, b) => a.neighborhood - b.neighborhood)}
      groupBy={(option) => option.neighborhood}
      getOptionLabel={(option) => option.title.english}
      sx={{ width }}
      clearIcon={<ClearIcon fontSize="big" />}
      renderInput={(params) => (
        <TextField {...params} variant="filled" label="Street" />
      )}
      // renderGroup={(params) => (
      //   <li>
      //     <GroupHeader>{params.group}</GroupHeader>
      //     <GroupItems>{params.children}</GroupItems>
      //   </li>
      // )}
    />
  );
}

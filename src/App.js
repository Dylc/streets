import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { themeSelector } from "features/preferences/preferencesSlice";
import { useSelector } from "react-redux";

// routing
import routes from "routes";

// defaultTheme
import themes from "themes";

function App() {
  const customization = useSelector(themeSelector);

  return (
    <ThemeProvider theme={themes(customization)}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;

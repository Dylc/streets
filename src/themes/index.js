import { createTheme } from "@mui/material/styles";

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization) => {
  const themeOptions = {
    direction: "ltr",
    typography: {
      fontSize: 16,
    },
  };

  return createTheme(themeOptions);
};

export default theme;

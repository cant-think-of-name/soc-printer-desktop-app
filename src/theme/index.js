import { createMuiTheme } from "@material-ui/core/styles";
import palette from "./palette";

export default createMuiTheme({
  ...palette,
  overrides: {
    MuiPaper: {
      root: {
        padding: "1.6rem",
      },
    },
    MuiButton: {
      root: {  
        marginTop: "0.5rem",
        textTransform: "none",
      },
    },
    MuiFormControl: {
      root: {  
        minWidth: "10rem",
      },
    },
  },
});

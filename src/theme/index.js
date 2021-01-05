import { createMuiTheme } from "@material-ui/core/styles";
import palette from "./palette";
import typography from "./typography";

export default createMuiTheme({
  ...palette,
  ...typography,
  overrides: {
    MuiPaper: {
      root: {
        padding: "1.6rem",
      },
    },
    MuiButton: {
      root: {  
        marginTop: "0.5rem",
        borderRadius: "100px",
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

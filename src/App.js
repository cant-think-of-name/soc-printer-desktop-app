import { ThemeProvider } from '@material-ui/core/styles';

import { Header, Body, Footer } from "./layouts";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Body />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

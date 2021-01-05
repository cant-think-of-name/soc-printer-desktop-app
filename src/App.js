import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';

import { Header, Body, Footer } from "./layouts";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Body />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;

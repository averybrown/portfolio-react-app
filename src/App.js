import './App.css';
import Routes from 'Routes/Routes';
import NavBar from 'Components/NavBar';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h6: {
        fontFamily: `"Mukta", sans-serif`,
        fontSize: 'calc(10px + 10vmin) !important',
        color: 'black'
      },
      subtitle2: {
        // fontFamily: ['Andale Mono'],
        // fontSize: '1rem',
        fontFamily: `"Mukta", sans-serif`,
        fontSize: '1.2rem',
        color: 'black',
      }
    }
  }
});
theme = responsiveFontSizes(theme);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="App-nav">
          <NavBar />
        </div>
        <div className="App-body" style={{ position: "absolute", width: '100%' }}>
          <Routes />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

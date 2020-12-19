import './App.css';
import Routes from 'Routes/Routes';
import NavBar from 'Components/NavBar';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import MenuDrawer from 'Components/MenuDrawer';

let theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h6: {
        fontFamily: `"Mukta", sans-serif`,
        fontSize: 'calc(10px + 10vmin) !important',
        color: 'black', 
        textShadowColor:'#585858',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
      },
      h5: {
        fontFamily: `"Mukta", sans-serif`,
        fontSize: 'calc(10px + 8vmin) !important',
        color: 'black', 
        textShadowColor:'#585858',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
      },
      subtitle2: {
        fontFamily: `"Mukta", sans-serif`,
        fontSize: 'calc(10px + 1.5vmin) !important',
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
        <MenuDrawer />
        <div className="App-nav">
          <NavBar />
        </div>
        <div style={{position: 'absolute', overflowY: 'hidden'}} className="App-body">
          <Routes />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

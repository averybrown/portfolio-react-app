import './App.css';
import Routes from 'Routes/Routes';
import NavBar from 'Components/NavBar';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import MenuDrawer from 'Components/MenuDrawer';
import CharacterDataProvider from 'Contexts/CharacterContext';
import { SoundProvider } from 'Contexts/SoundContext';
import Character from 'Components/Character';

let theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h6: {
        fontFamily: `"Mukta", sans-serif`,
        fontSize: 'calc(7px + 8vmin) !important',
        color: 'white',
        textShadowColor: '#585858',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
      },
      h5: {
        // fontFamily: `'Mrs Sheppards', cursive;`,
        // fontFamily: `"Mukta", sans-serif`,
        fontFamily: `'Libre Franklin', sans-serif;`,
        fontSize: 'calc(10px + 8vmin) !important',
        color: 'white',
        textShadowColor: '#585858',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
      },
      subtitle2: {
        fontFamily: `"Roboto", sans-serif`,
        fontSize: 'calc(9px + 1.5vmin) !important',
        color: 'white',
        fontWeight: '300',
      },
      subtitle1: {
        fontFamily: `"Mukta", sans-serif`,
        fontSize: 'calc(5px + 1.5vmin) !important',
        color: 'white',
      },
      body1: {
        fontFamily: `"Mukta", sans-serif`,
        fontSize: 'calc(10px + 1.5vmin) !important',
        color: 'white',
        fontWeight: '600'
      },
      body2: {
        fontFamily: `"Mukta", sans-serif`,
        fontSize: 'calc(6px + 1.5vmin) !important',
        color: 'white'
      },
      caption: {
        fontFamily: `"Mukta", sans-serif`,
        fontSize: 'calc(3px + 1.5vmin) !important',
        color: 'white',
      }
    }
  }
});
theme = responsiveFontSizes(theme);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CharacterDataProvider>
        <SoundProvider>
          <div className="App">
            <MenuDrawer />
            <div className="App-nav">
              <NavBar />
            </div>
            <div style={{ position: 'absolute', overflow: 'hidden' }} className="App-body">
              <Routes />
              <div style={{ height: '100%', width: '100%' }}>
                <Character />
              </div>
            </div>
          </div>
        </SoundProvider>
      </CharacterDataProvider>
    </ThemeProvider>
  );
}

export default App;

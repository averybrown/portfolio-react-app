import './App.css';
import Routes from 'Routes/Routes';
import NavBar from 'Components/NavBar';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import MenuDrawer from 'Components/MenuDrawer';
import CharacterDataProvider from 'Contexts/CharacterContext';
import { SoundProvider } from 'Contexts/SoundContext';
import Character from 'Components/Character';
// import { withStyles } from "@material-ui/core/styles";



// const styles = theme => {
//   return {
    // bubble6: {
    //   animationName: '$BubbleUp6',
    //   animationDelay: `5s`
    // },
    // "@keyframes BubbleUp1": {
    //   "0%": {
    //       bottom: '53%',
    //       opacity: 0,
    //       transform: 'scale(0.4)',
    //   },
    //   "1%": {
    //       opacity: 100
    //   },
    //   "20%": {
    //       transform: 'translateX(10vw) scale(1.2)'
    //   },
    //   "40%": {
    //       transform: 'translateX(14vw) scale(1.2)'
    //   },
    //   "60%": {
    //       transform: 'translateX(10vw) scale(1.2)'
    //   },
    //   "100%": {
    //       bottom: '145vh',
    //       transform: 'translateX(5vw) scale(1.2)'
    //   },
    // },
//   };
// };

let theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h6: {
        fontFamily: `"Mukta", sans-serif`,
        fontSize: 'calc(10px + 10vmin) !important',
        color: 'black',
        textShadowColor: '#585858',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
      },
      h5: {
        fontFamily: `"Mukta", sans-serif`,
        fontSize: 'calc(10px + 8vmin) !important',
        color: 'black',
        textShadowColor: '#585858',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
      },
      subtitle2: {
        fontFamily: `"Roboto", sans-serif`,
        fontSize: 'calc(10px + 1.5vmin) !important',
        color: 'black',
        fontWeight: '300',
      },
      subtitle1: {
        fontFamily: `"Mukta", sans-serif`,
        fontSize: 'calc(5px + 1.5vmin) !important',
        color: 'black',
      },
      body1: {
        fontFamily: `"Mukta", sans-serif`,
        fontSize: 'calc(10px + 1.5vmin) !important',
        color: 'black',
        fontWeight: '600'
      },
      body2: {
        fontFamily: `"Mukta", sans-serif`,
        fontSize: 'calc(6px + 1.5vmin) !important',
        color: 'black'
      },
      caption: {
        fontFamily: `"Mukta", sans-serif`,
        fontSize: 'calc(4px + 1.5vmin) !important',
        color: 'black',
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
            <div style={{ position: 'absolute', overflowY: 'hidden' }} className="App-body">
              <Routes />
              <Character />
            </div>
          </div>
        </SoundProvider>
      </CharacterDataProvider>
    </ThemeProvider>
  );
}

// export default withStyles(styles)(App);
export default App;

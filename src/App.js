import './App.css';
import Routes from 'Routes/Routes';
import NavBar from 'Components/NavBar';

function App() {
  return (
    <div className="App">
      <div className="App-nav">
        <NavBar />
      </div>
      <header className="App-body">
        <Routes />
      </header>
    </div>
  );
}

export default App;

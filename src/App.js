import './App.css';
import Routes from 'Routes/Routes';
import NavBar from 'Components/NavBar';

function App() {
  return (
    <div className="App">
      <div className="App-nav">
        <NavBar />
      </div>
      <div className="App-body">
        <Routes />
      </div>
    </div>
  );
}

export default App;

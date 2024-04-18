import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='bg-red-800'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='bg-danger-500'
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React an node
        </a>
      </header>
    </div>
  );
}

export default App;

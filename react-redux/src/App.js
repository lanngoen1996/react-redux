import logo from './logo.svg';
import './App.css';
import BtnComponent from './component/BtnCount';
import store from './store'
import { Provider } from 'react-redux'
import ReduxDisplay from './component/ReduxDisplay';
import BtnDecrement from './component/BtnDecrement';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Provider store={store}>
          <BtnDecrement />
          <ReduxDisplay />
          <BtnComponent />
          <BtnComponent />
        </Provider>
      </header>
    </div>
  );
}

export default App;

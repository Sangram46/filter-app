import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <div className="form-container">
          <h1>Item Filter App</h1>
          <SearchBar />
          <ItemList />
        </div>
      </div>
    </Provider>
  );
}

export default App;

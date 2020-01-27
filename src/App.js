import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserInfoPage from './pages/UserInfoPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
  
        <UserInfoPage/>
      </div>
    )
  }
}

export default App;

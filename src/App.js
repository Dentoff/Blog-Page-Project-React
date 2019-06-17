import React, { Component } from 'react';
import logo from './logo.svg';
import face from './images/face.jpg';
import './App.css';
import Common from './Components/Common/TextDisplay';

import weekData from './JsonData/Weeks.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Shown">
          <div className="Display">
            <h1 className="Title">Programming Class Blog</h1>
            <h2 className="Title">Euan Denton</h2>
            {
              weekData.map(function(Build){
                return (
                  <Common
                    date={Build.Date}
                    text={Build.Text}
                  />
                )
              })
            }
          </div>
          <div className="img">
            <img src={face} className="face-logo" alt="logo" />
          </div>
        </div>       
      </div>
    );
  }
}

export default App;

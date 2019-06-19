import React, { Component } from 'react';
import face from './images/face.jpg';
import './Styles/CommonStyle.css';
import Common from './Components/Common/TextDisplay';
import weekData from './JsonData/Weeks.json';

 class App extends Component {

  moveToFeedback = () => {
    this.props.history.push('/StudentFeedback');
  }; 

  render() {
    return (
      <div className="App">
        <div className="Shown">
          <div className="Display">
            <div className="TitleContainer">
              <h1 className="Title" style={{flex:1}}>Programming Class Blog</h1>
              <a className="Title" style={{fontSize:35, flex:1, textAlign:"right"}}
                onClick={() => {
                  this.moveToFeedback()
                }}>
                  Student Feedback
              </a>
            </div>
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
          <div style={{float:"right"}} className="img">
            <img src={face} className="face-logo" alt="logo" />
            <h2 className="Title">Euan Denton</h2>
          </div>
        </div>       
      </div>
    );
  }
}

export default App;

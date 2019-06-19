import React, { Component } from 'react';
import face from '../../../images/face.jpg';
import FeedbackData from '../../../JsonData/FeedbackData.json';
import Common from '../../Common/TextDisplay';
import '../../../Styles/CommonStyle.css';

class Feedback extends Component {

	moveToHome = () => {
		this.props.history.push('/');
		}; 

  render(){
    return (
			<div className="App">
				<div className="Shown">
					<div className="Display">
						<div className="TitleContainer">
							<h1 className="Title" style={{flex:1}}>Student Feedback For Alice</h1>
							<a className="Title" style={{fontSize:35, flex:1, textAlign:"right"}}
								onClick={() => {
									this.moveToHome()
								}}>
									Home
							</a>
						</div>
						{
							FeedbackData.map(function(Build){
								return(
									<Common
										date={Build.Initials}
										text={Build.Feedback}
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

export default Feedback;

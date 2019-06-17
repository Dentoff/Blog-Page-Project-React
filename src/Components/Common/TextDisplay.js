import 'react-bootstrap';
import React from 'react';
import './TextDisplay.css';

const CommonTextDisplay = ({
    date, text
}) => {
    return (
        <div class="jumbotron">
            <div class="container">
                <h3 class="text">{date}</h3>
                {text.map(function(textArray){
                    return (
                        <p class="text">
                            {textArray}
                        </p>
                    )
                })}
            </div> 
        </div>
    );
};

export default CommonTextDisplay;
import React, { Component } from 'react';

let style = {
    display: 'inline-block',
    padding: '2em 4em 3em',
    verticalAlign: 'top',
    width: '50%'
};

class Polaroid extends Component {
    render() {
        return (
            <div style={style}>
               <h1>{this.props.item.title}</h1>
               <span>{this.props.item.speaker}</span>
               <p>{this.props.item.description}</p>
               <audio controls>
                   <source type="audio/ogg" />
                   <source type="audio/mpeg" />
                   Your browser does not support the audio element.
               </audio>
               <br />
               <input type="submit" value="Download" />
            </div>
        )
    }
}


export default Polaroid;

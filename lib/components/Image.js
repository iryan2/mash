import React, { Component } from 'react';

class Image extends Component {
    render() {
        function getStyle(url) {
            return {
                //backgroundImage: 'url("https://www.google.com.au/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png")',
                backgroundImage: 'url('+url+')',
                backgroundSize: 'cover',
                display: 'inline-block',
                minHeight: '300px',
                width: '200px'
            }
        }
        return <div style={getStyle(this.props.src)}></div>
    }
}

export default Image;

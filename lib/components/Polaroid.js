import React, { Component } from 'react';
import Image from './Image';
import Details from './Details';

let style = {
    height: '300px',
    verticalAlign: 'top',
    width: '100%'
};

class Polaroid extends Component {
    render() {
        return (
            <div style={style}>
               <Image src={this.props.item.image} />
               <Details item={this.props.item} />
            </div>
        )
    }
}


export default Polaroid;

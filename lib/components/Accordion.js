import React, { Component } from 'react';
import Card from './Card';
import Polaroid from './Polaroid';

let style = {
    listStyle: 'none',
};

class Accordion extends Component {
    render() {
        let createItem = function(item, index) {
            return (
                <Card key={index}>
                    <Polaroid item={item} />
                </Card>
            );
        };

        return (
            <div style={style}>{this.props.items.map(createItem)}</div>
        )
    }
}

export default Accordion;

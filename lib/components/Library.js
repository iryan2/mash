import React, { Component } from 'react';
import Accordion from './Accordion';

let style = {
    margin: 'auto',
    width: '60%'
};

let clips = [{
    id: 1,
    title: 'By refining, we exist.',
    speaker: 'Lee Nguyen',
    image: 'http://lorempixel.com/200/400/people/6',
    description: 'Choice requires exploration. We reflect, we grow, we are reborn.  This life is nothing short of a redefining reimagining of ever-present peace.',
    price: 5,
    seconds: 360
},
{
    id: 2,
    title: 'Nothing is impossible.',
    speaker: 'Lena Hanson',
    image: 'http://lorempixel.com/200/400/people/9',
    description: 'To embark on the story is to become one with it. The quantum soup is aglow with morphic resonance. Our conversations with other adventurers have led to a blossoming of ultra-heroic consciousness.',
    price: 5,
    seconds: 360
}];

class Library extends Component {
    render() {
        return (
            <div style={style}>
                <Accordion items={clips} />
            </div>
        )
    }
}

export default Library;

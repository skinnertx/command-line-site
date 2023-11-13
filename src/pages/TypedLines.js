import React, { useEffect } from 'react';
import Typed from 'typed.js';

const typedLines = [];
var index = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startNext() {
    index++;
    typedLines[index].start()
    console.log(index);
}

function TypedLine({first=false, last=false, toPrint}) {
    const el = React.useRef(null);

    React.useEffect(() => {
        console.log("mount ", index)
        const typed = new Typed(el.current, {
            strings: toPrint,
            typeSpeed: 50,
            showCursor: false,
            onComplete: () => {if(!last){startNext()}},
        });

        typed.stop();
        typedLines.push(typed);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <span ref={el}/>
    );
}

export default function TypedLines() {

    React.useEffect(() => {
        sleep(100);
        console.log("mount all");
        typedLines[0].start();
    });
    
    // TODO: all of these are mounting at the same time, race condition
    // need to figure out how to order them or get refs to each one?
    // the first line to go needs to know about the next line in order
    // to call it's start method
    // MAYBE TRY THIS NEXT
    // https://www.storyblok.com/tp/react-dynamic-component-from-json
    return (
        <>
            <TypedLine first={true} toPrint={['<i>First</i> sentence.']}/>
            <TypedLine last={true} toPrint={['&amp; a second sentence.']}/>
        </>
    )
}


{/* 
    The plan:

    an array that contains all typed lines in order,
    and array that contains all strings in order

    index variable to track which line we are on
    each 

*/}
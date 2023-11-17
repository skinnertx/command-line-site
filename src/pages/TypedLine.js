import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedLine({
    toPrint, 
    typeSpeed=50, 
    loop=false, 
    isDiv=false,
    startDelay=0
}) {

    const el = useRef(null);

    useEffect(() => {

        const typed = new Typed(el.current, {
            strings: toPrint,
            typeSpeed: typeSpeed,
            showCursor: false,
            loop: loop,
            startDelay: startDelay
        });

        return () => {
            typed.destroy();
        };
    }, []);

    if (isDiv) {
        return (
            <div ref={el}/>
        )
    } else {
        return (
            <span ref={el}/>
        );
    }

}

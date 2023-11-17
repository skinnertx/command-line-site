
import TypedLine from './TypedLine';
import Interpreter from './CommandInterpreter';
import styles from '@/styles/Page.module.css';
import { useEffect, useRef, useState } from "react";

{/* 
    if this prefix is changed, min width for .inputPrefix must be adjusted
    inside styles/Page.module.css
 */}
const prefix = 'gus.c@ldwell.com:/$ ';

// allow easier styling of prefix 
function Prefix() {
    return (
        <span className={styles.prefix}>{prefix}</span>
    )
}

// data structure for holding user input values as well as generated responses
// for display
const HistoryItem = ({ value, id}) => {
    return (
        <div>
            <Prefix/>{value}
        </div>
    )
}

{/* 
    main function that handles the command line input as well as displaying history

    upon load, a brief scripted animation is played after which an input field is made availble to users

    users can input commands and the function will generate the appropriate response and add it to the history
    of the command line

    this component also auto focuses on a dummy bottom div when a key is pressed

    Functionality of the history is based on this codepen
    https://codesandbox.io/s/react-dynamic-list-example-functional-components-3k309?file=/src/index.js:322-324
*/}
function History() {

    // state values - a list of all components, as well as a tracker for new input
    const [history, updateHistory] = useState([]);
    const [newValue, setValue] = useState("Added");

    // refs used for various animations upon load
    const inputConRef = useRef(null);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);
    const initRef = useRef(null);

    // adds whatever item is in newValue to the history list
    function addItem() {
        const newHistory = [
            ...history,
            {id: history.length, value: newValue}
        ];
        updateHistory(newHistory);
    }

    // when enter is pressed, read the input field and act accordingly
    // TODO: figure out why command is invalid
    function handleKeyDown(e) {
        if(e.key === 'Enter') {
            addItem();
            inputRef.current.value = '';
            const result = Interpreter(newValue.toLowerCase());
            console.log(result);
        }
        bottomRef.current.scrollIntoView();
    }
    
    // set css after time for certain elements (animation)
    useEffect(() => {
        // set visibility of init animation
        setTimeout(() => {initRef.current.style.visibility = 'visible';}, 3600);
        // set visibility of input component
        setTimeout(() => {inputConRef.current.style.visibility = 'visible';}, 8200);
    })

    return (
        <div className={styles.history}>
            <div>
                <Prefix/><TypedLine startDelay={3000} typeSpeed={15} toPrint={['init sisyphus.exe']}/><br/>
                <pre className={styles.tab} ref={initRef}>
                    {'\t'}<TypedLine typeSpeed={25} startDelay={3200} toPrint={['- Rolling boulder uphill']}/><br/>
                    {'\t'}<TypedLine typeSpeed={10} startDelay={4700} toPrint={['- Finished in 280ms, initiating rollback']}/><TypedLine typeSpeed={5} loopCount={3} loop={true} startDelay={6000} toPrint={['. . .']}/><br/>
                    {'\t'}<TypedLine typeSpeed={1} startDelay={7800} toPrint={['- Done, type HELP for a list of commands']}/><br/>
                </pre>
            </div>
            {history.map(item => (
                <HistoryItem key={item.id} {...item} />
            ))}
            <div className={styles.inputContainer} ref={inputConRef}>
                <div className={styles.inputPrefix}>
                    <Prefix/>
                </div>
                <input 
                    className={styles.inputBox}
                    type='text' 
                    ref={inputRef}
                    placeholder='click here to input command'
                    onKeyDown={handleKeyDown} 
                    onChange={e => {setValue(e.target.value); bottomRef.current.scrollIntoView();}}
                />
            </div>
            <div ref={bottomRef}> </div>
        </div>
    )
}

// wrapper for History function that does a little extra styling
export default function CommandLine() {
    return (
        <div className={styles.commandContainer}>
            <History/>
        </div>
    )
}
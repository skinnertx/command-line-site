
import TypedLine from './TypedLine';
import Interpreter from './CommandInterpreter';
import styles from '@/styles/Page.module.css';
import { useEffect, useRef, useState } from "react";

// animation scaler - used to speed up animations when debugging
const aniScale = 0.5;

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
    const introConRef = useRef(null);

    // adds whatever item is in newValue to the history list
    function addItem(value=null) {
        if(value == null) {
            return;
        }
        const newHistory = [
            ...history,
            {id: history.length, value: value}
        ];
        updateHistory(newHistory);
    }

    // had to make separate handlers for each button because target could be the img, or the button itself ):
    function handleAboutMe(e) {
        addItem(Interpreter('whoami'));
        setTimeout(() => bottomRef.current.scrollIntoView(), 10);
    }

    function handleLink(e) {
        addItem(Interpreter('links'));
        setTimeout(() => bottomRef.current.scrollIntoView(), 10);
    }

    function handleFolder(e) {
        addItem(Interpreter('proj'));
        setTimeout(() => bottomRef.current.scrollIntoView(), 10);
    }

    function handleHelp(e) {
        addItem(Interpreter('help'));
        setTimeout(() => bottomRef.current.scrollIntoView(), 10);
    }

    function handleClear(e) {
        updateHistory([]);
        // im aware this is stupid, but alas, tech debt of how i designed the animation makes me do this
        introConRef.current.style.position = 'absolute';
        introConRef.current.style.top = '-100vh';
    }

    // when enter is pressed, read the input field and act accordingly
    function handleKeyDown(e) {
        if(e.key === 'Enter') {
            //addItem();
            inputRef.current.value = '';
            if (newValue.toString().toLowerCase() === 'clear') {
                updateHistory([]);
                // im aware this is stupid, but alas, tech debt of how i designed the animation makes me do this
                introConRef.current.style.position = 'absolute';
                introConRef.current.style.top = '-100vh';
            } else {
                addItem(Interpreter(newValue));
            }
        }
        setTimeout(() => bottomRef.current.scrollIntoView(), 10);
    }
    
    // set css after time for certain elements (animation)
    useEffect(() => {
        // set visibility of init animation
        setTimeout(() => {initRef.current.style.visibility = 'visible';}, 3600 * aniScale);
        // set visibility of input component
        setTimeout(() => {inputConRef.current.style.visibility = 'visible';}, 8200 * aniScale);
    })



    return (
        <div className={styles.historyContainer}>
            <div className={styles.historyButtonContainer}>
                <div className={styles.toolTip}>
                    <span className={styles.toolTipText}>About Me</span>
                    <button className={styles.commandButton} onClick={handleAboutMe}>
                        <img src='./AboutMe.svg' />
                    </button>
                </div>
                
                <div className={styles.toolTip}>
                    <span className={styles.toolTipText}>Links</span>
                    <button className={styles.commandButton} onClick={handleLink}>
                        <img src='./Link.svg' />
                    </button>
                </div>

                <div className={styles.toolTip}>
                    <span className={styles.toolTipText}>Projects</span>
                    <button className={styles.commandButton} onClick={handleFolder}>
                        <img src='./Folder.svg' />
                    </button>
                </div>

                <div className={styles.toolTip}>
                    <span className={styles.toolTipText}>Help</span>
                    <button className={styles.commandButton} onClick={handleHelp}>
                        <img src='./Help.svg' />
                    </button>
                </div>

                <div className={styles.toolTip}>
                    <span className={styles.toolTipText}>Clear</span>
                    <button className={styles.commandButton} onClick={handleClear}>
                        <img src='./Refresh.svg' />
                    </button>
                </div>
            </div>
            

            <div className={styles.history}>
                <div ref={introConRef}>
                    <Prefix/><TypedLine startDelay={3000 * aniScale} typeSpeed={15 * aniScale} toPrint={['init sisyphus.exe']}/><br/>
                    <pre className={styles.tab} ref={initRef}>
                        {'\t'}<TypedLine typeSpeed={25 * aniScale} startDelay={3200 * aniScale} toPrint={['- Rolling boulder uphill']}/><br/>
                        {'\t'}<TypedLine typeSpeed={10 * aniScale} startDelay={4700 * aniScale} toPrint={['- Finished in 280ms, initiating rollback']}/><TypedLine typeSpeed={5 * aniScale} loopCount={3} loop={true} startDelay={6000} toPrint={['. . .']}/><br/>
                        {'\t'}<TypedLine typeSpeed={1 * aniScale} startDelay={7800 * aniScale} toPrint={['- Done, type <u>HELP</u> for a list of commands, or use the buttons to the left']}/><br/>
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
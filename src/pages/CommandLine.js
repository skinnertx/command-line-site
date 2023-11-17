
import TypedLine from './TypedLine';
import styles from '@/styles/Page.module.css';
import { useEffect, useRef, useState } from "react";

{/* 
    if this prefix is changed, min width for .inputPrefix must be adjusted
    inside styles/Page.module.css
 */}
const prefix = 'gusc@utexas.edu:/$ ';

const initialHistory = [
]

const HistoryItem = ({ value, id}) => {
    return (
        <div>
            {prefix}{value}
        </div>
    )
}

{/* 
    Functionality of the history is based on this codepen
    https://codesandbox.io/s/react-dynamic-list-example-functional-components-3k309?file=/src/index.js:322-324
*/}
function History() {

    const [history, updateHistory] = useState([]);
    const [newValue, setValue] = useState("Added");

    const inputConRef = useRef(null);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);
    const initRef = useRef(null);

    function addItem() {
        const newHistory = [
            ...history,
            {id: history.length, value: newValue}
        ];
        updateHistory(newHistory);
    }


    function handleKeyDown(e) {
        if(e.key === 'Enter') {
            addItem();
            inputRef.current.value = '';
        }
        bottomRef.current.scrollIntoView();
    }
    
    useEffect(() => {
        // set visibility of init animation
        setTimeout(() => {initRef.current.style.visibility = 'visible';}, 3600);
        // set visibility of input component
        setTimeout(() => {inputConRef.current.style.visibility = 'visible';}, 8200);
    })

    return (
        <div className={styles.history}>
            <div>
                {prefix}<TypedLine startDelay={3000} typeSpeed={15} toPrint={['init sisyphus.exe']}/><br/>
                <pre className={styles.tab} ref={initRef}>
                    {'\t'}<TypedLine typeSpeed={25} startDelay={3200} toPrint={['Rolling boulder uphill']}/><br/>
                    {'\t'}<TypedLine typeSpeed={10} startDelay={4700} toPrint={['Finished in 280ms, initiating rollback']}/><TypedLine typeSpeed={5} loopCount={3} loop={true} startDelay={6000} toPrint={['. . .']}/><br/>
                    {'\t'}<TypedLine typeSpeed={1} startDelay={7800} toPrint={['Done, type HELP for a list of commands']}/><br/>
                </pre>
            </div>
            {history.map(item => (
                <HistoryItem key={item.id} {...item} />
            ))}
            <div className={styles.inputContainer} ref={inputConRef}>
                <div className={styles.inputPrefix}>
                    {prefix}
                </div>
                <input 
                    className={styles.inputBox}
                    type='text' 
                    ref={inputRef}
                    onKeyDown={handleKeyDown} 
                    onChange={e => {setValue(e.target.value); bottomRef.current.scrollIntoView();}}
                />
            </div>
            
            <div ref={bottomRef}> </div>
        </div>
    )

}



export default function CommandLine() {





    return (
        <div className={styles.commandContainer}>
            <History/>
        </div>
    )
}
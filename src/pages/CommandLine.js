
import TypedLine from './TypedLine';
import styles from '@/styles/Page.module.css';
import { useRef, useState } from "react";

const prefix = 'gusc@utexas.edu:/$ ';

const initialHistory = [
    {id: 0, value: "gaming"},
    {id: 1, value: "gaming gaming"},
    {id: 2, value: "gaming gaming gaming"}
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
    const [history, updateHistory] = useState(initialHistory);
    const [newValue, setValue] = useState("Added");
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    function handleKeyDown(e) {
        if(e.key === 'Enter') {
            const newHistory = [
                ...history,
                {id: history.length, value: newValue}
            ];
            updateHistory(newHistory);
            inputRef.current.value = '';
        }
        bottomRef.current.scrollIntoView();
    }


    return (
        <div className={styles.history}>
            {history.map(item => (
                <HistoryItem key={item.id} {...item} />
            ))}
            <div className={styles.inputContainer}>
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
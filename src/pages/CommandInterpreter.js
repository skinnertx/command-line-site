import styles from '@/styles/Page.module.css';

const funcList = [
    'help -> print a list of all available commands',
    'whoami -> display information about the creator of this site',


    'clear -> clear the terminal (except for intro text)'
]

export default function Interpreter(command) {
    const lowCommand = command.toLowerCase(); // used for case matching
    // pass command actual to return what user ACTUALLY typed
    switch(lowCommand) {
        case 'help':
            return help(command);

        case 'whoami':
            return whoami(command);

        default:
            return invalid(command);
    }
}

function help(actual) {
    return (
        <span>
            {actual}
            <pre className={styles.indent}>
            {funcList.map(item => (
                <span>{'\t'}{item}<br/></span>
            ))}
            </pre>
        </span>
        
    )
}

function whoami(actual) {
    return (
        <span>
            {actual}
            <pre className={styles.indent}>
                {'\t'} Hello there!<br/>
            </pre>
        </span>
    )
}



function invalid(actual) {
    return (
        <span>
            {actual}
            <pre className={styles.indent}>
            {'\t'}not a valid command
            </pre>
        </span>
    )
}


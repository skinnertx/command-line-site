import styles from '@/styles/Page.module.css';

const funcList = [
    'help -> print a list of all available commands',
    'whoami -> display information about the creator of this site',


    'clear -> clear the terminal history'
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
                <br/>
                {'\t'} Hello there! My name is Gus, a recent <b>University of Texas Computer Science</b> Graduate. I've got experience in
                multiple programming languages like <u>Python</u>, <u>C</u>, <u>C++</u>, <u>Lisp</u>, <u>SQL</u>, <u>Java</u>, and more recently
                the <u>HTML</u>/<u>CSS</u>/<u>Javascript</u> combo. I also have worked with libraries like <u>OpenGL</u> and <u>Pandas</u>. I love the 
                feeling of having a vision and bringing it to life with code! Learning to code can feel like a never-ending task\ - but that's what makes it so compelling to me.<br/><br/>
                {'\t'}"One must image Sisyphus happy"<br/>
                {'\t'}{'\t'}-Albert Camus<br/><br/>
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


import styles from '@/styles/Page.module.css';

const funcList = [
    'whoami -> display information about the creator of this site',
    'links -> print a list of other sites related to Gus Caldwell',
    'help -> print a list of all available commands',
    'proj -> print a list of my projects',
    


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

        case 'links':
            return links(command);

        case 'proj':
            return proj(command);

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

//TODO: add more projects!
function proj(actual) {
    return (
        <span>
            {actual}
            <pre className={styles.indent}>
                Some of my projects:
                <ui>
                    <li>This website! View the repository <a href='https://github.com/skinnertx/command-line-site' target="_blank">here</a></li>
                    <li>Filler content for now</li>
                </ui>
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

function links(actual) {
    return (
        <span>
            {actual}
            <pre className={styles.indent}>
                Fetching links to various profiles...
                <ul className={styles.list}>
                    <li><a href='https://github.com/skinnertx' target="_blank">Github</a></li>
                    <li><a href='https://www.linkedin.com/in/gus-caldwell/' target="_blank">LinkedIn</a></li>
                </ul>
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


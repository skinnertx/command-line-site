

export default function Interpreter({command}) {
    console.log(command);
    switch(command) {
        case 'help':
            return help();
        
        default:
            return invalid();
    }
}

function help() {
    return (
        'here we go gamer'
    )
}

function invalid() {
    return (
        'not a valid command'
    )
}
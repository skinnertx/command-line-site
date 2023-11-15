
import TypedLine from './TypedLine';
import styles from '@/styles/Page.module.css';

export default function CommandLine() {


    return (
        <div className={styles.commandContainer}>
            <TypedLine toPrint={['yea yea']}/>
        </div>
    )
}
import styles from '@/styles/Page.module.css';
import TypedLines from './TypedLines';

export default function CommandLineWebpage() {

    return (
        // TODO: make a webpage!
        <div className={styles.scene}>
                <div>
                    <img src='sisyphus.gif' alt='ASCII art of Sisyphus pushing a boulder, original gif here: https://giphy.com/gifs/digital-imposter-1mposter-gWDJWMJVemkKH8tljp' />
                </div>   
                <div>
                    <TypedLines/>
                </div>
        </div>
      )
}
import styles from '@/styles/Page.module.css';
import TypedLine from './TypedLine';
import { useEffect, useRef } from 'react';
import CommandLine from './CommandLine';


export default function CommandLineWebpage() {

    let offset = 20;
    let topset = 0;
    let height = 315
    let revealRef = useRef(null);
    let revInt;

    function reveal() {
        topset += 7;
        revealRef.current.style.top = offset + topset + 'px';
        revealRef.current.style.height = (height - topset) + 'px';
        if(height < 2) {
            clearInterval(revInt);
        }
    }

    useEffect(() => {
        revInt = setInterval(reveal, 70);
    })
    

    return (
        // TODO: make a webpage!
        <div className={styles.scene}>
            <div className={styles.fixedHeading}>
                <div className={styles.flexTitle}>
                    <img src='sisyphus.gif' alt='ASCII art of Sisyphus pushing a boulder, original gif here: https://giphy.com/gifs/digital-imposter-1mposter-gWDJWMJVemkKH8tljp' />
                    <pre className={styles.asciiArt}>
                        <p>    ,o888888o.    8 8888      88    d888888o.                                                                                                </p>
                        <p>    8888     `88.  8 8888      88  .`8888:' `88.                                                                                              </p>
                        <p> ,8 8888       `8. 8 8888      88  8.`8888.   Y8                                                                                              </p>
                        <p> 88 8888           8 8888      88  `8.`8888.                                                                                                  </p>
                        <p> 88 8888           8 8888      88   `8.`8888.                                                                                                 </p>
                        <p> 88 8888           8 8888      88    `8.`8888.                                                                                                </p>
                        <p> 88 8888   8888888 8 8888      88     `8.`8888.                                                                                               </p>
                        <p> `8 8888       .8' ` 8888     ,8P 8b   `8.`8888.                                                                                              </p>
                        <p>    8888     ,88'    8888   ,d8P  `8b.  ;8.`8888                                                                                              </p>
                        <p>     `8888888P'       `Y88888P'    `Y8888P ,88P'                                                                                              </p>
                        <p>                                                                                                                                              </p>
                        <p>    ,o888888o.           .8.          8 8888         8 888888888o.   `8.`888b                 ,8' 8 8888888888   8 8888         8 8888        </p>
                        <p>   8888     `88.        .888.         8 8888         8 8888    `^888. `8.`888b               ,8'  8 8888         8 8888         8 8888        </p>
                        <p>,8 8888       `8.      :88888.        8 8888         8 8888        `88.`8.`888b             ,8'   8 8888         8 8888         8 8888        </p>
                        <p>88 8888               . `88888.       8 8888         8 8888         `88 `8.`888b     .b    ,8'    8 8888         8 8888         8 8888        </p>
                        <p>88 8888              .8. `88888.      8 8888         8 8888          88  `8.`888b    88b  ,8'     8 888888888888 8 8888         8 8888        </p>
                        <p>88 8888             .8`8. `88888.     8 8888         8 8888          88   `8.`888b .`888b,8'      8 8888         8 8888         8 8888        </p>
                        <p>88 8888            .8' `8. `88888.    8 8888         8 8888         ,88    `8.`888b8.`8888'       8 8888         8 8888         8 8888        </p>
                        <p>`8 8888       .8' .8'   `8. `88888.   8 8888         8 8888        ,88'     `8.`888`8.`88'        8 8888         8 8888         8 8888        </p>
                        <p>   8888     ,88' .888888888. `88888.  8 8888         8 8888    ,o88P'        `8.`8' `8,`'         8 8888         8 8888         8 8888        </p>
                        <p>    `8888888P'  .8'       `8. `88888. 8 888888888888 8 888888888P'            `8.`   `8'          8 888888888888 8 888888888888 8 888888888888</p>
                    </pre>
                </div>
                <div id='reveal' className={styles.revealer} ref={revealRef}/>
                <div className={styles.subtext}>
                    <TypedLine typeSpeed={30} toPrint={['^1500SOFTWARE // FRONTEND // BACKEND DEVELOPER']}/>
                </div>
            </div>
            <div className={styles.dynamicFooter}>
                <CommandLine />
            </div>

           
        </div>
      )
}

{/* 
    ADD A CONSOLE/TERMINAl BOX
    ADD commands to print about me etc
    ADD a key to show available commands
*/}
import React, { useEffect } from 'react';
import styles from '../styles/Terminal.module.css'

export default function Webpage() {

    useEffect(() => {
        const canvas = document.getElementById('Matrix');
        const context = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
    
        const alphabet = katakana + latin + nums;
        const clickMe = 'CLICK ME';
    
        const fontSize = 32;
        const columns = canvas.width/fontSize;
    
        const rainDrops = [];
    
        for( let x = 0; x < columns; x++ ) {
            rainDrops[x] = 1;
        }

        const draw = () => {
            context.fillStyle = 'rgba(0, 0, 0, 0.04)';
            context.fillRect(0, 0, canvas.width, canvas.height);
            
            context.fillStyle = '#0F0';
            context.font = fontSize + 'px monospace';
    
            for(let i = 0; i < rainDrops.length; i++)
            {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                if(i < 20 || i > 27) {
                    context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

                    if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.982){
                        rainDrops[i] = 0;
                    }
                    rainDrops[i]++;
                } else {
                    if (rainDrops[i] != 15) {
                        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
                    } else {
                        const letter = clickMe.charAt(i - 20);
                        context.fillStyle = "#FFF";
                        context.fillText(letter, i*fontSize, rainDrops[i]*fontSize);
                        context.fillStyle = '#0F0';
                    }

                    if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.882){
                        rainDrops[i] = 0;
                    }
                    rainDrops[i]++;
                }
            }
        };

    
        setInterval(draw, 50);
    })

    return (
        <div className={styles.html}>
            <canvas className={styles.matrix} id="Matrix"></canvas>
        </div>
    )
}

{/* 
            <p className={styles.p}>First Line...</p>
            <p className={styles.p}>Second Line...</p>
            <p className={styles.p}>Third Line...</p>
            <p className={styles.p}>Fourth Line...</p>
            <p className={styles.p}>Fifth Line...</p>
            <p className={styles.p}>Sixth Line...</p>
            <p className={styles.p}><span className={styles.span}>Final/Blinking Line</span>  <span>|</span>
            </p>


*/}
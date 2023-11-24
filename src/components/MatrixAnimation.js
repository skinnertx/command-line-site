import styles from '@/styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import { Html, Environment, Box, Plane } from '@react-three/drei';
import Webpage from './WebpageContent';
import { MeshLambertMaterial } from "three";
import GridAnimator from './GridAnimator';

{/* 
  Display matrix animation upon website entry
*/}
export default function MatrixAnimation({handler}) {
    return (
      <div className={styles.scene}>
        <div className={styles.canvasContainer}>
          <button onClick={() => handler()} className={styles.skipButton}>
            <span className={styles.skipText}>SKIP ANIMATION</span>
            <span className={styles.skipArrow}>{'>'}{'>'}{'>'} </span>
          </button>
          <Canvas camera={{ fov: 90, position: [0, 0.5, 5]}}>
              <Environment preset='city'/>
              <ambientLight intensity={1.1}/>
              <GridAnimator/>
              <group
                position={[-1.81,0.36,2.03]}
              >
                <Html
                  transform
                  occlude
                  className={styles.content}
                  position={[0,0,2]}
                  rotation={[0,Math.PI/2,0]}
                  distanceFactor={0.081}
                >
                  <div className={styles.wrapper}>
                    <div onClick={() => handler()} className={styles.click}/>
                    <Webpage/>
                  </div>
                </Html>
                <Box
                  args={[0.5,0.5,0.5]}
                  position={[-0.0395,0,2]}
                  material={new MeshLambertMaterial({color: 0xfff, transparent: true, opacity: 0})}
                ></Box>
                <Plane 
                  args={[100,2000]} 
                  rotation={[-Math.PI/2, 0, 0]} 
                  position={[0,-2,0]}
                  material={new MeshLambertMaterial({color: '#fffff1'})}
                />
              </group>
          </Canvas>
        </div>
      </div>
    )
}
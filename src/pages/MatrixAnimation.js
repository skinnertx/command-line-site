import styles from '@/styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import { Html, Stats, Environment, Box } from '@react-three/drei';
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
          <Canvas camera={{ fov: 90, position: [0, 1, 5]}}>
            <Stats/>
              <Environment preset='city'/>
              <ambientLight intensity={0.5}/>
              <GridAnimator/>
              <group
                position={[-1.81,0.36,2.03]}
              >
                <Html
                  transform
                  occlude
                  className={styles.content}
                  
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
                  position={[0,0,0]}
                  material={new MeshLambertMaterial({color: 0xfff, transparent: true, opacity: 0})}
                ></Box>
              </group>
          </Canvas>
        </div>
      </div>
    )
}
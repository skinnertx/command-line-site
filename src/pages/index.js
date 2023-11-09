import styles from '@/styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, Stats, Environment, Box } from '@react-three/drei';
// import { ComputerLowPoly } from '@/computerLowPoly';
import Webpage from './WebpageContent';
import * as THREE from 'three';
import { useEffect } from 'react';
import { LowPolyGrid } from './LowPolyComputerTex';
import { HighPolyComputer } from './HighPolyComputer';

// DEBUG CONSTANTS
const allowOrbit = true;

// debug constant components
function ToggleOrbitControls() {
  if (allowOrbit) {
    return (
      <OrbitControls/>
    )
  }
}
// Constants that control the grid of computers in the scene
// TODO:get rid of this constant maybe? needs to be grouped with row of Low poly
const highPolyPos = [9, 0, 30]


export default function Home() {
  return (
    <div className={styles.scene}>
      <div className={styles.canvasContainer}>
        <Canvas camera={{ fov: 65, position: [0, 2, 300]}}>
          <Stats/>
            <Environment preset='city'/>
            <ambientLight intensity={0.5}/>
            <ToggleOrbitControls/>
            <LowPolyGrid 
              row={1}
              col={50}
              omit={true}
              x={1}
              z={2}
              rot={[0,Math.PI/2,0]}
              anchor={[-2,-1,0]}
            />
            <LowPolyGrid 
              row={1}
              col={50}
              rot={[0,-Math.PI/2,0]}
              anchor={[2,-1,0]}
            />
            <HighPolyComputer position={highPolyPos}/>
            <Box/>
          
        </Canvas>
      </div>
    </div>
  )
}
{/* 
  CODE CRYO CHAMBER - no guarantee on revival
  ---------------------------------------
  <LowPolyGrid
    row={7}
    col={21}
    spacing={3}
  />

*/}

{/* 
  TODO / IDEA? 

  Have the low poly's animate in like the matrix scene where the gun racks zoom into frame
  Settle on the final high poly model with the website
  maybe do a side on view with the camera so it looks like everything is rushing in
  like a train, then rotate 90 degrees and zoom to green and black text?
  Maybe, if possible have characters drift down like the matrix only to highlight and stick in place
  once they have reached their final spot, not sure how feasible this is

  Also might be worth making a button to skip the animation?

*/}
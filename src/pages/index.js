import styles from '@/styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, Stats, Environment, Box } from '@react-three/drei';
// import { ComputerLowPoly } from '@/computerLowPoly';
import Webpage from './WebpageContent';
import * as THREE from 'three';
import { useEffect } from 'react';
import { LowPolyGrid, highPolyPos } from './LowPolyComputerTex';
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

export default function Home() {
  return (
    <div className={styles.scene}>
      <div className={styles.canvasContainer}>
        <Canvas camera={{ fov: 65, position: [0, 3, 10]}}>
          <Stats/>
            <Environment preset='city'/>
            <ambientLight intensity={0.5}/>
            <ToggleOrbitControls/>
            <LowPolyGrid/>
            <HighPolyComputer position={highPolyPos}/>
          
        </Canvas>
      </div>
    </div>
  )
}

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
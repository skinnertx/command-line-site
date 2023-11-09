import styles from '@/styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, Stats, Environment } from '@react-three/drei';
// import { ComputerLowPoly } from '@/computerLowPoly';
import Webpage from './WebpageContent';
import * as THREE from 'three';
import { useEffect } from 'react';
import { LowPolyGrid } from './LowPolyComputerTex';

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
          
        </Canvas>
      </div>
    </div>
  )
}

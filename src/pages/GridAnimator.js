import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { LowPolyGrid } from './LowPolyComputerTex';
import { HighPolyComputer } from './HighPolyComputer';

export var dollyFinished = false;

export default function GridAnimator() {

    const groupRef = useRef();
    const vec = new THREE.Vector3();
    const lerpSpeed = 0.025;
    const numCols = 200;

    useFrame(state => {
        groupRef.current.position.lerp(vec.set(0,0,-100), lerpSpeed);

        if (groupRef.current.position.z > -101) {
            dollyFinished = true;
        }

        return null;
    })

    return (
        <group 
            position={[0,0,-2000]}
            ref={groupRef}
        >
            <LowPolyGrid 
            row={1}
            col={numCols}
            omit={true}
            x={1}
            z={35}
            rot={[0,Math.PI/2,0]}
            anchor={[-2,-1,0]}
            />
            <LowPolyGrid 
            row={1}
            col={numCols}
            rot={[0,-Math.PI/2,0]}
            anchor={[2,-1,0]}
            />
            <HighPolyComputer 
                position={[-2, -1, 102]}
                rotation={[0,Math.PI/2, 0]}
            />
        </group>
    )

}
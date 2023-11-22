import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import LowPolyGrid from './LowPolyComputerTex';
import HighPolyComputer from './HighPolyComputer';

export var dollyFinished = false;

export default function GridAnimator() {

    const groupRef = useRef();
    const vec = new THREE.Vector3();
    const lerpSpeed = 0.04;
    const numCols = 70;

    useFrame(state => {
        groupRef.current.position.lerp(vec.set(0,0,-98), lerpSpeed);

        if (groupRef.current.position.z > -100) {
            dollyFinished = true;
        }

        return null;
    })

    return (
        <group 
            position={[0,0,-2500]}
            ref={groupRef}
        >
            
            <LowPolyGrid 
            row={7}
            col={numCols}
            omit={true}
            x={4}
            z={35}
            rot={[0,Math.PI/2,0]}
            anchor={[-11,-1,0]}
            />
            <HighPolyComputer 
                position={[-2, -1, 102]}
                rotation={[0,Math.PI/2, 0]}
            />
        </group>
    )

}

{/* 

            <LowPolyGrid 
            row={5}
            col={numCols}
            omit={true}
            x={4}
            z={35}
            rot={[0,Math.PI/2,0]}
            anchor={[-2,-1,0]}
            />

*/}
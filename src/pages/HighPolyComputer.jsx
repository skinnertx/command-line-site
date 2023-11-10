/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 highPolyComputer.glb --transform 
Files: highPolyComputer.glb [3MB] > highPolyComputer-transformed.glb [217.47KB] (93%)
*/

import React, { useRef } from 'react'
import { useGLTF,Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { dollyFinished } from './GridAnimator'
import * as THREE from 'three';
export function HighPolyComputer(props) {

  const { nodes, materials } = useGLTF('/highPolyComputer-transformed.glb')
  const startTarget = new THREE.Vector3(0,0,0);
  const endTarget = new THREE.Vector3(-2,0.36,2.035);
  const framePos = new THREE.Vector3(-1.61,0.36,2.035);
  const lerpSpeed = 0.02;
  
  useFrame(state => {
    if (dollyFinished) {
      state.camera.lookAt(startTarget.lerp(endTarget, lerpSpeed + 0.03));
      state.camera.position.lerp(framePos, lerpSpeed);
    }
  })
    

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.81, 0]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials.CompScreenMat} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials.OffWhiteCompMat} />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials.CompFrameMat}/>
      </group>
      <mesh geometry={nodes.Keys.geometry} material={materials.OffWhiteKeysMat} position={[0, 0.81, 0]} />
      <group position={[0.044, 0.961, 0.139]} scale={[0.972, 0.589, 0.473]}>
        <mesh geometry={nodes.Plane.geometry} material={materials.TableMat} />
        <mesh geometry={nodes.Plane_1.geometry} material={materials.LegMat} />
      </group>
    </group>
  )
}

useGLTF.preload('/highPolyComputer-transformed.glb')

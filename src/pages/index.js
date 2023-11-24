import CommandLineWebpage from '../components/CommandLineWebpage';
import MatrixAnimation from '../components/MatrixAnimation';
import { useState } from 'react';

// control whether animation plays at start
const skipAnimation = false;

// TODO
// add easter egg commands
// fix matrix animation  for ultrawide
// add detail to 3d scene
// github CD/CI ?
// set it up on guscaldwell.com
// fix readme

{/* 
  Function that handles toggling between intro animation and command line site
  yes I'm aware this is a silly way to do it, but I didn't want to set up routing
  and this was easy enough
*/}
function RenderToggle() {

  const [showPage, setShowPage] = useState(!skipAnimation);

  if (showPage) {
    return (
      <MatrixAnimation handler={setShowPage}/>
    )
  } else {
    return (
      <CommandLineWebpage/>
    )
  }
}

// could consolidate render toggle with home function?
export default function Home() {
  return (
    <RenderToggle />
  )
}

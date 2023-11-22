import CommandLineWebpage from '../components/CommandLineWebpage';
import MatrixAnimation from '../components/MatrixAnimation';
import { useState } from 'react';

// control whether animation plays at start
const skipAnimation = false;

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
{/* 
  CODE CRYO CHAMBER - no guarantee on revival
  ---------------------------------------
*/}

// TODO
// add skip button using renderRoggle

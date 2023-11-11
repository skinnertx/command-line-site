import MatrixAnimation from './MatrixAnimation';
import { useState } from 'react';

{/* 
  Function that handles toggling between intro animation and command line site
  yes I'm aware this is a silly way to do it, but I didn't want to set up routing
  and this was easy enough
*/}
function RenderToggle() {

  const [showPage, setShowPage] = useState(true);

  if (showPage) {
    return (
      <MatrixAnimation handler={setShowPage}/>
    )
  } else {
    return (
      // TODO: make a webpage!
      <div>
        THIS IS WHERE THE FUN BEGINS
      </div>
    )
  }
}

// could consolidate render toggle with home function?
export default function Home() {
  return (
    <RenderToggle/>
  )
}
{/* 
  CODE CRYO CHAMBER - no guarantee on revival
  ---------------------------------------
*/}

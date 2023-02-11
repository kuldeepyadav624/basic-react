import React, { useEffect, useState } from 'react'

const Effect = () => {
const [ widthCount, setWidthCount ] = useState ( window.innerWidth);

const currentScreenWidth = () =>{
    setWidthCount (() => window.innerWidth);
};

useEffect (() => {
    window.addEventListener("resize", currentScreenWidth)

    // window.removeEventListener("resize", currentScreenWidth)

},)


console.log(window.innerWidth);

  return (

    <div>
<h2>The size of window is <span> {widthCount}</span></h2>
    </div>
  );
};


export default Effect;
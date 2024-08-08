import React, { memo } from "react";

function Counter({CountValue, onClick}) {

    // console.log('this is getting rendered', CountValue, onClick)
  return (
    <div>
          <p>{CountValue}</p>
          <button onClick={onClick}>Click</button>
    </div>
  );
}

export default memo(Counter);

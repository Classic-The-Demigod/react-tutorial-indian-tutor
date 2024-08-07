import React, { useEffect, useRef } from "react";

function Hooks() {
  const countValue = useRef(0);
  const divElementRef = useRef();
  const inputRefElement = useRef();
  function handleClick() {
    countValue.current++;
    console.log(countValue.current);
  }

  useEffect(() => {
    const getDivReference = divElementRef.current;
    inputRefElement.current.focus();
    getDivReference.style.color = "red";

    setTimeout(() => {
      getDivReference.style.color = "green";
      setTimeout(() => {
        getDivReference.style.color = "blue";
      }, 1000);
    }, 2000);
    console.log(getDivReference);
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Use ref, Use callback and Use memo hooks</h1>
      <h1>{countValue.current}</h1>
      <button onClick={handleClick}>Click Me</button>
      <div ref={divElementRef}>Some radom text</div>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        ref={inputRefElement}
      />
    </div>
  );
}

export default Hooks;

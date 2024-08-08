import React, { useCallback, useState } from "react";
import Counter from "./Counter";

function CallbackExample() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const memoriseSetCountOneFunc = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  );
  const memoriseSetCountTwoFunc = useCallback(
    () => setCountTwo(countTwo + 1),
    [countTwo]
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Use Callback</h1>
      <Counter
        CountValue={countOne}
        onClick={memoriseSetCountOneFunc}
      />
      <Counter
        CountValue={countTwo}
        onClick={memoriseSetCountTwoFunc}
      />
    </div>
  );
}

export default CallbackExample;

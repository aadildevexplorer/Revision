import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount() {
      console.log("multiCount");
      return count * 5;
    },
    [count],
  );
  return (
    <div style={{ textAlign: "center" }}>
      <h1>useMemo hook in react</h1>
      <h2>Count :{count}</h2>
      <h2>Item :{item}</h2>
      <h2>{multiCountMemo}</h2>

      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setItem(item * 10)}>Item</button>
    </div>
  );
};

export default UseMemo;

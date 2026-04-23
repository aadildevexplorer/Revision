import { useState, useDebugValue } from "react";
import React from "react";

export const Child = React.memo(({ count }) => {
  console.log("Child render");
  return <div style={{ color: "red" }}>{count}</div>;
});

function Parent() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useDebugValue(isOnline ? "Online 🟢" : "Offline 🔴");

  return isOnline;
}
  return (
    <>
      {/* only Parent compo render hoga  */}
      <Child count={count} />

      {/* Parent or child dono compo render hoga  */}
      {/* <Child count={count} name={name} /> */}

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input onChange={(e) => setName(e.target.value)} />
    </>
  );
}
export default Parent;

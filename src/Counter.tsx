import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add One</button>
      <div role={"contentinfo"}>Count is {count}</div>
    </div>
  );
};

export default Counter;

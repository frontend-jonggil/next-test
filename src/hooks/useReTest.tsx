import { useState } from "react";

export function useReTest() {
  const [temp] = useState(0);

  return { MyTopComponent, MyMiddleComponent };
}

function MyTopComponent({ count = 0 }) {
  return (
    <div>
      <div>나는 탑</div>
      {count}
      <button onClick={() => {}}>count</button>
    </div>
  );
}

function MyMiddleComponent({ count = 0 }) {
  return (
    <div>
      <div>나는 미들</div>
      {count}
      <button onClick={() => {}}>count</button>
    </div>
  );
}

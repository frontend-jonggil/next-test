import {
  useCount,
  useOnCount,
  useResetCount,
} from "@/_context/use-temp-context";
import { useEffect } from "react";

export default function Test() {
  const count = useCount();
  const onCount = useOnCount();
  const resetCount = useResetCount();

  useEffect(() => {
    resetCount();

    console.log("나는 테스트에서 호출된 count: ", count);

    return () => {
      resetCount();
      console.log("test unmount");
    };
  }, []);

  return (
    <>
      <span>test</span>
      <p> test - {count}</p>
      <button type="button" onClick={onCount}>
        클릭
      </button>
    </>
  );
}

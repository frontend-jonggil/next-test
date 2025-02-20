import { useEffect, useRef, useState } from "react";

function useTest(routeValue: string, key) {
  const test = useRef<string>();

  const [adData, setAdData] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (test.current === routeValue) {
      console.log("나는 중복", routeValue, key);
      return;
    }

    console.log("나는 호출", test.current, routeValue, key);
    test.current = routeValue;
    console.log("나는 호출222", test.current, routeValue, key);
  }, [routeValue, key]);
  console.log(test.current, 123123, key);

  return { adData, count, setCount };
}

export default useTest;

// function MiddleComponent() {
//   return <div>나는 미들</div>;
// }

// function MiddleComponent() {
//   return <div>나는 미들</div>;
// }

export const usePrevious = <TValue,>(value: TValue): TValue => {
  const ref = useRef<TValue>(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export const useIsChanged = (value: unknown) => usePrevious(value) !== value;

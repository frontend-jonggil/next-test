import {
  useCount,
  useOnCount,
  useResetCount,
} from "@/_context/use-temp-context";
import { Parent } from "@/components/parent";
import { useRouter } from "next/router";
import { useEffect } from "react";

/**
 * {@link Parent}
 */

export default function Home() {
  const count = useCount();
  const onCount = useOnCount();
  const resetCount = useResetCount();

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     resetCount();
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //     resetCount();
  //   };
  // }, []);

  useEffect(() => {
    resetCount();

    console.log("나는 홈에서 호출된 count: ", count);

    return () => {
      resetCount();
      console.log("home unmount");
    };
  }, []);

  return (
    <>
      <div>홈</div>
      <p> 홈 - {count}</p>
      <button type="button" onClick={onCount}>
        클릭
      </button>
    </>
  );
}

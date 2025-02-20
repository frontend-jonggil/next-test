import { ContextTempProvider } from "@/_context/use-temp-context";
import { End } from "@/components/End";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <ContextTempProvider
      key={router.asPath}
      value={{ count, onCount: handleCount, resetCount }}
    >
      <Component {...pageProps} />

      <div>
        <Link href={"/"}>홈으로</Link>
        <Link href={"/test"}>가나다로</Link>
      </div>
    </ContextTempProvider>
  );
}

export const usePageInitialization = () => {
  const [count, setCount] = useState(0);
  const triggerRef = useRef(false);

  useEffect(() => {
    if (triggerRef.current) {
      return;
    }

    console.log("페이지 진입 시 최초 1회 실행");
    setCount((prev) => prev + 1);
    triggerRef.current = true;
  }, []);

  return { count };
};

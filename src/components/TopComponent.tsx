import useTest from "@/hooks/useTest";
import { useRouter } from "next/router";

function TopComponent() {
  const router = useRouter();

  const { adData, count, setCount } = useTest(router.asPath, "탑");

  return (
    <div>
      <div>나는 탑</div>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev + 1)}>count</button>
    </div>
  );
}

export default TopComponent;

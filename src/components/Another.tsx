import { useTemp } from "@/hooks/testContext";
import { useReTest } from "@/hooks/useReTest";

export function Another() {
  const { data } = useTemp("어나더");

  return (
    <div>
      <div>나는 어나더</div>
      {data}
    </div>
  );
}

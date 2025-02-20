import { useTemp } from "@/hooks/testContext";
import { useReTest } from "@/hooks/useReTest";

export function Other() {
  const { data } = useTemp("아더");

  return (
    <div>
      <div>나는 아더</div>
      {data}
    </div>
  );
}

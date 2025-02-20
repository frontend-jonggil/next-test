import { useEffect } from "react";

export function End() {
  useEffect(() => {
    console.log("end mount@@@");
  }, []);

  return <div>end end</div>;
}

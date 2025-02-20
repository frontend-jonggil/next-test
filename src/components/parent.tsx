import { useEffect } from "react";

export function Parent() {
  useEffect(() => {
    console.log("parent!!!!!");

    return () => {
      console.log("parent unmount !!!!!");
    };
  }, []);

  return <div>{123}</div>;
}

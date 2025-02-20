import { createSafeContext } from "./create-safe-context";

type ContextData = {
  data: number;
  handleData: () => void;
};

export const [ContextProvider, useContext] =
  createSafeContext<ContextData>("tempContext");

export function useTemp() {
  return useContext();
}

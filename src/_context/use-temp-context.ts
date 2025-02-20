import { createSafeContext } from "./create-safe-context";

interface ContextData {
  count: number;
  onCount: () => void;
  resetCount: () => void;
}

export const [ContextTempProvider, useContext] =
  createSafeContext<ContextData>("tempContext");

export function useCount() {
  return useContext().count;
}

export function useOnCount() {
  return useContext().onCount;
}

export function useResetCount() {
  return useContext().resetCount;
}
// ...Context를 반환하는 커스텀훅

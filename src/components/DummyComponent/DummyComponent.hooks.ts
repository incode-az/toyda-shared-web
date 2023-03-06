import { useState } from "react";
import { useTest } from "../../hooks";

export function useDymmmyComponent() {
  const [counter, setCounter] = useState(0);

  const test = useTest("kek");

  return { counter, setCounter, test };
}

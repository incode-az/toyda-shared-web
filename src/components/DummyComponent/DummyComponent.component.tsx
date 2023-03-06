import styles from "./styles.module.scss";

import { useDymmmyComponent } from "./DummyComponent.hooks";
import { Button } from "../Button";

export function DummyComponent() {
  const { counter, setCounter, test } = useDymmmyComponent();

  return (
    <div className={styles.wrapper}>
      <h1>
        {counter} {test}
      </h1>

      <Button text="Click" onClick={() => setCounter(counter + 1)} />
    </div>
  );
}

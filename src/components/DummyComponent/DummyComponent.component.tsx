import { useEffect } from 'react';

import { Button } from '../Button';

import { useDymmmyComponent } from './DummyComponent.hooks';

import styles from './styles.module.scss';

export function DummyComponent() {
  const { counter, setCounter, test } = useDymmmyComponent();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(test);
  }, [test]);

  return (
    <div className={styles.wrapper}>
      <h1>
        {counter} {test}
      </h1>

      <Button text="Click" onClick={() => setCounter(counter + 1)} />
    </div>
  );
}

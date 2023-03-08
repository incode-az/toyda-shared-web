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

  const someFunc = () => {
    // eslint-disable-next-line no-console
    console.log('someFunc');
  };

  return (
    <div className={styles.wrapper}>
      <h1>
        {counter} {test}
      </h1>

      <Button
        key={1}
        testProp="test"
        testProp2={() => someFunc()}
        text="Click"
        onClick={() => setCounter(counter + 1)}
      />
    </div>
  );
}

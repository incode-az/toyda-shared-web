import styles from './styles.module.scss';

type ButtonProps = {
  text: string;
  onClick: () => void;
  testProp?: string;
  testProp2?: () => void;
};

export function Button({ text, onClick, testProp, testProp2 }: ButtonProps) {
  return (
    <button className={styles.wrapper} type="button" onBeforeInput={testProp2} onClick={onClick}>
      {text} {testProp}
    </button>
  );
}

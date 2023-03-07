import styles from './styles.module.scss';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button type="button" className={styles.wrapper} onClick={onClick}>
      {text}
    </button>
  );
}

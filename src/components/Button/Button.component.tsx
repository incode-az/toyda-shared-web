import styles from "./styles.module.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export function Button({ text }: ButtonProps) {
  return <button className={styles.wrapper}>{text}</button>;
}

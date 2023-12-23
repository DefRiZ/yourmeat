import { Cart } from "./components/Cart/Cart";
import Menu from "./components/Menu/Menu";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.root}>
      <Cart />
      <Menu />
    </main>
  );
}

import Item from "../Item/Item";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.root}>
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Menu;

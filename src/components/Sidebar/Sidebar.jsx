import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <a href='#profile'>Profile</a>
      </div>
      <div className={styles.item}>
        <a href='#messages'>Messages</a>
      </div>
      <div className={styles.item}>
        <a href='#news'>News</a>
      </div>
      <div className={styles.item}>
        <a href='#music'>Music</a>
      </div>
      <div className={styles.item}>
        <a href='#settings'>Settings</a>
      </div>
    </nav>
  );
}

export default Sidebar;
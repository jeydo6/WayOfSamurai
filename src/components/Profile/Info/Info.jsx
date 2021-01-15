import styles from './Info.module.css';

const Info = () => {
  return (
    <div>
      <div className={styles.header}>
        <img src='https://domfotooboev.com.ua/home/products_images/0381.jpg' alt='' />
      </div>
      <div>
        Description
      </div>
    </div>
  );
}

export default Info;
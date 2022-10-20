import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Blog.module.css';

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page is {slug}</h1>
        <hr />
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          vero et itaque impedit, fugit minus ducimus aspernatur deserunt
          molestias iure natus recusandae nobis accusantium sed ut dolor ipsa
          assumenda quam?
        </div>
      </main>
    </div>
  );
};

export default slug;

import Link from 'next/link';
import React from 'react';
import styles from '../styles/Blog.module.css';
const blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> Hunting coders</h1>
        <p className={styles.description}>A blog for hunting coders</p>
        <div className='blogs'>
          <Link href='/blog/learn-javascript'>
            <div className={styles.blogItem}>
              <h3>How to learn javascript</h3>
              <p>This is just a dummy text</p>
            </div>
          </Link>

          <div className='blogItem'>
            <h3>How to learn javascript</h3>
            <p>This is just a dummy text</p>
          </div>
          <div className='blogItem'>
            <h3>How to learn javascript</h3>
            <p>This is just a dummy text</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default blog;

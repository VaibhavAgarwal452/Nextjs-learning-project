import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css';
import axios from 'axios';
const blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let { data } = await axios.get('http://localhost:3000/api/blogs');
    setPosts(data);
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> Hunting coders</h1>
        <p className={styles.description}>A blog for hunting coders</p>
        <div className='blogs'>
          {posts.map((item) => {
            return (
              <Link key={item.title} href={`/blog/${item.slug}`}>
                <div className={styles.blogItem}>
                  <h3>{item.title}</h3>
                  <p>{item.content.substr(0, 150)}...</p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default blog;

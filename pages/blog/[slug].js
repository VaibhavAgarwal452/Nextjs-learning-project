import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Blog.module.css';
import axios from 'axios';

const slug = (props) => {
  const [blog, setBlog] = useState(props.blog);

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   console.log(slug);
  //   fetchBlog(slug);
  // }, [router.isReady]);

  // const fetchBlog = async (slug) => {
  //   const { data } = await axios.get(
  //     `http://localhost:3000/api/getBlog?slug=${slug}`
  //   );
  //   setBlog(data);
  // };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page is {blog.title}</h1>
        <hr />
        <div>{blog.content}</div>
      </main>
    </div>
  );
};

export default slug;

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    `http://localhost:3000/api/getBlog?slug=${context.query.slug}`
  );
  return {
    props: { blog: data },
  };
}

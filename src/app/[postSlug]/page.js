import React from 'react';

import BlogHero from '@/components/BlogHero';
import { loadBlogPost } from '@/helpers/file-helpers';
import styles from './postSlug.module.css';
import { MDXRemote } from 'next-mdx-remote/rsc';

async function BlogPost({params}) {
  const {postSlug} = params;
  const {frontmatter, content} = await loadBlogPost(postSlug);
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

export default BlogPost;

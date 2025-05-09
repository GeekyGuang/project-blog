import React from 'react';

import BlogHero from '@/components/BlogHero';
import { loadBlogPost } from '@/helpers/file-helpers';
import styles from './postSlug.module.css';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { BLOG_TITLE } from '@/constants';
import { COMPONENT_MAP } from '@/helpers/mdx-components';

export async function generateMetadata(
  {params}
){
  const {postSlug} = params;
  const {frontmatter} = await loadBlogPost(postSlug);
  return {
    title: `${frontmatter.title} · ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  }
}

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
        <MDXRemote
          source={content}
          components={COMPONENT_MAP}
        />
      </div>
    </article>
  );
}

export default BlogPost;

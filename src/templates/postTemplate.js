import React from 'react';
import { graphql } from 'gatsby';

const Post = ({ data }) => {
  const { markdownRemark } = data;
  const { title, date } = markdownRemark.frontmatter;
  const { html } = markdownRemark;

  return (
    <div>
        <div className="post-wrapper">
          <h1>{title}</h1>
          <div>
            <p>{date}</p>
          </div>
          <div
            className="blogpost"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
    </div>
  );
};

export default Post;

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
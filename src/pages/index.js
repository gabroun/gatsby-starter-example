import React from 'react';
import { Link, graphql } from 'gatsby';

class Index extends React.Component {
    render() {
        const {data} = this.props;
        const {edges} = data.allMarkdownRemark;

        return (
            <div>
                <h1>Hello World</h1>
                <h2>List of posts</h2>
                <ul>
                    {edges.map(edge => {
                        const {path, title} = edge.node.frontmatter;
                        return (
                            <li>
                                <Link to={path}>{title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Index;

export const query = graphql`
query posts {
    allMarkdownRemark{
        edges {
            node {
                frontmatter {
                    title
                    path
                }
            }
        }
    }
}
`;
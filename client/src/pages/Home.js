import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Grid, Card } from "semantic-ui-react";

import PostCard from "./../components/PostCard";

const ALL_POSTS = gql`
  query {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      commentCount
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(ALL_POSTS);

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>

      <Grid.Row>
        {loading ? (
          <Grid.Column>
            <h1>Loading Post</h1>
          </Grid.Column>
        ) : (
          data &&
          data.getPosts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: "24px" }}>
              <PostCard post={post}></PostCard>
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
};

export default Home;

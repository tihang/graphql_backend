import React from "react";
import { Card, Image, Button, Icon, Label } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const {
    body,
    createdAt,
    id,
    username,
    likeCount,
    commentCount,
    likes,
  } = post;

  const likePost = () => {
    console.log("Post liked ");
  };

  const commentOnPost = () => {
    console.log("Comment clicked");
  };

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
        <Card.Description as={Link} to={`/posts/${id}`}>
          {body}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* LIKE BUTTON */}
        <Button as="div" labelPosition="right" basic onClick={likePost}>
          <Button color="red" basic>
            <Icon name="heart" />
            Like
          </Button>
          <Label as="a" color="red" pointing="left" basic>
            {likeCount}
          </Label>
        </Button>
        {/* COMMENT BUTTON */}
        <Button as="div" labelPosition="right" basic onClick={commentOnPost}>
          <Button color="blue" basic>
            <Icon name="comments" />
            Comment
          </Button>
          <Label as="a" color="blue" pointing="left" basic>
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
};

export default PostCard;

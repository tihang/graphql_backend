const { AuthenticationError, UserInputError } = require("apollo-server");

const Post = require("../../models/Post");
const checkAuth = require("../../utils/check-auth");
const { update } = require("../../models/Post");

module.exports = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      const { username } = checkAuth(context);
      if (body.trim === "") {
        throw new UserInputError("Empty Comment", {
          errors: {
            body: "Comment body cannot not be empty",
          },
        });
      }

      const post = await Post.findById(postId);

      if (post) {
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString(),
        });
        return await post.save();
      } else throw new UserInputError("Post not found");
    },

    deleteComment: async (_, { postId, commentId }, context) => {
      const { username } = checkAuth(context);

      const post = await Post.findById(postId);

      if (post && post.comments) {
        const commentIndex = post.comments.findIndex((c) => c.id === commentId);

        try {
          if (post.comments[commentIndex].username === username) {
            post.comments.splice(commentIndex, 1);
            return await post.save();
          } else {
            throw new AuthenticationError(
              "Not authorized to delete the comment"
            );
          }
        } catch (err) {
          throw new UserInputError("Post or comment doesn't exist");
        }
      } else {
        throw new UserInputError("Post or comment doesn't exist");
      }
    },
  },
};

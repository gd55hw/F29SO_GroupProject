import PostsDAO from "../dao/postsDAO.js";

export default class PostsController {
  static async addPost(req, res, next) {
    try {
      const date = new Date();

      const dbResponse = await PostsDAO.addPost(
        req.body.userId, 
        req.body.text, 
        req.body.image, 
        date
      );
      res.json({ status: dbResponse });
    }
    catch (err) {
      res.status(500).json({ error: err });
    }
  }

  static async deletePost(req, res, next) {
    try {
      // TODO: Check if this the user's post (users should only be able to delete their own posts)

      const dbResponse = await PostsDAO.deletePost(
        req.query.postId, 
      );
      res.json({ status: dbResponse });
    }
    catch (err) {
      res.status(500).json({ error: err });
    }
  }
}

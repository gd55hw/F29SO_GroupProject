import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;

let postsColl;    // Will hold a reference to the 'posts' collection

export default class PostsDAO {
  // Gets a reference to the 'posts' collection and saves it in 'postsColl'
  static async injectDB(conn) {
    if (postsColl) {
      return;
    }

    try {
      postsColl = await conn.db(process.env.MASHUP_NS).collection("posts");
    }
    catch (err) {
      console.error("Error: Unable to connect to database");
      console.error(err.stack);
    }
  }

  
  // Gets the newest posts on the app. 
  // By default, the last 25 posts made on the app are returned.
  static async getPosts(maxPostCount = 25, postsToSkip = 0) {
    try {
      const options = {
        sort: { date: -1 }, 
        skip: postsToSkip, 
        limit: maxPostCount
      };

      let cursor = await postsColl.find({}, options);
      return cursor.toArray();
    }
    catch (err) {
      console.error("Error: Unable to get posts");
      console.error(err.stack);
      return [];
    }
  }

  static async addPost(userId, text, image, date) {
    try {
      const newPost = {
        user_id: userId, 
        text: text, 
        image: image, 
        date: date
      };

      return await postsColl.insertOne(newPost);
    }
    catch (err) {
      console.error("Error: Unable to add post");
      console.error(err.stack);
      return { error: err };
    }
  }

  static async deletePost(postId) {
    try {
      const dbResponse = await postsColl.deleteOne({
        _id: ObjectId(postId)
      });

      return dbResponse;
    }
    catch (err) {
      console.error("Error: Unable to delete post");
      console.error(err.stack);
      return { error: err };
    }
  }
}

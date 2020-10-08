import React from "react";
import { useParams } from "react-router-dom";

import postsData from "../../posts.json";

function PostView() {
  const params = useParams();
  const post = postsData.Posts.find((p) => p.id === parseInt(params.id));
  

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="mt-4">{post.title}</h1>
            <p className="lead">
              by
              <a href="#"> &nbsp;{post.subtitle2}</a>
            </p>
            <hr></hr>
            <p>Posted on {post.date}</p>
            <hr></hr>
            <img
              className="img-fluid rounded"
              src={post.CardMedia}
              alt=""
            ></img>
            <hr></hr>
            <p className="lead">{post.content}</p>

            <div className="card my-4">
              <h5 className="card-header">Leave a Comment:</h5>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <textarea className="form-control" rows="3"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostView;

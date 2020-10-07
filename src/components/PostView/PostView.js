import React from "react";
import PostsData from "../../posts.json";


var postsList = PostsData.Posts;

function PostView(props) {
  return (
    <div>
        {postsList.map((s) => {
            return (
                
                <div className="container" key={s.id}>
                <div className="row">
                  <div className="col-lg-12">
                    <h1 className="mt-4">{s.title}</h1>
                    <p className="lead">
                      by 
                      <a href="#"> &nbsp;{s.subtitle2}</a>
                    </p>
                    <hr></hr>
                    <p>Posted on {s.date}</p>
                    <hr></hr>
                    <img
                      className="img-fluid rounded"
                      src={s.CardMedia}
                      alt=""
                    ></img>
                    <hr></hr>
                    <p className="lead">
                    {s.content}
                    </p>
        
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
                
);
          })}

    </div>
  );
}

export default PostView;

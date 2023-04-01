import React, { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FaCommentAlt } from "react-icons/fa";

const Userbar = (props) => {
  const { postId } = props;

  const [isLike, setIsLike] = useState(false);
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [user, setUser] = useState(null);

  const [isComment, setIsComment] = useState(false);

  const getPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
  };

  const getComment = async (id) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
    const data = await res.json();
    return data;
  };
  const getPhoto = async (id) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?id=${id}`
    );
    const data = await res.json();
    return data;
  };
  const getUser = async (id) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users?id=${id}`
    );
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    const fetchFullPost = async (id) => {
      const newPost = await getPost(id);
      const newPhoto = await getPhoto(newPost.id);
      const newComment = await getComment(newPost.id);
      const newUser = await getUser(newPost.userId);
      setPost(newPost);
      setPhoto(newPhoto);
      setComment(newComment);
      setUser(newUser);
    };

    fetchFullPost(postId);
  }, [postId]);

  const userInfo = user && user[0];

  return (
    post &&
    user &&
    comment &&
    photo && (
      <div className="twitterContainer">
        <div className="twitterHeader">
          <div className="profileImage">
            {userInfo.name && userInfo.name.charAt(0).toUpperCase()}
          </div>
          <div className="userDetails">
            <h3>
              {userInfo.name && userInfo.name}

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png"
                className="verify"
                width={15}
              ></img>
            </h3>
            <p>@{userInfo.username && userInfo.username}</p>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/584px-Twitter-logo.svg.png"
              width={35}
            ></img>
          </div>
        </div>
        <div className="post-content">
          <h3>{post.title}</h3>
          <img className="main-img" src={photo[0].url}></img>
        </div>
        <div className="icons">
          <div className="heart-btn" onClick={() => setIsComment(!isComment)}>
            <FaCommentAlt />
          </div>
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/karl/retweet-12.png"
            className="icon"
          ></img>
          <div className="heart-btn" onClick={() => setIsLike(!isLike)}>
            {!isLike ? <MdFavoriteBorder /> : <MdFavorite />}
          </div>
          <img
            src="https://create.twitter.com/content/dam/create-twitter/articles/how-to/2021/ht0013/share.png"
            className="icon"
          ></img>
        </div>
        {isComment &&
          comment.map((com) => {
            return (
              <div className="comments-container">
                <div className="comments-header">
                  <div className="com-image"></div>
                  <div>
                    <h4>{com.name}</h4>
                    <p>{com.email}</p>
                  </div>
                </div>
                <p>{com.body}</p>
              </div>
            );
          })}
      </div>
    )
  );
};

export default Userbar;

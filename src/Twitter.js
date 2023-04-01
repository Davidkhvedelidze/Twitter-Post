import React, { useState, useEffect } from "react";
import "./App.css";

import { AiFillTwitterCircle } from "react-icons/ai";

import Userbar from "./Userbar";

const url = "https://jsonplaceholder.typicode.com/posts";

const Example = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [iseError, setIsError] = useState(false);
  // const [user, setUser] = useState();

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsError(true);
          setIsLoading(false);
          setPosts(resp.status);
          throw new Error(resp.status);
        }
      })
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <AiFillTwitterCircle className="loading-icon" />
      </div>
    );
  }
  if (iseError) {
    return <h2>{`Error: ${posts} `}</h2>;
  }

  // const fetchPosts = async () => {
  //   const usersData = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  //   const data = await usersData.json();
  //   setPosts(data);
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  return (
    <div>
      <div className="mother-container">
        {posts &&
          posts.map((post) => {
            return <Userbar key={post.id} postId={post.id} />;
          })}
        {/* <h1>{user}</h1> */}
      </div>
    </div>
  );
};
export default Example;

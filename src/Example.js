import React, { useState, useEffect } from "react";

import { books } from "./books";
import "./App.css";
import Userbar from "./Userbar";

const Example = () => {
  // const [persons, setPersons] = useState(books);

  // const removePerson = (id) => {
  //   console.log(id);
  //   const newPersons = persons.filter((person) => person.id !== id);
  //   setPersons(newPersons);
  // };

  // const [cardItem, setCardItem] = useState(0);

  const [resourceType, setResourceType] = useState("posts");
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/${resourceType}`
    );
    const usersData = await data.json();
    console.log(usersData);
    setUsers(usersData);
  };

  useEffect(() => {
    fetchUsers();
  }, [resourceType]);

  return (
    <div>
      <div className="header">
        <h1>Digital Institute</h1>
      </div>
      <div className="menuBar">
        <button className="btns" onClick={() => setResourceType("posts")}>
          Posts
        </button>
        <button className="btns" onClick={() => setResourceType("photos?id=5")}>
          Users
        </button>
        <button className="btns" onClick={() => setResourceType("comments")}>
          Comments
        </button>

        <button
          className="btns"
          onClick={() => setResourceType("comments?postId=1")}
        >
          Recodring
        </button>
      </div>
      {/* <h1 className="main-page">{resourceType}</h1> */}
      {users &&
        users.map((user) => {
          return (
            <Userbar
              key={user.id}
              userId={user.userId}
              body={user.body}
              title={user.title}
            />
          );
        })}
    </div>
  );
};

export default Example;

import React from "react";

import "./userBar.css";

const Userbar = ({ body, title, id, userId }) => {
  return (
    <div className="twitterContainer">
      <div className="twitterHeader">
        <div>
          <img
            src="https://via.placeholder.com/600/f66b97"
            width={60}
            className="profileImage"
          ></img>
        </div>
        <div className="userDetails">
          <h3>
            {userId}

            {id}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png"
              className="verify"
              width={15}
            ></img>
          </h3>
          <p>@username</p>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/584px-Twitter-logo.svg.png"
            width={35}
          ></img>
        </div>
      </div>
      <div className="titleContainer">
        <h3>{title}</h3>
      </div>
      <div className="icons">
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3212256/comment-text-icon-sm.png"
          width={25}
          className="icon"
        ></img>
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/karl/retweet-12.png"
          width={25}
          className="icon"
        ></img>
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3216380/heart-icon-md.png"
          width={25}
          className="icon"
        ></img>
        <img
          src="https://create.twitter.com/content/dam/create-twitter/articles/how-to/2021/ht0013/share.png"
          width={25}
          className="icon"
        ></img>
      </div>
    </div>
  );
};

export default Userbar;

{
  /* {persons &&
        persons.map((person) => {
          const { id, author, img } = person;
          return (
            <div className="item" key={id}>
            <h1>{id}</h1>
              <h1>{author}</h1>
              <img src={person.img}></img>
              <button type="button" onClick={() => removePerson(id)}>
                click here harder...............
                </button>
                </div>
                );
              })} */
}

// <button type="button" onClick={() => setPersons("")}>
//   click here
// </button>
// <br></br>
// <button type="button" onClick={() => setCardItem(cardItem + 1)}>
//   ++++++++++
// </button>
// <h1>{cardItem}</h1>
// <button type="newBtn" onClick={() => setCardItem(cardItem - 1)}>
//   --------------------
// </button>

{
  /* {users.map((user) => {
        return <pre>{JSON.stringify(user)}</pre>;
      })} */
}

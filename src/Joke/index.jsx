import React, { useState } from 'react';
import './style.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likesUp, setLikesUp] = useState(likes);
  const [likesDown, setLikesDown] = useState(dislikes);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          className="btn-like btn-like--up"
          onClick={() => setLikesUp(likesUp + 1)}
        ></button>
        <span className="likes-count likes-count--up">{likesUp}</span>
        <button
          className="btn-like btn-like--down"
          onClick={() => setLikesDown(likesDown + 1)}
        ></button>
        <span className="likes-count likes-count--down">{likesDown}</span>
      </div>
    </div>
  );
};

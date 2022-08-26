import React from 'react';

import MyButton from './UI/button/MyButton';

const PostItem = function (props) {
  // console.log(props);
  return (
    <div className="post">
      <div className="post-content">
        <strong>
          №{props.number}
        </strong>
        <br/>
        <strong>X = {props.post.f_x}, Y = {props.post.f_y}</strong>
        <p>Date: {props.post.f_time}</p>
      </div>
      <div className="post-btns">
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;

import React, { useState } from 'react';

import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = function ({ create }) {
  const [post, setPost] = useState({ f_x: '', f_y: '' });

  // onClick Event function
  const addNewPost = function (e) {
    e.preventDefault();
    // Create new object for Post
    const newPost = {
      ...post,
      f_time: Date.now(),
    };
    // Use Callback Function to modify Posts Array
    create(newPost);
    // Clean input text in form
    // useState({ f_x: '', f_y: '' });
  };

  return (
    <div>
      <form>
        {/* Управляемый компонент */}
        <MyInput
          type="text"
          placeholder="X"
          value={post.f_x}
          onChange={(e) => {
            setPost({ ...post, f_x: e.target.value });
          }}
        />
        <MyInput
          type="text"
          placeholder="Y"
          value={post.f_y}
          onChange={(e) => {
            setPost({ ...post, f_y: e.target.value });
          }}
        />
        {/* <input ref={bodyInputRef} type="text" /> */}
        {/* Неуправляемый компонент */}
        {/* <MyInput ref={bodyInputRef} type="text" placeholder="описание" /> */}
        <MyButton onClick={addNewPost}>Создать</MyButton>
      </form>
    </div>
  );
};

export default PostForm;

import React, {useState} from 'react';

// Import CSS
import './styles/App.css';

// Import Components
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';
import MyButton from './components/UI/button/MyButton';
import {usePosts} from './hooks/usePosts';
import axios from 'axios';

function App() {
  // Hooks
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  //External Hook to Sort anf filter
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  // Function to fetch data from API server
  async function fetchPosts() {
    const response = await axios.get('http://localhost:4000/api/coords');
    // console.log(response.data);
    setPosts(response.data);
  }

  // Callback function to remove post from array
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.f_id !== post.f_id));
  };

  return (
    <div className="App">
      <br/>
      <MyButton onClick={() => fetchPosts()}>Загрузить координаты c API</MyButton>
      <br/><br/>
      <PostFilter filter={filter} setFilter={setFilter}/>

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список координат с сервера"
      />
    </div>
  );
}

export default App;

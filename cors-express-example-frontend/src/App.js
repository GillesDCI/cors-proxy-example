import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import NewPostForm from './components/NewPost/NewPostForm';



function App() {
  return (
     <div>
       <PostList />
       <NewPostForm />
    </div>
  );
}

export default App;

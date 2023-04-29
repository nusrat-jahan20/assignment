import './App.css';
import Header from './components/Header/Header.jsx';
import Blogs from './components/Blogs/Blogs';
import BlogQA from './components/QnABlogPage/QnABlogPage';

function App() {
    return (
        <div className="App">
            <div className="container-md">
                <Header></Header>
                <hr />
                <Blogs></Blogs>
                <hr />
                <BlogQA></BlogQA>
            </div>
        </div>
    );
}

export default App;

import React, { useEffect, useState } from 'react';
import {
    addBookmark,
    getBookmark,
    getMarkedBlogs,
    addMarkedBlog,
} from '../../utilities/functions.js';
import Blog from './Blog/Blog.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

const Blogs = () => {
    const [blog, setBlogs] = useState([]);
    const [Bookmark, setBookmarks] = useState([]);
    const [totalReadTime, setTotalReadTime] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    useEffect(() => {
        const savedBookmarks = getBookmark();
        const storedBookmarks = [];
        if (blog.length) {
            for (const id in savedBookmarks) {
                const addedBlog = blog.find((blog) => blog.id === id);
                if (addedBlog) {
                    const quantity = savedBookmarks[id];
                    const updatedBlog = { ...addedBlog, quantity: quantity };
                    storedBookmarks.push(updatedBlog);
                }
            }
            setBookmarks(storedBookmarks);
        }
    }, [blog]);

    useEffect(() => {
        const savedMarkedBlogs = getMarkedBlogs();
        const storedMarkedBlogs = [];
        if (blog.length) {
            for (const id in savedMarkedBlogs) {
                const addedBlog = blog.find((blog) => blog.id === id);
                if (addedBlog) {
                    const quantity = savedMarkedBlogs[id];
                    const updatedBlog = { ...addedBlog, quantity: quantity };
                    storedMarkedBlogs.push(updatedBlog);
                }
            }
            setTotalReadTime(storedMarkedBlogs);
        }
    }, [blog]);

    const handleMarkAsRead = (blog) => {
        let newMarkedBlog = [];
        const exists = totalReadTime.find((markedBlog) => markedBlog.id === blog.id);
        if (!exists) {
            blog.quantity = 1;
            newMarkedBlog = [...totalReadTime, blog];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = totalReadTime.filter((markedBlog) => markedBlog.id !== blog.id);
            newMarkedBlog = [...remaining, exists];
        }

        setTotalReadTime(newMarkedBlog);
        addMarkedBlog(blog.id);
    };

    const handleAddBookmark = (blog) => {
        let newBookmark = [];
        const exists = Bookmark.find((bookmark) => bookmark.id === blog.id);
        if (!exists) {
            newBookmark = [...Bookmark, blog];
        } else {
            const remaining = Bookmark.filter((bookmark) => bookmark.id !== blog.id);
            newBookmark = [...remaining, exists];
        }

        setBookmarks(newBookmark);
        addBookmark(blog.id);
    };

    return (
        <div className="row gx-lg-5 mt-5">
            <div className="col-lg-8">
                {blog.map((blog) => (
                    <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddBookmark={handleAddBookmark}
                        handleMarkAsRead={handleMarkAsRead}
                    ></Blog>
                ))}
            </div>
            <div className=" col-lg-4">
                <Sidebar
                    Bookmark={Bookmark}
                    totalReadTime={totalReadTime}></Sidebar>
            </div>
        </div>
    );
};

export default Blogs;

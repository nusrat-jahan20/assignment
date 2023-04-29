import React, { useState, useEffect } from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = (props) => {
    const handleAddBookmark = props.handleAddBookmark;
    const handleMarkAsRead = props.handleMarkAsRead;
    const { authorName, blogTitle, authorImg, coverImg, readTime, publishDate, tags } = props.blog;
    const [daysAgo, setDaysAgo] = useState(0);

    useEffect(() => {
        const today = new Date();
        const publishDate = new Date(props.blog.publishDate);
        const diff = today - publishDate;
        const days = diff / (1000 * 60 * 60 * 24);
        setDaysAgo(Math.floor(days));
    }, [props.blog.publishDate]);

    const notify = (id) => {
        if (JSON.parse(localStorage.getItem('bookmarks'))[id] > 1) {
            toast.warning('Already bookmarked', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (JSON.parse(localStorage.getItem('bookmarks'))[id] === 1) {
            toast.success('Bookmarked', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="mb-5">
            <img className="img-fluid rounded-3" src={coverImg} alt="" />
            <div className="height d-flex justify-content-between mt-4">
                <div className="d-flex">
                    <img className="img-fluid h-75 rounded-circle" src={authorImg} alt="" />
                    <div className="ps-4">
                        <h6>{authorName}</h6>
                        <span>{publishDate}</span>
                        <span>({daysAgo} days ago)</span>
                    </div>
                </div>
                <div className="mt-3">
                    <span>{readTime} min read</span>
                    <span
                        className="btn"
                        onClick={() => {
                            handleAddBookmark(props.blog);
                            notify(props.blog.id);
                        }}
                    >
                        <FontAwesomeIcon icon={faBookmark} />
                    </span>
                    <ToastContainer />
                </div>
            </div>

            <h2 className="fw-bolder pb-3">{blogTitle}</h2>

            <div className="d-block my-2">
                {tags.map((tag) => (
                    <span key={tag}>#{tag} </span>
                ))}
            </div>

            <a className="point my-2 d-inline-block" onClick={() => handleMarkAsRead(props.blog)}>
                Mark as read
            </a>
            <hr className="my-4" />
        </div>
    );
};

export default Blog;

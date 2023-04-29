import React from 'react';
import './Sidebar.css';

const Sidebar = ({ Bookmark, totalReadTime }) => {
    const quantity = Bookmark.length || 0;
    let totalTimeSpentReading = 0;

    for (let i = 0; i < totalReadTime.length; i++) {
        const time = totalReadTime[i].readTime * totalReadTime[i].quantity;
        totalTimeSpentReading += time;
    }

    return (
        <div className="h-100">
            <div className="spend-time d-flex justify-content-between align-items-center">
                <h4 className="fw-bolder">Spent time on read : {totalTimeSpentReading} min</h4>
            </div>
            <div className="bookmarked-blogs justify-content-between align-items-start">
                <h4 className="fw-bolder mb-4">Bookmarked Blogs: {quantity}</h4>
                <div className="d-flex flex-column ">
                    {Bookmark.map((bookmark) => (
                        <div className="single-blog" key={bookmark.id}>
                            <span>{bookmark.blogTitle}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

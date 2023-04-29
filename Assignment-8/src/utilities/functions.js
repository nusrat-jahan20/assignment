const addBookmark = (id) => {
    let bookmarks = getBookmark();
    const bookmarksQuantity = bookmarks[id];

    if (!bookmarksQuantity) {
        bookmarks[id] = 1;
    } else {
        const newQuantity = bookmarksQuantity + 1;
        bookmarks[id] = newQuantity;
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
};

const getBookmark = () => {
    let bookmarks = {};

    const storedBookmark = localStorage.getItem('bookmarks');
    if (storedBookmark) {
        bookmarks = JSON.parse(storedBookmark);
    }
    return bookmarks;
};

const addMarkedBlog = (id) => {
    let markedBlogs = getMarkedBlogs();
    const markedBlogsQuantity = markedBlogs[id];

    if (!markedBlogsQuantity) {
        markedBlogs[id] = 1;
    } else {
        const newQuantity = markedBlogsQuantity + 1;
        markedBlogs[id] = newQuantity;
    }

    localStorage.setItem('markedBlogs', JSON.stringify(markedBlogs));
};

const getMarkedBlogs = () => {
    let markedBlogs = {};

    const storedMarkedBlogs = localStorage.getItem('markedBlogs');
    if (storedMarkedBlogs) {
        markedBlogs = JSON.parse(storedMarkedBlogs);
    }
    return markedBlogs;
};

export { addBookmark, getBookmark, addMarkedBlog, getMarkedBlogs };

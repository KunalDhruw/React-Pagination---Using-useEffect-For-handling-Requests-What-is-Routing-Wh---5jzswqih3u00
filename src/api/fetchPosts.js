const fetchPosts = async (page, limit) => {
    // optionally write fetching logic here or somewhere else
    let url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;
    return fetch(url);
};

export { fetchPosts }

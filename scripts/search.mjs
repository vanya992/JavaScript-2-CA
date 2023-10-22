
export function searchPosts(posts, searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    return posts.filter(post => {
        const title = post.title.toLowerCase();
        const body = post.body ? post.body.toLowerCase() : '';
        return title.includes(searchTerm) || body.includes(searchTerm);
    });
}

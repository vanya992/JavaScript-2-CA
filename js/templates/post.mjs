
export function postTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerText = postData.title;

    if (postData.media) {
        const img = document.createElement("img");
        img.src = post.media;
        img.alt = postData.title;
        post.append(img)
    }

    return post;
}


export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData))
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate))
}
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const oldagramFeed = document.querySelector(".main-posts");
let listPosts =[]

for (let i = 0; i < posts.length; i++) {
    listPosts += `<section>
                <div class="user-header">
                    <img class="user-img" src="${posts[i].avatar}"/>
                    <div class="user-info">     
                        <p class="user-name">${posts[i].name}</p>
                        <address class="user-address">${posts[i].location}</address>
                    </div>
                </div>
                <img class="post-img" src="${posts[i].post}"/>
                <div class="icons-actions">
                    <img class="icons-action" id="like-btn${i}" src="images/icon-heart.png" alt="black icons of heart"/>
                    <img class="icons-action" src="images/icon-comment.png" alt="black icon for comment"/>
                    <img class="icons-action" src="images/icon-dm.png" alt="black icon for sending"/>
                </div>
                <div class="engagements">
                    <p class="likes" id="likes${i}">${posts[i].likes} likes</p>
                    <p class="comment"><span class="user-name commenter-name">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
            </section>`

    oldagramFeed.innerHTML = listPosts
}



const likeBtn0 = document.querySelector("#like-btn0");
const likeBtn1 = document.querySelector("#like-btn1");
const likeBtn2 = document.querySelector("#like-btn2");

likeBtn0.addEventListener("click", () => {
    let likesEl = document.querySelector("#likes0");
    posts[0].likes++
    likesEl.textContent = posts[0].likes +" likes";
})


likeBtn1.addEventListener("click", () => {
    let likesEl = document.querySelector("#likes1");
    posts[1].likes++
    likesEl.textContent = posts[1].likes + " likes";
})

likeBtn2.addEventListener("click", () => {
    let likesEl = document.querySelector("#likes2");
    posts[2].likes++
    likesEl.textContent = posts[2].likes +" likes";
})

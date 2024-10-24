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

//Avatars
const avatars = posts.map(post => post.avatar);

//Names
const names = posts.map(post => post.name);

//Locations
const locations = posts.map(post => post.location);

//Posts
const postsImages = posts.map(post => post.post);

//Likes
const likes = posts.map(post => post.likes);

//Usernames
const usernames = posts.map(post => post.username);

//Comments
const comments = posts.map(post => post.comment);

//First Post 

document.getElementsByClassName("avatar-vincent")[0].src = avatars[0]
document.getElementsByClassName("name")[0].innerHTML = names[0]
document.getElementsByClassName("location")[0].innerHTML = locations[0]
document.getElementsByClassName("image-post")[0].src = postsImages[0]
document.getElementsByClassName("likes")[0].innerHTML = likes[0]
document.getElementsByClassName("username")[0].innerHTML = usernames[0]
document.getElementsByClassName("comment")[0].innerHTML = comments[0]

//Second Post
document.getElementsByClassName("avatar-gustave")[0].src = avatars[1]
document.getElementsByClassName("name2")[0].innerHTML = names[1]
document.getElementsByClassName("location2")[0].innerHTML = locations[1]
document.getElementsByClassName("image-post-2")[0].src = postsImages[1]
document.getElementsByClassName("likes2")[0].innerHTML = likes[1]
document.getElementsByClassName("username2")[0].innerHTML = usernames[1]
document.getElementsByClassName("comment2")[0].innerHTML = comments[1]

//Third Post
document.getElementsByClassName("avatar-joseph")[0].src = avatars[2]
document.getElementsByClassName("name3")[0].innerHTML = names[2]
document.getElementsByClassName("location3")[0].innerHTML = locations[2]
document.getElementsByClassName("image-post-3")[0].src = postsImages[2]
document.getElementsByClassName("likes3")[0].innerHTML = likes[2]
document.getElementsByClassName("username3")[0].innerHTML = usernames[2]
document.getElementsByClassName("comment3")[0].innerHTML = comments[2]
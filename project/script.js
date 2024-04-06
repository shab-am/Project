var users = [
    {
        profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        displayPic: "https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        pendingMessage: 4,
        location: "Delhi, India",
        name: "Shabnam",
        age: 20,
        interests: ["music", "painting"],
        bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nostrum, quia, voluptatibus quidem voluptatum ut voluptate aperiam assumenda tempore.",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        displayPic: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmVtYWxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        pendingMessage: 4,
        location: "Mumbai, India",
        name: "Shaziya",
        age: 24,
        interests: ["music", "painting"],
        bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nostrum, quia, voluptatibus quidem voluptatum.",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        displayPic: "https://images.unsplash.com/photo-1607569708758-0270aa4651bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
        pendingMessage: 4,
        location: "Lucknow, India",
        name: "Shaguftha",
        age: 26,
        interests: ["music", "painting"],
        bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nostrum, quia, voluptatibus quidem voluptatum ut voluptate aperiam assumenda.",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        displayPic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
        pendingMessage: 4,
        location: "Chennai, India",
        name: "Uzma",
        age: 27,
        interests: ["music", "painting"],
        bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nostrum, quia, voluptatibus quidem voluptatum ut voluptate aperiam assumenda tempore quos quibusdam.",
        isFriend: null
    },
];

function select(elem){
    return document.querySelector(elem);
}

var curr=0;

(function setInitial(){
    select(".maincard img").src=users[curr].displayPic;
    select(".incomingcard img").src=users[curr+1].displayPic;
    select(".prflimg img").src=users[curr].profilePic;
    curr=2;
})();
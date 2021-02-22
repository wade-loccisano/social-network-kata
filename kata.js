const socialNetwork = module.exports;

const db = [
    {
        id: 1,
        name: 'Alice',
        posts: [
            'I love the weather today.',
        ]
    },
    {
        id: 2,
        name: 'Bob',
        posts: [
            'Darn! We lost!',
            'Good game though.'
        ]
    },
    {
        id: 3,
        name: 'Charlie',
        posts: [
            'I\'m in New York today! Anyone wants to have a coffee?'
        ]
    }
];

// misc helpers
socialNetwork.getUserPostsById = function (userId) {
    let posts = [];
    for (let user of db) {
        if (user.id === userId) {
            posts = user.posts;
        }
    }
    return [...posts].reverse(); 
}

// view own timeline
socialNetwork.viewOwnTimeline = function () {
    const currentUserId = db[0].id; // hardcoded to Alice for now
    return socialNetwork.getUserPostsById(currentUserId);
}

// view bob's timeline
socialNetwork.viewOthersTimeline = function () {
    const userId = db[1].id // hardcoded for Bob
    return socialNetwork.getUserPostsById(userId);
}

// view all followed timelines
socialNetwork.viewFollowedTimelines = function () {
    const postList = [];

    for (let i = 0; i < db.length; i++) {
        for (let j = 0; j < db[i].posts.length; j++) {
            postList.push({
                name: db[i].name,
                post: db[i].posts[j]
            });
        }
    }
    return postList.reverse();
}



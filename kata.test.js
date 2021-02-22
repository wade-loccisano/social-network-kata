const { expect, test } = require("@jest/globals");
const socialNetwork = require("./kata.js");

// publishing
test('Alice should be able to view her timeline', () => {
  const posts = socialNetwork.viewOwnTimeline();
  expect(posts).toStrictEqual(['I love the weather today.'])
})

// timeline
test('Alice can view Bob\'s Timeline', () => {
  const posts = socialNetwork.viewOthersTimeline();
  expect(posts).toStrictEqual(['Good game though.', 'Darn! We lost!'])
})

// following
test('Charlie can see all user\'s posts', () => {
  const posts = socialNetwork.viewFollowedTimelines();
  expect(posts).toStrictEqual(
    [
      { name: 'Charlie', post: 'I\'m in New York today! Anyone wants to have a coffee?' },
      { name: 'Bob', post: 'Good game though.' },
      { name: 'Bob', post: 'Darn! We lost!' },
      { name: 'Alice', post: 'I love the weather today.' }
    ]
  )
})

// misc
test('getUserPosts returns a list of the users posts when given an id', () => {
  const userId = 1;
  const posts = socialNetwork.getUserPostsById(userId);
  expect(posts).toStrictEqual(['I love the weather today.'])
})
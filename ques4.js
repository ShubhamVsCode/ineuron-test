// What is callback hell? How do you overcome callback hell? Give code examples for each.

// Callback hell is the situation when the code that relies heavily on callbacks becomes unreadable and difficult to maintain.
// This often occurs when dealing with asynchronous operations in JavaScript.

async function getUser(username) {
  const user = await fetch(`/api/users/${username}`);
  return user;
}

async function getAge(userId) {
  const userAge = await fetch(`/api/users/${userId}/age`);
  return userAge;
}

async function getAllUserWithAge(age) {
  const users = await fetch(`/api/users/${age}`);
  return users;
}

const getAgeOfCurrentUser = async () => {
  const user = await getUser("User");
  const age = await getAge(user?._id);
  const allUserWithAge = await getAllUserWithAge(age);
};

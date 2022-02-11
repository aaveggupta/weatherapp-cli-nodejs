// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// Synchronous Callback Functions
const greeting = (name) => {
  alert(name);
};

// Asynchronous Callback Functions
setTimeout(() => {
  console.log("Two seconds are up");
}, 2000);

// If we wanna call a function and inside that there is something which give result after some delay, then instead of returning the result, we have to pass another function to that function and get the result as an argument!

const add = (a, b) => {
  setTimeout(() => {
    return a + b;
  }, 2000);
};

const ans = add(3, 5); // Ans will store undefined as first the call stack (main) will be executed first, then the asynchronous functions will be executed
console.log(ans);

// Correct Way -> we have to pass another function as an argument to get the result asynchronously
const addUsingCallback = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};

addUsingCallback(3, 5, (result) => {
  console.log(result);
});

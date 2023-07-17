console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 0);
});

promise1.then((res) => console.log(res));
promise2.then((res) => console.log(res));
promise3.then((res) => console.log(res));

console.log("End");

// Explanation:

// The above code will log the following
/*
    Start
    End
    Timeout
    Promise 3 resolved
    Promise 1 resolved
    Promise 2 resolved
*/

/*

    first the normal "Start" will be called and as this will be not delayed by any means so it will be printed immediately
    then the javascript will go to next line but it will be delayed because of "setTimeout" as it sees the setTimeout it will be going to call stack from there the javascript will go to next line
    there it will see the Promise so it immediately returns a "Promise{ <pending> }" which will be executed after we call .then() method on the promise
    after that the promises will be resolved thorough the setTimeout function which will be executed after the time given in that
    so it will be delayed so in that time the console.log("End") will be printed
    and then after the first setTimeout function will be executed
    after that the first promise which has lesser timeout will be excetued
    so in the Promise Case :
    first it will print "Promise 3 resolved" because it has lesser timeout than promise1 and promise2
    then "Promise 1 resolved" because it has lesser timeout than promise2
    then at last "Promise 2 resolved"

*/

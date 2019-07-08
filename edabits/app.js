//subReddit("https://www.reddit.com/r/funny/") ➞ "funny"

const subReddit = (str) => {
    return str.slice(-7)
}

console.log(subReddit("https://www.reddit.com/r/funny/"))


console.log("hello world")
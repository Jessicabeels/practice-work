//subReddit("https://www.reddit.com/r/funny/") ➞ "funny"

const subReddit = (str) => {
    return str.slice(-7)
}

console.log(subReddit("https://www.reddit.com/r/funny/"))


console.log("hello worlds")

const checkPalindrome = (str) => {
    let arr = str.split('')
    let rev = arr.reverse()
    // return rev + " ///" + arr
    if (rev === arr){
        return true
    } else {
        return false
    }
}


console.log(checkPalindrome("scarrsysr"))

const palindromeCheck = (str) => {
    let rev = str.split('').reverse().join('')
    if (rev === str){
        return true
    } else {
        return false
    }
}

console.log(palindromeCheck('tiuqwethi'))
///science

const cityFacts = (city) => {
    return city.name + " has a population of " + city.population + " and is situated in " + city.continent
}


console.log(
cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
  }))
  
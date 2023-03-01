let tweet = "The simplest way to reduce your personal carbon footprint is to go vegan. Growing beef takes as much as 100 times more land than growing peas or soya to produce the same amount of protein. I’ve reduced my meat consumption to some local, organic grass-fed red meat or a roast chicken as an occasional treat once or twice a month. This allows me to enjoy meat as part of my diet at a more sustainable level."
//we have to find how many characters left to write or input
let remaining_char = 182 - parseInt(tweet.length);
console.log(`The remaining character after writing ${tweet} is ${remaining_char}`)
let new_tweet = tweet.slice(0,184);
console.log(`The new updated tweet is ${new_tweet}`);
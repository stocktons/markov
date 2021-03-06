/** Textual markov chain generator */
const fsp = require("fs/promises")

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words;
    // MORE CODE HERE - further study? 
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // check each word and then push the word that comes after it to the object at that word's key
    let markovChains = {}

    for (let i = 0; i < this.words.length; i++) {

      if (i === this.words.length - 1) {
        if (this.words[i] in markovChains && this.words[i + 1] === undefined) {
          markovChains[this.words[i]].push(null);
        } else {
          markovChains[this.words[i]] = [null];
        }

      } else {

        if (this.words[i] in markovChains) {
          markovChains[this.words[i]].push(this.words[i + 1])
        } else {
          markovChains[this.words[i]] = [this.words[i + 1]]
        }
      }
    }
    return markovChains;
  }

  /** return random text from chains */

  getText(numWords = 100) {
    let markovChains = this.makeChains();
    const RAND_START = randomIntFromInterval(0, this.words.length - 1);
    let startingWord = this.words[RAND_START];
    let text = startingWord;

    for (let i = 0; i < numWords - 1; i++) {

      let random = Math.floor(Math.random() * (markovChains[startingWord].length - 1))

      let word = markovChains[startingWord][random];

      if (word === null) {
        i--;
        continue;
      } else {
        text += ` ${word}`;
        startingWord = word;
      }
    }
    console.log(text)
    return text
  }
}



function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


module.exports = {

  MarkovMachine,
  randomIntFromInterval,
  // TEXT_FILE,

}
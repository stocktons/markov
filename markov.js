/** Textual markov chain generator */


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
    // MORE CODE HERE
  }
}

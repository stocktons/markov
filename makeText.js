/** Command-line tool to generate Markov text. */
const fsp = require("fs/promises")
const TEXT_FILE = process.argv[2]
const { MarkovMachine } = require('./markov')

async function start() {
  let contents = await fsp.readFile(TEXT_FILE, "utf8");
  let text = new MarkovMachine(contents);
  text.makeChains();
  text.getText();
}

start()
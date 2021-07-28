const { MarkovMachine } = require("./markov");

const testText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
Odio, magnam hic. Iure architecto, necessitatibus praesentium ratione fugit \
placeat impedit earum nostrum, aliquam molestias accusantium asperiores qui \
dolore eos laborum in. Numquam hic amet non nihil, quia eaque rerum \
possimus. Ea molestias dicta corporis ut nesciunt, placeat quo labore \
perspiciatis dolorem. Porro temporibus illo, modi neque fuga aut \
consequuntur amet? Eos. Veritatis eligendi expedita magni vero sequi delectus \
fuga omnis assumenda suscipit, error quasi? Aspernatur fugiat \
repellat, quod distinctio molestiae nam eos dolores dignissimos expedita \
laboriosam laborum porro labore laudantium alias?"

const mm = new MarkovMachine(testText);

test("markov machine should return the correct number of words", function () {
    mm.makeChains();

    let result = mm.getText(100).split(' ');
    console.log(`The result is ${result.length}`);
    expect(result.length).toEqual(100);

    let result2 = mm.getText(10).split(' ');
    console.log(`The result is ${result2.length}`);
    expect(result2.length).toEqual(10);
})
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAI>'
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function play() {
    state = 'play'
    number = getRandomInt(100);
    tries = 0;
    console.log('Guess what is the number between 1 and 100');
}

play();
readline.prompt();

readline.on('line', (line)=>{
    line = line.trim();
    switch (state) {
        case 'play': {
            let n = parseInt(line);
            if (isNaN(n)) {
                console.log('Please enter a valid integer [1:100]');
            }
            else {
                ++tries;
                if (number > n) {
                    console.log('The number is bigger');
                }
                else if (number < n) {
                    console.log('The number is smaller');
                }
                else {
                    console.log(`You guessed the number :-) [${number}] in ${tries} tries`);
                    console.log('Do you want to play again?');
                    state = 'again';
                }
            }
            
            break;
        }

        case 'again': {
            if (line == '' || line.toLowerCase() == 'yes' || line.toLowerCase() == 'y') {
                play();
            }
            else {
                readline.close();
            }

            break;
        }
    }

    readline.prompt();    

}).on('close', ()=>{
    console.log('Bye...have a nice day!');
    process.exit(0);
});

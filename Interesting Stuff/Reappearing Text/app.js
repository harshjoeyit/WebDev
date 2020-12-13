
const changeText = document.querySelector('.changeText');
const words = ['Build Websites', 'Play Basketball', 'Read Books']
const showCharTime = 120;
const waitBeforeErase = 500;

const setAsyncTimeout = (cb, timeout = 0) => new Promise(resolve => {
    setTimeout(() => {
        cb();
        resolve();
    }, timeout);
})

const printWord = async (word) => {
    for(let i=0; i<word.length; i++) {
        await setAsyncTimeout(() => {
            changeText.innerText = word.substr(0, i+1);
        }, showCharTime)
    }
}

const eraseWord = async (word) => {
    const len = word.length;
    for(let i=0; i<=word.length; i++) {
        await setAsyncTimeout(() => {
            changeText.innerText = word.substr(0, len-i);
        }, showCharTime)
    }
}

const doStuffAsync = async (word) => {
    await setAsyncTimeout(() => {
        printWord(word)
    }, word.length * showCharTime);

    await setAsyncTimeout(() => {

    }, waitBeforeErase);

    await setAsyncTimeout(() => {
        eraseWord(word)
    }, word.length * showCharTime);
}

const fireUpChangeText = async () => {
    let timeout = 0;
    
    for(let i=0; i<words.length; i++) {    
        await setAsyncTimeout(() => {
            doStuffAsync(words[i])
        }, timeout);
        
        timeout = 2 * showCharTime * words[i].length + 1000;
    }
}

const getExpectedTime = () => {
    let totalLen = words.reduce((total, curr) => 
        total += curr.length
    , 0)
    return totalLen * 2 * showCharTime + words.length * 1000;
}

fireUpChangeText()

setInterval(() => {
    fireUpChangeText()
}, getExpectedTime())

//Global Object

//Only going to run fucntion once after 3 sec
setTimeout(() => {
    console.log('Stopping the fucntion');
    clearInterval(int);
}, 3000);

//Will run function after every 1 sec

const int  = setInterval(() => {
    console.log('In the interval');
}, 1000)

console.log(__dirname);
console.log(__filename);
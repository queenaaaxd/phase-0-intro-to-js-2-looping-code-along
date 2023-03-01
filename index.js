// Code your solutions in this file

function writeCards(names, event) {
    let message = []; // empty array to hold the messages
     for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}
countDown(10);
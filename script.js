let name = '';
const prefix = ['the greatest', 'the mostest', 'the biggest', 'the hugest', 'the el chungo grandeist', 'the kingeyest', 'the queenyest'];
const adjective = ['most adorable', 'most attractive', 'most beautiful', 'most cute', 'most elegent', 'most gorgeous'];
const adjective2 = ['likeable', 'witty', 'sensible', 'trustworthy', 'sympathetic', 'generous', 'considerate'];
const descriptor = ['human', 'person', 'bastard', 'individual', 'fellow', 'chicken', 'dude', 'sod', 'chap(ette)'];

const randomPrefix = prefix => {
    return prefix[Math.floor(Math.random() *prefix.length)];
};

const randomAdjective = adjective => {
    return adjective[Math.floor(Math.random() *adjective.length)];
};

const randomAdjective2 = adjective2 => {
    return adjective2[Math.floor(Math.random() *adjective2.length)];
};

const randomDescriptor = descriptor => {
    return descriptor[Math.floor(Math.random() *descriptor.length)];
};


let positiveMessage = (name) => {   
console.log(`Hello ${name}, you are ${randomPrefix(prefix)}, ${randomAdjective(adjective)} and ${randomAdjective2(adjective2)} ${randomDescriptor(descriptor)} of all time :)`)
};
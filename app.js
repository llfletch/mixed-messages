let data = require('./data');

let findRandomArrayElement = array => {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

let findScriptures = (scriptures, keyWord) => {
  let foundScriptures = [];
  for (let i = 0; i < scriptures.length; i++)
    if (scriptures[i].quote.includes(keyWord))
      foundScriptures.push(scriptures[i]);
  return foundScriptures;
}

let topic = findRandomArrayElement(data.topics)
let bookOfMormonMatches = findScriptures(data.bookOfMormon, topic.keyWord);
let doctrineAndCovenantsMatches = findScriptures(data.doctrineAndCovenants, topic.keyWord);
let bookOfMormonMatch = findRandomArrayElement(bookOfMormonMatches);
let doctrineAndCovenantsMatch = findRandomArrayElement(doctrineAndCovenantsMatches);
console.log(`Today's scriptures are on ${topic.topic}`);
console.log(`Book of Mormon ${bookOfMormonMatch.ref} - ${bookOfMormonMatch.quote}`);
console.log(`Doctrine and Covenants ${doctrineAndCovenantsMatch.ref} - ${doctrineAndCovenantsMatch.quote}`);
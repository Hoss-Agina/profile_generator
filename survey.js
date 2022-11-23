const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name;
let activity;
let music;
let meal;
let age;
let sport;
let superpower;

rl.question('Whats your nickname? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  name = answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    activity = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      music = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        meal = answer;
        rl.question('how old are you? ', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          age = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            sport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              superpower = answer;
              console.log(`\n His name is ${name} which is such a unqiue name. His favorite meal is ${meal} which is exquisite and his favorite activity is ${activity} which is awesome! He is ${age} old and loves to listen to ${music}. His favorite sport is ${sport} which is great because sports are extremely entertaining. His superpower is ${superpower}.\n `);
              rl.close();
            });
          });
        });
      });
    });
  });
});





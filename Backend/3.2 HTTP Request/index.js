import express from 'express';
const app = express();
const port = 3000;
const name = 'John';
const citizen = 'Kenya';
const contacts = ['xxx.yerfdog.com', '+254700000000'];

app.get('/home', (req, res) => {
  res.send('<h1>Hello World! Welcome to my home page</h1>');
});

app.get('/about', (req, res) => {
  res.send(`<h2>My name is ${name} from ${citizen}.</h2>`);
});

app.get('/contact', (req, res) => {
  res.send(`<h3>Please contact me at ${contacts[0]} or ${contacts[1]}</h3>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
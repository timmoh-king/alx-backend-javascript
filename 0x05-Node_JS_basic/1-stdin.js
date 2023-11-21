/*
* Create a program named 1-stdin.js that will be executed through command line:
*/

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
    console.log(`chunk: ${chunk}`);
  }
});

process.stdout.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

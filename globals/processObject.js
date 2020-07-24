console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

const [, , , article, method, dataType] = process.argv;
console.log(
  `In this array I skip the first three elements and I want the words: ${article} ${method} ${dataType}`
);

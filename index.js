// TO GET SIMPLE INPUT FROM USER
// console.log(process.argv);

// const fs = require("fs");
// const input = process.argv;
// fs.writeFileSync(input[2], input[3]);
// To Check Output
// node index.js hello.txt "Hello File"

// const fs = require("fs");
// const input = process.argv;

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
}

/* OUTPUT */
// [ 'C:\\Program Files\\nodejs\\node.exe', 'D:\\Node\\index.js' ]
// Too add file
// node index.js add orange.txt "Hello Orenge file here"
// Too remove file
// node index.js remove orange.text

const fs = require("fs");
const path = require("path");
const dirname = path.join(__dirname, "Files");
for (let i = 0; i < 5; i++) {
  fs.writeFileSync(`${dirname}/hello_${i}.txt`, `A Hello File`);
}

// TO READ FILES
/*
fs.readdir(dirname, (err, files) => {
  files.forEach((item) => {
    console.log(`READ FILES => ${item}`);
  });
});
*/

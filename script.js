import inquirer from "inquirer";
import { image } from "qr-image";
import { appendFile, writeFile } from "node:fs";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "user_input",
      message: "Enter something:",
      validate(value) {
        const pass = value.match("https://www.");
        if (pass) {
          return true;
        }
        return "Please enter a valid URL starting with 'https://www.'";
      },
    },
  ])
  .then((answers) => {
    const data = answers.user_input;
    const qr_svg = image(data, { type: "png" });
    appendFile("./output.txt", `\n${data}`, (err) => {
      if (err) throw err;
      console.log("File saved!");
    });
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));
    console.log("QR code generated and saved as qr_image.png");
  });

# Node.js QR Code Generator

A simple **CLI-based mini project** built with Node.js to practice using npm packages and the file system module.  
This project generates a QR code from user input and also saves the input locally in a text file.

---

## Features

- Take user input directly from the command line using **inquirer**.
- Generate a **QR code** from the input using **qr-image**.
- Save the user’s input to a text file locally using **fs** (file system module).

---

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/SukhvinderSingh77/nodejs-qr-image-generator.git
cd nodejs-qr-image-generator
npm install

Usage

Run the script using:

node script.js


Enter your text/URL in the CLI prompt.

A QR code image (qr_image.png) will be generated.

The input text will be saved to output.txt.

Project Structure
nodejs-qr-image-generator/
│── .gitignore
│── package.json
│── package-lock.json
│── script.js
│── output.txt
│── qr_image.png
│── index.html   (optional for testing)

Example Output

A generated QR Image and your input text will be saved in text file.

Learnings

Through this project, I learned:

How Node.js interacts with npm packages.

Using CLI prompts for user input.

Working with the file system module to save data.

Building something useful with small tools.

Links

📺 YouTube Walkthrough: https://youtu.be/QR2_cbW69Pw?si=cSlRVzHmOJu7FvZ3

🐦 Twitter: https://x.com/ZenithCodes/status/1959952226727637160

💼 LinkedIn: https://www.linkedin.com/posts/sukhvinder-singh-shahu-822844380_qr-code-project-using-nodejs-and-npm-activity-7365712762544578560-o7Oo?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAF4Yw5oB_VYZSsuEbkYC_Vkr-3jdAqDVcSU

📌 Future Improvements

Add option to customize QR size and color.

Build a simple web interface for QR generation.

Save history of multiple inputs.

👤 Author

Sukhvinder Singh

GitHub: @SukhvinderSingh77

LinkedIn: https://www.linked.in/sukhvinder-shahu

Twitter: @ZenithCodes
```

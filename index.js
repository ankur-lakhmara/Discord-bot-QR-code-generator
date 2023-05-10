// Require the package
const QRCode = require("qrcode");
const prompt = require("prompt-sync")();
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Please enter the text for generating QR code : ", (data) => {
  console.log(`QR is generated for : ${data}`);
  // Print the QR code to terminal
  QRCode.toString(data, { type: "terminal" }, function (err, QRcode) {
    if (err) return console.log("error occurred");

    // Printing the generated code
    console.log(QRcode);
  });

  // Converting the data into base64
  QRCode.toDataURL(data, function (err, code) {
    if (err) return console.log("error occurred");
  });
  readline.close();
});

const { Deepgram } = require("@deepgram/sdk");
const fs = require("fs");
require("dotenv").config();
// The API key we created in step 3
const deepgramApiKey = process.env.DEEPGRAM_API_KEY;

// sample file
const pathToFile = "./deepgram-audio-file.m4a";
const mimetype = "audio/wav";

// Initializes the Deepgram SDK
const deepgram = new Deepgram(deepgramApiKey);

console.log("Requesting transcript...");
console.log("Your file may take up to a couple minutes to process.");
console.log(
  "While you wait, did you know that Deepgram accepts over 40 audio file formats? Even MP4s."
);
console.log(
  "To learn more about customizing your transcripts check out developers.deepgram.com."
);

deepgram.transcription
  .preRecorded(
    { buffer: fs.readFileSync(pathToFile), mimetype },
    { punctuate: true, model: "general", language: "en-US", tier: "enhanced" }
  )
  .then((transcription) => {
    console.dir(transcription, { depth: null });
  })
  .catch((err) => {
    console.log(err);
  });

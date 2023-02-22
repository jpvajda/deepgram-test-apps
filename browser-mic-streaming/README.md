# Live Browser Transcription

This is a barebones project which transcribes audio directly from the browser using your mic thanks to [Deepgram](http://deepgram.com)'s AI Speech Recognition API. A tutorial can be found at <https://developers.deepgram.com/blog/2021/11/live-transcription-mic-browser/>


## Usage

> This project exposes an API key on the client-side! You can set API keys to expire after a period of time, or manually revoke them via the API.

In `index.html` replace `YOUR_DEEPGRAM__TOKEN_HERE` with an real API Key.

```js

 const socket = new WebSocket("wss://api.deepgram.com/v1/listen", [
    "token",
    "YOUR_DEEPGRAM__TOKEN_HERE",
  ]);
```

Then open the file in your browser.

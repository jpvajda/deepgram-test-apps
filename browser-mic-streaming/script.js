// deepgram javascript

navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  console.log({ stream });

  const mediaRecorder = new MediaRecorder(stream);

  const socket = new WebSocket("wss://api.deepgram.com/v1/listen", [
    "token",
    "YOUR_DEEPGRAM__TOKEN_HERE",
  ]);

  socket.onopen = () => {
    document.querySelector("#status").textContent = "Connected";
    console.log({ event: "onopen" });
    mediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0 && socket.readyState == 1) {
        socket.send(event.data);
      }
    });
    mediaRecorder.start(250);
  };

  socket.onmessage = (message) => {
    console.log({ event: "onmessage", message });
    const received = JSON.parse(message.data);
    const transcript = received.channel.alternatives[0].transcript;
    if (transcript && received.is_final) {
      document.querySelector("#transcript").textContent += transcript + " ";
    }
  };

  socket.onclose = () => {
    console.log({ event: "onclose" });
  };

  socket.onerror = (error) => {
    console.log({ event: "onerror", error });
  };
});

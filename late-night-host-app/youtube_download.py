import yt_dlp

obrien_vids = [
    "https://youtu.be/P4d8QrRJvsE",
]

kimmel_vids = [
    "https://youtu.be/KA3KDbU5dqk",
]

meyers_vids = [
    "https://youtu.be/q5UsZ2YdyKE",
]

colbert_vids = [
    "https://youtu.be/PO508nFSIaM",
]


ydl_parameters = {
    "format": "bestaudio/best",
    "postprocessors": [
        {
            "key": "FFmpegExtractAudio",
            "preferredcodec": "mp3",
            "preferredquality": "192",
        }
    ],
    # change this to change the path you want your downloads to be located
    "outtmpl": "./audio/%(title)s.mp3",
}
with yt_dlp.YoutubeDL(ydl_parameters) as ydl:
    ydl.download(obrien_vids)
    ydl.download(kimmel_vids)
    ydl.download(meyers_vids)
    ydl.download(colbert_vids)
    print()

from deepgram import Deepgram as DG
import asyncio, json, os

# is there a way in python to get this into an environment variable?
dg_key = "d222aa38a2749d3ba17340f08263acee4be1d4b8"
dg = DG(dg_key)

options = {
    "diarize": True,
    "punctuate": True,
    "paragraphs": True,
    "numerals": True,
    "model": "general",
    "tier": "enhanced",
    "profanity_filter": True,
}


async def main():
    videos = os.listdir("./audio")
    for video in videos:
        print("Currently processing:", video)
        with open(f"./audio/{video}", "rb") as audio:
            source = {"buffer": audio, "mimetype": "audio/mpeg3"}
            res = await dg.transcription.prerecorded(source, options)

            # outputs to a directory called transcripts
            with open(f"./transcripts/{video[:-4]}.json", "w") as transcript:
                json.dump(res, transcript)
    return


asyncio.run(main())

import React, { useState } from "react";
import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";
import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";

const ReactSpeech = () => {
  const [value, setValue] = useState("");
  const [first, setfirst] = useState(false);
  const { speak, cancel, voices } = useSpeechSynthesis({
    onEnd: (res) => {
      console.log("ended: ", voices);
    },
  });
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
      console.log("result: ", result);
    },
  });
  const [text, settext] = useState("");
  console.log("listening: ", listening);
  return (
    <div className="flex justify-center h-full w-full items-center flex-col">
      <div className="flex">
        <label htmlFor="">Text: </label>
        <input
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder="Enter text..."
          className="mx-2"
        />
      </div>
      <div className="my-4">
        <button
          onClick={() =>
            speak({
              text,
              voices: [voices[2]],
            })
          }
          className="bg-black text-white cursor-pointer shadow-sm py-2 px-5 text-sm"
        >
          Speak
        </button>
      </div>
      <div>
        <div class="w-40 border flex justify-center items-center text-[24px]">
          <div
            onClick={() => setfirst(!first)}
            title="say something"
            class={`"cursor-pointer ${
              first ? "bg-red-600" : "bg-blue-600"
            } relative w-16 h-16 flex justify-center text-white items-center rounded-full`}
          >
            <div className=" inline-flex rounded-full bg-red-400 animate-ping   opacity-75 absolute w-12 h-12"></div>
            {first ? (
              <BsFillMicFill
                onClick={() => {
                  listen();
                  console.log(listening);
                }}
              />
            ) : (
              <BsFillMicMuteFill onClick={stop} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactSpeech;

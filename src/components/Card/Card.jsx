import React, { useState } from "react";

const text = `Creating safe AGI that benefits all of humanity OpenAI is an AI
research and deployment company dedicated to ensuring that
general-purpose artificial intelligence benefits all of humanity. AI
is an extremely powerful tool that must be created with safety and
human needs at its core. OpenAI is dedicated to putting that
alignment of interests first — ahead of profit. To achieve our
mission, we must encompass and value the many different
perspectives, voices, and experiences that form the full spectrum of
humanity. Our investment in diversity, equity, and inclusion is
ongoing, executed through a wide range of initiatives, and
championed and supported by leadership. At OpenAI, we believe
artificial intelligence has the potential to help people solve
immense global challenges, and we want the upside of AI to be widely
shared. Join us in shaping the future of technology.`;

const Card = () => {
  const [showmore, setshowmore] = useState(138);
  return (
    <div class="card my-3 border-0 shadow" style={{ width: "96%" }}>
      <div class="card-body">
        <div className="">
          <span className="text-font-14 fw-500 text-color-black">
            {text.slice(0, showmore)}
          </span>
          <span
            className="btn fw-500 text-font-14 text-primary"
            onClick={() => setshowmore(showmore > 0 ? -1 : 138)}
          >
            Show More
          </span>
        </div>
        <div className="my-2">
          <div className="text-font-12 fw-500">Company Keywords</div>
          <div className="badge-color text-font-12 fw-500">
            artificial intelligence
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

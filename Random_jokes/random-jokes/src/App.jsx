import { useState } from "react";

function App() {
  const [jokes, setJokes] = useState(null);
  let api = "https://official-joke-api.appspot.com/random_joke";
  const fetchapi = async () => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    setJokes(data);
  };
  return (
    <>
      <div className="h-[600px] w-[1100px] text-[#EBE1D1] border-black rounded-2xl bg-[#41644A]">
        <h1 className="text-center text-5xl font-bold text-[#FFD41D] pt-10">
          Random Jokes
        </h1>
        <button
          onClick={fetchapi}
          className="h-[44px] w-[180px] text-white border-2 ml-115 bg-[#249E94] font-bold text-xl mt-5 rounded-xl text-center pb-1 hover:bg-[#005461]"
        >
          Generate jokes
        </button>
        {jokes && (
          <div>
            <p className="font-bold text-3xl mt-20 ml-35">{jokes.setup}</p>
            <p className="font-bold font-serif text-3xl mt-20 ml-35">
              <i>
                <u>Punchline :</u>
              </i>{" "}
              {jokes.punchline}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

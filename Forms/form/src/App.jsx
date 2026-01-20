import { useState } from "react";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [gender, setGender] = useState("male");
  const [language, setLanguage] = useState({
    english: true,
    maths: false,
    hindi: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectcountry, setSelectcountry] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstname,
      lastname,
      email,
      tel,
      gender,
      language,
      resume,
      url,
      about,
      selectcountry
    );
  };

  const handleReset = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setTel("");
    setGender("male");
    setLanguage({
      english: true,
      maths: false,
      hindi: false,
    });
    setResume("");
    setUrl("");
    setAbout("");
    setSelectcountry("");
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="h-[900px] w-[550px] rounded-lg bg-linear-to-r/srgb from-violet-600 to-indigo-400 text-[#FFF1F1]">
          <h1 className="text-[#FFF1F1] font-bold text-4xl text-center mt-1">
            Forms
          </h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="firstname" className="text-xl font-bold ml-2">
              Firstname:
            </label>
            <br />
            <input
              type="text"
              required
              name="firstname"
              id="firstname"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              placeholder="Enter your name"
              className="w-[530px] h-[35px] border-2 border-[#0c284eae] mt-1 ml-2 rounded-sm bg-white text-black"
            />
            <br />
            <label htmlFor="lastname" className="text-xl font-bold ml-2">
              Lastname:
            </label>
            <br />
            <input
              type="text"
              required
              name="lastname"
              id="lastname"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              placeholder="Enter your lastname"
              className="w-[530px] h-[35px] border-2 border-[#0c284eae] mt-1 ml-2 rounded-sm  bg-white text-black"
            />
            <label htmlFor="email" className="text-xl font-bold ml-2">
              Email:
            </label>
            <br />
            <input
              type="email"
              required
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter email"
              className="w-[530px] h-[35px] border-[#0c284eae] border-2 mt-1 ml-2 rounded-sm  bg-white text-black"
            />
            <label htmlFor="tel" className="text-xl font-bold ml-2">
              Contact:
            </label>
            <br />
            <input
              type="tel"
              required
              name="tel"
              id="tel"
              onChange={(e) => {
                setTel(e.target.value);
              }}
              placeholder="Enter mobile number"
              className="w-[530px] h-[35px] border-[#0c284eae] border-2 mt-1 ml-2 rounded-sm  bg-white text-black"
            />
            <label htmlFor="gender" className="text-xl font-bold ml-2">
              Gender:
            </label>
            <br />
            <input
              className="ml-5 "
              type="radio"
              required
              checked={gender === "male"}
              name="gender"
              value="male"
              id="male"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />{" "}
            Male
            <input
              className="ml-5"
              type="radio"
              required
              name="gender"
              checked={gender === "female"}
              value="female"
              id="female"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />{" "}
            Female
            <input
              className="ml-5"
              type="radio"
              required
              checked={gender === "other"}
              name="gender"
              value="other"
              id="other"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />{" "}
            Other
            <br />
            <label htmlFor="language" className="text-xl font-bold ml-2">
              Your best Subject:
            </label>
            <br />
            <div className="flex gap-6 ml-5">
              <label htmlFor="english" className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="english"
                  id="english"
                  checked={language.english}
                  onChange={(e) =>
                    setLanguage({ ...language, english: e.target.checked })
                  }
                />
                English
              </label>

              <label htmlFor="maths" className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="maths"
                  id="maths"
                  checked={language.maths}
                  onChange={(e) =>
                    setLanguage({ ...language, maths: e.target.checked })
                  }
                />
                Maths
              </label>

              <label htmlFor="hindi" className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="hindi"
                  id="hindi"
                  checked={language.hindi}
                  onChange={(e) =>
                    setLanguage({ ...language, hindi: e.target.checked })
                  }
                />
                Hindi
              </label>
            </div>
            <div className="ml-2 mt-1">
              <label htmlFor="resume" className="text-xl font-bold block mb-2">
                Upload Resume:
              </label>

              <input
                type="file"
                id="resume"
                name="resume"
                className="w-[130px] border-[#0c284eae] border-2 rounded-sm  bg-white text-black"
                onChange={(e) => {
                  setResume(e.target.files[0]);
                }}
              />
              <br />
              <label htmlFor="url" className="text-xl font-bold">
                URL:
              </label>
              <br />
              <input
                type="url"
                name="url"
                id="url"
                className="w-[530px] border-[#0c284eae] border-2 rounded-sm p-1  bg-white text-black"
                required
                placeholder="Enter the URL"
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
              <label htmlFor="select" className="text-xl font-bold">
                Select your Country:
              </label>
              <br />
              <select
                name="country"
                id="country"
                value={selectcountry}
                onChange={(e) => {
                  setSelectcountry(e.target.value);
                }}
              >
                <option
                  value=""
                  className="w-[30px] border-2 rounded-sm p-1 text-l mb-2 bg-violet-400"
                >
                  -- Select Country --
                </option>
                <option
                  value="USA"
                  className="w-[30px] border-2 rounded-sm p-1 text-l bg-violet-400"
                >
                  USA
                </option>
                <option
                  value="Brazil"
                  className="w-[30px] border-2 rounded-sm p-1 text-l bg-violet-400"
                >
                  Brazil
                </option>
                <option
                  value="India"
                  className="w-[30px] border-2 rounded-sm p-1 text-l bg-violet-400"
                >
                  India
                </option>
                <option
                  value="Germany"
                  className="w-[30px] border-2 rounded-sm p-1 text-l bg-violet-400"
                >
                  Germany
                </option>
              </select>
            </div>
            <label htmlFor="about" className="text-xl font-bold ml-2">
              About:
            </label>
            <textarea
              name="about"
              id="about"
              onChange={(e) => {
                setAbout(e.target.value);
              }}
              className="border-2 rounded-sm border-[#0c284eae] h-[180px] w-[520px] ml-3  bg-white text-black"
              placeholder="Tell about yourself"
            ></textarea>
            <div className="gap-2 justify-center flex mt-4 text-center">
              <button
                className="h-[40px] w-[120px] border-2 bg-[#FFFADC] rounded-xl text-[#0c284eae] text-2xl font-bold mb-10"
                onClick={handleReset}
                type="button"
              >
                Reset
              </button>
              <button
                className="h-[40px] w-[120px] border-2 bg-[#FFFADC] rounded-xl text-[#0c284eae] text-2xl font-bold mb-10"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

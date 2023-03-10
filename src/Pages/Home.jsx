import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../Styles/Home.css";
import { Slide , JackInTheBox , Bounce} from "react-awesome-reveal";

function Home() {
  const [texts] = useTypewriter({
    words: ["Pheeraphat Dherachaisuphakij"],
    loop: 1,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div>
      <div id="profile" className="flex flex-col text-center mt-32">
        <img
          src="../img/profilepic.jpg"
          alt="profile"
          className="w-80 rounded-full object-cover mx-auto profilepic"
        />

        <h1 className="text-4xl mt-10">Hello world!!👋</h1>

        <h1 className="text-3xl mt-2" id="name">
          I'm&nbsp;
          <span className="font-bold text-yellow-500">{texts}</span>
          <span style={{ color: "red" }}>
            <Cursor />
          </span>
        </h1>

        <h2 className="text-2xl mt-5">
          I'm Interested in FrontEnd Development 🧑‍💻
        </h2>
        <h4 className="text-xl mt-3">
          <strong>Welcome to my online Portfolio Website </strong> I'm a
          freshmen from School of Information Technology my major is Information
          Technology.
          <br />
          This is my Portfolio Website its have some of my activity in my
          experience that will give you know about me better
        </h4>
      </div>

      <div id="education" className="mt-44 text-center">
        <Slide duration={1500}>
          <h2 className="text-4xl mb-20 font-bold text-yellow-500">
            Education
          </h2>
        </Slide>
        
        <div id="university" className="flex flex-col">
          <Slide duration={2000} delay="2">
          <h3 className="text-2xl mb-5">
            king mongkut's university of technology thonburi
          </h3>
          </Slide>

          <Slide duration={2100} direction="right">
          <h4 className="text-xl font-semibold mb-4">
            Bachelor of Science Programme in Information Technology
          </h4>
          </Slide>

          <Slide duration={2200}>
          <h5 className="text-lg mb-2">2022 - 2026 (Expected Graduation)</h5>
          </Slide>

          <Slide duration={2300} direction="right">
          <h6 className="text-lg">(First Semester, Freshman Year)</h6>
          </Slide>
        </div>
     
        <div id="school" className="mt-32 flex flex-col">
          <Slide duration={2400}>
          <h3 className="text-2xl mb-5">Sarasas Pittaya School</h3>
          </Slide>

          <Slide duration={2500} direction="right">
          <h4 className="text-xl font-semibold mb-4">High School Diploma</h4>
          </Slide>
          <Slide duration={2600}>
          <h5 className="text-lg">2019 - 2021 </h5> <br />
          </Slide>
          <Slide duration={2700} direction="right">
          <h5 className="text-lg">
            <strong>GPAX :</strong> 3.33            
          </h5>
          </Slide>
        </div>
      </div>

      <div id="skill" className="mt-44 text-center">
        <JackInTheBox duration={1500}>
        <h2 className="text-4xl mb-10 font-bold text-yellow-500">
          Technical Skill
        </h2>
        </JackInTheBox>

        <div className="skill_content flex flex-row justify-center mr-24 mt-20">          
          <div id="Frontend">
            <Bounce duration={1500}>
            <h3 className="text-2xl font-semibold mb-10">Frontend</h3>
            </Bounce>
            {/* HTMl CSS JAVASCRIPT */}            
            <div className="flex flex-row justify-center mb-5">
              <Bounce duration={1500}>
              <img src="../assets/html.png" alt="Html" className="w-20" />
              <img
                src="../assets/css.png"
                alt="Css"
                className="w-20 ml-5 mr-5"
              />
              <img
                src="../assets/javascript.png"
                alt="JavaScript"
                className="w-20"
              />
              </Bounce>
            </div>
            {/* REACT TAILWIND MUI */}
            <div className="flex flex-row justify-center mb-10">
              <Bounce duration={1500}>
              <img src="../assets/react.png" alt="React" className="w-20" />
              <img
                src="../assets/tailwind.png"
                alt="Tailwind"
                className="w-20 ml-5 mr-5"
              />
              <img src="../assets/material-ui.png" alt="MUI" className="w-20" />
              </Bounce>
            </div>
          </div>

          <div id="VersionControl" className="mx-40">
            <Bounce duration={1500}>
            <h3 className="text-2xl font-semibold mb-10">Version Control</h3>
            </Bounce>
            <div className="flex flex-row justify-center mb-10">
              <Bounce duration={1500}>
              <img src="../assets/git.png" alt="git" className="w-20 mr-5" />
              <img src="../assets/github.png" alt="github" className="w-20" />
              </Bounce>
            </div>
          </div>

          <div id="Design">
            <Bounce duration={1500}>
            <h3 className="text-2xl font-semibold mb-10">Design</h3>
            </Bounce>
            <div className="flex flex-row justify-center">
              <Bounce duration={1500}>
              <img
                src="../assets/canva.png"
                alt="canva"
                className="w-20 mr-5"
              />
              <img src="../assets/figma.png" alt="figma" className="w-20" />
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

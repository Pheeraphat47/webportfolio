import "../Styles/Column.css";
import React, { useState } from "react";

function Award() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <h1 className="text-5xl mt-32 text-center font-bold topic text-yellow-500">
        Award&Honors
      </h1>

      <div className="mt-40">
        <div className="flex flex-row justify-center first_column">
          <div className="first mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/Helloworld.jpg"
              alt="helloworld"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              SIT Helloworld
            </h3>
            <p className="text-center text-lg">Best Front-End Development</p>  
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button>         
          </div>

          <div className="second shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/Environhack.jpg"
              alt="environhack"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Climathon BKK
            </h3>
            <p className="text-center text-lg">1st Runner Up</p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button>
          </div>
        </div>

        <div className="flex flex-row justify-center mt-40 second_column">
          <div className="third mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/Chula.png"
              alt="chula"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Charm Case Competition
            </h3>
            <p className="text-center text-lg">1st Runner Up</p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button>
          </div>

          <div className="fourth shadow-2xl hover:scale-110 duration-150">
            <img
              src="../img/Tobeit.jpg"
              alt="tobeit"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">
              Tobeit66
            </h3>
            <p className="text-center text-lg">Best Project Award</p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ml-24 mt-5 mb-5">Readmore</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Award;

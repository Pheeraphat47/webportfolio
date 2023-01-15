import "../Styles/Column.css";


function Award() {
  return (
    <div> 
      
      <h1 className="text-5xl mt-32 text-center font-bold topic text-yellow-500">Award&Honors</h1>
      

      
      
      <div className="mt-40">
        
        <div className="flex flex-row justify-center first_column">
          <div className="first mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/Helloworld.jpg"
              alt="helloworld"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">SIT Helloworld</h3>
            <p className="text-center text-lg">Best FrontEnd Development</p>
          </div>

          <div className="second shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/Environhack.jpg"
              alt="environhack"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">Climathon BKK</h3>
            <p className="text-center text-lg">1st Runner Up</p>
          </div>
        </div>
        

        
        <div className="flex flex-row justify-center mt-40 second_column">
          <div className="third mr-40 shadow-2xl hover:scale-110 duration-150 ">
            <img
              src="../img/Chula.png"
              alt="chula"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">Charm case Chula</h3>
            <p className="text-center text-lg">1st Runner Up</p>
          </div>

          <div className="fourth shadow-2xl hover:scale-110 duration-150">
            <img
              src="../img/Tobeit.jpg"
              alt="tobeit"
              className="w-80 h-96 object-cover"
            />
            <h3 className="text-center text-2xl font-semibold pt-3 pb-2">Tobeit66</h3>
            <p className="text-center text-lg">Best Project Award</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Award;

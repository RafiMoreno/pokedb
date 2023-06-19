'use client'

function handleCatchPokemon(id) {
    let randInt = Math.floor(Math.random() * 10)
    console.log(randInt);
    if(randInt % 2 == 0){
        alert('Captured !')
        let val;
        val = localStorage.getItem("myPokemon");
        if(val == null){
            let pokeArr = []
            pokeArr.push(id) 
            localStorage.setItem("myPokemon", JSON.stringify(pokeArr))
        }
        else{
            let pokeArr = JSON.parse(val);
            pokeArr.push(id);
            localStorage.setItem("myPokemon", JSON.stringify(pokeArr))
        }
    }
    else{
        alert('Failed to Catch Pokemon')
    }
  }
  
  
  export default function Catch({ data }) {
      return( 
          <div class="font-bold px-1 py-1 ">
            <button onClick={ () => {handleCatchPokemon(data)} }
            class="absolute right-0 bottom-0 rounded-full outline outline-2 outline-black bg-[#e4000f] mr-2 mb-2 py-1 px-2 text-white">
            Catch !
            </button>
          </div>
      )
    }
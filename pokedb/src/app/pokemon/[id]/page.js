function imageIndex(number) {
  const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number.toString() + ".png"
  return url
}

async function getPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  return res.json()
}

function capitalFirstLetter(word) {
  const res = word.charAt(0).toUpperCase() + word.slice(1)
  return res
}


export default async function Pokemon({params}) {
    const pokemonInfo = await getPokemon(params.id);
    let abilitiesList = []
    let movesList = []

    for(let i = 0; i < pokemonInfo.abilities.length; i++){
      abilitiesList.push(capitalFirstLetter(pokemonInfo.abilities[i].ability.name))
    }
    let abilities = abilitiesList.toString();

    for(let i = 0; i < 4; i++){
      movesList.push(capitalFirstLetter(pokemonInfo.moves[i].move.name))
    }
    let moves = movesList.toString();

    return( 
    <div class="flex flex-row ml-auto mr-auto mt-[10%] max-w-3xl 
    py-4 px-2 border-solid border-2 border-black rounded bg-gray-400 font-mono">
      <img class="ml-4 mr-1 mt-0 h-[100%] w-[100%] bg-[#a8ccd7] border-solid border-2 border-black rounded " src={imageIndex(params.id)}></img> 
      <div class="flex flex-col w-full">
        <div class="font-bold text-xl px-1 py-1">
          {pokemonInfo.name.charAt(0).toUpperCase() + pokemonInfo.name.slice(1)}
        </div>
        <div class="font-bold px-1 py-1 ">
          Type : {pokemonInfo.types.length > 1 ? 
          capitalFirstLetter(pokemonInfo.types[0].type.name) + " - " + capitalFirstLetter(pokemonInfo.types[1].type.name) 
          : 
          capitalFirstLetter(pokemonInfo.types[0].type.name)}
        </div>
        <div class="font-bold px-1 py-1 ">
          Height :  {(pokemonInfo.height * 0.1).toFixed(2)} m
        </div>
        <div class="font-bold px-1 py-1 ">
          Weight :  {(pokemonInfo.weight * 0.1).toFixed(2)} Kg
        </div>
        <div class="font-bold px-1 py-1 ">
          Abilites : {abilities}
        </div>
        <div class="font-bold px-1 py-1 ">
          Moves : {moves}
        </div>
        <div class="flex font-bold px-1 py-1 ">
          <div class='flex-column'>
            <p>Base HP : {pokemonInfo.stats[0].base_stat}</p>
            <p>Attack : {pokemonInfo.stats[1].base_stat}</p>
            <p>Defense : {pokemonInfo.stats[2].base_stat}</p>
          </div>
          <div class='flex-column ml-4'>
            <p>Special Attack : {pokemonInfo.stats[3].base_stat}</p>
            <p>Special Defense : {pokemonInfo.stats[4].base_stat}</p>
            <p>Speed : {pokemonInfo.stats[5].base_stat}</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
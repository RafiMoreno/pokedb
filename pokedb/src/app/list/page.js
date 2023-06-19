import dynamic from "next/dynamic"
async function getAllPokemon() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
    return res.json()
  }

const PokemonListClient = dynamic (()=> import('../component/pokemonlistclient'),{ssr:false});

export default async function List() {
    const allPokemon = await getAllPokemon();
  return (
    <PokemonListClient data={allPokemon}></PokemonListClient>
  )
}

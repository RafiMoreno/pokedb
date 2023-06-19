import dynamic from "next/dynamic"

const MyPokemonClient = dynamic (()=> import('../component/mypokemonclient'),{ssr:false});

export default async function MyPokemon() {
  return (
    <div>
      <MyPokemonClient></MyPokemonClient>
    </div>
  )
}
'use client'
import { useRouter } from 'next/navigation'
import ReturnButton from "@/app/component/returnbutton"
import Link from 'next/link'

function imageIndex(number) {
  const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number.toString() + ".png"
  return url
}

async function getPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return res.json()
}

export default async function MyPokemonClient() {
    const router = useRouter()

    function handleReleasePokemon(idx) {
        let collection = JSON.parse(localStorage.getItem("myPokemon"));
        collection.splice(idx, 1)
        localStorage.setItem("myPokemon", JSON.stringify(collection))
        router.refresh()
      }

    let pokeArr = []
    let val = localStorage.getItem("myPokemon")
    let myPokemon = JSON.parse(val)
    for(let i =0; i < myPokemon.length; i++){
      let poke = await getPokemon(myPokemon[i])
      pokeArr.push(poke)
    }
  return (
    <div>
            <ReturnButton></ReturnButton>
            <h1 class="text-center text-lg my-auto font-mono font-bold mt-12">My Pokemon</h1>
            <div class="flex flex-wrap pl-[10%] pr-[8%] mx-auto my-2">
                {pokeArr.map((pokemon, index) => {
                return <div class="m-1 px-2 py-8 md:w-32 lg:w-48 sm:max-w-8
                border-solid border-2 bg-gray-400 border-black rounded 
                text-center font-mono font-medium shadow-lg ">
                <img class="ml-auto mr-auto bg-[#a8ccd7] border-solid border-2 border-black rounded p-5" 
                src={imageIndex(pokemon.id)}></img>
                <div class='flex flex-col'> 
                <Link class='hover:underline' href={`/pokemon/${pokemon.id}`}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </Link>
                <button onClick={() => {handleReleasePokemon(index)}}
                class='text-base font-bold rounded-full outline outline-black bg-[#e4000f] py-1 mt-1 text-white hover:underline'>
                Release Pokemon</button>
                </div>
                </div>
                })}
        </div>
    </div>
  )
}
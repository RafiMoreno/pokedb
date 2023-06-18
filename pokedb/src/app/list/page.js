"use client";
import {useState} from 'react';

async function getAllPokemon() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
    return res.json()
  }

function imageIndex(number) {
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number.toString() + ".png"
    return url
}


export default async function List() {
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage] = useState(32);
    const allPokemon = await getAllPokemon();
    console.log(allPokemon.results.name);
  return (
    <div>
            <h1 class="text-center text-lg my-auto font-sans font-bold">List of Pokemon</h1>
            <div class="flex flex-wrap pl-[10%] pr-[8%] mx-auto my-2">
                {allPokemon.results.map((pokemon, index) => {
                return <div class="m-1 px-2 py-8 w-[10%]
                border-solid border-2 bg-gray-400 border-black rounded 
                text-center font-sans font-medium shadow-lg">
                <img class="ml-auto mr-auto" src={imageIndex(index+1)}></img>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </div>
                })}
        </div>
    </div>
  )
}

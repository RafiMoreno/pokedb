'use client'
import Link from "next/link";
import ReturnButton from '../component/returnbutton'
import Pagination from "./pagination";
import React, { useState } from "react";

function imageIndex(number) {
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number.toString() + ".png"
    return url
}


export default function PokemonListClient({data}) {
    let allPokemon = data.results
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage, setPokemonPerPage] = useState(42);
    const lastIndex = currentPage * pokemonPerPage;
    const firstIndex = lastIndex - pokemonPerPage;
    const currentIndex = allPokemon.slice(firstIndex, lastIndex);
    console.log(currentIndex)
  return (
    <div>
        <ReturnButton></ReturnButton>
        <h1 class="text-center text-lg my-auto font-mono font-bold mt-12">List of Pokemon</h1>
        <div class="flex flex-wrap pl-[10%] pr-[8%] mx-auto my-2">
            {currentIndex.map((pokemon, index) => {
            return <div class="m-1 px-2 py-8 md:w-32 lg:w-48 sm:max-w-8
            border-solid border-2 bg-gray-400 border-black rounded 
            text-center font-mono font-medium shadow-lg hover:underline">
            <img class="ml-auto mr-auto bg-[#a8ccd7] border-solid border-2 border-black rounded p-5" 
            src={imageIndex((firstIndex + index)+1)}>
            </img>
            <Link href={`/pokemon/${(firstIndex + index)+1}`}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Link>
        </div>
                })}
        </div>
        <Pagination
        totalPokemon={allPokemon.length}
        pokemonPerPage={pokemonPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        ></Pagination>
    </div>
  )
}

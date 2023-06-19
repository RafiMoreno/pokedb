'use client'


export default function Pagination({
    totalPokemon,
    pokemonPerPage,
    setCurrentPage,
    currentPage,
}) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
        pages.push(i);
    }
  return (
    <div class="flex flex-wrap justify-center p-4 m-4">
        {pages.map((page, index) => {
        return (
            <button
                class = 
                'outline outline-black m-2 py-1 px-3 rounded transition ease-in-out bg-gray-400 font-mono font-bold active:text-white active:bg-[#e4000f]'
                key={index}
                onClick={() => setCurrentPage(page)}>
                {page}
            </button>
        );
    })}</div>
  )
}

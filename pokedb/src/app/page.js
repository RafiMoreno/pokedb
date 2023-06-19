import Link from 'next/link'

export default function Home() {
  return (
    <div class="container my-32 ml-auto mr-auto justify-center">
    
    <img class=" block ml-auto mr-auto w-[20%] h-[20%]" 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png">
    </img>
    <h1 class="text-center font-mono font-regular text-4xl">Welcome to PokeDB</h1>
    <div class='flex justify-center columns-2 font-mono font-semibold'>
      <button class="rounded-full outline outline-black bg-[#e4000f] py-3 px-4 mt-2 text-white">
      <Link href={`/list/`}>View All Pokemon</Link>
      </button>
      <button class="rounded-full outline outline-black bg-[#e4000f] ml-4 p-3 mt-2 text-white">
        <Link href={`/my-pokemon/`}>My Pokemon
        </Link>
      </button>
    </div>
    </div>
  )
}

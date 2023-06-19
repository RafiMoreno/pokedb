'use client'
import { useRouter } from 'next/navigation'

export default function ReturnButton() {
    const router = useRouter()
  return (
    <div>
        <button onClick={() => {router.back()}} class="absolute top-3 left-3 py-1 px-3 font-bold rounded-full outline outline-black bg-[#e4000f] text-white">
            {"<-"} Return
        </button>
    </div>
  )
}
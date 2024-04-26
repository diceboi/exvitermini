import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function WorkNav() {
  return (
    <nav className='flex  justify-center items-center w-full h-16 p-4 fixed top-0 border-b border-white backdrop-blur-xl z-50'>
        <div className='flex flex-row items-baseline gap-4 w-fit h-full'>
            <Link href='/' className='flex flex-nowrap gap-4 items-center text-syne font-bold text-white'><FaArrowLeft /> Back to works</Link>
        </div>
    </nav>
  )
}

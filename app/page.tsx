import CreativeBlock from "./components/CreativeBlock"
import Businessblock from "./components/Businessblock"

export default function Home() {
  return (
    <section className='w-full h-[100vh] flex flex-col lg:flex-row '>
      <CreativeBlock />
      <Businessblock />
    </section>
  )
}

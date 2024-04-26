import CreativeBlock from "./components/CreativeBlock"
import Works from "./components/Works"

export default function Home() {
  return (
    <section className='w-full flex flex-col'>
      <CreativeBlock />
      <Works />
    </section>
  )
}

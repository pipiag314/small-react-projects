import './App.css'
import Accordion from './components/Accordion/Accordion'
import RandomColorGenerator from './components/RandomColorGenerator/RandomColorGenerator'


function App() {
  return (
    <main className=''>
      <section className='h-screen flex flex-col justify-start items-center mt-10'>
        <h1 className='text-[red] text-8xl font-bold'>hello world</h1>
        <Accordion />
      </section>
      <section className='h-screen flex flex-col justify-start items-center'>
        <h1 className='text-[red] text-8xl font-bold'>Random Color Generator</h1>
        <RandomColorGenerator />
      </section>
    </main>
  )
}

export default App

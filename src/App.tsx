import './App.css'
import Accordion from './components/Accordion/Accordion'


function App() {
  return (
    <main className=''>
      <section className='h-screen flex flex-col justify-start items-center mt-10'>
        <h1 className='text-[red] text-8xl font-bold'>hello world</h1>
        <Accordion />
      </section>
    </main>
  )
}

export default App

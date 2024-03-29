import './App.css'
import Accordion from './components/Accordion/Accordion'
import ImageSlider from './components/Image-slider/ImageSlider'
import RandomColorGenerator from './components/RandomColorGenerator/RandomColorGenerator'
import Rating from './components/Rating/Rating'
import SideMenu from './components/SideMenu/SideMenu'
import { menuItems } from './components/SideMenu/sideMenuItems'
import LoadMoreData from './components/load-more-data/LoadMoreData'


function App() {
  return (
    <main className=''>
      {/* <section className='h-screen flex flex-col justify-start items-center mt-10'>
        <h1 className='text-[red] text-8xl font-bold'>hello world</h1>
        <Accordion />
      </section>
      <section className='h-screen flex flex-col justify-start items-center'>
        <h1 className='text-[red] text-8xl font-bold'>Random Color Generator</h1>
        <RandomColorGenerator />
      </section>
      <section className='h-screen flex flex-col justify-start items-center'>
        <h1 className='text-[red] text-8xl font-bold mb-10'>Rating Component</h1>
        <Rating />
      </section>
      <section className='h-screen flex flex-col justify-start items-center'>
        <h1 className='text-[red] text-8xl font-bold mb-10'>Image Slider</h1>
        <ImageSlider />
      </section>
      <section className='h-screen flex flex-col justify-start items-center'>
        <h1 className='text-[red] text-8xl font-bold mb-10'>Load more data</h1>
        <LoadMoreData />
      </section> */}
      <section className='h-screen flex flex-col'>
        <h1 className='text-[red] text-8xl font-bold mb-10'>Side Menu</h1>
        <SideMenu menuItems={menuItems} />
      </section>
    </main>
  )
}

export default App

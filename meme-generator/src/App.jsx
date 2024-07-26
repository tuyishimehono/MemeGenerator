import Navbar from './components/Navbar'
import Meme from './components/Meme'
import './App.css'

function App() {
  return(
    <div className='max-w-xl flex flex-col items-center mx-auto'>
      <Navbar/>
      <Meme/>
    </div>
  )
}

export default App

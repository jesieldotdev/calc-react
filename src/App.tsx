
import { Controlls } from './components/Controls'

function App() {

  return (
    <div className='bg-zinc-800  h-screen p-2 flex flex-col justify-between'>

      <div className='flex flex-col mt-auto justify-end text-zinc-200 text-right'>
        <p className='text-3xl text-green-400'>51+65</p>
        <p className='text-7xl'>142</p>

      </div>

      <Controlls />

    </div>
  )
}

export default App

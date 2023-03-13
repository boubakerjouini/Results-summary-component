import { useState } from 'react'
import reactLogo from './assets/react.svg'
import MainPanel from './components/MainPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen  flex flex-col align-middle justify-center text-center items-center">
      <MainPanel />
    </div>
  )
}

export default App

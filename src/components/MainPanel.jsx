import React from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const MainPanel = () => {
  return (
    <div className=" sm:flex sm:flex-row  justify-around sm:bg-white sm:w-[600px] sm:h-[420px] sm:rounded-3xl w-full h-full shadow-2xl">
      <LeftPanel />
      <RightPanel />
    </div>
  )
}

export default MainPanel

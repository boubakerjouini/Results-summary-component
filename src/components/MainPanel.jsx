import React from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const MainPanel = () => {
  return (
    <div className=" sm:flex sm:flex-row  justify-around sm:bg-white sm:w-[570px] sm:h-[400px] sm:rounded-3xl w-full h-full shadow-2xl">
      <LeftPanel />
      <RightPanel />
    </div>
  )
}

export default MainPanel

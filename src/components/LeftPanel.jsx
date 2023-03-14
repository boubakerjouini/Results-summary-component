import React from 'react'

const LeftPanel = () => {
  return (
    <div className="flex flex-col bg-gradient-to-t from-background-dark to-background-light w-[500px] rounded-b-3xl sm:rounded-3xl px-[35px] py-8 align-middle items-center z-50 ">
      <h2 className=" text-gray-300 font-hanken font-medium text-xl">Your Result</h2>

      <div className="flex flex-col items-center text-center justify-center mt-6 ">
        <div className="flex flex-col align-middle h-[160px] w-[165px] rounded-full bg-gradient-to-t from-circle-dark to-circle-light ">
          <h1 className="text-white font-hanken mt-8 font-bold text-[50px]">76</h1>
          <p className="text-gray-400 font-hanken text-[12px] -mt-1">of 100</p>
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-white font-hanken mt-6 font-[700] text-[22px] ">Great</h1>
          <div className=" px-2">
            <p className="text-gray-400 font-hanken text-[14px] mt-3">
              You scored higher than 65% of the people who have taken these tests.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftPanel

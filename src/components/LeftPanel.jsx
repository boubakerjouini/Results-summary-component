import React from 'react'

const LeftPanel = () => {
  return (
    <div className="flex flex-col bg-secondary-dark w-[500px] rounded-b-3xl sm:rounded-3xl px-[35px] py-8 align-middle items-center">
      <h2 className=" text-gray-300 font-hanken font-medium text-xl">Your Result</h2>

      <div className="flex flex-col items-center text-center justify-center mt-6 ">
        <div className="flex flex-col align-middle h-[130px] w-[135px] rounded-full bg-secondary-light">
          <h1 className="text-white font-hanken mt-6 font-bold text-[50px]">76</h1>
          <p className="text-gray-400 font-hanken text-[12px] -mt-1">of 100</p>
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-white font-hanken mt-6 font-[700] text-[22px] ">Great</h1>
          <p className="text-gray-400 font-hanken text-[14px] mt-3">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LeftPanel

import React from 'react'
import data from '../data/data.json'
import icon1 from '../assets/icon-memory.svg'
import icon0 from '../assets/icon-reaction.svg'
import icon2 from '../assets/icon-verbal.svg'
import icon3 from '../assets/icon-visual.svg'
const RightPanel = () => {
  const icons = [icon0, icon1, icon2, icon3]

  const bgColors = ['bg-red-50', 'bg-yellow-50', 'bg-green-50', 'bg-blue-50']
  const textsColors = ['text-red-600', 'text-yellow-600', 'text-green-600', 'text-blue-600']

  return (
    <div className="bg-white w-full text-left  py-8 sm:rounded-3xl">
      <h2 className=" font-hanken font-semibold ml-8 text-xl">Summary</h2>

      {data.map((item, index) => {
        return (
          <div
            className={`flex flex-row justify-between gap-2 ml-8 mt-6   ${bgColors[index]}  w-[250px] h-10 py-1 px-4 rounded-md align-middle items-center`}
            key={index}
          >
            <div className="flex flex-row gap-2">
              <img src={icons[index]} alt="" className="w-4 h-4 mt-1 font-extrabold" />
              <h1 className={` ${textsColors[index]} text-blue font-hanken font-medium text-[16px]`}>
                {item.category}
              </h1>
            </div>
            <div className="flex flex-row gap-2">
              <h3 className="text-black font-hanken font-bold text-[16px]">{item.score} </h3>
              <h3 className="text-gray-400 font-hanken font-medium text-[16px]">/ 100 </h3>
            </div>
          </div>
        )
      })}

      <div className="flex flex-col justify-center items-center my-5">
        <button className="bg-black w-[250px]  h-12 my-12 mt-2 rounded-full text-white font-hanken font-medium text-lg hover:bg-gradient-to-t hover:from-background-dark hover:to-background-light">
          Continue
        </button>
      </div>
    </div>
  )
}

export default RightPanel

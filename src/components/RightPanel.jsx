import React from 'react'
import data from '../data/data.json'
import icon1 from '../assets/icon-memory.svg'
import icon0 from '../assets/icon-reaction.svg'
import icon2 from '../assets/icon-verbal.svg'
import icon3 from '../assets/icon-visual.svg'
const RightPanel = () => {
  const icons = [icon0, icon1, icon2, icon3]
  const colors = ['border-red-300', 'border-yellow-300', 'border-green-300', 'border-blue-300']
  const bgColors = ['bg-red-300', 'bg-yellow-300', 'bg-green-300', 'bg-blue-300']
  const textsColors = ['text-purple-300', 'text-yellow-300', 'text-green-300', 'text-blue-300']

  console.log(data)

  return (
    <div className="bg-white w-full text-left  py-8 sm:rounded-3xl">
      <h2 className="text-gray-700 font-hanken font-semibold ml-8 text-xl">Summary</h2>

      {data.map((item, index) => {
        return (
          <div
            className={`flex flex-row gap-2 ml-8 mt-6 ${textsColors[index]} border-2 border-solid ${colors[index]} ${bgColors[index]}  w-52  py-2 px-4 rounded-md`}
            key={index}
          >
            <img src={icons[index]} alt="" className="w-6 h-6 mt-1" />
            <h1 className="text-gray-700 font-hanken font-medium text-lg">{item.category}</h1>
          </div>
        )
      })}

      <div>
        <button className="bg-black w-full  h-12 my-12 mt-2 rounded-md text-white font-hanken font-medium text-lg">
          Continue
        </button>
      </div>
    </div>
  )
}

export default RightPanel

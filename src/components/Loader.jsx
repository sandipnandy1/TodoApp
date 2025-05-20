import React from 'react'

function Loader() {
  return (
    <div className="w-[67.2px] h-[67.2px] grid grid-cols-3 grid-rows-3 gap-0">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="bg-[#359ab6] w-full h-full animate-[flip_0.5s_ease-in-out_forwards]"
          style={{ animationDelay: `${index * 0.12}s` }}
        />
      ))}
    </div>
  )
}

export default Loader
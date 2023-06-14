import React from 'react'
import Image from 'next/image'
function SearchButton({otherClass}:{otherClass:string}) {
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClass}`}>
        <Image 
            src='/magnifying-glass.svg'
            alt='img'
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
  )
}

export default SearchButton